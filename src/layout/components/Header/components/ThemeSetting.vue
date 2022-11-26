<template>
    <i class="iconfont icon-pifu" @click="$emit('openThemeDrawer')"/>
</template>

<style scoped>
    .icon-pifu{
        padding: 0 10px;
        font-size: 22px;
        color: var(--el-text-color-primary);
        cursor: pointer;
    }
</style>