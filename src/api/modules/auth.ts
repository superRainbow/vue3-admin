import API from '@/utils/api';
import { getLocalStorage } from '@/utils/localStorage';
import http from '@/api/http';

const getRefreshTokenData = () => {
  return {
    accessToken: getLocalStorage('accessToken'),
    refreshToken: getLocalStorage('refreshToken')
  };
};

export const postRegister = (data: object) => http.post(API.REGISTER, data);
export const postLogin = (data: object) => http.post(API.LOGIN, data);
export const postRefreshToken = () => http.post(API.REFRESH_TOKEN, getRefreshTokenData());
export const getLogout = () => http.get(API.LOGOUT);
