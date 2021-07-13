import { Module } from 'vuex';
import router from '@/router';
import { setLocalStorage } from '@/utils/localStorage';
import { apiPostLogin, apiGetLogout, apiPostRefreshToken } from '@/api';
import { tryCatch, JWT, Modal } from '@/store/helper';

const global: Module<any, any> = {
  state: {
    isLoading: false,
    loadingTarget: '',
    isMenuOpen: true,
    isDialogShow: false,
    dialogConfig: new Modal(),
    user: {},
    sidebarList: [],
    jwt: new JWT()
  },
  getters: {
    isLoading: state => state.isLoading,
    loadingTarget: state => state.loadingTarget,
    isMenuOpen: state => state.isMenuOpen,
    isDialogShow: state => state.isDialogShow,
    dialogConfig: state => state.dialogConfig,
    userData: state => state.user,
    sidebarList: state => state.sidebarList,
    jwt: state => state.jwt
  },
  mutations: {
    UPDATE_LOADING(state, { flag, target = 'content' }) {
      state.isLoading = flag;
      state.loadingTarget = target;
    },
    UPDATE_MENU_OPEN(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    UPDATE_DIALOG_OPEN(state, { flag, config = {} }) {
      state.isDialogShow = flag ? true : false;
      state.dialogConfig = new Modal(config);
    },
    SET_SIDEBAR_LIST(state, data) {
      state.sidebarList = data;
      setLocalStorage('sidebarList', data);
    },
    SET_TOKEN(state, data = {}) {
      state.jwt = new JWT(data);
      setLocalStorage('accessToken', state.jwt.accessToken);
      setLocalStorage('refreshToken', state.jwt.refreshToken);
    },
    SET_USER_DATA(state, data) {
      state.user = data;
      setLocalStorage('user', data);
    },
    SET_ACTION(state, data) {
      setLocalStorage('action', data);
    }
  },
  actions: {
    async handLogin({ commit, dispatch }, { data }) {
      commit('UPDATE_LOADING', { flag: true, target: 'fullscreen' });
      const res = await tryCatch(apiPostLogin)(data);
      if (res) {
        dispatch('setInitAction', res);
      }
      commit('UPDATE_LOADING', { flag: false });
    },
    async refreshToken({ commit, dispatch }, data) {
      const res = await tryCatch(apiPostRefreshToken)();
      if (res) {
        commit('SET_TOKEN', res);
        if (data) {
          dispatch(data.name, data.data);
        }
      }
    },
    async logout({ dispatch }) {
      await tryCatch(apiGetLogout)();
      dispatch('setInitAction');
    },
    setInitAction({ commit }, data) {
      commit('SET_TOKEN', data ? data : {});
      commit('SET_SIDEBAR_LIST', data ? data.menu : []);
      commit('SET_USER_DATA', data ? data.user : {});
      router.push({ name: data ? 'home' : 'login' });
    },
    setSidebarList({ commit }, data) {
      commit('SET_SIDEBAR_LIST', data);
    },
    setUserData({ commit }, data) {
      commit('SET_USER_DATA', data);
    },
    toggleDialog({ commit }, { flag, config }) {
      commit('UPDATE_DIALOG_OPEN', { flag, config });
    },
    setActionName({ commit }, data) {
      commit('SET_ACTION', data);
    }
  }
};

export default global;
