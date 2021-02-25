<template>
  <component v-bind:is="componentType"
             v-bind="redirect">
    <slot />
  </component>
</template>

<style lang="scss">
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
    const redirect = computed(() => {
      if (isAbsolutePath(link.value)) {
        return {
          target: '_blank',
          href: link.value,
          rel: 'noopener',
        };
      } else {
        return {
          to: link.value,
        };
      }
    });

    const componentType = computed(() => {
      return isAbsolutePath(link.value) ? 'a' : 'router-link';
    });

    return {
      link,
      redirect,
      componentType,
    };
  },
});
</script>