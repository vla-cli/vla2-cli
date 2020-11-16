import enLocale from 'element-ui/lib/locale/lang/en'

const saber = {}
// 常用
saber.common = {}
saber.common.zh = 'Chinese'
saber.common.en = 'English'
saber.common.profile = 'profile'
saber.common.logout = 'Log out'

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
  ...enLocale
}
