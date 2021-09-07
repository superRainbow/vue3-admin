<template>
  <h1>案件辦理</h1>
  <section class="searchSection">
    <el-form ref="searchFormRef"
             :model="searchForm"
             label-width="120px"
             size="medium">
      <InputRange label="收文文號區間"
                  prop="documentID"
                  v-model="searchForm.documentID" />
      <DateRange label="日期區間"
                 prop="dateRange"
                 v-model="searchForm.dateRange"
                 :config="dateRangeSetting" />
      <el-form-item label="處理狀態"
                    prop="status">
        <el-select class="style-block"
                   type="status"
                   v-model="searchForm.status"
                   placeholder="請選擇">
          <el-option v-for="status in HANDLE_STATUS"
                     :key="status.name"
                     :label="status.name"
                     :value="status.value"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   @click="submitForm">搜尋</el-button>
        <el-button @click="resetForm">重置</el-button>
        <pre style="margin-top: 30px;">{{searchForm}}</pre>
      </el-form-item>
    </el-form>
  </section>
  <section class="resultSection">
    <el-table :data="data"
              :default-sort="{prop: 'id', order: 'title'}"
              stripe
              highlight-current-row
              style="width: 100%">
      <el-table-column v-for="colum in columnArray"
                       :key="colum.id"
                       :prop="colum.prop"
                       :label="colum.label"
                       :default-sort="{prop: 'date', order: 'descending'}"
                       :sortable="(colum.prop === 'date' || colum.prop === 'id') ? true : false"
                       :width="colum.width">
      </el-table-column>
      <el-table-column label="功能"
                       align="center">
        <template #default="scope">
          <el-button @click.prevent="editCase(scope.$index)"
                     type="success"
                     size="small">
            案件辦理
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination v-if="pagination.totalNum"
                   layout="prev, pager, next"
                   hide-on-single-page
                   background
                   small
                   :page-size="pagination.numPerPage"
                   :current-page="pagination.curPageNum"
                   @current-change="handleCurrentChange"
                   :total="pagination.totalNum"></el-pagination>
  </section>
</template>

<style lang="scss" scoped>
@import '@/style/variable.scss';

h1 {
  @extend %page-title-style;
  margin-bottom: $spacing-20;
}
.searchSection {
  display: flex;
  justify-content: center;
  padding: $spacing-20;
  border: solid 1px $light-grey;
  background: $white;
  .el-form {
    width: 500px;
  }
  .style-block {
    display: block;
  }
}

.resultSection {
  padding: $spacing-40 0;
  text-align: center;
  .el-pagination {
    margin-top: $spacing-15;
  }
}
</style>

<script lang="ts">
import { defineComponent, onBeforeMount, computed, ref } from 'vue';
import router from '@/router';
import { useStore } from 'vuex';
import { HANDLE_STATUS } from '@/utils/constants';
import InputRange from '@/components/InputRange.vue';
import DateRange from '@/components/DateRange.vue';

export default defineComponent({
  components: {
    InputRange,
    DateRange,
  },
  setup() {
    const store = useStore();
    const searchFormRef = ref();
    const data = computed(() => store.getters['caseHandle/list']);
    const pagination = computed(() => store.getters['caseHandle/pagination']);

    const dateRangeSetting = {
      isTwType: true,
    };
    const searchForm = ref({
      documentID: ['', ''],
      dateRange: ['', ''],
      status: '',
    });

    const columnArray = [
      { prop: 'id', label: '文號', width: '250' },
      { prop: 'subject', label: '主旨', width: '550' },
      { prop: 'date', label: '日期', width: '150' },
      { prop: 'status', label: '處理狀態', width: '150' },
    ];

    onBeforeMount(() => {
      store.dispatch('caseHandle/getList');
    });

    const editCase = (id: number) => {
      const caseId = data.value[id].id;
      router.push({ path: `/case-handle/${caseId}` });
    };

    const resetForm = () => {
      searchFormRef.value?.resetFields();
    };

    const submitForm = () => {
      console.table(searchForm.value);
    };

    const handleCurrentChange = (index: number) => {
      console.log('handleCurrentChange', index);
    };

    return {
      dateRangeSetting,
      HANDLE_STATUS,
      searchFormRef,
      searchForm,
      columnArray,
      data,
      pagination,
      resetForm,
      submitForm,
      editCase,
      handleCurrentChange,
    };
  },
});
</script>