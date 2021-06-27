import Mock from 'mockjs';
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
  return {
    success: true,
    errorCode: null,
    message: 'get todoList successfully',
    data: [
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
    ]
  };
};

const todoList = () => {
  return getLocalStorage('token') ? showSuccessMsg() : showErrorMsg();
};

export default todoList;
