import Vue from 'vue'
import svgIcon from '@/components/svgIcon' // svg component

// 全局注册
Vue.component('svg-icon', svgIcon)

const req = require.context('./svg', false, /\.svg$/)
// map中传递回调方法相当于item => {requireContext(item)}写法，req（‘文件路径’）执行之后拿到module相当于自动import所有的svg了，不用手动引入
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
