<template>
  <el-container :class="['container', { 'small-style': !opened }]">
    <MHeader />
    <el-container class="content">
      <SideBar />
      <PageMain />
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
import { getLocalStorage } from '@/utils/localStorage';
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
    if (getLocalStorage('user')) {
      store.dispatch('setUserData', JSON.parse(getLocalStorage('user')));
    }
    return {
      opened: computed(() => store.getters.isMenuOpen),
    };
  },
});
</script>