<template>
  <div class="login-container">
    <div class="wrapper">
      <div class="container">
        <h1>Welcome</h1>
        <el-form ref="form" :rules="rules" :model="form">
          <el-form-item label="" prop="Username">
            <el-input v-model="form.Username" placeholder="Username" />
          </el-form-item>
          <el-form-item label="" prop="Password">
            <el-input
              v-model="form.Password"
              autocomplete="off"
              type="password"
              placeholder="Password"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm" id="login-button"
              >Login</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <!-- 气泡 -->
      <ul class="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import { api } from '@/api'

export default {
  name: 'login',
  data() {
    return {
      form: {
        Username: '',
        Password: ''
      },
      rules: {
        Username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { max: 10, message: '最长10个字符', trigger: 'blur' }
        ],
        Password: [
          { required: true, message: '请输入密码', trigger: 'change' },
          { min: 6, max: 8, message: '请输入6到8位字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.getLoginData()
        } else {
          return false
        }
      })
    },
    /**
     * [getLoginData 登录]
     */
    async getLoginData() {
      let res = await api.loginApi.userLogin(this.form)
      // 存取token
      if (res.code === 200) {
        localStorage.setItem('token', res.token)
        this.$router.push({ name: 'Dashboard' })
      }
    }
  }
}
</script>

<style lang="scss">
@import './login';
</style>
