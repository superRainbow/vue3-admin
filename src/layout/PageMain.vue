<template>
  <main>
    <router-view />
    <Loading name="content" />
  </main>
</template>

<style lang="scss" scoped>
@import '@/style/variable.scss';
main {
  padding: $spacing-40;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import Loading from '@/components/Loading.vue';

export default defineComponent({
  components: {
    Loading,
  },
  setup() {
    return {};
  },
});
</script>