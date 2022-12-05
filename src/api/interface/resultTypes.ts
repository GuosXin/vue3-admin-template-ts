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
    name: string,   // 路由记录独一无二的名称
    path: string,
    component: string | object,
    meta: {
        title: string
        icon?: string
        isLayout?: boolean,  // 是否属于layout的子路由(只在最顶部的菜单生效)
        isMenu?: boolean,    // 是否放到菜单里
        isLink?: string // 需要在新标签页中打开的链接，例：https://www.baidu.com
        isAffix?: boolean    // 是否固定在tab栏
    },
    children?: Array<Menu>,
    redirect?: boolean
}