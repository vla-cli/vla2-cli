import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh from './language/zh'
import en from './language/en'
import ElementLocale from 'element-ui/lib/locale'

Vue.use(VueI18n)

const DEFAULT_LANG = 'zh'
const LOCALE_KEY = 'localeLanguage'

const locales = {
  zh,
  en
}

const i18n = new VueI18n({
  locale: DEFAULT_LANG,
  messages: locales
})

ElementLocale.i18n((key, value) => i18n.t(key, value))

export const setup = lang => {
  // 当参数lang没有传递的时候
  if (lang === undefined) {
    // 获取缓存中的值
    lang = window.localStorage.getItem(LOCALE_KEY)
    // 如果缓存中的值没有或者不存在，就设置默认的语言值
    if (locales[lang] === undefined) {
      lang = DEFAULT_LANG
    }
  }
  window.localStorage.setItem(LOCALE_KEY, lang)

  // 当语言切换，body上的class也会随之变化，classList属性只支持到ie10以上
  // Object.keys(locales).forEach(item => {
  //   document.body.classList.remove(`lang-${item}`)
  // })
  // document.body.classList.add(`lang-${lang}`)
  document.body.setAttribute('lang', lang)

  Vue.config.lang = lang // 将当前语种存到Vue的全局配置中
  i18n.locale = lang
}

setup()
// vue实例外的js代码使用
window.i18n = i18n
export default i18n
