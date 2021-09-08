import API from '@/utils/api';
import http from '@/api/http';

export const getCaseList = () => http.get(`${API.CASE_HANDLE}/list`);
