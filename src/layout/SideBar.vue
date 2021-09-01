
<template>
  <aside>
    <section class="logo">
      <img src="@/assets/logo.png"
           alt="logo">
    </section>
    <el-scrollbar>
      <el-menu :default-active="activeMenu"
               :router="true"
               :background-color="MENU_SETTING.BG"
               :text-color="MENU_SETTING.TEXT"
               :active-text-color="MENU_SETTING.ACTIVE_TEXT"
               :unique-opened="true"
               :collapse-transition="false"
               :collapse="!opened">
        <sidebar-item v-for="item in filterSidebarList"
                      :level="1"
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
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 999;

  .logo {
    display: flex;
    align-items: center;
    width: 100%;
    height: 60px;
    padding-left: 30px;
    border-bottom: 1px solid $header-border;
    img {
      width: 55%;
      height: auto;
      @at-root .small-style & {
        display: none;
      }
    }
  }

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
import { defineComponent, computed, ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { MENU_SETTING } from '@/utils/constants';
import SidebarItem from '@/layout/SideBarItem.vue';

export default defineComponent({
  components: { SidebarItem },
  setup() {
    const route = useRoute();
    const store = useStore();
    const activeMenu = ref();

    watchEffect(() => {
      activeMenu.value = `/${route.path.split('/')[1]}`;
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