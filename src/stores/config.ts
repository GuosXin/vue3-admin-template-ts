import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', {
    state: () => ({
        collapse: false,
        isDarkTheme: false,
    }),
    actions: {
        toggleCollapse(){
            this.collapse = !this.collapse
        }
    }
})
