import type { Menu } from '@/api/interface/resultTypes'
import type { RouteRecordRaw } from 'vue-router'
import router from '.'

const globs = import.meta.glob('@/views/**/index.vue')     // 导入views下的组件

// 添加动态路由
export const addDynamicRouter = (menuList: Menu[] = []) => {
    const routeList = requireComponents(menuList)
    
    // 添加路由
    routeList.forEach(item => {
        if(item.meta!.isLayout === false){
            router.addRoute(<RouteRecordRaw>item)
        }else{
            router.addRoute('layout', <RouteRecordRaw>item)
        }
    })
}


// 导入components
function requireComponents(menuList: Menu[] = []){
    let routeList = menuList.map(item => {
        // layout路径不同，需另外导入引用
        item.component = globs[<string>item.component]

        // 递归遍历chiidren
        if(item.children){
            item.children = requireComponents(item.children)
        }
        return item
    })
    return routeList
}