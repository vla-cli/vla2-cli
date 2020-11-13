<template>
  <div class="complextable page-container">
    <!-- 查询条件 -->
    <el-form ref="form" :model="form" label-width="100px" inline>
      <el-form-item label="活动名称：" prop="name">
        <el-input v-model="form.name" placeholder="请输入" clearable />
      </el-form-item>
      <el-form-item label="开始日期：" prop="start">
        <el-date-picker
          v-model="form.start"
          type="date"
          value-format="yyyy-MM-dd"
          :picker-options="startPickerOptions()"
          placeholder="开始日期"
        />
      </el-form-item>
      <el-form-item label="结束日期：" prop="end">
        <el-date-picker
          v-model="form.end"
          type="date"
          value-format="yyyy-MM-dd"
          :picker-options="endPickerOptions()"
          placeholder="结束日期"
        />
      </el-form-item>
      <el-form-item label="活动状态：" prop="status">
        <el-select v-model="form.status" placeholder="请选择" clearable>
          <el-option label="已上线" value="0"></el-option>
          <el-option label="已结束" value="1"></el-option>
          <el-option label="未上线" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="m-l-20">
        <el-button type="primary" @click="handelSearch">查询</el-button>
        <el-button @click="handelReset">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="m-l-20">
      <el-button type="primary" @click="handelAdd">新增</el-button>
      <el-button type="danger" :disabled="delDisabled" @click="handelDel"
        >删除</el-button
      >
    </div>
    <div class="p-20 clearfix">
      <el-table
        v-loading="loading"
        :data="tableData"
        @selection-change="handleSelectionChange"
        border
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="idx" label="序列号" align="center" width="80">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称"
          show-overflow-tooltip
          align="center"
          minWidth="100"
        >
        </el-table-column>
        <el-table-column
          prop="start"
          label="开始时间"
          align="center"
          width="150"
        >
        </el-table-column>
        <el-table-column prop="end" align="center" width="150" label="结束时间">
        </el-table-column>
        <el-table-column
          prop="type"
          align="center"
          width="150"
          label="活动类型"
        >
        </el-table-column>
        <el-table-column
          prop="status"
          align="center"
          width="80"
          label="活动状态"
        >
        </el-table-column>
        <el-table-column
          prop="desc"
          align="center"
          minWidth="200"
          show-overflow-tooltip
          label="活动内容"
        >
        </el-table-column>
        <el-table-column width="80" align="center" label="操作">
          <template slot-scope="{ row }">
            <el-button type="text" @click="handelEdit(row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        class="m-t-20 fr"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="form.page"
        :page-sizes="[10, 20, 50]"
        :page-size="form.limit"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
    <complexDialog :title="dialogTitle" ref="complexDialog" />
  </div>
</template>

<script>
import complexDialog from './complexDialog'
import { api } from '@/api'
import { hasDelTable } from '@/utils/tableOptions.js'

export default {
  name: 'complextable',
  data() {
    return {
      form: {
        name: '',
        start: '',
        end: '',
        status: '',
        page: 1,
        limit: 10
      },
      total: 0,
      tableData: [],
      dialogTitle: '',
      loading: false,
      delDisabled: true
    }
  },
  components: { complexDialog },
  mixins: [hasDelTable],
  methods: {
    /**
     * [getTableData 获取列表数据]
     */
    async getTableData() {
      this.loading = true
      let res = (await api.complexApi.getComplexTable(this.form)).data
      this.total = res.total
      this.tableData = res.result
      this.tableData.map((item, index) => {
        // 设置序列号
        item.idx = (this.form.page - 1) * this.form.limit + index
      })
      this.loading = false
    },
    /**
     * [handelAdd 新增]
     */
    handelAdd() {
      this.dialogTitle = '活动新增'
      this.$refs.complexDialog.dialogVisible = true
      this.$nextTick(() => {
        this.$refs.complexDialog.$refs.form.resetFields()
      })
    },
    /**
     * [handelEdit 编辑]
     */
    handelEdit(row) {
      this.dialogTitle = '活动编辑'
      const rowData = { ...row }
      // 活动类型
      rowData.type = rowData.type.split(',')
      rowData.time = [rowData.start, rowData.end]
      this.$refs.complexDialog.dialogVisible = true
      this.$nextTick(() => {
        this.$refs.complexDialog.form = { ...rowData }
      })
    },
    /**
     * [startPickerOptions 设置开始日期根据结束日期来禁止结束日期之后的日期]
     */
    startPickerOptions() {
      const _this = this
      return {
        disabledDate(time) {
          if (_this.form.end) {
            return time.getTime() > new Date(_this.form.end).getTime()
          } else {
            return false
          }
        }
      }
    },
    /**
     * [endPickerOptions 设置结束日期根据开始时间日期来禁止开始日期之前的日期]
     */
    endPickerOptions() {
      const _this = this
      return {
        disabledDate(time) {
          if (_this.form.start) {
            return time.getTime() < new Date(_this.form.start).getTime()
          } else {
            return false
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.complextable {
  padding-top: 20px;
}
</style>
