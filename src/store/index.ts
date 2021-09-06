import { createStore } from 'vuex';
import global from './modules/global';
import todo from './modules/todo';
import caseReport from './modules/caseReport';

export default createStore({
  modules: {
    global,
    todo,
    caseReport,
  },
});
