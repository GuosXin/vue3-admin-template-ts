<template>
    <div class="menu" :style="{ width: configStore.collapse ? '65px' : '210px' }">
        <div class="logo-bar flex-center">
            <img src="@/assets/images/vue.svg"/>
            <span v-show="!configStore.collapse">Xin Admin</span>
        </div>
        <el-scrollbar>
            <el-menu
                :collapse="configStore.collapse"
                background-color="var(--aside-bg-color)"
                text-color="#ffffffd9"
                active-text-color="#fff"
                :collapse-transition="false"
            >
                <el-menu-item index="1">
                    <el-icon><HomeFilled/></el-icon>
                    <template #title>
                        <span>首页</span>
                    </template>
                </el-menu-item>
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon><Menu/></el-icon>
                        <span>嵌套菜单</span>
                    </template>
                    <el-menu-item index="2-1">
                        <el-icon><Menu/></el-icon>
                        <span>2-1</span>
                    </el-menu-item>
                    <el-menu-item index="2-2">
                        <el-icon><Menu/></el-icon>
                        <span>2-2</span>
                    </el-menu-item>
                    <el-sub-menu index="2-3">
                        <template #title>
                            <el-icon><Menu/></el-icon>
                            <span>二级菜单</span>
                        </template>
                        <el-menu-item index="2-3-1">3-1</el-menu-item>
                        <el-menu-item index="2-3-2">3-2</el-menu-item>
                        <el-menu-item index="2-3-3">3-3</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
    import { useConfigStore } from "@/stores/config"

    const configStore = useConfigStore()
</script>

<style scoped>
    .menu {
        width: 100%;
        height: 100%;
        transition: all 0.3s ease;
        background-color: var(--aside-bg-color);
    }
    .logo-bar{
        height: 55px;
        border-bottom: 1px solid var(--aside-login-border-color);
    }
    .logo-bar img{
        width: 28px;
    }
    .logo-bar span{
        font-size: 21.5px;
        font-weight: 700;
        color: #dadada;
        white-space: nowrap;
        padding-left: 8px;
    }
    .el-scrollbar{
        height: calc(100% - 55px);
    }
    .el-menu{
        border: none;
    }
    .el-menu-item.is-active{
        background-color: #060708;
    }
    .el-menu-item.is-active::before{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 4px;
        background: var(--el-color-primary);
    }
</style>