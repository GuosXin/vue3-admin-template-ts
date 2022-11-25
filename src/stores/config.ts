import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', {
    state: () => ({
        collapse: false,
        isDarkTheme: false,
        language: 'zh'
    }),
    actions: {
        toggleCollapse(){
            this.collapse = !this.collapse
        },
    },
    setStorage: {
        localStorage: ['isDarkTheme', 'language']
    }
})
