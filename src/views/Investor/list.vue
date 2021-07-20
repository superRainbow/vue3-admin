<script lang="ts">
import { computed, defineComponent, onBeforeMount } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const invList = computed(() => store.getters['investor/list']);
    const invDetail = computed(() => store.getters['investor/detail']);

    const columnArray = [
      { prop: 'id', label: '身分證號', width: '150' },
      { prop: 'name', label: '姓名', width: '100' },
      { prop: 'sex', label: '性別', width: '100' },
      { prop: 'age', label: '年齡', width: '100' },
      { prop: 'height', label: '身高', width: '100' },
      { prop: 'weight', label: '體重', width: '100' },
    ];

    onBeforeMount(() => {
      store.dispatch('investor/getList');

      // console.log('invList => ', invList);
    });

    const handExpandChange = (row: any) => {
      console.log('row type=> ', row.constructor);
      console.log('row => ', row);

      const id = row.id;
      console.log('cid => ', id);

      /** 目前因為不想動我測試API，所以暫時這樣處理 **/
      store.dispatch('investor/getDetail', id).then(() => {
        const phone = invDetail.value.phone;

        const config = {
          title: '該投資者的電話是：',
          message: `${phone}`,
          // confirmCallback: () => {
          //   store.dispatch('todo/deleteItem', data.value[id].id);
          // },
        };
        store.dispatch('toggleDialog', {
          flag: true,
          config,
        });
      });
    };

    return { columnArray, invList, handExpandChange, invDetail };
  },
});
</script>

<template>
  <el-table v-if="invList.length > 0"
            :data="invList"
            :default-sort="{ prop: 'id', order: 'ascending' }"
            stripe
            highlight-current-row
            style="width: 100%"
            @expand-change="handExpandChange">
    <el-table-column type="expand">
      <template #default="props">
        <h1>職稱：{{ props.row.title }}</h1>
      </template>
    </el-table-column>

    <el-table-column v-for="column in columnArray"
                     :key="column"
                     :prop="column.prop"
                     :label="column.label"
                     :sortable="column.prop === 'id' ? true : false"
                     :width="column.width">
    </el-table-column>
  </el-table>

  <!-- <h1 v-if="invDetail.cid">{{ invDetail }}</h1> -->
</template>

<style lang="scss" scoped>
@import '@/style/variable.scss';
</style>
