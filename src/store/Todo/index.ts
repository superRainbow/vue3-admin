import { Module } from 'vuex';
import { apiGetTodoList, apiDeleteTodoItem, apiPostTodoItem, apiPutTodoItem } from '@/api';

const defaultModalConfig = {
  type: 'add',
  width: '50%',
  isCancelShow: false,
  confirmCallback: () => {
    return;
  }
};

const todo: Module<any, any> = {
  namespaced: true,
  state: {
    list: [],
    isModalShow: false,
    modalConfig: {},
    modalData: {}
  },
  getters: {
    list: state => state.list,
    isModalShow: state => state.isModalShow,
    modalConfig: state => state.modalConfig,
    modalData: state => state.modalData
  },
  mutations: {
    SET_LIST(state, data: []) {
      state.list = data.map((item: { [key: string]: any }) => {
        item.doneString = item.done ? '已完成' : '未完成';
        return item;
      });
    },
    TOGGLE_MODAL(state, { flag, config = {}, data = {} }) {
      state.isModalShow = flag ? true : false;
      state.modalConfig = Object.assign(defaultModalConfig, config);
      state.modalData = data;
    },
    SET_MODAL(state, data) {
      state.modalData = data;
    }
  },
  actions: {
    setList({ commit }, data) {
      commit('SET_LIST', data);
    },
    async getList({ commit, dispatch }) {
      commit('UPDATE_LOADING', { flag: true }, { root: true });
      commit('SET_ACTION_NAME', 'todo/getList', { root: true });
      const res = await apiGetTodoList();
      if (res) {
        dispatch('setList', res);
        commit('UPDATE_LOADING', { flag: false }, { root: true });
      }
    },
    async addItem({ getters, commit, dispatch }, data) {
      try {
        commit('SET_ACTION_NAME', 'todo/addItem', { root: true });
        const addData = await apiPostTodoItem(data);
        const newData = [...getters.list, addData];
        dispatch('setList', newData);
      } catch (error) {
        console.log('error', error);
      }
      commit('TOGGLE_MODAL', { flag: false });
    },
    async putItem({ getters, commit, dispatch }, data) {
      try {
        commit('SET_ACTION_NAME', `todo/putItem/${data.id}`, { root: true });
        await apiPutTodoItem(data.id, data);
        const newData = getters.list.map((item: { [key: string]: any }) => {
          if (item.id === data.id) {
            item = data;
          }
          return item;
        });
        dispatch('setList', newData);
      } catch (error) {
        console.log('error', error);
      }
      commit('TOGGLE_MODAL', { flag: false });
    },
    async deleteItem({ getters, commit, dispatch }, id: number) {
      try {
        commit('SET_ACTION_NAME', `todo/deleteItem/${id}`, { root: true });
        await apiDeleteTodoItem(id);
        const newData = getters.list.filter((item: { [key: string]: any }) => item.id !== id);
        dispatch('setList', newData);
      } catch (error) {
        console.log('error', error);
      }
      commit('UPDATE_DIALOG_OPEN', { flag: false }, { root: true });
    },
    toggleModal({ commit }, { flag, config, data }) {
      commit('TOGGLE_MODAL', { flag, config, data });
    },
    setModalDate({ commit }, data) {
      commit('SET_MODAL', data);
    }
  }
};

export default todo;
