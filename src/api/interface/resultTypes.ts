/**
 * 定义所有接口返回的数据类型
 */

export interface ResultData<T = any> {
    code: string;
    data: T
}

// 登录
export interface Login{
    token: string
}

// 菜单
export interface Menu{
    name: string,
    path: string,
    component: string | Object,
    children?: Array<Menu>,
    redirect?: boolean
}