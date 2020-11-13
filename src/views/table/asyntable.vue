<template>
  <div class="asyntable page-container p-20">
    <div class="m-b-20" :style="{color: '#50a3a2'}">此处其它tab中内容使用动态组件的方式去异步加载，提高页面加载速度</div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="拖拽" name="drag">
      </el-tab-pane>
      <el-tab-pane label="行内" name="inline">
      </el-tab-pane>
      <el-tab-pane label="合并" name="merge">
      </el-tab-pane>
    </el-tabs>
    <keep-alive>
      <component :is="tabName" />
    </keep-alive>
  </div>
</template>

<script>
import dragtable from './dragtable'

export default {
  name: 'asyntable',
  data() {
    return {
      activeName: 'drag',
      tabName: 'dragtable'
    }
  },
  components: {
    dragtable
  },
  methods: {
    handleClick(tab) {
      switch (tab.name) {
        case 'inline':
          import('./inlinetable').then(res => {
            this.tabName = res.default
          })
          break
        case 'merge':
          import('./mergetable').then(res => {
            this.tabName = res.default
          })
          break
        case 'drag':
          this.tabName = 'dragtable'
          break
      }
    }
  }
}
</script>
