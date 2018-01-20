<template>
  <div id="app" class="app-wrapper">
    <TopBar />
    <router-view />
  </div>
</template>

<script>
import { TopBar } from '@/components/registry';

export default {
  name: 'App',
  components: {
    TopBar,
  },
};
</script>

<style lang="scss" src="./style/main.scss">

</style>
