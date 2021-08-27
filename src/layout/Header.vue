<template>
  <header>
    <section class="title">
      <i :class="opened ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
         @click="toggleOpen()"></i>
      <h1>{{WEB_TITLE}}</h1>
    </section>
    <Nav class="nav" />
  </header>
</template>

<style lang="scss" scoped>
@import '@/style/variable.scss';
header {
  --sideBar-width: #{$sideBar-width}px;
  --header-height: #{$header-height}px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: $zIndex-header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: var(--header-height);
  box-sizing: border-box;
  padding: $spacing-15 $spacing-40 $spacing-15 var(--sideBar-width);
  background-color: $white;
  transition: padding 0.1s linear;

  @at-root .small-style & {
    --sideBar-width: #{$sideBar-small-width}px;
  }

  .title {
    display: flex;
    align-items: center;
    padding: 0 $spacing-15;
    .el-icon-s-unfold,
    .el-icon-s-fold {
      @extend %link-pointer;
      font-size: 20px;
    }

    h1 {
      margin-left: $spacing-15;
      @extend %web-title-style;
    }
  }

  .function {
    --sideBar-width: #{$sideBar-width}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    width: calc(100% - var(--sideBar-width));
    padding: $spacing-15 $spacing-40;
    margin-left: #{$sideBar-width}px;

    @at-root .small-style & {
      --sideBar-width: #{$sideBar-small-width}px;
    }

    .nav {
      position: absolute;
      right: $spacing-40;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import Nav from '@/layout/Nav.vue';
import { WEB_TITLE } from '@/utils/constants';

export default defineComponent({
  components: {
    Nav,
  },
  setup() {
    const store = useStore();

    return {
      WEB_TITLE,
      opened: computed(() => store.getters.isMenuOpen),
      toggleOpen: () => store.commit('UPDATE_MENU_OPEN'),
    };
  },
});
</script>