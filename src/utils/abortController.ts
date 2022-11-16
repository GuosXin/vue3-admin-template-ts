import type { Config } from './request'

interface QueueItem {
    url: string | undefined;
    controller: AbortController;
}

let paddingQueue: Array<QueueItem> = [];

export const addAbortController: (config: Config) => Config = (config: Config) => {
    // 如果队列中已经存在相同请求，取消上一个请求（只要满足url相同即视为相同请求，对参数没做要求）
    removeAbortController(config)
    
    const controller = new AbortController();
    config.signal = controller.signal
    paddingQueue.push({
        url: config.url,
        controller
    })
    return config
}

export const removeAbortController: (config: Config) => any = (config: Config) => {
    if(!config){
        return
    }
    // 找出想要删除的请求，再执行删除操作
    for(let i = 0; i < paddingQueue.length; i ++){
        let item = paddingQueue[i]
        if(item.url === config.url){
            // 取消请求
            item.controller.abort()
            // 删除请求
            paddingQueue.splice(i, 1)
            break;
        }
    }
    return config
}