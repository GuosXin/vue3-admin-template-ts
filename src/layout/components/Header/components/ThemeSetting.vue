<template>
    <i class="iconfont icon-pifu" @click="handleClick"/>
</template>

<script setup lang="ts">
    import Bus from '@/utils/bus'

    const handleClick = () => {
        Bus.$emit('openDrawer')
    }
</script>

<style scoped>
    .icon-pifu{
        padding: 0 10px;
        font-size: 22px;
        color: var(--el-text-color-primary);
        cursor: pointer;
    }
</style>