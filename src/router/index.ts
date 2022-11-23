import { createRouter, createWebHashHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { ElNotification } from 'element-plus'
import { addDynamicRouter } from './dynamicRouter'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login/index.vue'),
            meta: {
                title: '登录'
            }
        },
        {
            path: '/layout',
            name: 'layout',
            component: () => import('@/layout/index.vue'),
        },
        {
            path: '/404',
            name: '404',
            component: () => import('@/views/404/index.vue'),
            meta: {
                title: '404'
            }
        }
    ],
})


/**
 * 前置守卫
 */
router.beforeEach(async (to, from, next) => {
    // 获取authStore
    const auth = useAuthStore()

    // 如果是前往登录页，则放行
    if(to.path === '/login'){
        return next()
    }
    
    // 如果菜单为空，则获取菜单
    else if(auth.menuList.length === 0){
        // 1.获取菜单列表
        await auth.getMenuList()
        
        // 2.判断当前用户有没有菜单权限
        if(auth.menuList.length === 0){
            ElNotification({
                title: '无权访问',
                message: '当前账号无任何菜单权限，请联系系统管理员！',
                type: 'warning',
				duration: 3000
            })
            // 没有菜单权限即跳转登录页
            return next('/login')
        }

        // 3.添加动态路由
        addDynamicRouter(auth.menuList)

        // 4.重定向到当前路由
        return next(to.fullPath)
    }

    next()
})

export default router
