<template>
  <h1 class="title">篩選 Table</h1>
  <div v-if="data.length > 0">
    <el-button @click="clearFilter">清除過濾器</el-button>
    <el-table :data="data"
              stripe
              highlight-current-row
              ref="filterTable"
              style="width: 100%">
      <el-table-column v-for="(colum) in columnArray"
                       :key="colum.name"
                       :prop="colum.prop"
                       :label="colum.label"
                       :width="colum.width"
                       :filters="colum.prop === 'time' ? filterDate : undefined"
                       :filter-method="colum.prop === 'time' ? filterHandler : undefined">
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
  </div>
</template>

<style lang="scss" scoped>
@import '@/style/variable.scss';

el-button {
  margin-bottom: 20px;
}

.title {
  @extend %title-style;
  margin-bottom: 20px;
}
</style>

<script lang="ts">
import { defineComponent, onBeforeMount, computed, ref } from 'vue';
import { ElTable } from 'element-plus';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const filterTable = ref(ElTable);
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

    const filterDate = computed(() =>
      data.value.map((item: any) => {
        return { text: item.time, value: item.time };
      })
    );

    const filterHandler = (value: string, row: any, column: any) => {
      const property = column.property;
      return row[property] === value;
    };

    const clearFilter = () => {
      filterTable.value.clearFilter();
    };

    return {
      filterTable,
      columnArray,
      data,
      deleteItem,
      filterDate,
      filterHandler,
      clearFilter,
    };
  },
});
</script>