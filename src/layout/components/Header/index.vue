<template>
    <div class="header-bar">
        <Collapse/>
    </div>
</template>

<script setup lang="ts">
import Collapse from './components/Collapse.vue'
</script>

<style scoped>
    .header-bar{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }
</style>