<template>
  <div class="table-pagination">
    <el-table v-bind="$attrs" v-on="tableEventListeners" ref="commonTable">
      <template v-for="(tableItem, index) in tableColumn">
        <el-table-column v-bind="tableItem" :key="index" show-overflow-tools />
      </template>
      <!-- 操作按钮插槽 -->
      <slot name="tableBtn" />
    </el-table>
    <div class="clearfix m-t-20" v-if="isShowPagination">
      <el-pagination
        :current-page="pageNum"
        class="fr"
        background
        :page-size="pageSize"
        :page-sizes="[10, 20, 50]"
        layout="total, prev, pager, next, sizes, jumper"
        :total="total"
        v-on="paginationEventListeners"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'tablePagination',
  inheritAttrs: false,
  props: {
    // 表格配置数据
    tableColumn: {
      type: Array,
      default() {
        return []
      }
    },
    // 页码
    pageNum: {
      type: Number,
      default: 1
    },
    // 每页页条数
    pageSize: {
      type: Number,
      default: 10
    },
    // 总数
    total: {
      type: Number,
      default: 0
    },
    // 是否显示分页
    isShowPagination: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 组件监听到的事件进行分类
    tableEventListeners() {
      const { ...obj } = this.$listeners
      // 删除分页事件
      if (obj['current-change']) delete obj['current-change']
      if (obj['size-change']) delete obj['size-change']
      return Object.assign({}, obj)
    },
    paginationEventListeners() {
      const obj = {}
      obj['current-change'] = this.$listeners['current-change']
      obj['size-change'] = this.$listeners['size-change']
      return Object.assign({}, obj)
    }
  }
}
</script>
