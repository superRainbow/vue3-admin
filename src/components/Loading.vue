<template>
  <div v-loading.fullscreen.lock="fullscreenLoading"></div>
</template>

<style lang="scss">
@import '@/style/variable.scss';
</style>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    return {
      fullscreenLoading: computed(() => store.getters.isLoading),
    };
  },
});
</script>