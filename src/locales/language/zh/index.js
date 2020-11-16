import zhLocale from 'element-ui/lib/locale/lang/zh-CN'

const saber = {}
// 常用
saber.common = {}
saber.common.zh = '中文'
saber.common.en = '英文'
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

export default {
  saber,
  ...zhLocale
}
