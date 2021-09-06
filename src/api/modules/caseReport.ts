import API from '@/utils/api';
import http from '@/api/http';

//[TD]校正成定版API Swagger
export const postSearchingCases = (data: { [key: string]: number | string }) => http.post(API.SEARCH_CASE_REPORT, data);
export const postPrintingCases = (data: string[]) => http.post(API.PRINT_CASE_REPORT, data);
