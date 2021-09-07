const WEB_TITLE = '僑外陸投資審議管理資訊系統';
const TW_START_YEAR = 1911;
const MENU_SETTING = {
  BG: '#3a3f51',
  TEXT: '#b5b6bd',
  ACTIVE_TEXT: 'rgb(79, 148, 212)',
};

const LOGIN_DATA = {
  EMAIL: 'rainbow_wu@cht.com.tw',
  PASSWORD: '!QAZ2wsx',
};

const API_CODE = {
  SUCCESS: 0,
  CALL_REFRESH_TOKEN: 401,
  CALL_LOGOUT: [1005, 1006, 1007, 1008, 1009, 1010],
  STRUCTURE_ERROR: 400,
};

const HANDLE_STATUS = [
  {
    name: '待審中',
    value: 0,
  },
  {
    name: '補件中',
    value: 1,
  },
  {
    name: '審查中',
    value: 2,
  },
  {
    name: '送審',
    value: 3,
  },
];

export { WEB_TITLE, TW_START_YEAR, MENU_SETTING, LOGIN_DATA, API_CODE, HANDLE_STATUS };
