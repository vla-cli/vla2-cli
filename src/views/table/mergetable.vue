<template>
  <div class="mergetable">
    <el-table
      :data="mergeData"
      :span-method="objectSpanMethod"
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
        align="center"
        minWidth="150">
      </el-table-column>
      <el-table-column
        prop="now"
        label="现有确诊"
        align="center"
        minWidth="100">
      </el-table-column>
      <el-table-column
        prop="all"
        align="center"
        minWidth="100"
        label="累计确诊">
      </el-table-column>
      <el-table-column
        prop="cure"
        align="center"
        minWidth="80"
        label="治愈">
      </el-table-column>
      <el-table-column
        prop="dead"
        align="center"
        minWidth="80"
        label="死亡">
      </el-table-column>
      <el-table-column
        width="80"
        align="center"
        label="操作">
        <template slot-scope="{ row }">
          <el-button type="text">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'mergetable',
  data() {
    return {
      mergeData: [
        { ID: 1, zone: '美国', now: '24420', all: '759786', cure: '70980', dead: '40683' },
        { ID: 1, zone: '西班牙', now: '4366', all: '200210', cure: '80578', dead: '20852' },
        { ID: 1, zone: '意大利', now: '3047', all: '178972', cure: '47055', dead: '23660' },
        { ID: 2, zone: '英国', now: '30471', all: '168972', cure: '17055', dead: '53660' },
        { ID: 3, zone: '法国', now: '30471', all: '1672', cure: '1755', dead: '3660' },
        { ID: 3, zone: '巴西', now: '3471', all: '1689', cure: '1055', dead: '5660' },
        { ID: 4, zone: '澳大利亚', now: '3047', all: '8972', cure: '7055', dead: '366' },
        { ID: 4, zone: '加拿大', now: '471', all: '1872', cure: '155', dead: '536' },
        { ID: 4, zone: '比利时', now: '3041', all: '68972', cure: '55', dead: '560' },
        { ID: 4, zone: '伊朗', now: '301', all: '6897', cure: '155', dead: '360' }
      ],
      OrderIndexArr: null
    }
  },
  mounted() {
    this.getOrderNumber()
  },
  methods: {
    /**
     * [getOrderNumber 获取需要合并的项]
     */
    getOrderNumber() {
      let OrderObj = {}
      this.mergeData.forEach((element, index) => {
        element.rowIndex = index
        if (OrderObj[element.ID]) {
          OrderObj[element.ID].push(index)
        } else {
          OrderObj[element.ID] = []
          OrderObj[element.ID].push(index)
        }
      })
      this.OrderIndexArr = []
      // 将数组长度大于1的值 存储到this.OrderIndexArr（也就是需要合并的项）
      Object.values(OrderObj).map(item => {
        if (item.length > 1) {
          this.OrderIndexArr.push(item)
        }
      })
    },
    /**
     * [objectSpanMethod 表格项合并]
     */
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        for (let i = 0; i < this.OrderIndexArr.length; i++) {
          let element = this.OrderIndexArr[i]
          for (let j = 0; j < element.length; j++) {
            let item = element[j]
            if (rowIndex === item) {
              if (j === 0) {
                return {
                  rowspan: element.length,
                  colspan: 1
                }
              } else if (j !== 0) {
                return {
                  rowspan: 0,
                  colspan: 0
                }
              }
            }
          }
        }
      }
    }
  }
}
</script>
