<template>
    <el-breadcrumb :separator-icon="ArrowRight">
        <template v-for="(item, index) in breadcrumbList" :key="index">
            <el-breadcrumb-item v-if="item.to" :to="{ path: item.to }">{{ item.title }}</el-breadcrumb-item>
            <el-breadcrumb-item v-else>{{ item.title }}</el-breadcrumb-item>
        </template>
    </el-breadcrumb>
</template>

<script setup lang='ts'>
    import { computed } from 'vue'
    import { ArrowRight } from '@element-plus/icons-vue'
    import { useRoute } from 'vue-router'

    let route = useRoute()
    let getFirstTo = (route) => {
        if(!route){
            return
        }
        return route.component ? route.path : getFirstTo(route.children![0])
    }
    let breadcrumbList = computed(() => {
        let arr = []
        route.matched.forEach(item => {
            if(item.name !== 'layout'){
                arr.push({
                    title: item.meta.title,
                    to: getFirstTo(item)
                })
            }
        })
        return arr
    })
    console.log(breadcrumbList)
</script>