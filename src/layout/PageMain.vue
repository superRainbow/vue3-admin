<template>
  <el-main>
    <router-view />
  </el-main>
</template>

<style lang="scss">
@import '@/style/variable.scss';
.el-main {
  --sideBar-width: #{$sideBar-width}px;
  width: calc(100% - var(--sideBar-width));
  margin-left: var(--sideBar-width);
  padding: 0;
  transition: all 0.3s;

  @at-root .small-style & {
    --sideBar-small-width: #{$sideBar-small-width}px;
    width: calc(100% - var(--sideBar-small-width));
    margin-left: var(--sideBar-small-width);
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {};
  },
});
</script>