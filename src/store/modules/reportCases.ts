import { Module } from 'vuex';
import {} from '@/api';
import { Modal, tryCatch, CallAPI } from '@/store/helper';

const reportCases: Module<any, any> = {
  namespaced: true,
  //[TD]
  state: {
    list: [],
  },
};
export default reportCases;
