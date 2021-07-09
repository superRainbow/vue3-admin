import API from '@/utils/api';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://52818455-1a77-445e-bb89-29365e1a78c1.mock.pstmn.io',
  timeout: 30000,
  headers: {
    'x-api-key': 'PMAK-60deb5a6e3b4b9004d865666-e93d9e1bb7aed2bf91f6d544858c36391a'
  }
});

// 處理發起請求前
api.interceptors.request.use(
  config => {
    console.log('請求發起前 => ', config);
    return config;
  },
  error => {
    console.log('請求發起前 error => ', error);
    return Promise.reject(error);
  }
);

// 處理回傳資料
api.interceptors.response.use(
  response => {
    if (response.status === 200) {
      console.log('回傳資料 => ', response);
      return response.data.Data;
    } else {
      console.log('回傳資料 != 200 => ', response);
      return Promise.reject(response.data);
    }
  },
  error => {
    console.log('回傳資料 error => ', error);
    return Promise.reject(error);
  }
);

export const getInvestorList = () => api.get(API.GET_LIST);
export const postInvestorDetail = (id: string) => api.post(API.GET_USER, { cid: id });
