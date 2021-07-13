import { createStore } from 'vuex';
import global from './modules/global';
import todo from './modules/todo';

export default createStore({
  modules: {
    global,
    todo
  }
});
