<template>
  <div class="options">
    <language />
    <userInfo />
  </div>
</template>

<script>
import userInfo from './userInfo'
import language from './language'

export default {
  name: 'options',
  components: {
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
