<template>
    <el-scrollbar>
        <el-container class="layout-container">
            <el-aside>
                <Aside/>
            </el-aside>
            <el-container>
                <el-header>
                    <Header/>
                </el-header>
                <Tabs/>
                <el-main>
                    <router-view />
                </el-main>
                <el-footer>
                    <Footer/>
                </el-footer>
            </el-container>
        </el-container>
    </el-scrollbar>
    <ThemeDrawer/>
</template>

<script setup lang="ts">
    import { onMounted, onBeforeUnmount } from 'vue'
    import Aside from './components/Aside/index.vue'
    import Header from './components/Header/index.vue'
    import ThemeDrawer from './components/ThemeDrawer/index.vue'
    import Tabs from './components/Tabs/index.vue'
    import Footer from './components/Footer/index.vue'

    import { useConfigStore } from '@/stores/config'

    let configStore = useConfigStore()

    let resizeHandle = () => {
        if(window.innerWidth < 960){
            configStore.collapse = true
            configStore.isShowBreadcrumb = false
        }else{
            configStore.collapse = false
            configStore.isShowBreadcrumb = true
        }
    }

    onMounted(() => {
        window.addEventListener('resize', resizeHandle)
        // 默认自我触发一次
        window.dispatchEvent(new Event('resize'))
    })

    onBeforeUnmount(() => {
        window.removeEventListener('resize', resizeHandle)
    })
</script>

<style scoped>
    .layout-container{
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        min-width: 600px;
    }
    .el-aside{
        width: auto;
        height: 100%;
        min-height: 0;
        overflow: hidden;
        border-right: 1px solid var(--el-border-color-light);
    }
    .el-header{
        height: 55px;
        background-color: var(--el-bg-color);
        border-bottom: 1px solid var(--el-border-color-light);
    }
    .el-main{
        background: var(--main-bg-color);
        padding: 10px;
    }
    .el-footer{
        height: auto;
        border-top: 1px solid var(--el-border-color-light);
    }
</style>