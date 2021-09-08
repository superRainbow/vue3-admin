import { Server } from 'miragejs';
import { Res } from '@/mock/helper';
import API from '@/utils/api';
import { getLocalStorage } from '@/utils/localStorage';

let data = [
  {
    id: 1,
    title: 'Test1',
    description: 'Test1 Description',
    done: true,
  },
  {
    id: 2,
    title: 'Test2',
    description: '1232',
    done: false,
  },
  {
    id: 3,
    title: 'Test3',
    description: 'Test3 Desc',
    done: false,
  },
];

const getTodoList = () => {
  return getLocalStorage('accessToken') ? new Res('success', data) : new Res('error');
};

const getTodoItem = (id: number) => {
  const item = data.filter((item: { [key: string]: any }) => item.id === id);
  return new Res('success', item);
};

export default function (server: Server): void {
  server.get(API.TODO, () => {
    return getTodoList();
  });

  server.post(API.TODO, (schema: any, request: any) => {
    const item = JSON.parse(request.requestBody).reqBody.data;
    const newItem = { id: data.length + 1, ...item };
    data = [...data, newItem];
    return new Res('success', newItem);
  });

  server.get(`${API.TODO}/:id`, (schema: any, request: any) => {
    const id = parseInt(request.params.id, 10);
    return getTodoItem(id);
  });

  server.put(`${API.TODO}/:id`, (schema: any, request: any) => {
    const putItem = JSON.parse(request.requestBody);
    data = data.map((item: { [key: string]: any }) => (item = item.id === putItem.id ? putItem : item));
    return new Res('success', putItem);
  });

  server.delete(`${API.TODO}/:id`, (schema: any, request: any) => {
    data = data.filter((item: { [key: string]: any }) => item.id !== request.params.id);
    return new Res('success');
  });
}
