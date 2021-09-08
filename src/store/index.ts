import { createStore } from 'vuex';
import global from './modules/global';
import todo from './modules/todo';
import caseHandle from './modules/caseHandle';

export default createStore({
  modules: {
    global,
    todo,
    caseHandle,
  },
});
