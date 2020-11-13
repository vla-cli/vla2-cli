// reduce用法，第一个参数是回调函数（回调函数中第一个参数是每次回调的值，第二个参数是数组元素），第二个参数是回调函数第一个参数的初始值
const modulesFiles = require.context('./modules', false, /\.js$/)
export const api = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
