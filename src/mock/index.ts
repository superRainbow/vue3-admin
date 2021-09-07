import { createServer } from 'miragejs';
import auth from '@/mock/modules/auth';
import todo from '@/mock/modules/todo';
import reportCases from '@/mock/modules/reportCases';

createServer({
  routes() {
    this.urlPrefix = `${process.env.VUE_APP_API_URL}`;
    auth(this);
    todo(this);
    reportCases(this);
  },
});
