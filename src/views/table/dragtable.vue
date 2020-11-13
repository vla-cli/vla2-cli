<template>
  <div class="dragtable">
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
      <el-table-column
        width="80"
        align="center"
        label="排序">
        <template slot-scope="scope">
          <svg-icon :style="{fontSize: '16px', cursor: 'pointer'}" iconClass="drag"/>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Sortable from 'sortablejs'

export default {
  name: 'dragtable',
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
      ]
    }
  },
  mounted() {
    this.rowDrop()
  },
  methods: {
    // 行拖拽
    rowDrop() {
      const el = this.$refs.dragTable.$el.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
      Sortable.create(el, {
        setData(dataTransfer) {
          // to avoid Firefox bug
          dataTransfer.setData('Text', '')
        },
        onEnd: evt => {
          this.dragData.splice(evt.newIndex, 0, this.dragData.splice(evt.oldIndex, 1)[0])
          // 数组深拷贝
          let newArray = this.dragData.slice(0)
          this.dragData = []
          this.$nextTick(() => {
            this.dragData = newArray
          })
        }
      })
    }
  }
}
</script>
