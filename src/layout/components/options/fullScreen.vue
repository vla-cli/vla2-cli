<template>
  <div class="icon-item" @click="handeClick">
    <svg-icon :iconClass="isFullscreen?'exit-fullscreen':'fullscreen'" />
  </div>
</template>

<script>
import screenfull from 'screenfull'

export default {
  name: 'fullScreen',
  data() {
    return {
      isFullscreen: false
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    handeClick() {
      if (!screenfull.enabled) {
        this.$message({
          message: 'you browser can not work',
          type: 'warning',
          duration: 1500
        })
        return false
      }
      screenfull.toggle()
      // var app = document.getElementById('app')
      // if (this.isFullscreen) {
      //   app.webkitRequestFullScreen()
      // } else {
      //   document.webkitExitFullscreen()
      // }
      // this.isFullscreen = !this.isFullscreen
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen
    },
    init() {
      if (screenfull.enabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy() {
      if (screenfull.enabled) {
        screenfull.off('change', this.change)
      }
    }
  }
}
</script>
