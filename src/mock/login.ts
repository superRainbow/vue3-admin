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
      token: '@id',
      user: {
        roles: ['admin'],
        avatar: 'https://avatars.githubusercontent.com/u/35356592',
        name: 'rainbow'
      },
      menu: [
        {
          hidden: false,
          path: 'permission',
          meta: {
            title: '權限',
            icon: 'el-icon-lock'
          },
          children: [
            {
              hidden: false,
              path: 'role',
              meta: {
                title: '角色權限',
                icon: 'el-icon-lock'
              }
            },
            {
              hidden: false,
              path: 'page',
              meta: {
                title: '功能權限',
                icon: 'el-icon-lock'
              }
            }
          ]
        },
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
          path: 'list-1',
          meta: {
            title: '基本 table',
            icon: 'el-icon-s-order'
          }
        },
        {
          hidden: false,
          path: 'list-2',
          meta: {
            title: '篩選 table',
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
