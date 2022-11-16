import RequestHttp from "@/utils/request"
import type * as paramsTypes from "./interface/paramsTypes"
import type * as resultTypes from "./interface/resultTypes"

export function Login(data: paramsTypes.Login){
    return RequestHttp.post<resultTypes.Login>('/src/api/data/login.json', data, { isLoading: true })
}