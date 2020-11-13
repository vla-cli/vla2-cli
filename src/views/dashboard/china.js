export const chinaData = {
  title: {
    text: '全国现有确诊趋势'
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
      data: [1200, 132, 101, 134, 900, 2300, 2100]
    },
    {
      name: '累计确诊',
      type: 'line',
      stack: '总量',
      data: [2200, 1820, 1910, 2340, 2900, 3300, 3100]
    }
  ]
}

export const chinaTable = [
  {
    id: 1,
    zone: '湖北',
    now: '105',
    all: '68128',
    cure: '63511',
    dead: '4512',
    compare: '16天0新增',
    children: [{
      id: 11,
      zone: '武汉',
      now: '105',
      all: '50333',
      cure: '46359',
      dead: '3869'
    }, {
      id: 12,
      zone: '孝感',
      now: '0',
      all: '2000',
      cure: '2000',
      dead: '0'
    }]
  },
  {
    id: 2,
    zone: '黑龙江',
    now: '420',
    all: '905',
    cure: '472',
    dead: '13',
    compare: '较上日+7',
    children: [{
      id: 21,
      zone: '境外输入',
      now: '379',
      all: '381',
      cure: '2',
      dead: '0'
    }, {
      id: 22,
      zone: '哈尔滨',
      now: '39',
      all: '238',
      cure: '195',
      dead: '4'
    }]
  },
  {
    id: 3,
    zone: '台湾',
    now: '30000',
    all: '60000',
    cure: '0',
    dead: '未知'
  }
]
