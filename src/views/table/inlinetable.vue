<template>
  <div class="inlinetable">
    <el-table
      :data="inlineData"
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
        width="150">
      </el-table-column>
      <el-table-column
        prop="now"
        label="现有确诊"
        align="center"
        width="100">
      </el-table-column>
      <el-table-column
        prop="all"
        align="center"
        width="100"
        label="累计确诊">
      </el-table-column>
      <el-table-column
        prop="cure"
        align="center"
        width="80"
        label="治愈">
      </el-table-column>
      <el-table-column
        prop="dead"
        align="center"
        width="80"
        label="死亡">
      </el-table-column>
      <el-table-column
        align="left"
        minWidth="250"
        show-overflow-tooltip
        label="内容">
        <template slot-scope="{ row }">
          <span v-if="row.descEdit">{{row.desc}}</span>
          <div v-else>
            <el-input v-model="row.inputCont" clearable :style="{width: '90%',marginRight: '5px'}" />
            <el-button type="text" @click="handelCancel(row)">取消</el-button>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        width="80"
        align="center"
        label="操作">
        <template slot-scope="{ row }">
          <el-button type="text" v-if="row.descEdit" @click="row.descEdit = false">编辑</el-button>
          <el-button type="text" v-else @click="handelConfirm(row)">确认</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'inlinetable',
  data() {
    return {
      inlineData: [
        { ID: 1, zone: '美国', now: '24420', all: '759786', cure: '70980', dead: '40683', desc: 'Bde Lcdf Ymie Erkcrse Kfzfjkmjop Swwzx', descEdit: true, inputCont: 'Bde Lcdf Ymie Erkcrse Kfzfjkmjop Swwzx' },
        { ID: 2, zone: '西班牙', now: '4366', all: '200210', cure: '80578', dead: '20852', desc: 'Oytkhxfs Khjux Sfdqm Czpmsshp Egyddkvpc Ivlm Mdzyaix Xltowyruh Btiojuxin', descEdit: true, inputCont: 'Oytkhxfs Khjux Sfdqm Czpmsshp Egyddkvpc Ivlm Mdzyaix Xltowyruh Btiojuxin' },
        { ID: 3, zone: '意大利', now: '3047', all: '178972', cure: '47055', dead: '23660', desc: 'Sqwctbiwm Ena Ghfqpya Cmniokidqz Rkfdvuvlu Ynjzu Ldaimqpbpk', descEdit: true, inputCont: 'Sqwctbiwm Ena Ghfqpya Cmniokidqz Rkfdvuvlu Ynjzu Ldaimqpbpk' },
        { ID: 4, zone: '英国', now: '30471', all: '168972', cure: '17055', dead: '53660', desc: 'Spbiczske Gvopeuusd Byfntp Jfnwtyhqq Rlvens', descEdit: true, inputCont: 'Spbiczske Gvopeuusd Byfntp Jfnwtyhqq Rlvens' },
        { ID: 5, zone: '法国', now: '30471', all: '1672', cure: '1755', dead: '3660', desc: 'Wrlkqvy Lhxyr Sllxjjon Vpajecctje Kyuc Eyjfncel', descEdit: true, inputCont: 'Wrlkqvy Lhxyr Sllxjjon Vpajecctje Kyuc Eyjfncel' }
      ]
    }
  },
  methods: {
    handelConfirm(row) {
      row.desc = row.inputCont
      row.descEdit = true
      this.$message({
        message: '修改成功！',
        type: 'success',
        duration: 800
      })
    },
    handelCancel(row) {
      row.inputCont = row.desc
      row.descEdit = true
    }
  }
}
</script>
