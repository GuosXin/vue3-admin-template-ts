<template>
    <el-container>
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
    <ThemeDrawer/>
</template>

<script setup lang="ts">
    import Aside from "./components/Aside/index.vue"
    import Header from "./components/Header/index.vue"
    import ThemeDrawer from "./components/ThemeDrawer/index.vue"
    import Tabs from "./components/Tabs/index.vue"
    import Footer from "./components/Footer/index.vue"
</script>

<style scoped>
    .el-container{
        width: 100vw;
        height: 100vh;
        overflow: hidden;
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