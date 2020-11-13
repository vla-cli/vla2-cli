// 引入拦截器
import Ajax from '@/utils/fetch'
import Qs from 'qs'

export default {
  /**
   * 获取列表数据
   */
  getComplexTable(params) {
    const data = Qs.stringify(params)
    return Ajax({
      url: `/complex/query?${data}`,
      method: 'GET'
    })
  }
}
