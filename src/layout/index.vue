<template>
  <el-container>
    <el-header height="50px" class="header clearfix">
      <logo class="fl" />
      <breadcrumb class="fl" />
      <options class="fr" />
    </el-header>
    <el-container>
      <el-aside width="auto">
        <side-bar class="sidebar-container" :class="asidewName" />
      </el-aside>
      <el-main class="main">
        <app-main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { appMain, sideBar, logo, options, breadcrumb } from './components'
import { mapGetters } from 'vuex'

export default {
  name: 'Layout',
  data() {
    return {
      asidewName: ''
    }
  },
  components: {
    appMain,
    sideBar,
    logo,
    options,
    breadcrumb
  },
  computed: {
    ...mapGetters(['isCollapse'])
  },
  watch: {
    isCollapse(newvalue) {
      this.asidewName = newvalue ? 'aisde-close' : 'aisde-open'
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-color: $--body-bg;
}
.sidebar-container {
  width: 210px;
  height: 100%;
}
.header {
  padding-left: 0;
  background: #50a3a2;
}
.aisde-open {
  animation: aisdeOpen 0.28s ease 1 forwards;
}
.aisde-close {
  animation: aisdeClose 0.28s ease 1 forwards;
}
@keyframes aisdeOpen {
  from {
    width: 64px;
  }
  to {
    width: 210px;
  }
}
@keyframes aisdeClose {
  from {
    width: 210px;
  }
  to {
    width: 64px;
  }
}
</style>
