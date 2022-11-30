<template>
    <i :class="`iconfont ${ isFull ? 'icon-suoxiao' : 'icon-fangda'}`" @click="handleClick"/>
</template>

<script setup lang="ts">
    import { ref } from 'vue'

    let isFull = ref(false)

    const handleClick = () => {
        isFull.value = !isFull.value
        let el = document.documentElement
        isFull.value ? el.requestFullscreen() : document.exitFullscreen()
    }
</script>

<style scoped>
    .iconfont{
        padding: 0 10px;
        font-size: 22px;
        color: var(--el-text-color-primary);
        cursor: pointer;
    }
</style>