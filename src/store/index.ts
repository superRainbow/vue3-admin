import { createStore } from 'vuex';
import general from './General';
import todo from './Todo';
import investor from './Investor';

export default createStore({
  modules: {
    general,
    todo,
    investor
  }
});
