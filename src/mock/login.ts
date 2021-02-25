import Mock from 'mockjs';

const loginData = {
  name: 'rainbow',
  pwd: '1qaz2wsx'
};

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
        'menu|3': [
          {
            hidden: true,
            path: '@title(1)',
            meta: {
              title: '@ctitle',
              icon: 'el-icon-lock'
            },
            'children|0-3': [
              {
                path: '@title(1)',
                hidden: '@boolean',
                meta: {
                  title: '@ctitle',
                  icon: 'el-icon-lock'
                }
              }
            ]
          },
          {
            hidden: false,
            path: 'https://google.com',
            meta: {
              title: '@ctitle',
              icon: 'el-icon-lock'
            },
            children: []
          },
          {
            hidden: false,
            path: '@title(1)',
            meta: {
              title: '@ctitle',
              icon: 'el-icon-lock'
            },
            'children|0-1': [
              {
                path: '@title(1)',
                hidden: '@boolean',
                meta: {
                  title: '@ctitle',
                  icon: 'el-icon-lock'
                }
              }
            ]
          },
          {
            hidden: false,
            path: '@title(1)',
            meta: {
              title: '@ctitle',
              icon: 'el-icon-lock'
            },
            'children|1-3': [
              {
                path: '@title(1)',
                hidden: '@boolean',
                meta: {
                  title: '@ctitle',
                  icon: 'el-icon-lock'
                }
              }
            ]
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
  const validData = Mock.valid(loginData, data);
  return checkLogin(validData);
};

export default login;
