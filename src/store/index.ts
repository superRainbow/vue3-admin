import { createStore } from 'vuex';
import general from './General';
import todo from './Todo';
import user from './User';

export default createStore({
  modules: {
    general,
    todo,
    user
  }
});
