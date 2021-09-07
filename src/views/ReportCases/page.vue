<template>
  <h1 class="title">{{title}}</h1>
  <el-form ref="formRef"
           :model="form"
           :inline=true
           size="medium"
           :rules="formRules">
    <el-form-item prop="number"
                  label="投資案號">
      <el-input placeholder="請輸入投資案號"
                maxlength="7"
                show-word-limit
                v-model="form.number"></el-input>
    </el-form-item>
    <el-form-item prop="business"
                  label="中文事業名稱">
      <el-input placeholder="請輸入中文事業名稱"
                v-model="form.business"></el-input>
    </el-form-item>
    <el-form-item prop="investor"
                  label="投資人">
      <el-input placeholder="請輸入投資人"
                v-model="form.investor"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
                 @click="search()">搜尋</el-button>
    </el-form-item>

  </el-form>
  <el-button class="print-btn"
             @click.prevent="print()"
             type="primary"
             size="medium"
             plain>列印</el-button>
  <el-table :data="tableData"
            :default-sort="{prop: 'number', order: 'ascending'}"
            stripe
            highlight-current-row
            style="width: 100%">
    <el-table-column type="selection">
    </el-table-column>
    <el-table-column v-for="(colum) in columnArray"
                     :key="colum.prop"
                     :prop="colum.prop"
                     :label="colum.label"
                     :sortable="(colum.prop === 'number') ? true : false"
                     :width="colum.width">
    </el-table-column>
  </el-table>
</template>


<style lang="scss" scoped>
@import '@/style/variable.scss';

.title {
  @extend %page-title-style;
  margin-bottom: 20px;
}
.print-btn {
  margin-bottom: 20px;
}
</style>

<script lang="ts">
import { defineComponent, ref, reactive, computed, watch } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const formRef = ref();
    const form = reactive({ number: '', business: '', investor: '' });
    const hasValueForSearch = computed(() => !(form.number === '' && form.business === '' && form.investor === ''));

    //設定width長度，反而造成欄位無法隨著螢幕寬度彈性改變
    const columnArray = [
      { prop: 'number', label: '案號', width: '100' },
      { prop: 'business', label: '事業名稱' },
      { prop: 'investor', label: '投資人' },
      { prop: 'investmentAmount', label: '投資金額' },
      { prop: 'approvedAmount', label: '審定金額' },
    ];

    const checkInput = (rule: { [key: string]: string }, value: string, callback: any) => {
      //[TD]每輸入一個字就會檢查三次，如何減低效能?
      console.log('check!');
      if (hasValueForSearch.value) {
        callback();
      } else {
        callback(new Error('請擇一條件輸入'));
      }
    };

    const formRules = {
      number: [{ validator: checkInput, trigger: 'change' }],
      business: [{ validator: checkInput, trigger: 'change' }],
      investor: [{ validator: checkInput, trigger: 'change' }],
    };

    //[TD]實作API、store、mock
    // const tableData = computed(() => store.getters['reportCases/cases']);
    const tableData = [
      {
        number: 245103,
        business: '高端疫苗',
        investor: '蔡英文',
        investmentAmount: 500000,
        approvedAmount: 500000,
      },
      {
        number: 245163,
        business: '聯亞生技',
        investor: '賴清德',
        investmentAmount: 200000,
        approvedAmount: 200000,
      },
    ];

    const formValidate = (): boolean => {
      //validate()不傳callback function進去會跳error
      let isValid = false;
      formRef.value.validate((valid: boolean) => {
        if (valid) {
          isValid = true;
        } else {
          isValid = false;
        }
      });
      return isValid;
    };

    //[TD]如何改成編輯完畢再檢查?
    watch(form, () => formValidate(), { deep: true });

    const search = async () => {
      //[TD](1)將要搜尋的選項帶入，(2)得到的結果要存store
      if (formValidate()) {
        console.log('search!');
        // store.dispatch('reportCases/searchCases');
      } else {
        console.log('no value!');
      }
    };

    const print = () => {
      //[TD](1)取得勾選的cases，(2)將選取的cases執行列印的動作
      console.log('Print!');
      // store.dispatch('reportCases/printReports');
    };

    return {
      title: '投資案件報表',
      formRef,
      form,
      formRules,
      search,
      print,
      columnArray,
      tableData,
    };
  },
});
</script>
