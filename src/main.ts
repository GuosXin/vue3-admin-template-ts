import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { setStorage } from './stores/plugins/setStorage'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'    //element组件样式
import 'element-plus/theme-chalk/dark/css-vars.css' //element暗黑主题样式

import '@/assets/styles/index.css'  //自定义样式
import '@/assets/iconfont/iconfont.css' //iconfont样式

import * as ElementPlusIconsVue from '@element-plus/icons-vue'  //element图标

import i18n from "@/i18n/index"

const app = createApp(App)

const pinia = createPinia()
pinia.use(setStorage)

app.use(pinia)
app.use(router)
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {   //注册所有element icon
    app.component(key, component)
}
app.use(i18n)

app.mount('#app')
