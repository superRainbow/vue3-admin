import { Module } from 'vuex';
import router from '@/router';
import { setLocalStorage } from '@/utils/localStorage';
import { apiPostLogin, apiPostRefreshToken } from '@/api';

const general: Module<any, any> = {
  state: {
    isLoading: false,
    loadingTarget: '',
    isMenuOpen: true,
    isDialogShow: false,
    dialogConfig: {},
    user: {},
    sidebarList: [],
    jwt: {
      token: '',
      refreshToken: ''
    }
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
    UPDATE_DIALOG_OPEN(state, { flag, config }) {
      state.isDialogShow = flag ? true : false;
      state.dialogConfig = config ? config : {};
    },
    SET_SIDEBAR_LIST(state, data) {
      state.sidebarList = data;
      setLocalStorage('sidebarList', data);
    },
    SET_TOKEN(state, data) {
      const jwt = data ? data : { token: '', refreshToken: '' };
      state.jwt = jwt;
      setLocalStorage('token', jwt.token);
      setLocalStorage('refreshToken', jwt.refreshToken);
    },
    SET_USER_DATA(state, data) {
      state.user = data;
      setLocalStorage('user', data);
    },
    SET_ACTION_NAME(state, string) {
      setLocalStorage('actionName', string);
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
    async refreshToken({ commit }) {
      try {
        commit('SET_TOKEN', await apiPostRefreshToken());
      } catch (error) {
        console.log('error', error);
      }
    },
    setLoginAction({ commit }, data) {
      commit('SET_TOKEN', data);
      commit('SET_SIDEBAR_LIST', [
        {
          hidden: false,
          path: 'todo',
          meta: {
            title: 'todo',
            icon: 'el-icon-s-order'
          }
        },
        {
          hidden: false,
          path: 'https://google.com.tw',
          meta: {
            title: '外部連結',
            icon: 'el-icon-link'
          }
        },
        {
          hidden: false,
          path: 'investor',
          meta: {
            title: '使用者',
            icon: 'el-icon-circle-plus'
          }
        }
      ]);
      commit('SET_USER_DATA', {
        roles: ['admin'],
        avatar: 'https://avatars.githubusercontent.com/u/35356592',
        name: 'rainbow'
      });
      router.push({ name: 'home' });
    },
    logout({ commit }) {
      commit('SET_TOKEN');
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
      commit('UPDATE_DIALOG_OPEN', { flag, config });
    }
  }
};

export default general;
