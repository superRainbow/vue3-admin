import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { getLocalStorage, getLocalStorageObject } from '@/utils/localStorage';
import { isPostOrPut } from '@/utils/validate';
import { API_CODE } from '@/utils/constants';
import store from '@/store';

const clearCallAPI = () => {
  store.dispatch('setCallAPI');
};

const showErrorMessage = (error: { [key: string]: any }) => {
  store.dispatch('toggleDialog', {
    flag: true,
    config: {
      isCancelShow: false,
      message: error.message || '發生錯誤',
      confirmCallback: () => {
        return error.callback ? error.callback() : '';
      }
    }
  });
};

const refreshTokenAction = () => {
  store.dispatch('refreshToken', getLocalStorageObject('action'));
};

const logoutAction = () => {
  const errorData = {
    message: '已過期，請重新登入',
    callback: () => {
      store.dispatch('logout');
      clearCallAPI();
    }
  };

  showErrorMessage(errorData);
};

const otherErrorAction = (res: object) => {
  clearCallAPI();
  showErrorMessage(res);
  return Promise.reject(res);
};

const handleResAction = (res: { [key: string]: any }) => {
  console.log('handleError', res);
  if (res.returnCode === API_CODE.SUCCESS) {
    console.log('SUCCESS');
    clearCallAPI();
    return res.data;
  }
  if (res.status === API_CODE.CALL_REFRESH_TOKEN) {
    console.log('CALL_REFRESH_TOKEN');
    refreshTokenAction();
    return;
  }
  if (API_CODE.CALL_LOGOUT.includes(res.returnCode)) {
    console.log('CALL_LOGOUT');
    logoutAction();
    return;
  }
  console.log('OTHER');
  otherErrorAction(res);
};

const generateReqData = (data: any, method: any) => {
  return {
    reqHeader: {
      txnId: isPostOrPut(method) ? uuidv4() : ''
    },
    reqBody: {
      data
    }
  };
};

const formatResData = (res: { [key: string]: any }) => {
  return {
    success: res.data.respHeader.status === 0,
    status: res.status,
    returnCode: res.data.respHeader.status,
    message: res.data.respHeader.message,
    data: res.data.respBody?.data
  };
};

const http = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}`
});

// 處理發起請求前
http.interceptors.request.use(
  config => {
    console.log('請求發起前', config);
    config.headers.common['Authorization'] = `Bearer ${getLocalStorage('accessToken')}`;
    config.data = generateReqData(config.data, config.method);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 處理回傳資料
http.interceptors.response.use(
  response => {
    console.log('回傳資料', response);
    const res = formatResData(response);
    console.log('formatResData', res);
    return handleResAction(res);
  },
  error => {
    console.log('error response', error.response);
    const res = formatResData(error.response);
    return handleResAction(res);
  }
);

export default http;
