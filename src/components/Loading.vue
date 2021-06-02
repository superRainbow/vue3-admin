<template>
  <div v-loading.fullscreen.lock="isFullscreen && isLoading"
       v-loading="!isFullscreen && isLoading"></div>
</template>

<style lang="scss">
@import '@/style/variable.scss';
</style>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  props: {
    name: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const store = useStore();

    return {
      isFullscreen: computed(() => props.name === 'fullscreen'),
      isLoading: computed(() => props.name === store.getters.loadingTarget && store.getters.isLoading),
    };
  },
});
</script>