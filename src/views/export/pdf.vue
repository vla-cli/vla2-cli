<template>
  <div class="exportPdf page-container p-20">
    <el-button type="primary" @click="handelExport">导出(利用window print API)</el-button>
  </div>
</template>

<script>
export default {
  name: 'exportPdf',
  methods: {
    handelExport() {
      window.print()
    }
  }
}
</script>
