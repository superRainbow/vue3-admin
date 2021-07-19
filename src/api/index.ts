import { postRegister, postLogin, getLogout, postRefreshToken } from './modules/auth';
import { getTodoList, getTodoItem, postTodoItem, putTodoItem, deleteTodoItem } from './modules/todo';
import { getInvestorList, postInvestorDetail } from './modules/investor';

export const apiPostRegister = postRegister;
export const apiPostLogin = postLogin;
export const apiGetLogout = getLogout;
export const apiPostRefreshToken = postRefreshToken;

export const apiGetTodoList = getTodoList;
export const apiGetTodoItem = getTodoItem;
export const apiPostTodoItem = postTodoItem;
export const apiPutTodoItem = putTodoItem;
export const apiDeleteTodoItem = deleteTodoItem;

export const apiGetInvestorList = getInvestorList;
export const apiPostInvestorDetail = postInvestorDetail;
