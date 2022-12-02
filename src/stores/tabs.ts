import { defineStore } from 'pinia'
import type { TabsItem } from './types/tabs'
import router from '@/router'

export const useTabsStore =  defineStore('tabs', {
    state: () => ({
        tabsList: [] as TabsItem[]
    }),
    actions: {
        addTabs(tabsItem: TabsItem) {
            let found = this.tabsList.find(item => item.path === tabsItem.path)
            if(!found){
                this.tabsList.push(tabsItem)
            }
        },
        removeTabs(tabPath: string){
            let route = router.currentRoute.value
            let tabsList = this.tabsList
            tabsList.forEach((item, index) => {
                if(item.path === tabPath){
                    if(tabPath === route.path){ //如果是关闭的是当前路由的tab，需要跳转到下一个tab或上一个
                        const nextTab = tabsList[index + 1] || tabsList[index - 1]
                        nextTab && router.push(nextTab.path)
                    }
                    this.tabsList.splice(index, 1)
                }
            })
        }
    },
    setStorage: {
        localStorage: ['tabsList']
    }
})