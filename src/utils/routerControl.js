import { constantRoutes, router } from '@/router'
import store from '@/store'

let routerList = constantRoutes.filter(item => !item.meta.filter)[0].children
let idx = ''
function mapFunc(arr, path, code = '') {
  if (arr.length > 0) {
    arr.forEach((item, index) => {
      item.routerID = code + index
      if (item.path === path) {
        idx = item.routerID
        return
      }
      if (item.children) {
        mapFunc(item.children, path, item.routerID)
      }
    })
  }
}

const whiteList = ['/login'] // no redirect whitelist
router.beforeEach((to, from, next) => {
  // determine whether the user has logged in
  const hasToken = localStorage.getItem('token')
  if (hasToken) {
    // 存取面包屑路由数据
    if (!to.meta.filter) {
      // 当路由中的hasAuth为0，代表改路由没有权限访问，直接进入404页面
      if (to.meta.hasAuth === 0) {
        next({ path: '/404' })
      }
      mapFunc(routerList, to.path)
      let arr = idx.split('')
      let newArr = []
      arr.reduce((prev, cur) => {
        newArr.push(prev[cur])
        return prev[cur]['children']
      }, routerList)
      store.commit('app/setBreadcrumbList', newArr)
    } else {
      // 初始化
      store.commit('app/setBreadcrumbList', [])
    }
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      next()
    }
  } else {
    /* has no token */
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next('/login')
    }
  }
})

router.afterEach((to, from) => {
  store.commit('app/setTime', null)
})
