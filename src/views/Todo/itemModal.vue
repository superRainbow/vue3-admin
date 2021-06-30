<template>
  <el-dialog :title="modalConfig.type === 'add' ? '新增' : '編輯'"
             :model-value="isModalShow"
             @close="cancel"
             :width="modalConfig.width">
    <main>
      <el-form ref="formRef"
               class="form"
               :rules="formRules"
               :model="form">
        <el-form-item prop="title"
                      label="標題">
          <el-input type="title"
                    placeholder="請輸入標題"
                    v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item prop="description"
                      label="描述">
          <el-input type="description"
                    placeholder="請輸入描述"
                    v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item type="done"
                      label="已完成">
          <el-switch v-model="form.done"></el-switch>
        </el-form-item>
      </el-form>
    </main>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary"
                   :disabled="isDisabled"
                   @click="confirm">儲存</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
@import '@/style/variable.scss';
</style>

<script lang="ts">
import { defineComponent, computed, ref, reactive, watch, watchEffect } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const modalConfig = computed(() => store.getters['todo/modalConfig']);

    const formRef = ref();
    const form = reactive(computed(() => store.getters['todo/modalData']));
    const isDisabled = ref(true);
    const formRules = {
      title: [{ required: true, message: '請輸入標題', trigger: 'blur' }],
      description: [{ required: true, message: '請輸入描述', trigger: 'blur' }],
    };

    const formValidate = () => {
      console.log('formValidate', formRef?.value?.validate());
      formRef?.value?.validate((valid: boolean) => (isDisabled.value = !valid));
    };

    // watch(form, () => formValidate(), { deep: true });

    watchEffect(() => formValidate());

    const cancel = () => {
      store.dispatch('todo/toggleModal', { flag: false });
    };

    const confirm = () => {
      const action = modalConfig.value.type === 'add' ? 'todo/addItem' : 'todo/putItem';
      store.dispatch(action, form.value);
      modalConfig.value.confirmCallback();
    };

    return {
      modalConfig,
      isModalShow: computed(() => store.getters['todo/isModalShow']),
      form,
      formRef,
      formRules,
      isDisabled,
      cancel,
      confirm,
    };
  },
});
</script>