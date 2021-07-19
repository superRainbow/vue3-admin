import _ from 'lodash';
import { Res } from '../helper';
import API from '@/utils/api';
import { LOGIN_DATA } from '@/utils/constants';

const data = {
  accessToken:
    'eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwidHlwIjoiSldUIn0.ilUhuRDqmlLpyvvJzPoeBNCtH61rRisic1Z9WjAsaONdalFm59sCSNlbC5E1zXch85hthjk30ekkprQ_0zK7W1YC73iya7BD.6X0qWpTBNi_cc9wIJobz3A.xf29Ft9Dxg9p8UPI_4X_2WUT7f2oh2m_oErHlR8a7JMDro17K3xu5E_OQiRgYzd27ptVodCf4yadgQExdAowonAUPJeiR_YZBvyFGAZqL1vKp53NhpA05jwppxzw2xqf_DI3QQq8f9PsG9j1eV5b-gZRS7PBnFiaXLBkM0pZ3ArHr0thtZahWtIx1dOjaNr1E6Lf56foxce92aKsKNP0hs-R-yJxIsdrU7ExtaPTpI6KZv0r1VTBdzvFEvBp1ARwspZxenRfEF-0vlZXtHytdyZFVMM6IcrelqiKNKCouUCuPqxWR20RNnTkmbe2VOlQbe5U1xcm8Bt7vXMgeto7wvTm3MeUspbKsldSNyirWAkb862vtS0qy5FR4CY_JQPH7gERCKgiqHjYdtkkXCtsY7AdDqnlRiIMzO0mHFJ45VG_ZW3TUoIe51Eepkvsc3vCALAly9RVQnFtiMeIGMcaW01sCKzclSDTqRZH24CBHj0rh5uyLJkqwV1ZMfAgBhX3.V8gnn_CfXdgoNUejRZLzHLj7f19wRnq9NKRFfV20TaQ',
  refreshToken: 'ETRBCOX6G9DWS7XG-bd17240d-f859-4898-a2f1-9d05faa7ff9e',
  user: {
    name: 'rainbow',
    roles: ['User'],
    avator: 'https://avatars.githubusercontent.com/u/35356592'
  },
  menu: [
    {
      hidden: true,
      path: 'hidden',
      meta: {
        title: '隱藏',
        icon: 'el-icon-document'
      }
    },
    {
      hidden: false,
      path: 'todo',
      meta: {
        title: '案件管理',
        icon: 'el-icon-document'
      }
    },
    {
      hidden: false,
      path: 'todo',
      meta: {
        title: '綜合查詢',
        icon: 'el-icon-search'
      }
    },
    {
      hidden: false,
      path: 'todo',
      meta: {
        title: '報表列印',
        icon: 'el-icon-printer'
      }
    },
    {
      hidden: false,
      path: 'todo',
      meta: {
        title: '代碼維護',
        icon: 'el-icon-tickers'
      }
    },
    {
      hidden: false,
      path: 'todo',
      meta: {
        title: '資料維護',
        icon: 'el-icon-set-up'
      }
    },
    {
      hidden: false,
      path: 'investor',
      meta: {
        title: '投資者管理',
        icon: 'el-icon-mobile'
      }
    }
  ]
};

const checkLogin = (flag: boolean) => {
  return flag ? new Res('success', data) : new Res('error');
};

const login = (data: { [key: string]: any }) => {
  const { EMAIL: email, PASSWORD: password } = LOGIN_DATA; // 解構賦值
  const isEqual = _.isEqual({ email, password }, data.reqBody.data);
  return checkLogin(isEqual);
};

const logout = () => {
  return new Res('success');
};

export default function(server: any) {
  server.post(API.LOGIN, (schema: any, request: any) => {
    const data = JSON.parse(request.requestBody);
    console.log('data', data);
    return login(data);
  });

  server.get(API.LOGOUT, () => {
    return logout();
  });
}
