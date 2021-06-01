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
  return [
    200,
    Mock.mock({
      success: true,
      errorCode: null,
      message: 'User logged in successfully',
      'data|100': [
        {
          time: '@datetime',
          name: '@name',
          county: '@county'
        }
      ]
    })
  ];
};

const list = () => {
  return getLocalStorage('token') ? showSuccessMsg() : showErrorMsg();
};

export default list;
