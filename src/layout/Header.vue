<template>
  <el-header>
    <section class="logo">
      <img src="@/assets/logo.png"
           alt="logo">
    </section>
    <section class="function">
      <i :class="opened ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
         @click="toggleOpen()"></i>
      <nav></nav>
    </section>
  </el-header>
</template>

<style lang="scss">
@import '@/style/variable.scss';
.el-header {
  --header-height: #{$header-height}px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height) !important;
  padding: 0 !important;
  background-color: $white;
  z-index: $zIndex-header;

  .function {
    display: flex;
    align-items: center;
    padding: $padding-wh;

    .el-icon-s-unfold,
    .el-icon-s-fold {
      cursor: pointer;
      font-size: 20px;
    }
  }

  .logo {
    --sideBar-width: #{$sideBar-width}px;
    display: flex;
    align-items: center;
    width: var(--sideBar-width) !important;
    height: 100%;
    padding: $padding-wh;
    background-color: $sideBar-bg;
    border-bottom: 1px solid $header-border;
    overflow: hidden;
    transition: width 0.3s;

    @at-root .small-style & {
      --sideBar-small-width: #{$sideBar-small-width}px;
      width: var(--sideBar-small-width) !important;
    }

    img {
      width: 30px;
      height: auto;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const toggleOpen = () => {
      store.commit('UPDATE_MENU_OPEN');
    };

    return {
      opened: computed(() => store.getters.isMenuOpen),
      toggleOpen,
    };
  },
});
</script>