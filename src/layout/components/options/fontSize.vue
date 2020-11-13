<template>
  <div class="icon-item">
     <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <el-tooltip class="item" effect="dark" :content="$t('saber.common.size')" placement="bottom">
          <svg-icon iconClass="size"/>
        </el-tooltip>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>{{$t('saber.common.default')}}</el-dropdown-item>
        <el-dropdown-item>{{$t('saber.common.medium')}}</el-dropdown-item>
        <el-dropdown-item>{{$t('saber.common.small')}}</el-dropdown-item>
        <el-dropdown-item>{{$t('saber.common.mini')}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'fontsize'
}
</script>

<style lang="scss" scoped>
</style>
