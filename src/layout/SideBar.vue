
<template>
  <aside>
    <el-scrollbar>
      <el-menu :default-active="activeMenu"
               class="el-menu-vertical-demo"
               :background-color="MENU_SETTING.BG"
               :text-color="MENU_SETTING.TEXT"
               :active-text-color="MENU_SETTING.ACTIVE_TEXT"
               :collapse-transition="false"
               :collapse="!opened">
        <sidebar-item v-for="item in filterSidebarList"
                      :key="item.path"
                      :data="item"
                      :url="item.path"></sidebar-item>
      </el-menu>
    </el-scrollbar>
  </aside>
</template>

<style lang="scss" scoped>
@import '@/style/variable.scss';
aside {
  position: fixed;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: 999;

  .el-scrollbar {
    height: 100%;
    .el-scrollbar__wrap {
      overflow-x: hidden;
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
import { MENU_SETTING } from '@/utils/constants';
import SidebarItem from '@/layout/SideBarItem.vue';

export default defineComponent({
  components: { SidebarItem },
  setup() {
    const route = useRoute();
    const store = useStore();
    const activeMenu = ref(route.name);

    watch(activeMenu, () => {
      activeMenu.value = route.name;
    });

    return {
      MENU_SETTING,
      activeMenu,
      opened: computed(() => store.getters.isMenuOpen),
      filterSidebarList: computed(() => store.getters.sidebarList.filter((item: any) => !item.hidden)),
    };
  },
});
</script>