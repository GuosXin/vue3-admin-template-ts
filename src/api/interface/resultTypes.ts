export interface ResultData<T = any> {
    code: string;
    msg?: string;
    data?: T
}

export interface Login{
    token: string
}