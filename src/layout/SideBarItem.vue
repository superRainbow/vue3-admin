<template>
  <template v-if="hasOnlyChild(item) &&(!childItem.children || childItem.noChild)">
    <page-link v-if="childItem.meta"
               :to="resolvePath(childItem.path)">
      <el-menu-item :index="resolvePath(childItem.path)">
        <i :class="childItem.meta.icon ? childItem.meta.icon : ''"></i>
        <span class="title">{{ childItem.meta.title }}</span>
      </el-menu-item>
    </page-link>
  </template>
  <el-submenu v-else
              :index="resolvePath(item.path)">
    <template #title>
      <i :class="item.meta.icon"></i>
      <span class="title">{{ item.meta.title }}</span>
    </template>
    <sidebar-item v-for="child in item.children"
                  :key="child.path"
                  :data="child"
                  :url="resolvePath(child.path)" />
  </el-submenu>
</template>

<style lang="scss">
.small-style {
  .title,
  .el-submenu__icon-arrow {
    display: none;
  }
}
</style>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import path from 'path';
import { isAbsolutePath } from '@/utils/validate';
import PageLink from '@/components/PageLink.vue';

export default defineComponent({
  name: 'SidebarItem',
  components: {
    PageLink,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    url: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const basePath = ref(props.url);
    const item = reactive(props.data);
    const childItem = ref({});

    const hasOnlyChild = (parent: any) => {
      const newChildren =
        (parent.children &&
          parent.children.length > 0 &&
          parent.children.filter((obj: any) => !obj.hidden)) ||
        [];
      if (newChildren.length === 1 && !parent.meta) {
        childItem.value = newChildren[0];
        console.log('childItem 1', parent.meta, childItem);

        return true;
      }
      if (newChildren.length === 0) {
        childItem.value = { ...parent, path: '', noChild: true };
        console.log('childItem 0', parent.meta, childItem);
        return true;
      }
      return false;
    };

    const resolvePath = (router: string) => {
      if (isAbsolutePath(router)) {
        return router;
      }
      if (isAbsolutePath(basePath.value)) {
        return basePath.value;
      }
      return path.join(basePath.value, router);
    };

    return {
      item,
      basePath,
      childItem,
      hasOnlyChild,
      resolvePath,
    };
  },
});
</script>