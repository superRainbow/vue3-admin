import axios from 'axios';
import API from '@/utils/api';
import { getLocalStorage } from '@/utils/localStorage';
import store from '@/store';
const api = axios.create({
  baseURL: `${process.env.VUE_APP_API_URL}`
});

// 處理發起請求前
api.interceptors.request.use(
  config => {
    console.log('請求發起前', config);
    config.headers.common['Authorization'] = `Bearer ${getLocalStorage('token')}`;
    return config;
  },
  error => {
    console.log('error', error);
  }
);

// 處理回傳資料
api.interceptors.response.use(
  response => {
    console.log('回傳資料', response);
    if (response.data) {
      return response.data;
    } else {
      return Promise.reject(response.data);
    }
  },
  error => {
    console.log('error', error);
    store.dispatch('refreshToken');
    store.dispatch(getLocalStorage('actionName'));
    // return Promise.reject(error);
  }
);

export const getTodoList = () => api.get(API.TODO);
export const postTodoItem = (data: object) => api.post(API.TODO, data);
export const getTodoItem = (id: number) => api.get(`${API.TODO}/${id}`);
export const putTodoItem = (id: number) => api.put(`${API.TODO}/${id}`);
export const deleteTodoItem = (id: number) => api.delete(`${API.TODO}/${id}`);
