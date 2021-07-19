import { Module } from 'vuex';
import { apiGetInvestorList, apiPostInvestorDetail } from '@/api';
import { CallAPI, tryCatch } from '@/store/helper';

const investor: Module<any, any> = {
  namespaced: true,

  state: {
    // 投資者列表
    list: [],

    // 單一投資者明細
    detail: {}
  },

  getters: {
    list: state => state.list,
    detail: state => state.detail
  },

  actions: {
    async getList({ commit, dispatch }) {
      commit('UPDATE_LOADING', { flag: true }, { root: true });
      dispatch('setCallAPI', new CallAPI('investor/getList'), { root: true });

      const res = await tryCatch(apiGetInvestorList)();
      // console.log('getList res => ', res);

      if (res) {
        dispatch('setList', res);
      }

      commit('UPDATE_LOADING', { flag: false }, { root: true });
    },

    // 因為新增或刪除會共用，所以提出來
    setList({ commit }, data) {
      commit('SET_LIST', data);
    },

    async getDetail({ commit, dispatch }, cid) {
      commit('UPDATE_LOADING', { flag: true }, { root: true });
      dispatch('setCallAPI', new CallAPI('investor/getDetail'), { root: true });

      const res = await tryCatch(apiPostInvestorDetail)(cid);
      // console.log('handDetail res => ', res);

      if (res) {
        commit('SET_DETAIL', res);
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
