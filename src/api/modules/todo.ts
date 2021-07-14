import API from '@/utils/api';
import http from '@/api/http';

export const getTodoList = () => http.get(API.TODO);
export const postTodoItem = (data: object) => http.post(API.TODO, data);
export const getTodoItem = (id: number | string) => http.get(`${API.TODO}/${id}`);
export const putTodoItem = (id: number | string, data: object) => http.put(`${API.TODO}/${id}`, data);
export const deleteTodoItem = (id: number | string) => http.delete(`${API.TODO}/${id}`);
