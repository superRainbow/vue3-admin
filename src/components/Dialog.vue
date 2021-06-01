<template>
  <el-dialog :title="dialogConfig.title"
             :model-value="isDialogShow"
             :show-close="dialogConfig.showHeaderClose"
             @close="close"
             :width="dialogConfig.width">
    <main>
      {{dialogConfig.message || ''}}
    </main>
    <template #footer>
      <span class="dialog-footer">
        <el-button v-if="dialogConfig.isCancelShow"
                   @click="submit">{{dialogConfig.cancelText}}</el-button>
        <el-button type="primary"
                   @click="submit">{{dialogConfig.submitText}}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss">
@import '@/style/variable.scss';
</style>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

const defaultConfig = {
  message: '',
  title: '提示',
  cancelText: '取 消',
  submitText: '確 定',
  width: '30%',
  showHeaderClose: true,
  isCancelShow: false,
};

export default defineComponent({
  setup() {
    const store = useStore();
    const config = computed(() => store.getters.dialogConfig);

    const close = () => {
      store.dispatch('toggleDialog', false);
    };

    const submit = () => {
      store.dispatch('toggleDialog', false);
    };

    return {
      dialogConfig: computed(() => Object.assign(defaultConfig, config.value)),
      isDialogShow: computed(() => store.getters.isDialogShow),
      close,
      submit,
    };
  },
});
</script>