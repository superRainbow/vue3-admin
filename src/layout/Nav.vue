<template>
  <el-dropdown class="avatar-container right-menu-item hover-effect"
               trigger="click">
    <div class="avatar-wrapper">
      <el-avatar :src="user.avatar"></el-avatar>
      <i class="el-icon-caret-bottom" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <page-link to="profile">
          <el-dropdown-item>個人資料</el-dropdown-item>
        </page-link>
        <page-link to="https://google.com.tw">
          <el-dropdown-item>外部連結</el-dropdown-item>
        </page-link>
        <el-dropdown-item disabled>禁止</el-dropdown-item>
        <el-dropdown-item divided
                          @click="logout">登出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss">
@import '@/style/variable.scss';

.avatar-wrapper {
  @extend %link-pointer;
}
</style>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import PageLink from '@/components/PageLink.vue';

export default defineComponent({
  components: {
    PageLink,
  },
  setup() {
    const store = useStore();

    return {
      user: computed(() => store.getters.userData),
      logout: () => store.dispatch('logout'),
    };
  },
});
</script>
