<template>
  <div class="horizontal-wrap" ref="horizontalWrap">
    <div class="horizontal-scroll" ref="horizontalScroll">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'horizontalScroll',
  data() {
    return {
      startX: 0, // 刚触碰到屏幕时的手指位置信息
      centerX: 0, // 用来记录每次触摸时上一次的偏移距离
      maxRight: 60, // 设定一个最大的向右滑动距离
      maxLeftBounce: 0 // 向左反弹值
    }
  },
  mounted() {
    this.scroll()
  },
  methods: {
    scroll() {
      const { horizontalScroll, horizontalWrap } = this.$refs
      const maxLeft = -(
        horizontalScroll.offsetWidth -
        horizontalWrap.offsetWidth +
        this.maxRight
      )
      const maxRightBounce = -(
        horizontalScroll.offsetWidth - horizontalWrap.offsetWidth
      )
      horizontalScroll.addEventListener('touchstart', e => {
        this.startX = e.changedTouches[0].clientX
      })
      horizontalScroll.addEventListener('touchmove', e => {
        // 清除过渡
        horizontalScroll.style.transition = 'none'
        // 获取差值
        var dx = e.changedTouches[0].clientX - this.startX
        // 上次的滑动距离加上本次的滑动距离
        var tempX = this.centerX + dx
        // 当上次滑动的距离加上本次滑动的距离 大于 设定的最大向下距离的时候
        if (tempX > this.maxRight) {
          tempX = this.maxRight
        } else if (tempX < maxLeft) {
          tempX = maxLeft
        }
        // 设置 ul 在 Y 轴上的偏移
        horizontalScroll.style.transform =
          'translate3d(' + tempX + 'px,0px,0px)'
      })
      horizontalScroll.addEventListener('touchend', e => {
        // 获取差值
        var dx = e.changedTouches[0].clientX - this.startX
        // 记录移动的距离
        this.centerX = this.centerX + dx
        // 两次滑动的距离 大于 设定的 向上 反弹值时
        if (this.centerX > this.maxLeftBounce) {
          // 让两次滑动的距离 等于 设置的值
          this.centerX = this.maxLeftBounce
          // 添加过渡
          horizontalScroll.style.transform =
            'translate3d(' + this.centerX + 'px,0px,0px)'
          horizontalScroll.style.transition = 'transform .5s'
        } else if (this.centerX < maxRightBounce) {
          // 让两次滑动的距离 等于 设置的值
          this.centerX = maxRightBounce
          // 添加过渡
          horizontalScroll.style.transition = 'transform .5s'
          horizontalScroll.style.transform =
            'translate3d(' + this.centerX + 'px,0px,0px)'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.horizontal-wrap {
  width: 400px;
  border: 1px solid #333;
}
.horizontal-scroll {
  display: -webkit-box;
  overflow-x: auto;
  // 隐藏滚动条
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
