import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { isAuthenticated } from '@/utils/validate';
import Login from '@/views/Login.vue';
import Layout from '@/layout/index.vue';
import Home from '@/views/Home.vue';

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
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

// router 守門員：當非 login 頁面會去檢查是否有 token，沒有就導到登入頁
router.beforeEach(async (to, from, next) => {
  if (to.name !== 'login' && !isAuthenticated()) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;
