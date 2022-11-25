<template>
    <el-breadcrumb :separator-icon="ArrowRight">
        <template v-for="(item, index) in breadcrumbList" :key="index">
            <el-breadcrumb-item v-if="item.to" :to="{ path: item.to }">
                <div class="flex-center">
                    <el-icon v-if="item.icon" style="margin-right: 5px"><component :is="item.icon"/></el-icon>
                    <div>{{ item.title }}</div>
                </div>
            </el-breadcrumb-item>
            <el-breadcrumb-item v-else>
                <div class="flex-center">
                    <el-icon v-if="item.icon" style="margin-right: 5px"><component :is="item.icon"/></el-icon>
                    <div>{{ item.title }}</div>
                </div>
            </el-breadcrumb-item>
        </template>
    </el-breadcrumb>
</template>

<script setup lang='ts'>
    import { computed } from 'vue'
    import { ArrowRight } from '@element-plus/icons-vue'
    import { useRoute } from 'vue-router'

    let route = useRoute()
    // 获取第一个可导航路由
    let getFirstTo = (route) => {
        if(!route){
            return
        }
        return route.component ? route.path : getFirstTo(route.children![0])
    }
    // 面包屑列表
    let breadcrumbList = computed(() => {
        let arr = []
        route.matched.forEach(item => {
            if(item.name !== 'layout'){
                arr.push({
                    title: item.meta.title,
                    icon: item.meta.icon,
                    to: getFirstTo(item)
                })
            }
        })
        return arr
    })
</script>