<template>
  <div class="alink page-container p-20">
    <div class="m-b-20">
      <el-link type="warning" :underline="false"
        >后台的请求为http请求，返回的格式为url格式，采用a标签下载</el-link
      >
    </div>
    <el-link href="/static/avatar.jpg" type="primary" download="download"
      >文件下载（href填写服务器文件地址）</el-link
    >
    <el-button type="primary" @click="handelClick"
      >文件下载（通过请求拿到文件地址）</el-button
    >
  </div>
</template>

<script>
import { api } from '@/api'

export default {
  name: 'alink',
  methods: {
    /**
     * [getUrl 获取文件地址]
     */
    async getUrl() {
      let res = await api.fileAPi.getFileUrl()
      if (res.code === 200) {
        this.downLoadFile(res.url)
      }
    },
    handelClick() {
      this.getUrl()
    },
    /**
     * [downLoadFile 动态创建a标签下载文件]
     */
    downLoadFile(url) {
      const ele = document.createElement('a')
      ele.setAttribute('href', url) // 设置下载文件的url地址
      ele.setAttribute('download', 'download') // 用于设置下载文件的文件名
      ele.click()
    }
  }
}
</script>
