import { createI18n } from "vue-i18n";
import zh from "./lang/zh"
import en from "./lang/en"

const i18n = createI18n({
    legacy: false, // 如果要支持 compositionAPI，此项必须设置为 false
    locale: 'zh',
    globalInjection: true, // 全局注册$t方法
    messages: {
        zh,
        en
    }
})

export default i18n