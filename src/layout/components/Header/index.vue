<template>
    <div class="header-bar">
        <div class="flex-center">
            <Collapse style="margin-right: 20px;"/>
            <Breadcrumb/>
        </div>
        <div class="flex-center">
            <Language/>
            <ThemeSetting/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Collapse from './components/Collapse.vue'
    import Breadcrumb from './components/Breadcrumb.vue'
    import Language from './components/Language.vue'
    import ThemeSetting from './components/ThemeSetting.vue'
</script>

<style scoped>
    .header-bar{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>