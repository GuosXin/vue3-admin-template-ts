import type { PiniaPluginContext } from 'pinia'
import { getLocalStorage, setLocalStorage } from '@/utils/utils'

export const setStorage = ({ store, options }: PiniaPluginContext) => {
    if(!options.setStorage) return
    let { localStorage } = options.setStorage!
    if(localStorage){
        /**
         * 初始化时与本地缓存同步数据
         */
        let oldVal = getLocalStorage(store.$id)
        let newVal = Object.assign({}, store.$state, oldVal)    // 合并storage和state数据
        let resetVal: any = {}
        if(typeof localStorage === 'boolean'){
            // 如果是布尔值，能执行到这里说明是true，根据storage同步所有state的值
            Object.keys(store.$state).forEach(item => {
                store.$state[item] = newVal[item]
                resetVal[item] = newVal[item]
            })
        }else if(localStorage instanceof Array){
            // 如果是数组，找出交集，再根据storage同步state的值
            Object.keys(store.$state).forEach((item: string) => {
                if((<string[]>localStorage).includes(item)){
                    store.$state[item] = newVal[item]
                    resetVal[item] = newVal[item]
                }
            })
        }
        // 更新localStorage，使用 setLocalStorage(store.$id, Object.assign({}, oldVal, resetVal)) 替换下面一行代码可避免破坏性更新storage，根据需求使用
        setLocalStorage(store.$id, resetVal)


        /**
         * 订阅state
         */
        store.$subscribe((mutation, state)=>{
            // 如果是boolean类型，则保存所有state到本地缓存
            if(typeof localStorage === 'boolean'){
                setLocalStorage(mutation.storeId, state)
            }
            // 如果是数组，则根据数组匹配state缓存到本地
            else if(localStorage instanceof Array){
                let obj: any = {}
                Object.keys(state).forEach((item: string) => {
                    if((<string[]>localStorage).includes(item)){
                        obj[item] = state[item]
                    }
                })
                setLocalStorage(mutation.storeId, obj)
            }
        })
    }
}