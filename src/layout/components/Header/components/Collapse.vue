<template>
    <el-icon @click="configStore.toggleCollapse">
        <component :is="!configStore.collapse ? 'fold' : 'expand'"/>
    </el-icon>
</template>

<script setup lang="ts">
    import { useConfigStore } from "@/stores/config"

    let configStore = useConfigStore()
</script>

<style scoped>
    .el-icon{
        font-size: 22px;
        cursor: pointer;
    }
</style>