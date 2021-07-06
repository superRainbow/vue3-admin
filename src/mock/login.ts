import Mock from 'mockjs';
import _ from 'lodash';
import { LOGIN_DATA } from '@/utils/constants';

const showErrorMsg = () => {
  return {
    success: false,
    errorCode: 1222,
    message: 'User login has error',
    data: {}
  };
};

const showSuccessMsg = () => {
  return {
    success: true,
    errorCode: null,
    message: 'User logged in successfully',
    data: Mock.mock({
      token: 'rainbow token',
      user: {
        roles: ['admin'],
        avatar: 'https://avatars.githubusercontent.com/u/35356592',
        name: 'rainbow'
      },
      menu: [
        {
          hidden: true,
          path: 'hidden',
          meta: {
            title: '隱藏',
            icon: 'el-icon-lock'
          }
        },
        {
          hidden: false,
          path: 'todo',
          meta: {
            title: 'todo',
            icon: 'el-icon-s-order'
          }
        },
        {
          hidden: false,
          path: 'https://google.com.tw',
          meta: {
            title: '外部連結',
            icon: 'el-icon-link'
          }
        },
        {
          hidden: false,
          path: 'investor',
          meta: {
            title: '使用者',
            icon: 'el-icon-s-order'
          }
        }
      ]
    })
  };
};

const checkLogin = (flag: boolean) => {
  let result = {};
  if (flag) {
    result = showSuccessMsg();
  } else {
    result = showErrorMsg();
  }
  return result;
};

const login = (data: object) => {
  const { EMAIL: email, PASSWORD: password } = LOGIN_DATA; // 解構賦值
  console.log('email', email, 'pass', password, 'data', data);

  const isEqual = _.isEqual({ email, password }, data);
  return checkLogin(isEqual);
};

export default login;
