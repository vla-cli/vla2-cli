<template>
  <!-- <div :class="{'has-logo':showLogo}"> -->
  <!-- <el-scrollbar wrap-class="scrollbar-wrapper"> -->
  <el-menu
    :collapse="isCollapse"
    background-color="#40c9c6"
    :default-active="$route.path"
    :text-color="menuText"
    active-text-color="#FFEC8B"
    class="siderbar"
    router
    :collapse-transition="false"
  >
    <sidebar-item
      v-for="routeItem in routes"
      :key="routeItem.name"
      :item="routeItem"
    />
  </el-menu>
  <!-- </el-scrollbar> -->
  <!-- </div> -->
</template>

<script>
import { mapGetters } from 'vuex'
import sidebarItem from './sidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { sidebarItem },
  computed: {
    ...mapGetters(['isCollapse']),
    routes() {
      let data = this.$router.options.routes
      data = data.filter(item => {
        return item.path === '/'
      })
      return data[0].children
    }
  },
  created() {
    // 合并variables中的变量
    Object.assign(this, variables)
  }
}
</script>

<style lang="scss" scoped>
.siderbar {
  /deep/ .svg-icon {
    margin-right: 10px;
    vertical-align: middle;
  }
}

.siderbar.aisde-close {
  /deep/ .el-submenu__title span {
    display: none;
  }
  /deep/ .el-submenu__title .el-icon-arrow-right {
    display: none;
  }
}
</style>
