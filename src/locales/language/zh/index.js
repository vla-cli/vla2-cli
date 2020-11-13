import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

const saber = {}
// 常用
saber.common = {}
saber.common.search = '搜索'
saber.common.zh = '中文'
saber.common.en = '英文'
saber.common.allert = '通知'
saber.common.viewAll = '查看 所有'
saber.common.size = '字体大小'
saber.common.default = '默认'
saber.common.medium = '中号'
saber.common.small = '小号'
saber.common.mini = '微小'
saber.common.profile = '总侧'
saber.common.logout = '退出'

// 菜单
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
saber.menu = { ...modules }
saber.menu.guide = '指南'

export default {
  saber,
  ...zhLocale
}
