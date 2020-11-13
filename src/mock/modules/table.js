// 首先引入Mock
const Mock = require('mockjs')
var Random = Mock.Random

let tableList = {
  code: 200,
  message: 'success',
  data: {
    total: 100,
    'result|10': [{
      id: '@guid',
      name: Random.csentence(3, 9),
      start: Random.datetime(),
      end: Random.datetime(),
      'type|1': ['0', '1', '2'],
      'status|1': ['0', '1', '2'],
      desc: Random.paragraph(1)
    }]
  }
}
export default {
  'get|/complex/query': tableList
}
