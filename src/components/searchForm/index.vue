<template>
  <el-form :model="formData" ref="form" v-bind="$attrs">
    <template v-for="(componentItem, index) in componentsData">
      <el-form-item v-bind="componentItem.formItemProps" :key="index">
        <!-- 文本框 -->
        <template v-if="componentItem.type === 'TextInput'">
          <el-input
            clearable
            v-bind="componentItem.inputProps"
            v-model.trim="formData[componentItem.modelVal]"
          />
        </template>
        <!-- 多行文本 -->
        <template v-else-if="componentItem.type === 'Textarea'">
          <el-input
            clearable
            type="textarea"
            v-bind="componentItem.inputProps"
            v-model.trim="formData[componentItem.modelVal]"
          />
        </template>
        <!-- 选择框 -->
        <template v-else-if="componentItem.type === 'Select'">
          <el-select
            v-bind="componentItem.inputProps"
            v-model="formData[componentItem.modelVal]"
          >
            <el-option
              v-for="item in componentItem.list"
              :key="item.key"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </template>
        <!-- 级联选择器 -->
        <template v-else-if="componentItem.type === 'Cascader'">
          <el-cascader
            :show-all-levels="false"
            clearable
            :options="componentItem.list"
            :props="componentItem.defaultProps"
            v-model="formData[componentItem.modelVal]"
            v-bind="componentItem.inputProps"
          />
        </template>
        <!-- 时间 -->
        <template v-else-if="componentItem.type === 'DatePicker'">
          <el-date-picker
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
            v-model="formData[componentItem.modelVal]"
            v-bind="componentItem.inputProps"
          />
        </template>
      </el-form-item>
    </template>
    <el-form-item class="search-btn">
      <!-- 按钮 -->
      <slot />
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'searchForm',
  inheritAttrs: false,
  props: {
    /**
     * [componentsData 组件元素数据配置]
     * @param {[Object]} formItemProps [el-form-item 所有绑定对象集合]
     * @param {[String]} type [组件类型]
     * @param {[String]} modelVal  [组件v-model绑定值]
     * @param {[Object]} inputProps  [继承element组件属性]
     * @param {[Array]} list  [子组件数组，如select中的option配置]
     * @param {[Object]} defaultProps  [指定字段名渲染]
     */
    componentsData: {
      type: Array,
      default() {
        return []
      }
    },
    formData: {
      type: Object,
      require: true
    }
  },
  methods: {
    // 返回el-form组件实例
    getForm() {
      return this.$refs.form
    }
  }
}
</script>

<style lang="scss">
.search-btn {
  /deep/ .el-form-item_content {
    margin-left: 0!important;
  }
}
</style>
