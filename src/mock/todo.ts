import { getLocalStorage } from '@/utils/localStorage';

const showErrorMsg = () => {
  return [
    200,
    {
      success: false,
      errorCode: 1222,
      message: 'User login has error',
      data: {}
    }
  ];
};

const showSuccessMsg = () => {
  return [
    {
      id: 1,
      title: 'Test1',
      description: 'Test1 Description',
      done: true
    },
    {
      id: 2,
      title: 'Test2',
      description: '1232',
      done: false
    },
    {
      id: 3,
      title: 'Test3',
      description: 'Test3 Desc',
      done: false
    }
  ];
};

const getTodoList = () => {
  return getLocalStorage('token') ? showSuccessMsg() : showErrorMsg();
};

const getTodoItem = (id: number) => {
  return showSuccessMsg().filter((item: { [key: string]: any }) => item.id === id);
};

const postTodoItem = (data: object) => {
  return data;
};

const putTodoItem = (id: number, data: object) => {
  return data;
};

const deleteTodoItem = (id: number) => {
  return showSuccessMsg().filter((item: { [key: string]: any }) => item.id === id);
};

export { getTodoList, getTodoItem, postTodoItem, putTodoItem, deleteTodoItem };
