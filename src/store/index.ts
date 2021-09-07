import { createStore } from 'vuex';
import global from './modules/global';
import todo from './modules/todo';
import reportCases from './modules/reportCases';

export default createStore({
  modules: {
    global,
    todo,
    reportCases,
  },
});
