<template>
  <el-dialog :title="dialogConfig.title"
             :model-value="isDialogShow"
             :show-close="dialogConfig.showHeaderClose"
             @close="cancel"
             :width="dialogConfig.width">
    <main>
      {{dialogConfig.message || ''}}
    </main>
    <template #footer>
      <span class="dialog-footer">
        <el-button v-if="dialogConfig.isCancelShow"
                   @click="cancel">{{dialogConfig.cancelText}}</el-button>
        <el-button type="primary"
                   @click="confirm">{{dialogConfig.submitText}}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style lang="scss" scoped>
@import '@/style/variable.scss';
</style>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const dialogConfig = computed(() => store.getters.dialogConfig);

    const cancel = () => {
      store.dispatch('toggleDialog', false);
    };

    const confirm = () => {
      dialogConfig.value.confirmCallback();
      store.dispatch('toggleDialog', false);
    };

    return {
      dialogConfig,
      isDialogShow: computed(() => store.getters.isDialogShow),
      cancel,
      confirm,
    };
  },
});
</script>