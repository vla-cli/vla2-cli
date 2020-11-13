<template>
  <div class="logo clearfix">
    <div class="logo-item fl" :class="logoName">
      <img class="logo-img" src="@/assets/logo.png" alt="logo" />
      <span class="logo-title">ADMIN</span>
    </div>
    <div class="fl logo-list">
      <svg-icon icon-class="list" :class="animateName" @click.native="handleClick" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'logo',
  data() {
    return {
      animateName: '', // 展开收起按钮
      logoName: '' // logo展开收起
    }
  },
  computed: {
    ...mapGetters([
      'isCollapse'
    ])
  },
  methods: {
    handleClick() {
      this.logoName = this.isCollapse ? 'logo-item-open' : 'logo-item-close'
      this.animateName = this.isCollapse ? 'icon-list-right180' : 'icon-list-left180'
      this.$store.commit('app/setVisibleList', !this.isCollapse)
    }
  }
}
</script>

<style lang="scss" scoped>
.logo-item {
  width: 210px;
  height: 50px;
  line-height: 50px;
  // white-space:nowrap;
  padding-left: 20px;
  overflow: hidden;
  .logo-img {
    width: 32px;
    height: 32px;
    vertical-align: middle;
    margin-right: 12px;
  }
  .logo-title {
    color: #e3ebf3;
    font-size: 20px;
    font-weight: 200;
    letter-spacing: 1px;
    vertical-align: middle;
  }
}
.logo-item-open {
  animation: logoOpen .28s ease 1 forwards;
}
.logo-item-close {
  animation: logoClose .28s ease 1 forwards;
}
.logo-list {
  height: 50px;
  line-height: 50px;
  padding: 0 15px;
  font-size: $--font-size + 4px;
  color: #e3ebf3;
  /deep/ .svg-icon {
    cursor: pointer;
  }
}
.icon-list-left180 {
  animation: left180 .5s ease 1 forwards;
}
.icon-list-right180 {
  animation: right180 .5s ease 1 forwards;
}
// 动画
@keyframes left180 {
  from { transform: rotate(0); }
  to { transform: rotate(180deg); }
}
@keyframes right180 {
  from { transform: rotate(180deg); }
  to { transform: rotate(0); }
}
@keyframes logoClose {
  from { width: 210px; }
  to { width: 64px; }
}
@keyframes logoOpen {
  from { width: 64px; }
  to { width: 210px; }
}
</style>
