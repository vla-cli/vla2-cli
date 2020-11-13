<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Watermark from './utils/watermark'

export default {
  name: 'App',
  mounted() {
    Watermark.set('saber')
  }
}
</script>

<style lang="scss">
@import './styles/reset.scss';
</style>

<style lang="scss" scoped>
#app {
  height: 100%;
}
</style>
