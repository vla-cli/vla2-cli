// 首先引入Mock
const Mock = require('mockjs')

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '200-600'
})

let configArray = []

// 使用webpack的require.context()遍历所有mock文件, 不遍历子目录
const files = require.context('./modules', false, /\.js$/)
// files.keys()打印出的是文件路径，files(key).default获取文件中export defult出的对象
files.keys().forEach((key) => {
  configArray = configArray.concat(files(key).default)
})

// 注册所有的mock服务
configArray.forEach((item) => {
  for (let [path, target] of Object.entries(item)) {
    let protocol = path.split('|')
    Mock.mock(new RegExp('^' + protocol[1]), protocol[0], target)
  }
})
