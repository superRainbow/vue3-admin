<template>
  <el-container :class="['container', { 'small-style': !opened }]">
    <m-header></m-header>
    <el-container class="content">
      <side-bar></side-bar>
      <page-main></page-main>
    </el-container>
  </el-container>
</template>

<style lang="scss">
@import '@/style/variable.scss';
.container {
  @extend %width-height;
  position: relative;
  background-color: $bg-gary;
  .content {
    --header-height: #{$header-height}px;
    margin-top: var(--header-height);
  }
}
</style>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { getLocalStorage } from '@/utils/localStorage.ts';
import SideBar from '@/layout/SideBar.vue';
import MHeader from '@/layout/Header.vue';
import PageMain from '@/layout/PageMain.vue';

export default defineComponent({
  components: {
    SideBar,
    MHeader,
    PageMain,
  },
  setup() {
    const store = useStore();
    if (getLocalStorage('sidebarList')) {
      store.dispatch(
        'setSidebarList',
        JSON.parse(getLocalStorage('sidebarList'))
      );
    }
    return {
      opened: computed(() => store.getters.isMenuOpen),
    };
  },
});
</script>