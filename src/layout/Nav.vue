<template>
  <el-dropdown class="user-container right-menu-item hover-effect"
               trigger="click"
               @command="handleCommand">
    <div class="user-wrapper">
      <ul>
        <li>第 {{ user.groupType }} 組</li>
        <li>{{ user.name }} 您好</li>
      </ul>
      <i class="el-icon-caret-bottom" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item icon="el-icon-user"
                          command="user-data">個人資料</el-dropdown-item>
        <el-dropdown-item icon="el-icon-switch-button"
                          command="logout">登出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<style lang="scss" scoped>
@import '@/style/variable.scss';

.user-wrapper {
  display: flex;
  align-items: center;
  @extend %link-pointer;
  ul {
    margin-right: 10px;
    li + li {
      margin-top: 10px;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import router from '@/router';

export default defineComponent({
  setup() {
    const store = useStore();
    const logout = () => store.dispatch('logout');
    const redirectPage = (link: string) => router.push({ name: link });

    const handleCommand = (command: string) => {
      switch (command) {
        case 'user-data':
          redirectPage('user-data');
          break;
        case 'logout':
          logout();
          break;
        default:
          break;
      }
    };

    return {
      user: computed(() => store.getters.userData),
      handleCommand,
    };
  },
});
</script>
