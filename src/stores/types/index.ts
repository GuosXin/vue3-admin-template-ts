import 'pinia'

export interface SetStorageType {
    localStorage?: string[] | boolean
}

declare module 'pinia' {
    export interface DefineStoreOptionsBase<S, Store>{
        setStorage?: SetStorageType
    }
}