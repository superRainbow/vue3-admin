import { createStore } from 'vuex';
import global from './modules/global';
import todo from './modules/todo';
import investor from './modules/investor';

export default createStore({
  modules: {
    global,
    todo,
    investor,
  }
});
