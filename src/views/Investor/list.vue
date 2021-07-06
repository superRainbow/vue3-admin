<script>
import { computed, onBeforeMount, ref } from '@vue/runtime-core';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const data = computed(() => store.getters['investor/list']);

    const columnArray = [
      { prop: 'id', label: '身分證號', width: '150' },
      { prop: 'name', label: '姓名', width: '100' },
      { prop: 'sex', label: '性別', width: '100' },
      { prop: 'age', label: '年齡', width: '100' },
      { prop: 'height', label: '身高', width: '100' },
      { prop: 'weight', label: '體重', width: '100' }
    ];

    onBeforeMount(() => {
      store.dispatch('investor/handList').then(res => {
        console.log('investor data => ', res);
      });
    });

    return { columnArray, data };
  }
};
</script>

<template>
  <el-table v-if="data.length > 0" :data="data" :default-sort="{ prop: 'id', order: 'ascending' }" stripe highlight-current-row style="width: 100%">
    <el-table-column
      v-for="column in columnArray"
      :key="column.id"
      :prop="column.prop"
      :label="column.label"
      :sortable="column.prop === 'id' ? true : false"
      :width="column.width"
    >
    </el-table-column>
  </el-table>
</template>

<style lang="scss" scoped>
@import '@/style/variable.scss';
</style>
