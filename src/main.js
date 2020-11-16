// The Vue build version to load with the `import` command
import 'babel-polyfill' // ie支持es6语法
import Vue from 'vue'
import App from './App'
import { router } from './router'
import './icons' // icon
import store from './store'
import i18n from './locales'
import '@/utils/routerControl'

import ElementUI from 'element-ui'

import '@/theme/index.css'

// import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, { size: 'small' })

// 关闭提示
const isDebugMode = process.env.NODE_ENV !== 'production'
Vue.config.productionTip = isDebugMode
Vue.config.debug = isDebugMode
// 开发环境打开devTool
Vue.config.devtools = isDebugMode

// if (process.env.NODE_ENV !== 'production') {
require('./mock')
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
