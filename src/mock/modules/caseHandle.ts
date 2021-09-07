import { Server } from 'miragejs';
import { Res } from '@/mock/helper';
import API from '@/utils/api';
import { getLocalStorage } from '@/utils/localStorage';

const listData = {
  data: [
    {
      id: '10900254930',
      subject: '陸資來台投資西瓜有限公司申請',
      date: '2021-09-06T00:00:00+08:00',
      status: 0,
    },
    {
      id: '10900254931',
      subject: '陸資來台投資西瓜有限公司申請',
      date: '2021-09-07T00:00:00+08:00',
      status: 1,
    },
    {
      id: '10900254932',
      subject: '陸資來台投資西瓜有限公司申請',
      date: '2021-09-08T00:00:00+08:00',
      status: 2,
    },
    {
      id: '10900254933',
      subject: '陸資來台投資西瓜有限公司申請',
      date: '2021-09-11T00:00:00+08:00',
      status: 3,
    },
    {
      id: '10900254934',
      subject: '陸資來台投資西瓜有限公司申請',
      date: '2021-10-03T00:00:00+08:00',
      status: 3,
    },
  ],
  curPageNum: 1,
  hasNext: true,
  hasPrev: false,
  numPerPage: 5,
  totalNum: 6,
  totalPageNum: 2,
};

const getList = () => {
  return getLocalStorage('accessToken') ? new Res('success', listData) : new Res('error');
};

export default function (server: Server): void {
  server.get(`${API.CASE_HANDLE}/list`, () => {
    return getList();
  });
}
