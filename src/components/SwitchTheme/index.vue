<template>
    <el-color-picker v-model="configStore.themeColor" @change="setPrimary" :predefine="colorList"/>
</template>

<script setup lang="ts">
    import { useConfigStore } from '@/stores/config'
    import { useTheme } from '@/utils/hooks/useTheme'

    const configStore = useConfigStore()
    let { setPrimary } = useTheme()

    // 预定义主题颜色
    const colorList = [
        "#009688",
        "#DAA96E",
        "#0C819F",
        "#409EFF",
        "#27ae60",
        "#ff5c93",
        "#e74c3c",
        "#fd726d",
        "#f39c12",
        "#9b59b6"
    ];
</script>