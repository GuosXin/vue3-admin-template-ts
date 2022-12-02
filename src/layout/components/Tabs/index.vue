<template>
    <div class="tabs">
        <div class="tabs-bar">
            <TabsBar/>
        </div>
        <div class="more-button-bar">
            <MoreButton/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import TabsBar from "./components/TabsBar.vue"
    import MoreButton from "./components/MoreButton.vue"
</script>

<style scoped>
    .tabs{
        padding: 0 10px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--el-border-color-light);
    }
    .tabs-bar{
        overflow: hidden;
        flex: 1;
    }
    .more-button-bar{
        padding-left: 10px;
    }
</style>