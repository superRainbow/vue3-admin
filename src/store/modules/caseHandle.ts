import { Module } from 'vuex';
import { apiGetCaseList } from '@/api';
import { Modal, tryCatch, CallAPI } from '@/store/helper';
import { formatDate } from '@/utils/date';
import { findObjectInArray } from '@/utils/helper';
import { HANDLE_STATUS } from '@/utils/constants';

class ModalData {
  title = '';
  description = '';
  done = false;
  constructor(data: object = {}) {
    Object.assign(this, data);
  }
}

const caseHandle: Module<any, any> = {
  namespaced: true,
  state: {
    list: [],
    pagination: {},
    isModalShow: false,
    modalConfig: {},
    modalData: new ModalData(),
  },
  getters: {
    list: (state) => state.list,
    pagination: (state) => state.pagination,
    isModalShow: (state) => state.isModalShow,
    modalConfig: (state) => state.modalConfig,
    modalData: (state) => state.modalData,
  },
  mutations: {
    SET_LIST(state, data: []) {
      state.list = data.map((item: { [key: string]: any }) => {
        item.date = formatDate(item.date, true);
        item.status = findObjectInArray(HANDLE_STATUS, 'value', item.status)?.name;
        return item;
      });
    },
    SET_PAGINATION(state, { curPageNum, hasNext, hasPrev, numPerPage, totalNum, totalPageNum }) {
      state.pagination = { curPageNum, hasNext, hasPrev, numPerPage, totalNum, totalPageNum };
    },
    TOGGLE_MODAL(state, { flag, config = {}, data = {} }) {
      state.isModalShow = flag ? true : false;
      state.modalConfig = new Modal({ width: '50%', isCancelShow: false, ...config });
      state.modalData = new ModalData(data);
    },
    SET_MODAL(state, data) {
      state.modalData = new ModalData(data);
    },
  },
  actions: {
    setList({ commit }, data) {
      commit('SET_LIST', data.data);
      commit('SET_PAGINATION', data);
    },
    async getList({ commit, dispatch }) {
      commit('UPDATE_LOADING', { flag: true }, { root: true });
      dispatch('setCallAPI', new CallAPI('caseHandle/list'), { root: true });
      const res = await tryCatch(apiGetCaseList)();
      if (res) {
        dispatch('setList', res);
      }
      commit('UPDATE_LOADING', { flag: false }, { root: true });
    },
    toggleModal({ commit }, { flag, config, data }) {
      commit('TOGGLE_MODAL', { flag, config, data });
    },
    setModalDate({ commit }, data) {
      commit('SET_MODAL', data);
    },
  },
};

export default caseHandle;
