import { useConfigStore } from '@/stores/config';
import { useI18n } from 'vue-i18n'

export const useLanguage = () => {
    let configStore = useConfigStore()
    let i18n = useI18n()

    /**
     * 设置语言
     * @param language 'zh' | 'en'
     */
    const setLanguage = (language: string) => {
        i18n.locale.value = language
        configStore.language = language
    }

    return {
        setLanguage
    }
}