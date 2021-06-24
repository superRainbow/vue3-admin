import { createStore } from 'vuex';
import { setLocalStorage } from '@/utils/localStorage';
import { apiPostLogin } from '@/api';
import router from '@/router';
export default createStore({
  state: {
    isLoading: false,
    loadingTarget: '',
    isMenuOpen: true,
    isDialogShow: false,
    dialogConfig: {},
    user: {},
    sidebarList: [],
    token: '',
    refreshToken: '',
    demoList: []
  },
  getters: {
    isLoading: state => state.isLoading,
    loadingTarget: state => state.loadingTarget,
    isMenuOpen: state => state.isMenuOpen,
    isDialogShow: state => state.isDialogShow,
    dialogConfig: state => state.dialogConfig,
    userData: state => state.user,
    sidebarList: state => state.sidebarList,
    token: state => state.token,
    demoList: state => state.demoList
  },
  mutations: {
    UPDATE_LOADING(state, { flag, target = 'content' }) {
      state.isLoading = flag;
      state.loadingTarget = target;
    },
    UPDATE_MENU_OPEN(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    UPDATE_DIALOG_OPEN(state, { isDialogShow, config }) {
      state.isDialogShow = isDialogShow;
      state.dialogConfig = config ? config : {};
    },
    SET_SIDEBAR_LIST(state, data) {
      state.sidebarList = data;
      setLocalStorage('sidebarList', data);
    },
    SET_TOKEN(state, string) {
      state.token = string;
      setLocalStorage('token', string);
    },
    SET_USER_DATA(state, data) {
      state.user = data;
      setLocalStorage('user', data);
    },
    SET_DEMO_LIST(state, data) {
      state.demoList = data;
    }
  },
  actions: {
    async handLogin({ commit, dispatch }, { data }) {
      commit('UPDATE_LOADING', { flag: true, target: 'fullscreen' });
      try {
        dispatch('setLoginAction', await apiPostLogin(data));
      } catch (error) {
        console.log('error', error);
        dispatch('toggleDialog', {
          flag: true,
          config: {
            isCancelShow: false,
            message: error.message
          }
        });
      }
      commit('UPDATE_LOADING', { flag: false });
    },
    setLoginAction({ commit }, data) {
      commit('SET_TOKEN', data.data.token);
      commit('SET_SIDEBAR_LIST', data.data.menu);
      commit('SET_USER_DATA', data.data.user);
      router.push({ name: 'home' });
    },
    logout({ commit }) {
      commit('SET_TOKEN', '');
      commit('SET_SIDEBAR_LIST', []);
      commit('SET_USER_DATA', {});
      router.push({ name: 'login' });
    },
    setSidebarList({ commit }, data) {
      commit('SET_SIDEBAR_LIST', data);
    },
    setUserData({ commit }, data) {
      commit('SET_USER_DATA', data);
    },
    toggleDialog({ commit }, { flag, config }) {
      commit('UPDATE_DIALOG_OPEN', { isDialogShow: flag, config });
    },
    setDemoList({ commit }, data) {
      commit('SET_DEMO_LIST', data);
    },
    getDemoList({ commit, dispatch }) {
      commit('UPDATE_LOADING', { flag: true });
      // axios
      //   .get(API.DEMO_LIST)
      //   .then(res => {
      //     if (res.data.success) {
      //       dispatch('setDemoList', res.data.data);
      //     }
      //   })
      //   .catch(error => {
      //     errorHandler(error);
      //   })
      //   .finally(() => {
      //     commit('UPDATE_LOADING', { flag: false });
      //   });
    }
  },
  modules: {}
});
