// 首先引入Mock
const Mock = require('mockjs')
var Random = Mock.Random

let loginData = {
  code: 200,
  message: 'success',
  token: Random.string('lower', 12)
}
export default {
  'post|/login': loginData
}
