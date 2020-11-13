export const overseasData = {
  title: {
    text: '海外现有确诊趋势'
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
      data: [12000, 13200, 10100, 13400, 9000, 23000, 21000]
    },
    {
      name: '累计确诊',
      type: 'line',
      stack: '总量',
      data: [22000, 18200, 19100, 23400, 29000, 33000, 31000]
    }
  ]
}

export const overseasTable = [
  {
    zone: '美国',
    now: '24420',
    all: '759786',
    cure: '70980',
    dead: '40683'
  },
  {
    zone: '西班牙',
    now: '4366',
    all: '200210',
    cure: '80578',
    dead: '20852'
  },
  {
    zone: '意大利',
    now: '3047',
    all: '178972',
    cure: '47055',
    dead: '23660'
  }
]
