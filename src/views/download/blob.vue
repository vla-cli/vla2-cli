<template>
  <div class="alink page-container p-20">
    <div class="m-b-20">
      <el-link type="warning" :underline="false"
        >后台的请求为http请求，返回的格式为文件流，采用blod转url下载</el-link
      >
      <el-link type="danger" :underline="false">（需要后台去配合测试）</el-link>
    </div>
    <el-button type="primary" @click="handelClick"
      >文件下载（通过blob下载）</el-button
    >
  </div>
</template>

<script>
import { api } from '@/api'

export default {
  name: 'alink',
  methods: {
    /**
     * [getBase64 获取文件地址]
     */
    async getBase64() {
      let res = await api.fileAPi.getBase64()
      if (res.code === 200) {
        this.downLoadFile(res.img)
      }
    },
    handelClick() {
      this.getBase64()
    },
    /**
     * [downLoadFile 动态创建a标签下载文件]
     */
    downLoadFile(data) {
      const linkElement = document.createElement('a') // 创建点击下载的元素
      let blob = null
      // 判断浏览器是否支持blob对象
      try {
        // 该实例化的方式第一个参数必须是数组的格式
        blob = new Blob([data], { type: 'application/zip' })
      } catch (e) {
        // 旧版本浏览器下的blob创建对象
        const BlobBuilder =
          window.BlobBuilder ||
          window.WebKitBlobBuilder ||
          window.MozBlobBuilder ||
          window.MSBlobBuilder
        if (e.name === 'TypeError' && window.BlobBuilder) {
          const blobbuilder = new BlobBuilder()
          BlobBuilder.append(data)
          blob = blobbuilder.getBlob('application/zip')
        } else {
          alert('浏览器版本较低，暂不支持该文件类型下载')
        }
      }
      const url = window.URL.createObjectURL(blob)
      linkElement.setAttribute('href', url)
      linkElement.setAttribute('downLoad', 'download')
      linkElement.click()
    }
  }
}
</script>
