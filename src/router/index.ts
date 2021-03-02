import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { isAuthenticated } from '@/utils/validate.ts';
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

export default router;
