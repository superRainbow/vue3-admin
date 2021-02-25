import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import api from '@/utils/api';
import login from './login';

const mock = new MockAdapter(axios, { delayResponse: 2000 });
mock.onPost(api.LOGIN).reply(config => {
  console.log('config', config);
  const data = JSON.parse(config.data);
  return login(data);
});
