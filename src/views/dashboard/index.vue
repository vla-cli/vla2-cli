<template>
  <div class="dashboard">
    <!-- 数据总览 -->
    <div class="dashboard-gather">
      <div class="dashboard-gather-item">
        <div class="dashboard-gather-icon green">
          <svg-icon iconClass="hubei" />
        </div>
        <div class="dashboard-gather-number">
          <h2>{{ $i18n.t('saber.menu.dashboard.hubei') }}</h2>
          <h3><countTo :startVal="0" :endVal="68128" :duration="1500" /></h3>
        </div>
      </div>
      <div class="dashboard-gather-item">
        <div class="dashboard-gather-icon blue">
          <svg-icon iconClass="china" />
        </div>
        <div class="dashboard-gather-number">
          <h2>{{ $i18n.t('saber.menu.dashboard.nationwide') }}</h2>
          <h3><countTo :startVal="0" :endVal="84239" :duration="1500" /></h3>
        </div>
      </div>
      <div class="dashboard-gather-item">
        <div class="dashboard-gather-icon red">
          <svg-icon iconClass="overseas" />
        </div>
        <div class="dashboard-gather-number">
          <h2>{{ $i18n.t('saber.menu.dashboard.overseas') }}</h2>
          <h3><countTo :startVal="0" :endVal="2335703" :duration="1500" /></h3>
        </div>
      </div>
    </div>
    <!-- 现有确诊 -->
    <el-tabs v-model="activeName" ref="epidemic">
      <el-tab-pane
        :label="$i18n.t('saber.menu.dashboard.hubeiEpidemic')"
        name="hubei"
      >
        <v-chart ref="hubeiChart" :options="hubeioptions" />
      </el-tab-pane>
      <el-tab-pane
        :label="$i18n.t('saber.menu.dashboard.domesticEpidemic')"
        name="china"
      >
        <v-chart ref="chinaChart" :options="chinaOptions" />
      </el-tab-pane>
      <el-tab-pane
        :label="$i18n.t('saber.menu.dashboard.overseasEpidemic')"
        name="overseas"
      >
        <v-chart ref="overseasChart" :options="haiweiOptions" />
      </el-tab-pane>
    </el-tabs>
    <!-- 表格 -->
    <!-- 现有确诊 -->
    <el-tabs v-model="activeTable">
      <el-tab-pane
        :label="$i18n.t('saber.menu.dashboard.chinaEpidemic')"
        name="china"
      >
        <el-table
          :data="chinaTableData"
          row-key="id"
          border
          :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
        >
          <el-table-column
            prop="zone"
            :label="$i18n.t('saber.menu.dashboard.area')"
            align="left"
            minWidth="200"
          >
          </el-table-column>
          <el-table-column
            prop="now"
            :label="$i18n.t('saber.menu.dashboard.nowDiagnosis')"
            align="center"
            minWidth="150"
          >
          </el-table-column>
          <el-table-column
            prop="all"
            align="center"
            minWidth="150"
            :label="$i18n.t('saber.menu.dashboard.cumulativeDiagnosis')"
          >
            <template slot-scope="{ row }">
              {{ row.all }}
              <p :style="{ color: 'red' }">{{ row.compare }}</p>
            </template>
          </el-table-column>
          <el-table-column
            prop="cure"
            align="center"
            minWidth="100"
            :label="$i18n.t('saber.menu.dashboard.cure')"
          >
          </el-table-column>
          <el-table-column
            prop="dead"
            align="center"
            minWidth="100"
            :label="$i18n.t('saber.menu.dashboard.death')"
          >
          </el-table-column>
          <el-table-column
            width="80"
            align="center"
            :label="$i18n.t('saber.menu.dashboard.epidemic')"
          >
            <template slot-scope="scope">
              <el-button type="text">{{
                $i18n.t('saber.menu.dashboard.detail')
              }}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane
        :label="$i18n.t('saber.menu.dashboard.overseasEpidemic')"
        name="overseas"
      >
        <el-table :data="overseasTabeData" border>
          <el-table-column
            prop="zone"
            :label="$i18n.t('saber.menu.dashboard.area')"
            align="left"
            minWidth="200"
          >
          </el-table-column>
          <el-table-column
            prop="now"
            :label="$i18n.t('saber.menu.dashboard.nowDiagnosis')"
            align="center"
            minWidth="150"
          >
          </el-table-column>
          <el-table-column
            prop="all"
            align="center"
            minWidth="150"
            :label="$i18n.t('saber.menu.dashboard.cumulativeDiagnosis')"
          >
          </el-table-column>
          <el-table-column
            prop="cure"
            align="center"
            minWidth="100"
            :label="$i18n.t('saber.menu.dashboard.cure')"
          >
          </el-table-column>
          <el-table-column
            prop="dead"
            align="center"
            minWidth="100"
            :label="$i18n.t('saber.menu.dashboard.death')"
          >
          </el-table-column>
          <el-table-column
            width="80"
            align="center"
            :label="$i18n.t('saber.menu.dashboard.epidemic')"
          >
            <template slot-scope="scope">
              <el-button type="text">{{
                $i18n.t('saber.menu.dashboard.detail')
              }}</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import hubeiData from './hubei'
import { chinaData, chinaTable } from './china'
import { overseasData, overseasTable } from './overseas'
import { mapGetters } from 'vuex'
import countTo from 'vue-count-to'

export default {
  name: 'dashboard',
  data() {
    return {
      activeName: 'hubei',
      activeTable: 'china',
      hubeioptions: hubeiData,
      chinaOptions: chinaData,
      haiweiOptions: overseasData,
      chinaTableData: chinaTable,
      overseasTabeData: overseasTable
    }
  },
  components: { countTo },
  computed: {
    ...mapGetters(['isCollapse'])
  },
  watch: {
    isCollapse(newVal) {
      // 这里直接获取容器宽度值会有引用问题，值不正确，暂时用屏幕宽减去菜单值以及内填充
      const screenW = document.body.clientWidth
      const sideW = newVal ? 64 : 210
      let w = screenW - sideW - 20 * 2
      this.resizeTheChart(w)
    }
  },
  mounted() {
    let w = this.$refs.epidemic.$el.offsetWidth
    this.resizeTheChart(w)
    window.addEventListener('resize', () => {
      let w = this.$refs.epidemic.$el.offsetWidth
      this.resizeTheChart(w)
    })
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeTheChart)
  },
  methods: {
    resizeTheChart(w) {
      if (this.$refs.hubeiChart) {
        this.$refs.hubeiChart.$el.style.width = w + 'px'
        this.$refs.hubeiChart.resize()
      }
      if (this.$refs.chinaChart) {
        this.$refs.chinaChart.$el.style.width = w + 'px'
        this.$refs.chinaChart.resize()
      }
      if (this.$refs.overseasChart) {
        this.$refs.overseasChart.$el.style.width = w + 'px'
        this.$refs.overseasChart.resize()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import './dashboard.scss';
</style>
