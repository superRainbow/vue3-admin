
<template>
  <el-aside>
    <el-scrollbar>
      <el-menu :default-active="activeMenu"
               class="el-menu-vertical-demo"
               background-color="#3a3f51"
               text-color="#b5b6bd"
               active-text-color="rgb(79, 148, 212)">
        <sidebar-item v-for="item in filterSidebarList"
                      :key="item.path"
                      :data="item"
                      :url="item.path"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<style lang="scss">
@import '@/style/variable.scss';
.el-aside {
  --header-height: #{$header-height}px;
  --sideBar-width: #{$sideBar-width}px;
  width: var(--sideBar-width) !important;
  height: calc(100% - var(--header-height)) !important;
  background-color: $sideBar-bg;
  position: fixed;
  bottom: 0;
  left: 0;
  overflow: hidden;
  transition: width 0.3s;
  z-index: 999;

  @at-root .small-style & {
    --sideBar-small-width: #{$sideBar-small-width}px;
    width: var(--sideBar-small-width) !important;
  }

  .el-scrollbar {
    height: 100%;
    .el-scrollbar__wrap {
      overflow-x: hidden !important;
    }
  }
  .el-menu {
    @extend %width-height;
    border: none;
  }
}
</style>

<script lang="ts">
import { defineComponent, computed, watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import SidebarItem from '@/layout/SideBarItem.vue';

export default defineComponent({
  components: { SidebarItem },
  setup() {
    const route = useRoute();
    const store = useStore();
    const activeMenu = ref(route.name);

    watch(activeMenu, () => {
      console.log('route.name', route.name);
      activeMenu.value = route.name;
    });

    return {
      opened: true,
      activeMenu,
      filterSidebarList: computed(() => {
        console.log(
          'e',
          store.getters.sidebarList.filter((item: any) => !item.hidden)
        );

        return store.getters.sidebarList.filter((item: any) => !item.hidden);
      }),
    };
  },
});
</script>