import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { isAuthenticated } from '@/utils/validate';
import Login from '@/views/Login.vue';
import Layout from '@/layout/index.vue';
import Home from '@/views/Home.vue';
import List1 from '@/views/List-1.vue';
import Profile from '@/views/Profile.vue';

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
        path: 'profile',
        name: 'profile',
        component: Profile
      },
      {
        path: 'list-1',
        name: 'list-1',
        component: List1
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
});

// router 守門員：當非 login 頁面會去檢查是否有 token，沒有就導到登入頁
router.beforeEach(async (to, from, next) => {
  if (isAuthenticated()) {
    to.name === 'login' ? next({ name: 'home' }) : next();
  } else {
    to.name === 'login' ? next() : next({ name: 'login' });
  }
});

export default router;
