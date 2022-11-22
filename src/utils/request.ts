import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { showFullLoading, hideFullLoading } from './loading'
import type { ResultData } from '@/api/interface/resultTypes'
import { ElMessage } from 'element-plus'
import { addAbortController, removeAbortController } from './abortController'

// 定义请求配置参数的类型，添加isLoading字段，用于判断是否需要开启loading
export interface Config extends AxiosRequestConfig{
    isLoading?: Boolean;
}

let defaultConfig = {
    baseURL: import.meta.env.BASE_URL as string,
    timeout: 5000,
    withCredentials: true
}

class RequestHttp {
    service: AxiosInstance;
    public constructor(config: AxiosRequestConfig){
        // 创建axios实例
        this.service = axios.create(config)

        /**
         * 请求拦截器
         */
        this.service.interceptors.request.use((config: Config) => {
            // 判断是否需要loading
            if(config.isLoading){
                showFullLoading()
            }
            // 添加取消请求控制器
            config = addAbortController(config)
            return config
        }, (error: any) => {
            return Promise.reject(error)
        })

        /**
         * 响应拦截器
         */
        this.service.interceptors.response.use((response: AxiosResponse) => {
            // 请求结束后，移除本次请求，并关闭请求loading
            removeAbortController(response.config)
            hideFullLoading()
            return response.data
        }, (error: any) => {
            // 请求出错后，移除本次请求，并关闭请求loading、弹窗提示错误信息
            removeAbortController(error.config)
            hideFullLoading()
            // 取消请求不弹窗提示错误信息
            if(error.code !== "ERR_CANCELED"){
                ElMessage.error((error.response && error.response.data) || error.message)
            }
            return Promise.reject(error)
        })
    };
    // 不同请求类型
    get<T>(url: string, data: object = {}, config: Config = { isLoading: true }): Promise<ResultData<T>>{
        return this.service.get(url, { params: data, ...config })
    };
    post<T>(url: string, data: object = {}, config: Config = { isLoading: true }): Promise<ResultData<T>>{
        return this.service.post(url, data, config)
    };
}

export default new RequestHttp(defaultConfig)