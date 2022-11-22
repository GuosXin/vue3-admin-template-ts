<template>
    <el-container>
        <el-aside class="side-bar">
            <Aside/>
        </el-aside>
        <el-container>
            <el-header>
                <Header/>
            </el-header>
            <el-main>
                <router-view />
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
    import Aside from "./components/Aside/index.vue"
    import Header from "./components/Header/index.vue"
</script>

<style scoped>
    .side-bar{
        width: auto;
        height: 100vh;
        min-height: 0;
        overflow: hidden;
        border-right: 1px solid var(--el-border-color-light);
    }
    .el-header{
        height: 55px;
        background-color: var(--el-bg-color);
        border-bottom: 1px solid var(--el-border-color-light);
    }
</style>