import { createServer } from 'miragejs';
import API from '@/utils/api';
import login from './login';
import todoList from './todo';

createServer({
  routes() {
    this.urlPrefix = `${process.env.VUE_APP_API_URL}`;

    this.post(API.LOGIN, (schema: any, request) => {
      const data = JSON.parse(request.requestBody);
      console.log('data', data);

      return login(data);
    });

    this.get(API.TODO, () => {
      return todoList();
    });
  }
});
