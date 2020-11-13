<template>
  <div>
    <horizontal-scroll>
      <template v-for="(item, index) in navList">
        <div :key="index" class="slide-item">{{ item }}</div>
      </template>
    </horizontal-scroll>
  </div>
</template>

<script>
import horizontalScroll from '@/components/slide'
export default {
  data() {
    return {
      navList: [
        '推荐',
        '热点',
        '北京',
        '社会',
        '娱乐',
        '科技',
        '财经',
        '体育',
        'test1',
        'test2',
        'test3',
        'test4'
      ]
    }
  },
  components: {
    horizontalScroll
  }
}
</script>

<style lang="scss" scoped>
.slide-item {
  height: 60px;
  width: 60px;
  line-height: 60px;
  text-align: center;
}
.slide-item + .slide-item {
  margin-left: 10px;
}
</style>
