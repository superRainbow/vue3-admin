<template>
  <el-container :class="['container', { 'small-style': !opened }]">
    <MHeader />
    <el-container class="content">
      <SideBar />
      <PageMain />
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
@import '@/style/variable.scss';

.container {
  @extend %width-height;
  position: relative;
}

.content {
  --header-height: #{$header-height}px;
  --sideBar-width: #{$sideBar-width}px;
  --sideBar-small-width: #{$sideBar-small-width}px;
  margin-top: var(--header-height);

  :deep(aside) {
    width: var(--sideBar-width);
    height: calc(100% - var(--header-height));
    background-color: $sideBar-bg;
    transition: width 0.3s;

    @at-root .small-style & {
      width: var(--sideBar-small-width);
    }
  }

  & > :deep(main) {
    width: calc(100% - var(--sideBar-width));
    margin-left: var(--sideBar-width);
    padding: $spacing-40;
    transition: all 0.3s;

    @at-root .small-style & {
      width: calc(100% - var(--sideBar-small-width));
      margin-left: var(--sideBar-small-width);
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { getLocalStorage, getLocalStorageObject } from '@/utils/localStorage';
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
      store.dispatch('setSidebarList', getLocalStorageObject('sidebarList'));
    }
    if (getLocalStorage('user')) {
      store.dispatch('setUserData', getLocalStorageObject('user'));
    }
    return {
      opened: computed(() => store.getters.isMenuOpen),
    };
  },
});
</script>