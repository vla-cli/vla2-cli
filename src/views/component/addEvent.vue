<template>
  <el-dialog
    :title="title"
    :visible.sync="dialogVisible"
    >
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="事件名称：" prop="title">
        <el-input v-model="form.title" placeholder="请输入" clearable maxlength="20" show-word-limit />
      </el-form-item>
      <el-form-item label="时间：" prop="time">
        <el-date-picker
          v-model="form.time"
          value-format="yyyy-MM-DD HH:mm:ss"
          type="datetimerange"
          range-separator="-"
          start-placeholder="开始时间"
          end-placeholder="结束时间" />
      </el-form-item>
      <el-form-item label="颜色：" prop="color">
        <el-color-picker v-model="form.color"></el-color-picker>
      </el-form-item>
      <el-form-item label="事件内容："  prop="content">
        <el-input type="textarea"
          v-model="form.content"
          maxlength="150"
          show-word-limit
          placeholder="请输入"
          :autosize="{ minRows: 4, maxRows: 6}" />
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleClick">确 定</el-button>
  </span>
  </el-dialog>
</template>

<script>
export default {
  name: 'addEvent',
  props: {
    // 表单值
    form: {
      type: Object,
      default() {
        return {}
      }
    },
    title: {
      type: String,
      default: '新增'
    }
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    reset() {
      this.$refs.form.resetFields()
    },
    handleClick() {
      const flag = this.title === '新增'
      const { ...obj } = this.form
      obj.start = obj.time[0]
      obj.end = obj.time[1]
      obj.id = flag ? Math.floor(Math.random() * 10000).toString() : obj.id
      this.$emit('handleSuccess', obj, flag)
      this.dialogVisible = false
    }
  }
}
</script>
