<template>
    <div class="menu" :style="{ width: configStore.collapse ? '65px' : '210px' }">
        <div class="logo-bar flex-center">
            <img src="@/assets/images/vue.svg"/>
            <span v-show="!configStore.collapse">Vue3 Admin</span>
        </div>
        <el-scrollbar>
            <el-menu
                :default-active="route.path"
                :collapse="configStore.collapse"
                background-color="var(--aside-bg-color)"
                text-color="#ffffffd9"
                active-text-color="#fff"
                :collapse-transition="false"
            >
                <Submenu :menuList="authStore.menuList"/>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script setup lang="ts">
    import { useConfigStore } from '@/stores/config'
    import { useAuthStore } from '@/stores/auth'
    import Submenu from './components/Submenu.vue'
    import { useRoute } from 'vue-router'

    const configStore = useConfigStore()
    const authStore = useAuthStore()
    const route = useRoute()
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
        border-bottom: 1px solid var(--aside-logo-border-color);
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
</style>