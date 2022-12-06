<template>
    <div class="header-bar">
        <div class="flex-center">
            <Collapse style="margin-right: 20px;"/>
            <template v-if="configStore.isShowBreadcrumb">
                <Breadcrumb/>
            </template>
        </div>
        <div class="flex-center">
            <Language/>
            <ThemeSetting/>
            <FullScreen/>
            <Avatar/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Collapse from './components/Collapse.vue'
    import Breadcrumb from './components/Breadcrumb.vue'
    import Language from './components/Language.vue'
    import ThemeSetting from './components/ThemeSetting.vue'
    import FullScreen from './components/FullScreen.vue'
    import Avatar from './components/Avatar.vue'
    import { useConfigStore } from '@/stores/config'

    let configStore = useConfigStore()
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