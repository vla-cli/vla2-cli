<template>
  <div class="copy page-container p-20">
    <el-form inline>
      <el-form-item>
        <el-input v-model="content" ref="content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" v-clipboard:copy="content" v-clipboard:success="clipboardSuccess">复制</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import clipboard from '@/directive/clipboard'

export default {
  name: 'copy',
  data() {
    return {
      content: '我就是来测试用的'
    }
  },
  directives: { clipboard },
  methods: {
    clipboardSuccess() {
      this.$message({
        message: '复制成功',
        type: 'success',
        duration: 1500
      })
    }
  }
}
</script>
