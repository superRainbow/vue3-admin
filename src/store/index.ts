import { createStore } from 'vuex';
import general from './General';
import todo from './Todo';

export default createStore({
  modules: {
    general,
    todo
  }
});
