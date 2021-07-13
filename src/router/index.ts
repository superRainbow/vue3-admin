import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { isAuthenticated } from '@/utils/validate';
import Layout from '@/layout/index.vue';
import Login from '@/views/Login';
import Home from '@/views/Home';
import PageNotFound from '@/views/PageNotFound';
import TodoList from '@/views/Todo/list.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'index',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: Home
      },
      {
        path: 'todo',
        name: 'todo',
        component: TodoList
      },
      { path: '/:pathMatch(.*)*', component: PageNotFound }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

// router 守門員：當非 login 頁面會去檢查是否有 accessToken，沒有就導到登入頁
router.beforeEach(async (to, from, next) => {
  if (isAuthenticated()) {
    to.name === 'login' ? next({ name: 'home' }) : next();
  } else {
    to.name === 'login' ? next() : next({ name: 'login' });
  }
});

export default router;
