import { createStore } from 'vuex';
import axios from 'axios';
import { ElLoading } from 'element-plus';
import { setLocalStorage, removeLocalStorage } from '@/utils/localStorage.ts';

import router from '@/router';
import api from '@/utils/api';

const errorHandler = ({ response }: any) => {
  const { status, data } = response;
  console.log('status', status);
  alert(data.message || '發生錯誤，請稍後再試');
};

export default createStore({
  state: {
    isLoading: false,
    isMenuOpen: true,
    isDialogShow: false,
    dialogConfig: {},
    sidebarList: [],
    token: ''
  },
  getters: {
    isLoading: state => state.isLoading,
    isMenuOpen: state => state.isMenuOpen,
    isDialogShow: state => state.isDialogShow,
    dialogConfig: state => state.dialogConfig,
    sidebarList: state => state.sidebarList,
    token: state => state.token
  },
  mutations: {
    UPDATE_LOADING(state, flag) {
      state.isLoading = flag;
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
    DELETE_TOKEN(state) {
      state.token = '';
      removeLocalStorage('token');
    }
  },
  actions: {
    handLoading({ commit }, flag) {
      ElLoading.service({ fullscreen: flag });
      commit('UPDATE_LOADING', flag);
    },
    handLogin({ commit }, { data }) {
      commit('UPDATE_LOADING', true);
      axios
        .post(api.LOGIN, data)
        .then(res => {
          if (res.data.success) {
            commit('SET_TOKEN', res.data.data.token);
            commit('SET_SIDEBAR_LIST', res.data.data.menu);
            router.push({ name: 'home' });
          } else {
            commit('UPDATE_DIALOG_OPEN', {
              isDialogShow: true,
              config: {
                isCancelShow: false,
                message: res.data.message
              }
            });
          }
        })
        .catch(error => {
          errorHandler(error);
        })
        .finally(() => {
          commit('UPDATE_LOADING', false);
        });
    },
    setSidebarList({ commit }, data) {
      commit('SET_SIDEBAR_LIST', data);
    },
    toggleDialog({ commit }, flag) {
      commit('UPDATE_DIALOG_OPEN', { isDialogShow: flag });
    }
  },
  modules: {}
});
