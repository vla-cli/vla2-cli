<template>
  <div class="formSubmit page-container p-20">
    <div class="m-b-20">
      <el-link type="warning" :underline="false">后台的请求为直接get请求，返回的格式为文件流，采用form表单下载</el-link>
      <el-link type="danger" :underline="false">（需要后台去配合测试）</el-link>
    </div>
    <el-button type="primary" @click="handelClick">文件下载（通过form表单提交下载）</el-button>
    <form action="/getBase64" method="get" target="_self" ref="form">
      <input type="hidden" name="username" value="admin" />
      <input type="hidden" name="token" value="mcvuotpmjmdb" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'formSubmit',
  methods: {
    handelClick() {
      this.$refs.form.submit()
    }
  }
}
</script>
