<template>
  <h1 class="title">TO DO List</h1>
  <el-button class="add-btn"
             @click.prevent="addItem()"
             type="primary"
             size="small"
             plain>
    新增
  </el-button>
  <el-table v-if="data.length > 0"
            :data="data"
            :default-sort="{prop: 'id', order: 'title'}"
            stripe
            highlight-current-row
            style="width: 100%">
    <el-table-column v-for="(colum) in columnArray"
                     :key="colum.id"
                     :prop="colum.prop"
                     :label="colum.label"
                     :sortable="(colum.prop === 'title') ? true : false"
                     :width="colum.width">
    </el-table-column>
    <el-table-column label="功能"
                     align="center">
      <template #default="scope">
        <el-button @click.prevent="putItem(scope.$index)"
                   type="info"
                   size="small"
                   plain>
          編輯
        </el-button>
        <el-button @click.prevent="deleteItem(scope.$index)"
                   type="danger"
                   size="small"
                   plain>
          刪除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <ItemModal />
</template>

<style lang="scss" scoped>
@import '@/style/variable.scss';

.title {
  @extend %title-style;
  margin-bottom: 20px;
}

.add-btn {
  margin-bottom: 20px;
}
</style>

<script lang="ts">
import { defineComponent, onBeforeMount, computed } from 'vue';
import { useStore } from 'vuex';
import ItemModal from './itemModal.vue';

export default defineComponent({
  components: {
    ItemModal,
  },
  setup() {
    const store = useStore();

    const columnArray = [
      { prop: 'title', label: '標題', width: '250' },
      { prop: 'description', label: '描述', width: '350' },
      { prop: 'doneString', label: '完成狀態', width: '150' },
    ];
    const data = computed(() => store.getters['todo/list']);

    onBeforeMount(() => {
      store.dispatch('todo/getList');
    });

    const addItem = () => {
      store.dispatch('todo/toggleModal', {
        flag: true,
        config: { type: 'add' },
      });
    };

    const putItem = (id: number) => {
      store.dispatch('todo/toggleModal', {
        flag: true,
        config: { type: 'edit' },
        data: { ...data.value[id] },
      });
    };

    const deleteItem = (id: number) => {
      const config = {
        title: '確定要刪除嗎？',
        message: `確定要刪除：${data.value[id].title}`,
        confirmCallback: () => {
          store.dispatch('todo/deleteItem', data.value[id].id);
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
      addItem,
      deleteItem,
      putItem,
    };
  },
});
</script>