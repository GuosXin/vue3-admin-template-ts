import RequestHttp from "@/utils/request"
import type * as paramsTypes from "./interface/paramsTypes"
import type * as resultTypes from "./interface/resultTypes"

export function login(data: paramsTypes.Login){
    return RequestHttp.post<resultTypes.Login>('/src/api/data/login.json', data)
}

export function getMenu(){
    return RequestHttp.get<resultTypes.Menu[]>('/src/api/data/menu.json', {}, { isLoading: false })
}
