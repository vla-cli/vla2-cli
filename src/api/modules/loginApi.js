// 引入拦截器
import Ajax from '@/utils/fetch'

export default {
  /**
   * 用户登录
   */
  userLogin(params) {
    const data = params
    return Ajax({
      url: '/login',
      method: 'POST',
      data
    })
  },
  /**
   * 用户退出
   */
  loginOut(params) {
    const data = params
    return Ajax({
      url: '/loginout',
      method: 'POST',
      data
    })
  }
}
