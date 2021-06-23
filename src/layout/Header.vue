<template>
  <header>
    <section class="logo">
      <img src="@/assets/logo.png"
           alt="logo">
    </section>
    <section class="function">
      <i :class="opened ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
         @click="toggleOpen()"></i>
      <Nav class="nav" />
    </section>
  </header>
</template>

<style lang="scss" scoped>
@import '@/style/variable.scss';
header {
  --header-height: #{$header-height}px;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  padding: 0;
  background-color: $white;
  z-index: $zIndex-header;

  .function {
    --sideBar-width: #{$sideBar-width}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    width: calc(100% - var(--sideBar-width));
    padding: $spacing-15 $spacing-40;

    @at-root .small-style & {
      --sideBar-width: #{$sideBar-small-width}px;
    }

    .el-icon-s-unfold,
    .el-icon-s-fold {
      @extend %link-pointer;
      font-size: 20px;
    }

    .nav {
      position: absolute;
      right: $spacing-40;
    }
  }

  .logo {
    --sideBar-width: #{$sideBar-width}px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: var(--sideBar-width);
    height: 100%;
    padding: $spacing-15;
    background-color: $sideBar-bg;
    border-bottom: 1px solid $header-border;
    overflow: hidden;
    transition: width 0.3s;

    @at-root .small-style & {
      --sideBar-width: #{$sideBar-small-width}px;
    }

    img {
      display: block;
      width: 30px;
      height: auto;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import Nav from '@/layout/Nav.vue';

export default defineComponent({
  components: {
    Nav,
  },
  setup() {
    const store = useStore();

    return {
      opened: computed(() => store.getters.isMenuOpen),
      toggleOpen: () => store.commit('UPDATE_MENU_OPEN'),
    };
  },
});
</script>