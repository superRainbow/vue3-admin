<template>
  <el-dialog :title="dialogConfig.title"
             :model-value="isDialogShow"
             :show-close="dialogConfig.showHeaderClose"
             @close="headerClose"
             :width="dialogConfig.width">
    <main>
      {{dialogConfig.message || ''}}
    </main>
    <template #footer>
      <span class="dialog-footer">
        <el-button v-if="dialogConfig.isCancelShow"
                   @click="toggleOpen">{{dialogConfig.cancelText}}</el-button>
        <el-button type="primary"
                   @click="toggleOpen">{{dialogConfig.submitText}}</el-button>
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

    const headerClose = () => {
      store.dispatch('toggleDialog', false);
    };

    const toggleOpen = () => {
      store.dispatch('toggleDialog', false);
    };

    return {
      dialogConfig: computed(() => Object.assign(defaultConfig, config.value)),
      isDialogShow: computed(() => store.getters.isDialogShow),
      headerClose,
      toggleOpen,
    };
  },
});
</script>