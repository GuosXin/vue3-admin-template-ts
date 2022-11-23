<template>
    <template v-for="(item, index) in menuList" :key="index">
        <!-- 根据 meta.isMenu 判断该路由是否需要放到菜单里 -->
        <template v-if="item.meta && item.meta.isMenu === 'false'" />

        <!-- 可展开的菜单 -->
        <el-sub-menu v-else-if="item.children && item.children.length > 0" :index="item.path">
            <template #title>
                <el-icon v-if="item.meta.icon"><component :is="item.meta.icon"/></el-icon>
                <span>{{ item.meta.title }}</span>
            </template>
            <Submenu :menuList="item.children"/>
        </el-sub-menu>

        <!-- 普通菜单 -->
        <el-menu-item v-else :index="item.path" @click="handleClick(item)">
            <el-icon v-if="item.meta.icon"><component :is="item.meta.icon"/></el-icon>
            <template #title>
                <span>{{ item.meta.title }}</span>
            </template>
        </el-menu-item>
    </template>
</template>

<script setup lang="ts" name="Submenu">
    import type { Menu } from "@/api/interface/resultTypes"
    import { useRouter } from "vue-router"

    defineProps<{ menuList: Menu[] }>() // 父组件传入的值
    const router = useRouter()

    const handleClick = (item) => {
        if(item.meta.isLink) window.open(item.meta.isLink, "_blank")    // 根据 meta.isLink 判断是否是外部链接
        router.push(item.path)
    }
</script>

<style scoped>
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