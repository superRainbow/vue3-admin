import { createRouter, createWebHashHistory } from 'vue-router';
import routes from '@/router/modules';
import { isAuthenticated } from '@/utils/validate';

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
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
