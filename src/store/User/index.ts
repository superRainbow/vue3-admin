import { apiGetUserList, apiPostUserDetail } from '@/api';
import { Module } from 'vuex';

const user: Module<any, any> = {
  namespaced: true,

  state: {
    isLoading: false,

    userList: [],

    userDetail: {}
  },

  getters: {
    receiveUserList: state => state.userList,
    receiveUserDetail: state => state.userDetail
  },

  actions: {
    async handUserList({ commit }) {
      try {
        const res = await apiGetUserList();
        console.log('res => ', res);
        commit('setUserList', res);
      } catch (error) {
        console.log('error => ', error);
      }
    },

    async handUserDetail({ commit }, cid) {
      try {
        const res = await apiPostUserDetail(cid);
        console.log('res => ', res);
        commit('setUserDetail', res);
      } catch (error) {
        console.log('error => ', error);
      }
    }
  },

  mutations: {
    setUserList(state, data) {
      state.userList = data;
      console.log('state.userList => ', state.userList);
    },

    setUserDetail(state, data) {
      state.userDetail = data;
      console.log('state.userDetail => ', state.userDetail);
    }
  }
};

export default user;
