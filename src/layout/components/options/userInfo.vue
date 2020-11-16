<template>
  <div class="icon-item">
    <el-dropdown trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
        <img class="avatar" src="@/assets/avatar.jpg" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <!-- <el-dropdown-item>{{ $t('saber.common.profile') }}</el-dropdown-item> -->
        <el-dropdown-item><a href="https://github.com/vla-cli/vla2-cli" target="_bank">Github</a></el-dropdown-item>
        <el-dropdown-item divided command="logout">{{
          $t('saber.common.logout')
        }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { api } from '@/api'

export default {
  name: 'userInfo',
  methods: {
    /**
     * [getTableData 获取列表数据]
     */
    async loginOut() {
      let res = await api.loginApi.loginOut()
      if (res.code === 200) {
        localStorage.removeItem('token')
        this.$router.push({ path: '/login' })
      }
    },
    handleCommand(command) {
      if (command === 'logout') {
        this.loginOut()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  vertical-align: middle;
  cursor: pointer;
}
</style>
