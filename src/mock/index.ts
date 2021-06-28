import { createServer } from 'miragejs';
import API from '@/utils/api';
import login from './login';
import { getTodoList, getTodoItem, postTodoItem, putTodoItem, deleteTodoItem } from './todo';

createServer({
  routes() {
    this.urlPrefix = `${process.env.VUE_APP_API_URL}`;

    this.post(API.LOGIN, (schema: any, request) => {
      const data = JSON.parse(request.requestBody);
      console.log('data', data);

      return login(data);
    });

    this.get(API.TODO, () => {
      return getTodoList();
    });

    this.post(API.TODO, (schema: any, request) => {
      const data = JSON.parse(request.requestBody);
      return postTodoItem(data);
    });

    this.get(`${API.TODO}/:id`, (schema: any, request) => {
      const id = parseInt(request.params.id, 10);
      return getTodoItem(id);
    });

    this.put(`${API.TODO}/:id`, (schema: any, request) => {
      const id = parseInt(request.params.id, 10);
      const data = JSON.parse(request.requestBody);
      return putTodoItem(id, data);
    });

    this.delete(`${API.TODO}/:id`, (schema: any, request) => {
      const id = parseInt(request.params.id, 10);
      return deleteTodoItem(id);
    });
  }
});
