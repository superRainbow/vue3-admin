import Layout from '@/layout/index.vue';
import Login from '@/views/Login';
import Home from '@/views/Home';
import UserData from '@/views/UserData';
import PageNotFound from '@/views/PageNotFound';
import caseModule from './case';

export default [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
      },
      {
        path: '/user-data',
        name: 'user-data',
        component: UserData,
      },
      ...caseModule,
      { path: '/:pathMatch(.*)*', component: PageNotFound },
    ],
  },
];
