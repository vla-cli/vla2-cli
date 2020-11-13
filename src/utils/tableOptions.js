/**
 * 列表页面公用方法
 * @author zhangpf
 * **/
export const noDelTable = {
  mounted() {
    this.init()
  },
  methods: {
    /**
    * [init 初始化]
    */
    init() {
      this.getTableData()
    },
    /**
    * [handelSearch 查询]
    */
    handelSearch() {
      this.form.page = 1
      this.init()
    },
    /**
    * [handelReset 表单查询内容重置]
    */
    handelReset() {
      this.$refs.form.resetFields()
    },
    /**
    * [handleSizeChange 一页数量]
    */
    handleSizeChange(val) {
      this.form.limit = val.pageSize
      this.form.page = val.currentPage
      this.init()
    },
    /**
    * [handleCurrentChange 翻页]
    */
    handleCurrentChange(val) {
      this.form.page = val
      this.init()
    }
  }
}

export const hasDelTable = {
  data() {
    return {
      multipleSelection: [] // 表格选中元素集合
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    /**
    * [init 初始化]
    */
    init() {
      this.multipleSelection = []
      this.getTableData()
    },
    /**
    * [handelSearch 查询]
    */
    handelSearch() {
      this.form.page = 1
      this.init()
    },
    /**
    * [handelReset 表单查询内容重置]
    */
    handelReset() {
      this.$refs.form.resetFields()
    },
    /**
    * [handleSelectionChange 全选]
    */
    handleSelectionChange(val) {
      this.delDisabled = val.length === 0
      this.multipleSelection = val.map(item => item.id)
    },
    /**
    * [handelDel 删除]
    */
    handelDel() {
      this.$confirm(`是否要删除该数据?`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.tableData = this.tableData.filter(item => {
            return !this.multipleSelection.includes(item.id)
          })
        })
        .catch(() => {})
    },
    /**
    * [handleSizeChange 一页数量]
    */
    handleSizeChange(val) {
      this.form.limit = val
      this.form.page = 1
      this.init()
    },
    /**
    * [handleCurrentChange 翻页]
    */
    handleCurrentChange(val) {
      this.form.page = val
      this.init()
    }
  }
}
