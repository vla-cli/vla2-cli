<template>
  <el-dialog
    v-drag-dialog
    :title="title"
    custom-class="complex"
    :visible.sync="dialogVisible"
    width="540px">
    <el-form ref="form" :model="form" label-width="100px" :rules="rules">
      <el-form-item label="活动名称：" prop="name">
        <el-input v-model="form.name" placeholder="请输入" clearable />
      </el-form-item>
      <el-form-item label="活动时间：" prop="time">
        <el-date-picker
          v-model="form.time"
          value-format="yyyy-MM-dd HH:mm:ss"
          type="datetimerange"
          :picker-options="pickerOptions"
          range-separator="-"
          start-placeholder="开始时间"
          end-placeholder="结束时间" />
      </el-form-item>
      <el-form-item label="活动类型：" prop="type">
        <el-select
          v-model="form.type"
          multiple
          clearable
          collapse-tags
          placeholder="请选择">
          <el-option label="KTV" value="0"></el-option>
          <el-option label="棋牌" value="1"></el-option>
          <el-option label="桌游" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动状态：" prop="status">
        <el-select v-model="form.status" placeholder="请选择" clearable>
          <el-option label="已上线" value="0"></el-option>
          <el-option label="已结束" value="1"></el-option>
          <el-option label="未上线" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动内容："  prop="desc">
        <el-input type="textarea"
          v-model="form.desc"
          maxlength="150"
          show-word-limit
          placeholder="请输入"
          :autosize="{ minRows: 4, maxRows: 6}" />
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitForm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import dragDialog from '@/directive/dragDialog'

export default {
  name: 'complexDialog',
  data() {
    return {
      dialogVisible: false,
      form: {
        name: '',
        start: '',
        end: '',
        time: '',
        type: '',
        status: '',
        desc: ''
      },
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick(picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { max: 10, message: '最长10个字符', trigger: 'blur' }
        ],
        time: [
          { required: true, message: '请选择活动时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请选择活动类型', trigger: 'change' }
        ],
        status: [
          { required: true, message: '请选择活动状态', trigger: 'change' }
        ]
      }
    }
  },
  props: {
    // 弹窗标题
    title: {
      type: String,
      required: true
    }
  },
  directives: { dragDialog },
  methods: {
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$message({
            message: 'success',
            type: 'success',
            duration: 1500
          })
          this.dialogVisible = false
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.complex {
  // 调整时间的清空按钮位置与其它表单的按钮位置一致
  .el-date-editor {
    /deep/ .el-range__close-icon {
      position: absolute;
      top: 2px;
      right: 5px;
    }
  }
  .el-select {
    width: 100%;
  }
}
</style>
