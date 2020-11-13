<template>
  <div class="mergeHeader page-container p-20">
    <el-button type="primary" @click="handelExport" class="m-b-20" :loading="exportLoading">导出</el-button>
    <el-table
      border
      :data="tableData">
      <el-table-column
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column label="配送信息">
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column label="地址">
          <el-table-column
            prop="province"
            label="省份"
            width="120">
          </el-table-column>
          <el-table-column
            prop="city"
            label="市区"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            minWidth="300">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            width="120">
          </el-table-column>
        </el-table-column>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'mergeHeader',
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-08',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-06',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }],
      exportLoading: false
    }
  },
  methods: {
    handelExport() {
      this.exportLoading = true
        import('@/vendor/Export2Excel').then(excel => {
          const multiHeader = [['日期', '配送信息', '', '', '', ''], ['', '姓名', '地址', '', '', '']]
          const header = ['', '', '省份', '市区', '地址', '邮编']
          const filterVal = ['date', 'name', 'province', 'city', 'address', 'zip']
          const list = this.tableData
          const data = this.formatJson(filterVal, list)
          const merges = ['A1:A3', 'B1:F1', 'B2:B3', 'C2:F2']
          excel.export_json_to_excel({
            multiHeader,
            header,
            merges,
            data
          })
          this.exportLoading = false
        })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        // if (j === 'timestamp') {
        //   return parseTime(v[j])
        // } else {
        return v[j]
        // }
      }))
    }
  }
}
</script>
