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
      { prop: 'weight', label: '體重', width: '100' }
    ];

    onBeforeMount(() => {
      store.dispatch('investor/handList');

      // console.log('invList => ', invList);
    });

    // const handRowClick = (row: any) => {
    //   console.log('row type=> ', row.constructor);
    //   console.log('row => ', row);
    //   // console.log('column => ', column);
    //   // console.log('event => ', event);

    //   const id = row.id;
    //   console.log('cid => ', id);

    //   /** 目前因為不想動我測試API，所以暫時這樣處理 **/
    //   // store.dispatch('investor/handDetail', id);
    //   store.dispatch('investor/handDetail', id).then(() => {
    //     // /** 只確認這樣做是可以的，無須顯示 **/
    //     // const item = invList.value.filter(it => it.id === id);
    //     // console.log('item => ', item);
    //     // item[0].address = invDetail.value.address;
    //     // item[0].cid = invDetail.value.cid;
    //     // item[0].email = invDetail.value.email;
    //     // item[0].lastName = invDetail.value.lastName;
    //     // item[0].name = invDetail.value.name;
    //     // item[0].phone = invDetail.value.phone;
    //     // item[0].random = invDetail.value.random;
    //     // /** 只確認這樣做是可以的，無須顯示 **/
    //     // console.log('RES => ', invList.value);
    //   });

    //   // console.log('invDetail => ', invDetail);
    // };

    const handExpandChange = (row: any) => {
      console.log('row type=> ', row.constructor);
      console.log('row => ', row);

      const id = row.id;
      console.log('cid => ', id);
    };

    return { columnArray, invList, handExpandChange, invDetail };
  }
});
</script>

<template>
  <el-table
    v-if="invList.length > 0"
    :data="invList"
    :default-sort="{ prop: 'id', order: 'ascending' }"
    stripe
    highlight-current-row
    style="width: 100%"
    @expand-change="handExpandChange"
  >
    <el-table-column type="expand">
      <template #default="props">
        <h1>職稱：{{ props.row.title }}</h1>
      </template>
    </el-table-column>

    <el-table-column
      v-for="column in columnArray"
      :key="column"
      :prop="column.prop"
      :label="column.label"
      :sortable="column.prop === 'id' ? true : false"
      :width="column.width"
    >
    </el-table-column>
  </el-table>

  <!-- <h1 v-if="invDetail.cid">{{ invDetail }}</h1> -->
</template>

<style lang="scss" scoped>
@import '@/style/variable.scss';
</style>
