<template>
    <el-switch
        v-model="configStore.isDarkTheme"
        @change="setDarkTheme"
        inline-prompt
        :active-icon="MoonIcon"
        :inactive-icon="SunIcon"
    />
</template>

<script setup lang="ts">
    import { h } from 'vue'
    import { useConfigStore } from '@/stores/config'
    import { useTheme } from '@/utils/hooks/useTheme'

    // iconfont图标
    let SunIcon = h('i', { class: 'icon iconfont icon-sun', style: 'font-size: 12px;' })
    let MoonIcon = h('i', { class: 'icon iconfont icon-moon', style: 'font-size: 12px;' })
    let configStore = useConfigStore()
    let { setDarkTheme } = useTheme()
</script>