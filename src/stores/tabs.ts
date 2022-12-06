import { defineStore } from 'pinia'
import type { TabsItem } from './types/tabs'
import router from '@/router'

export const useTabsStore =  defineStore('tabs', {
    state: () => ({
        tabsList: [] as TabsItem[]
    }),
    actions: {
        // Add Tabs
        addTabs(tabsItem: TabsItem) {
            let found = this.tabsList.find(item => item.path === tabsItem.path)
            if(!found){
                this.tabsList.push(tabsItem)
            }
        },
        // Remove Tabs
        removeTabs(tabPath: string){
            let route = router.currentRoute.value
            let tabsList = this.tabsList
            tabsList.forEach((item, index) => {
                if(item.path === tabPath){
                    if(tabPath === route.path){ //如果关闭的是当前路由的tab，需要跳转到下一个tab或上一个
                        const nextTab = tabsList[index + 1] || tabsList[index - 1]
                        nextTab && router.push(nextTab.path)
                    }
                    tabsList.splice(index, 1)
                    this.tabsList = tabsList
                }
            })
        },
        // Close MultipleTab
        closeMultipleTab(remainTab?: string){
            this.tabsList = this.tabsList.filter(item => item.path === remainTab || !item.closable)
        }
    },
    setStorage: {
        sessionStorage: ['tabsList']
    }
})