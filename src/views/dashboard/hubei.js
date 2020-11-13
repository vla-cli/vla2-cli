export default {
  title: {
    text: '湖北现有确诊趋势'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    top: '5%',
    data: ['现有确诊', '累计确诊']
  },
  grid: {
    top: '15%',
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '现有确诊',
      type: 'line',
      stack: '总量',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '累计确诊',
      type: 'line',
      stack: '总量',
      data: [220, 182, 191, 234, 290, 330, 310]
    }
  ]
}
