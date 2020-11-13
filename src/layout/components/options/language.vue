<template>
  <div class="icon-item">
    <el-dropdown trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
        <svg-icon iconClass="language"/>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item :disabled="lang" command="zh">{{$t('saber.common.zh')}}</el-dropdown-item>
        <el-dropdown-item :disabled="!lang" command="en">{{$t('saber.common.en')}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { setup } from '@/locales'

export default {
  name: 'language',
  data() {
    return {
      lang: true // 默认是中文
    }
  },
  created() {
    const lang = window.localStorage.getItem('localeLanguage')
    this.lang = !(lang === 'en')
  },
  methods: {
    handleCommand(command) {
      // 重载页面
      this.lang = command === 'zh'
      setup(command)
      // // 重载页面
      window.location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.icon-item {
  /deep/ .svg-icon {
    font-size: $--font-size + 5px;
  }
}
</style>
