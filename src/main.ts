import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import router from '@/router';
import store from '@/store';
import locale from 'element-plus/lib/locale/lang/zh-tw';
import App from '@/App.vue';
import '@/style/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('@/mock/index');
}

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, { locale })
  .mount('#app');
