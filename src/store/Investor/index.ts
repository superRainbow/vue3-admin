import { apiGetInvestorList, apiPostInvestorDetail } from '@/api';
import { Module } from 'vuex';

const investor: Module<any, any> = {
  namespaced: true,

  state: {
    isLoading: false,

    list: [],
    detail: {}
  },

  getters: {
    list: state => state.list,
    detail: state => state.detail
  },

  actions: {
    async handList({ commit }) {
      try {
        commit('UPDATE_LOADING', { flag: true }, { root: true });

        const res = await apiGetInvestorList();
        // console.log('handList res => ', res);

        commit('SET_LIST', res);
      } catch (error) {
        console.log('handList error => ', error);
      }
      commit('UPDATE_LOADING', { flag: false }, { root: true });
    },

    async handDetail({ commit }, cid) {
      try {
        commit('UPDATE_LOADING', { flag: true }, { root: true });

        const res = await apiPostInvestorDetail(cid);
        // console.log('handDetail res => ', res);

        commit('SET_DETAIL', res);
      } catch (error) {
        console.log('handDetail error => ', error);
      }
      commit('UPDATE_LOADING', { flag: false }, { root: true });
    }
  },

  mutations: {
    SET_LIST(state, data) {
      state.list = data;
      console.log('investor state.list => ', state.list);
    },

    SET_DETAIL(state, data) {
      state.detail = data;
      console.log('investor state.detail => ', state.detail);
    }
  }
};

export default investor;
