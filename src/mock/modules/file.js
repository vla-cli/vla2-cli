const Mock = require('mockjs')
var Random = Mock.Random

let data = {
  code: 200,
  message: 'success',
  url: '/static/table-list.xlsx'
}
export default {
  'get|/getUrl': data,
  'get|/getBase64': {
    code: 200,
    message: 'success',
    img: Random.dataImage()
  }
}
