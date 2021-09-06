import { Server } from 'miragejs';
import { Res } from '../helper';
import API from '@/utils/api';
import _ from 'lodash';

const sampleData = [
  {
    number: 245103,
    business: '高端疫苗',
    investor: '蔡英文',
    investmentAmount: 500000,
    approvedAmount: 500000,
  },
  {
    number: 245163,
    business: '聯亞生技',
    investor: '賴清德',
    investmentAmount: 200000,
    approvedAmount: 200000,
  },
  {
    number: 245172,
    business: '中國鋼鐵公司',
    investor: '蔡依林',
    investmentAmount: 800000,
    approvedAmount: 800000,
  },
  {
    number: 245195,
    business: '中鴻鋼鐵股份有限公司',
    investor: '周杰倫',
    investmentAmount: 100000,
    approvedAmount: 100000,
  },
];

export default function (server: Server): void {
  server.post(API.SEARCH_CASE_REPORT, (schema: any, request: any) => {
    const keyWords = JSON.parse(request.requestBody).reqBody.data;
    const resultTable = _.filter(sampleData, keyWords);
    return new Res('success', resultTable);
  });

  server.post(API.PRINT_CASE_REPORT, (schema: any, request: any) => {
    const checkedCases = JSON.parse(request.requestBody).reqBody.data;
    //[TD]列印是要接什檔案回來？
    return new Res('success');
  });
}
