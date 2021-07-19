import API from '@/utils/api';
import http from '@/api/http';

// 以架構來說，可以不用寫，只是因為我自己的API的Domain不同，暫時覆寫
const conf = {
  baseURL: 'https://52818455-1a77-445e-bb89-29365e1a78c1.mock.pstmn.io',
  timeout: 30000,
  headers: {
    'x-api-key': 'PMAK-60deb5a6e3b4b9004d865666-e93d9e1bb7aed2bf91f6d544858c36391a'
  }
};

// 以架構來說，用前面兩個即可，只是因為我自己的API的Domain不同，暫時覆寫
// export const getInvestorList = () => http.get(API.GET_LIST);
// export const postInvestorDetail = (id: string) => http.post(API.GET_USER, { cid: id });
export const getInvestorList = () => http.get(API.GET_LIST, conf);
export const postInvestorDetail = (id: string) => http.post(API.GET_USER, { cid: id }, conf);
