import API from '@/utils/api';
import http from '@/api/http';

//[TD]校正成定版API Swagger
export const postSearchingCases = (data: { [key: string]: number | string }) => http.post(API.REPORT_CASE_SEARCH, data);
export const postPrintingCases = (data: string[]) => http.post(API.REPORT_CASE_PRINT, data);
