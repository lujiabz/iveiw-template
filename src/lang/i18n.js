import Vue from 'vue'
import VueI18n from 'vue-i18n'
import iView from 'iview'
import zh from '@/lang/zh'
import en from '@/lang/en'
// import ja from '@/lang/ja'
import ien from 'iview/dist/locale/en-US'
import izh from 'iview/dist/locale/zh-CN'
// import ija from 'iview/dist/locale/ja-JP'
Vue.use(VueI18n)
Vue.locale = () => {}

// Ready translated locale messages
const messages = {
  zh: Object.assign(zh, izh),
  en: Object.assign(en, ien)
}
const i18n = new VueI18n({
  locale: 'zh', // set locale
  messages // set locale messages
})
iView.i18n((key, value) => i18n.t(key, value))

export default i18n
