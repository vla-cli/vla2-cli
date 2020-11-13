<template>
  <div class="crop">
    <el-upload class="upload"
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      drag
      :auto-upload="false"
      :show-file-list="false"
      :multiple="false"
      :limit="1"
      :on-change="changeUpload">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">点击上传</div>
      <div class="el-upload__tip">支持绝大多数图片格式，单张图片最大支持5MB</div>
    </el-upload>
    <cropDialog ref="cropDialog" @closeDialog="closeDialog"/>
  </div>
</template>

<script>
import cropDialog from './cropDialog'

export default {
  name: 'crop',
  data() {
    return {
      fileinfo: null
    }
  },
  components: { cropDialog },
  methods: {
    /**
     * [changeUpload 添加文件时的文件大小和文件格式校验]
     */
    changeUpload(file, fileList) {
      const isLt5M = file.size / 1024 / 1024 < 5
      const fileType = file.raw.type.split('/')[0]
      if (!isLt5M) {
        this.$message({
          message: '上传文件大小不能超过 5MB!',
          type: 'error',
          duration: 1500
        })
        return false
      }
      if (fileType !== 'image') {
        this.$message({
          message: '只能上传图片格式!',
          type: 'error',
          duration: 1500
        })
        return false
      }
      // 上传成功后将图片地址赋值给裁剪框显示图片
      this.$nextTick(() => {
        // 由于是上传的本地文件，需要对文件进行处理，这里需要用到FileReader API
        if (window.FileReader) {
          var fileReader = new FileReader()
          fileReader.onloadend = (e) => {
            // 获取读取文件后的base64码
            this.$refs.cropDialog.option.img = e.target.result
            this.$refs.cropDialog.dialogVisible = true
          }
          // readAsDataURL中的参数必须是blob对象
          fileReader.readAsDataURL(file.raw)
        } else {
          this.$message({
            type: 'error',
            message: 'Not supported by your browser!',
            duration: 1500
          })
        }
      })
    },
    /**
     * [closeDialog 窗口关闭后要清除之前上传的图片]
     */
    closeDialog(val) {
      this.$refs.upload.clearFiles()
    }
  }
}
</script>
