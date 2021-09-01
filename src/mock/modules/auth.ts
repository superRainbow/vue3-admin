import _ from 'lodash';
import { Server } from 'miragejs';
import { Res } from '../helper';
import API from '@/utils/api';
import { LOGIN_DATA } from '@/utils/constants';

const data = {
  accessToken:
    'eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwidHlwIjoiSldUIn0.ilUhuRDqmlLpyvvJzPoeBNCtH61rRisic1Z9WjAsaONdalFm59sCSNlbC5E1zXch85hthjk30ekkprQ_0zK7W1YC73iya7BD.6X0qWpTBNi_cc9wIJobz3A.xf29Ft9Dxg9p8UPI_4X_2WUT7f2oh2m_oErHlR8a7JMDro17K3xu5E_OQiRgYzd27ptVodCf4yadgQExdAowonAUPJeiR_YZBvyFGAZqL1vKp53NhpA05jwppxzw2xqf_DI3QQq8f9PsG9j1eV5b-gZRS7PBnFiaXLBkM0pZ3ArHr0thtZahWtIx1dOjaNr1E6Lf56foxce92aKsKNP0hs-R-yJxIsdrU7ExtaPTpI6KZv0r1VTBdzvFEvBp1ARwspZxenRfEF-0vlZXtHytdyZFVMM6IcrelqiKNKCouUCuPqxWR20RNnTkmbe2VOlQbe5U1xcm8Bt7vXMgeto7wvTm3MeUspbKsldSNyirWAkb862vtS0qy5FR4CY_JQPH7gERCKgiqHjYdtkkXCtsY7AdDqnlRiIMzO0mHFJ45VG_ZW3TUoIe51Eepkvsc3vCALAly9RVQnFtiMeIGMcaW01sCKzclSDTqRZH24CBHj0rh5uyLJkqwV1ZMfAgBhX3.V8gnn_CfXdgoNUejRZLzHLj7f19wRnq9NKRFfV20TaQ',
  refreshToken: 'ETRBCOX6G9DWS7XG-bd17240d-f859-4898-a2f1-9d05faa7ff9e',
  user: {
    name: 'rainbow',
    groupType: '1',
    roles: ['User'],
    agentGroup: [],
  },
  menu: [
    {
      hidden: false,
      path: '',
      meta: {
        title: '案件管理',
        icon: 'el-icon-document',
      },
      children: [
        {
          hidden: false,
          path: '/case-handle',
          meta: {
            title: '案件辦理',
          },
        },
        {
          hidden: false,
          path: '/case-fix',
          meta: {
            title: '案件釐正',
          },
        },
        {
          hidden: false,
          path: '/case-online',
          meta: {
            title: '線上申辦案件',
          },
        },
      ],
    },
    {
      hidden: false,
      path: '/search',
      meta: {
        title: '綜合查詢',
        icon: 'el-icon-search',
      },
      children: [
        {
          hidden: false,
          path: '/search/investors',
          meta: {
            title: '投資人查詢',
          },
        },
        {
          hidden: false,
          path: '/search/agents',
          meta: {
            title: '代理人查詢',
          },
        },
        {
          hidden: false,
          path: '/search/business',
          meta: {
            title: '投資事業查詢',
          },
        },
        {
          hidden: false,
          path: '/search/cases',
          meta: {
            title: '案件查詢',
          },
        },
        {
          hidden: false,
          path: '/search/chinese',
          meta: {
            title: '陸資黨政軍資料查詢',
          },
        },
        {
          hidden: false,
          path: '/search/warnings',
          meta: {
            title: '警示資料查詢',
          },
        },
        {
          hidden: false,
          path: '/search/companies',
          meta: {
            title: '公司資料查詢',
          },
        },
      ],
    },
    {
      hidden: false,
      path: '/report',
      meta: {
        title: '報表列印',
        icon: 'el-icon-printer',
      },
      children: [
        {
          hidden: false,
          path: '/report/cases',
          meta: {
            title: '投資案件報表',
          },
        },
        {
          hidden: false,
          path: '/report/investors',
          meta: {
            title: '投資人報表',
          },
        },
      ],
    },
    {
      hidden: true,
      path: '/code',
      meta: {
        title: '代碼維護',
        icon: 'el-icon-tickets',
      },
      children: [
        {
          hidden: false,
          path: '/code/apply-event',
          meta: {
            title: '申請事項代碼維護',
          },
        },
        {
          hidden: false,
          path: '/code/implement-period',
          meta: {
            title: '實行期間代碼維護',
          },
        },
        {
          hidden: false,
          path: '/code/reply',
          meta: {
            title: '回函方式代碼維護',
          },
        },
        {
          hidden: false,
          path: '/code/investors',
          meta: {
            title: '投資人稱謂代碼維護',
          },
        },
      ],
    },
    {
      hidden: true,
      path: '/data',
      meta: {
        title: '資料維護',
        icon: 'el-icon-set-up',
      },
      children: [
        {
          hidden: false,
          path: '/data/investors-stock',
          meta: {
            title: '投資人持股釐正作業',
          },
        },
        {
          hidden: false,
          path: '/data/investors-merge',
          meta: {
            title: '投資人合併作業',
          },
        },
        {
          hidden: false,
          path: '/data/add-documents',
          meta: {
            title: '補件登錄管理',
          },
        },
      ],
    },
  ],
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

export default function (server: Server): void {
  server.post(API.LOGIN, (schema: any, request: any) => {
    const data = JSON.parse(request.requestBody);
    console.log('data', data);
    return login(data);
  });

  server.get(API.LOGOUT, () => {
    return logout();
  });
}
