<template>
  <router-view></router-view>
  <Dialog />
  <Loading name="fullscreen" />
</template>

<script>
import Dialog from '@/components/Dialog.vue';
import Loading from '@/components/Loading.vue';

export default {
  name: 'App',
  components: {
    Dialog,
    Loading,
  }
}
</script>