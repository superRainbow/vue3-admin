import axios from 'axios';
import API from '@/utils/api';

const api = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}`
});

// 處理發起請求前
api.interceptors.request.use(
  config => {
    console.log('請求發起前', config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 處理回傳資料
api.interceptors.response.use(
  response => {
    console.log('回傳資料', response);
    if (response.data.success) {
      return response.data;
    } else {
      return Promise.reject(response.data);
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export const postRegister = (data: object) => api.post(API.REGISTER, data);
export const postLogin = (data: object) => api.post(API.LOGIN, data);
export const postRefreshToken = (data: object) => api.post(API.REFRESH_TOKEN, data);
