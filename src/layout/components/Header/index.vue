<template>
    <div class="header-bar">
        <div class="flex-center">
            <Collapse style="margin-right: 20px;"/>
            <Breadcrumb/>
        </div>
    </div>
</template>

<script setup lang="ts">
import Collapse from './components/Collapse.vue'
import Breadcrumb from './components/Breadcrumb.vue'
</script>

<style scoped>
    .header-bar{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }
</style>