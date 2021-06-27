import { postRegister, postLogin, postRefreshToken } from './auth';
import { getTodoList, getTodoItem, postTodoItem, putTodoItem, deleteTodoItem } from './todo';

export const apiPostRegister = postRegister;
export const apiPostLogin = postLogin;
export const apiPostRefreshToken = postRefreshToken;

export const apiGetTodoList = getTodoList;
export const apiGetTodoItem = getTodoItem;
export const apiPostTodoItem = postTodoItem;
export const apiPutTodoItem = putTodoItem;
export const apiDeleteTodoItem = deleteTodoItem;
