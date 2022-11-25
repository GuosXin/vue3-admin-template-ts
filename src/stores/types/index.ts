import 'pinia'

export interface setStorageType {
    localStorage?: string[] | boolean
}

declare module 'pinia' {
    export interface DefineStoreOptionsBase<S, Store>{
        setStorage?: setStorageType
    }
}