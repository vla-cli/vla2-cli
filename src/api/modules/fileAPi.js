// 引入拦截器
import Ajax from '@/utils/fetch'
import Qs from 'qs'

export default {
  /**
   * 获取文件地址
   */
  getFileUrl(params) {
    const data = Qs.stringify(params)
    return Ajax({
      url: `/getUrl?${data}`,
      method: 'GET'
    })
  },
  /**
   * 获取文件地址
   */
  getBase64(params) {
    const data = Qs.stringify(params)
    return Ajax({
      url: `/getBase64?${data}`,
      method: 'GET'
    })
  }
}
