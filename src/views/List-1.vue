<template>
  <h1 class="title">基本的 Table</h1>
  <el-table :data="data"
            stripe
            highlight-current-row
            style="width: 100%">
    <el-table-column v-for="(colum) in columnArray"
                     :key="colum.name"
                     :prop="colum.prop"
                     :label="colum.label"
                     :width="colum.width">
    </el-table-column>
    <el-table-column label="功能"
                     align="center">
      <template #default="scope">
        <el-button @click.prevent="deleteItem(scope.$index)"
                   type="danger"
                   size="small"
                   plain>
          刪除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="scss" scoped>
@import '@/style/variable.scss';

.title {
  @extend %title-style;
  margin-bottom: 20px;
}
</style>

<script lang="ts">
import { defineComponent, onBeforeMount, computed, reactive } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const columnArray = [
      { prop: 'time', label: '時間', width: '250' },
      { prop: 'name', label: '名稱', width: '350' },
      { prop: 'county', label: '地址', width: '150' },
    ];
    const data = computed(() => store.getters.demoList);

    onBeforeMount(() => {
      console.log('getDemoList');
      store.dispatch('getDemoList');
    });

    const deleteItem = (id: number) => {
      console.log('id', id);
      const config = {
        title: '確定要刪除嗎？',
        message: `確定要刪除：${data.value[id].name}`,
        confirmCallback: () => {
          const newData = data.value.filter((item: object, index: number) => index !== id);
          store.dispatch('setDemoList', newData);
        },
      };
      store.dispatch('toggleDialog', {
        flag: true,
        config,
      });
    };

    return {
      columnArray,
      data,
      deleteItem,
    };
  },
});
</script>