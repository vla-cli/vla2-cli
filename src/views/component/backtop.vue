<template>
  <div class="guide">
    <div class="backtop" @scroll="handlerScroll" ref="backtop">
      <div class="container">
        aaaaaa
      </div>
    </div>
    <el-backtop target=".backtop" />
  </div>
</template>

<script>
export default {
  name: 'backtop',
  methods: {
    handlerScroll() {
      console.log(1111)
    }
  }
}
</script>

<style lang="scss" scoped>
.backtop {
  width: 100%;
  height: 400px;
  overflow: scroll;
  border: 4px solid #e6e6e6;
}
.container {
  width: 100%;
  height: 1800px;
}
</style>
