<template>
    <el-switch
        v-model="checked"
        @change="handleChange"
        inline-prompt
        :active-icon="MoonIcon"
        :inactive-icon="SunIcon"
    />
</template>

<script setup lang="ts">
    import { ref, h, onMounted } from 'vue'
    import { useConfigStore } from '@/stores/config' 

    // iconfont图标
    let SunIcon = h('i', { class: 'icon iconfont icon-sun', style: 'font-size: 12px;' })
    let MoonIcon = h('i', { class: 'icon iconfont icon-moon', style: 'font-size: 12px;' })
    let checked = ref<boolean>(true)
    let configStore = useConfigStore()

    const handleChange = (checked) => {
        configStore.isDarkTheme = checked
        localStorage.setItem('isDarkTheme', JSON.parse(checked))
    }

    onMounted(() => {
        const isDarkTheme = localStorage.getItem('isDarkTheme')
        if(isDarkTheme){
            checked.value = JSON.parse(isDarkTheme)
        }
    })
</script>