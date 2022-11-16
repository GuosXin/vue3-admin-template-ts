import { ElLoading } from 'element-plus'

let count:number = 0    // 统计loading打开次数
let loading: ReturnType<typeof ElLoading.service>;  // loading对象

// 显示loading
export const showFullLoading: any = () => {
    if(count === 0){
        loading = ElLoading.service({
            fullscreen: true,
            lock: true
        })
    }
    count ++;
}

// 隐藏loading
export const hideFullLoading: any = () => {
    if(count <= 0){
        return
    }
    count --;
    if(count <= 0){
        loading.close()
    }
}