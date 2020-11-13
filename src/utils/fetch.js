// request拦截器
import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    // 获取本地token
    let token = localStorage.getItem('token')
    // 条件允许，携带token请求
    if (token) {
      config.headers['X-Auth0-Token'] = token
    }
    // 设置请求格式
    config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    // IE浏览器下，因为地址一样，get请求会被缓存，为了防止这个问题，在get请求下加一个时间搓参数防止缓存
    if (config.method === 'get') {
      config.params = {
        _t: Date.parse(new Date()) / 1000,
        ...config.params
      }
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 服务器响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    // 后台返回的代码code，200代表接口数据正常返回，非200的代表接口返回有问题
    if (res.code !== 200) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 1500
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          error.message = `错误请求：${error.response.data}`
          break
        case 401:
          error.message = '未授权，请重新登录'
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = '请求错误,未找到该资源'
          break
        case 405:
          error.message = '请求方法未允许'
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器端出错'
          break
        case 501:
          error.message = '网络未实现'
          break
        case 502:
          error.message = '网络错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网络超时'
          break
        case 505:
          error.message = 'http版本不支持该请求'
          break
        default:
          error.message = `连接错误${error.response.status}`
      }
    } else {
      error.message = '服务器异常'
    }
    Message({
      message: error.message,
      type: 'error',
      duration: 1500
    })
    return Promise.reject(error)
  }
)
export default service
