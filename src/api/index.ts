import { postRegister, postLogin, postRefreshToken } from './auth';
import { getTodoList, getTodoItem, postTodoItem, putTodoItem, deleteTodoItem } from './todo';
import { postInvestorDetail } from './Investor/detail';
import { getInvestorList } from './Investor/list';

export const apiPostRegister = postRegister;
export const apiPostLogin = postLogin;
export const apiPostRefreshToken = postRefreshToken;

export const apiGetTodoList = getTodoList;
export const apiGetTodoItem = getTodoItem;
export const apiPostTodoItem = postTodoItem;
export const apiPutTodoItem = putTodoItem;
export const apiDeleteTodoItem = deleteTodoItem;

export const apiGetInvestorList = getInvestorList;
export const apiPostInvestorDetail = postInvestorDetail;
