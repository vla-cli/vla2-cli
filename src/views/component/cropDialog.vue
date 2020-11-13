<template>
  <el-dialog
    title="图片剪裁"
    :visible.sync="dialogVisible"
    :before-close="beforeClose"
    width="640px">
    <el-dialog
      width="500px"
      title="预览"
      :visible.sync="innerVisible"
      append-to-body>
        <img src="" alt="" ref="preview"/>
    </el-dialog>
    <div class="cropper-content">
      <div class="cropper" style="text-align:center">
        <vueCropper
          ref="cropper"
          v-bind="option"
        />
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button @click="beforeClose">取 消</el-button>
      <el-button type="primary" @click="finish" :loading="loading">确认</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { VueCropper } from 'vue-cropper'

export default {
  name: 'cropDialog',
  data() {
    return {
      dialogVisible: false,
      // 裁剪组件的基础配置option
      option: {
        img: '', // 裁剪图片的地址
        info: true, // 裁剪框的大小信息
        outputSize: 1, // 裁剪生成图片的质量
        outputType: 'jpeg', // 裁剪生成图片的格式
        canScale: true, // 图片是否允许滚轮缩放
        autoCrop: true, // 是否默认生成截图框
        autoCropWidth: 300, // 默认生成截图框宽度
        autoCropHeight: 200, // 默认生成截图框高度
        // fixedBox: true, // 固定截图框大小 不允许改变
        // fixed: true, // 是否开启截图框宽高固定比例
        // fixedNumber: [7, 5], // 截图框的宽高比例
        // full: true, // 是否输出原图比例的截图
        canMoveBox: true, // 截图框能否拖动
        original: false, // 上传图片按照原始比例渲染
        centerBox: true, // 截图框是否被限制在图片里面
        infoTrue: false // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
      },
      innerVisible: false,
      loading: false
    }
  },
  components: { VueCropper },
  methods: {
    finish() {
      this.$refs.cropper.getCropBlob((data) => {
        console.log('data', data)
        var fileReader = new FileReader()
        fileReader.onloadend = (e) => {
          // 获取读取文件后的base64码
          this.innerVisible = true
          this.$nextTick(() => {
            this.$refs.preview.src = e.target.result
          })
        }
        // readAsDataURL中的参数必须是blob对象
        fileReader.readAsDataURL(data)
        // this.beforeClose()
        // var fileName = 'goods' + this.fileinfo.uid
        // this.loading = true
        // 上传阿里云服务器
        // client().put(fileName, data).then(result => {
        //   this.dialogVisible = false
        //   this.picsList.push(result.url)
        // }).catch(err => {
        //   console.log(err)
        //   this.loading = false
        // })
      })
    },
    beforeClose() {
      this.dialogVisible = false
      this.$emit('closeDialog', this.dialogVisible)
    }
  }
}
</script>

<style lang="scss" scoped>
.cropper-content {
  .cropper {
      width: auto;
      height: 300px;
  }
}
</style>
