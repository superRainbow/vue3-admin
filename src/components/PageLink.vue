<template>
  <component v-bind:is="componentType"
             v-bind="redirectLink">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
</style>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { isAbsolutePath } from '@/utils/validate';

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const link = ref(props.to);

    const aLink = {
      target: '_blank',
      href: link.value,
      rel: 'noopener',
    };

    const routerLink = {
      to: link.value,
    };

    const redirectLink = computed(() => {
      return isAbsolutePath(link.value) ? aLink : routerLink;
    });

    const componentType = computed(() => {
      return isAbsolutePath(link.value) ? 'a' : 'router-link';
    });

    return {
      redirectLink,
      componentType,
    };
  },
});
</script>