import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import Layout from '@/layout'

// 解决vue在控制台的 NavigationDuplicated 报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

/**
 *
 * meta : {
    icon: 'svg-name'             svg icon name
    filter: true                 需要过滤掉的路由，一般这些路由不需要权限控制的路由页面
  }
 */
const routerArray = []
// 使用webpack的require.context()遍历所有mock文件, 不遍历子目录
const files = require.context('./modules', false, /\.js$/)
// files.keys()打印出的是文件路径，files(key).default获取文件中export defult出的对象
files.keys().forEach(key => {
  routerArray.push(files(key).default)
})

export const constantRoutes = [
  {
    path: '/login',
    meta: { filter: true },
    name: 'Login',
    component: () => import('@/views/login')
  },
  {
    path: '*',
    meta: { filter: true },
    component: () => import('@/views/404')
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: {},
    children: [
      {
        path: '/dashboard',
        meta: {
          hasAuth: 1,
          cType: 2,
          cName: window.i18n.t('saber.menu.dashboard.name'),
          icon: 'dashboard',
          filter: true
        },
        component: () => import('@/views/dashboard'),
        name: 'Dashboard'
      },
      ...routerArray
    ]
  }
]

export const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({
    y: 0
  }), // 滚动条置顶
  linkActiveClass: 'active',
  routes: constantRoutes
})
