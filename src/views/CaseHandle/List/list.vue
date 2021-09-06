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
      <el-form-item label="日期"
                    prop="date1">
        <DatePickerTaiwan v-model="searchForm.date1"
                          :config="datepickerSetting" />
      </el-form-item>
      <el-form-item label="日期"
                    prop="date2">
        <DatePickerTaiwan v-model="searchForm.date2"
                          :config="{...datepickerSetting, isTwType: true }" />
      </el-form-item>
      <DateRange label="日期區間"
                 prop="dateRange1"
                 v-model="searchForm.dateRange1"
                 :config="dateRangeSetting" />
      <DateRange label="日期區間"
                 prop="dateRange2"
                 v-model="searchForm.dateRange2"
                 :config="{...dateRangeSetting, isTwType: true}" />
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
  <el-table :data="data"
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
                   type="success"
                   size="small">
          案件辦理
        </el-button>
      </template>
    </el-table-column>
  </el-table>
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
  margin-bottom: $spacing-40;
  padding: $spacing-20;
  border: solid 1px $light-grey;
  background: $white;
  .el-form {
    width: 500px;
  }
}
.style-block {
  display: block;
}
</style>

<script lang="ts">
import { defineComponent, onBeforeMount, computed, ref } from 'vue';
import { useStore } from 'vuex';
import { HANDLE_STATUS } from '@/utils/constants';
import InputRange from '@/components/InputRange.vue';
import DateRange from '@/components/DateRange.vue';
import DatePickerTaiwan from '@/components/DatePickerTaiwan';

export default defineComponent({
  components: {
    InputRange,
    DatePickerTaiwan,
    DateRange,
  },
  setup() {
    const datepickerSetting = {
      name: 'date',
      isTwType: false,
    };
    const dateRangeSetting = {
      isTwType: false,
    };
    const searchForm = ref({
      documentID: ['', ''],
      date1: '2021-09-07T00:00:00+08:00',
      date2: '2021-09-07T00:00:00+08:00',
      dateRange1: ['2021-09-07T00:00:00+08:00', '2021-11-10T00:00:00+08:00'],
      dateRange2: ['2021-09-07T00:00:00+08:00', '2021-11-10T00:00:00+08:00'],
      status: '',
    });
    const searchFormRef = ref();

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

    const putItem = (id: number) => {
      console.log('putItem', id);
    };

    const validateDatePicker = (flag: boolean) => {
      console.log('validateDatePicker', flag);
    };

    const resetForm = () => {
      searchFormRef.value?.resetFields();
    };

    const submitForm = () => {
      console.table(searchForm.value);
    };

    return {
      datepickerSetting,
      dateRangeSetting,
      HANDLE_STATUS,
      searchFormRef,
      searchForm,
      validateDatePicker,
      resetForm,
      submitForm,
      columnArray,
      data,
      putItem,
    };
  },
});
</script>