<template>
  <div>
    <tablePagination :data="tableData"
      border
      :tableColumn="tableColumn"
      isShowPagination
      @current-change="currentChange"
      @size-change="sizeChange"
      @row-click="rowClick"
      :pageNum="form.pageNum"
      :pageSize="form.pageSize"
      :total="total"
     >
      <template slot="tableBtn">
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text">查看</el-button>
            <el-button type="text">编辑</el-button>
          </template>
        </el-table-column>
      </template>
    </tablePagination>
  </div>
</template>

<script>
import tablePagination from '@/components/tablePag'

export default {
  data() {
    return {
      form: {
        pageNum: 1,
        pageSize: 10
      },
      total: 100,
      tableData: [
        {
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
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }
      ],
      tableColumn: [
        { prop: 'date', label: '日期', minWidth: '150' },
        { prop: 'name', label: '姓名', minWidth: '120' },
        { prop: 'province', label: '省份', minWidth: '120' },
        { prop: 'city', label: '市区', minWidth: '120' },
        { prop: 'address', label: '地址', minWidth: '300' },
        { prop: 'zip', label: '邮编', minWidth: '120' }
      ]
    }
  },
  components: { tablePagination },
  methods: {
    handleClick(row) {
      console.log('handleClick', row)
    },
    currentChange(val) {
      console.log('currentChange', val)
    },
    sizeChange(val) {
      console.log('sizeChange', val)
    },
    rowClick(val) {
      console.log('rowClick', val)
    }
  }
}
</script>
