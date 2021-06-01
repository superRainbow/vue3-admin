import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import API from '@/utils/api';
import login from './login';
import list from './list';

const mock = new MockAdapter(axios, { delayResponse: 2000 });
mock.onPost(API.LOGIN).reply(config => {
  console.log('config', config);
  const data = JSON.parse(config.data);
  return login(data);
});

mock.onGet(API.DEMO_LIST).reply(() => {
  return list();
});
