<template>
  <div class="exceltype page-container p-20">
    <!-- 查询条件 -->
    <el-form ref="form" :model="form" label-width="100px" inline>
      <el-form-item label="文件名：" prop="filename">
        <el-input v-model="form.filename" placeholder="请输入" clearable/>
      </el-form-item>
      <el-form-item label="" prop="isAutoWidth">
        <el-checkbox v-model="form.isAutoWidth">自适应宽度</el-checkbox>
      </el-form-item>
      <el-form-item label="文件格式：" prop="type">
        <el-select v-model="form.type" placeholder="请选择">
          <el-option label="xlsx" value="xlsx"></el-option>
          <el-option label="csv" value="csv"></el-option>
          <el-option label="txt" value="txt"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item class="m-l-20">
        <el-button type="primary" @click="handelExport">导出</el-button>
      </el-form-item>
    </el-form>
    <el-table
      ref="dragTable"
      :data="dragData"
      border>
      <el-table-column
        prop="ID"
        label="序列号"
        align="center"
        width="80">
      </el-table-column>
      <el-table-column
        prop="zone"
        label="地区"
        align="left"
        minWidth="200">
      </el-table-column>
      <el-table-column
        prop="now"
        label="现有确诊"
        align="center"
        minWidth="150">
      </el-table-column>
      <el-table-column
        prop="all"
        align="center"
        minWidth="150"
        label="累计确诊">
      </el-table-column>
      <el-table-column
        prop="cure"
        align="center"
        minWidth="100"
        label="治愈">
      </el-table-column>
      <el-table-column
        prop="dead"
        align="center"
        minWidth="100"
        label="死亡">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'exceltype',
  data() {
    return {
      form: {
        filename: '',
        isAutoWidth: false,
        type: 'xlsx'
      },
      exportLoading: false,
      dragData : [
        { ID: 1, zone: '美国', now: '24420', all: '759786', cure: '70980', dead: '40683' },
        { ID: 2, zone: '西班牙', now: '4366', all: '200210', cure: '80578', dead: '20852' },
        { ID: 3, zone: '意大利', now: '3047', all: '178972', cure: '47055', dead: '23660' },
        { ID: 4, zone: '英国', now: '30471', all: '168972', cure: '17055', dead: '53660' },
        { ID: 5, zone: '法国', now: '30471', all: '1672', cure: '1755', dead: '3660' },
        { ID: 6, zone: '巴西', now: '3471', all: '1689', cure: '1055', dead: '5660' },
        { ID: 7, zone: '澳大利亚', now: '3047', all: '8972', cure: '7055', dead: '366' },
        { ID: 8, zone: '加拿大', now: '471', all: '1872', cure: '155', dead: '536' },
        { ID: 9, zone: '比利时', now: '3041', all: '68972', cure: '55', dead: '560' },
        { ID: 10, zone: '伊朗', now: '301', all: '6897', cure: '155', dead: '360' }
      ]
    }
  },
  methods: {
    handelExport() {
      this.exportLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = ['地区', '现有确诊', '累计确诊', '治愈', '死亡']
        const filterVal = ['zone', 'now', 'all', 'cure', 'dead']
        const list = this.dragData
        const data = this.formatJson(filterVal, list)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.form.filename || 'excel',
          autoWidth: this.form.isAutoWidth,
          bookType: this.form.type
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
