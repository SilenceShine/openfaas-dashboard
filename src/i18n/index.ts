import { createI18n } from 'vue-i18n'
import zh_CN from '@/i18n/zh_CN'
import en_US from '@/i18n/en_US'

// 创建 i18n
const i18n = createI18n({
    legacy: false,
    globalInjection: true, // 全局模式，可以直接使用 $t
    locale: localStorage.getItem('lang') || 'zh_CN',
    messages: {
        zh_CN,
        en_US
    }
})

export default i18n
