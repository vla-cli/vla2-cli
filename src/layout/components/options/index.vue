<template>
  <div class="options">
    <search-page />
    <full-screen />
    <language />
    <!-- <font-size /> -->
    <notice />
    <userInfo />
  </div>
</template>

<script>
// import fontSize from './fontSize'
import fullScreen from './fullScreen'
import notice from './notice'
import searchPage from './searchPage'
import userInfo from './userInfo'
import language from './language'

export default {
  name: 'options',
  components: {
    // fontSize,
    fullScreen,
    notice,
    searchPage,
    userInfo,
    language
  }
}
</script>

<style lang="scss" scoped>
.options {
  height: 50px;
  line-height: 50px;
  .icon-item {
    display: inline-block;
    padding: 0 8px;
  }
  /deep/ .svg-icon {
    cursor: pointer;
    font-size: $--font-size + 4px;
    color: #e3ebf3;
  }
}
</style>
