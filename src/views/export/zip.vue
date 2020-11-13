<template>
  <div class="exportZip page-container p-20">
    <el-button type="primary" @click="handelExport" class="m-b-20" :loading="exportLoading">导出</el-button>
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
  name: 'exportZip',
  data() {
    return {
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
      ],
      exportLoading: false
    }
  },
  methods: {
    handelExport() {
      this.exportLoading = true
        import('@/vendor/Export2Zip').then(zip => {
          const tHeader = ['地区', '现有确诊', '累计确诊', '治愈', '死亡']
          const filterVal = ['zone', 'now', 'all', 'cure', 'dead']
          const list = this.dragData
          const data = this.formatJson(filterVal, list)
          zip.export_txt_to_zip(tHeader, data)
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
