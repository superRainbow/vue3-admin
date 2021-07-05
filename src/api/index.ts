import { postRegister, postLogin, postRefreshToken } from './auth';
import { getTodoList, getTodoItem, postTodoItem, putTodoItem, deleteTodoItem } from './todo';
import { postUserDetail } from './User/userDetail';
import { getUserList } from './User/userList';

export const apiPostRegister = postRegister;
export const apiPostLogin = postLogin;
export const apiPostRefreshToken = postRefreshToken;

export const apiGetTodoList = getTodoList;
export const apiGetTodoItem = getTodoItem;
export const apiPostTodoItem = postTodoItem;
export const apiPutTodoItem = putTodoItem;
export const apiDeleteTodoItem = deleteTodoItem;

export const apiGetUserList = getUserList;
export const apiPostUserDetail = postUserDetail;
