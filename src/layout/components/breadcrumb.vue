<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" class="breadcrumb">
    <el-breadcrumb-item :to="{ path: '/' }">{{
      $i18n.t('saber.menu.dashboard.name')
    }}</el-breadcrumb-item>
    <template v-for="(item, index) in breadcrumbList">
      <el-breadcrumb-item
        v-if="index + 1 !== len"
        :key="index"
        :to="{ path: item.path }"
        >{{ item.meta.cName }}</el-breadcrumb-item
      >
      <el-breadcrumb-item v-else :key="index">{{
        item.meta.cName
      }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'breadcrumb',
  computed: {
    ...mapGetters(['breadcrumbList']),
    // 面包屑长度
    len() {
      return this.breadcrumbList.length
    }
  }
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  height: 50px;
  line-height: 50px;
  /deep/ .el-breadcrumb__inner {
    color: #ffec8b;
    &:hover {
      color: #ffec8b;
    }
  }
  /deep/ .el-breadcrumb__inner.is-link,
  /deep/ .el-breadcrumb__separator {
    color: #fff;
  }
}
</style>
