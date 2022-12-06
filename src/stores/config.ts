import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', {
    state: () => ({
        collapse: false,
        isDarkTheme: false,
        language: 'zh',
        themeColor: '#009688',
        isShowBreadcrumb: true
    }),
    actions: {
        toggleCollapse(){
            this.collapse = !this.collapse
        },
    },
    setStorage: {
        localStorage: ['isDarkTheme', 'language', 'themeColor']
    }
})
