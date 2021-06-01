import Mock from 'mockjs';
import { LOGIN_DATA } from '@/utils/constants';

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
    {
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
            path: 'https://google.com.tw',
            meta: {
              title: '外部連結',
              icon: 'el-icon-link'
            }
          }
        ]
      })
    }
  ];
};

const checkLogin = (validData: Array<{}>) => {
  let result = [];
  if (validData.length > 0) {
    result = showErrorMsg();
  } else {
    result = showSuccessMsg();
  }
  return result;
};

const login = (data: object) => {
  const { NAME: name, PASSWORD: pwd } = LOGIN_DATA; // 解構賦值
  const validData = Mock.valid({ name, pwd }, data);
  return checkLogin(validData);
};

export default login;
