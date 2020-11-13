<template>
  <div class="menu-wrapper">
    <!-- hasAuth查看该模块权限，1为真，cType菜单类型，2是菜单项，0是菜单，1是按钮 -->
    <template v-if="item.meta.hasAuth === 1 && item.meta.cType === 2">
      <el-menu-item :index="item.path">
        <item :icon="item.meta.icon" :title="item.meta.cName" />
      </el-menu-item>
    </template>
    <!-- 菜单 -->
    <el-submenu v-if="item.meta.hasAuth === 1 && item.meta.cType === 0" :index="item.path">
      <!-- 菜单标题 -->
      <template slot="title">
        <item :icon="item.meta.icon" :title="item.meta.cName" />
      </template>
      <!-- 菜单项 -->
      <template v-if="item.children.length > 0">
        <sidebar-item v-for="child in item.children" :key="child.name" :item="child" />
      </template>
    </el-submenu>
  </div>
</template>

<script>
import Item from './Item'

export default {
  name: 'sidebarItem',
  components: { Item },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-wrapper {
  /deep/ .el-icon-arrow-down {
    color: #fff;
  }
}
</style>
