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
    import { ref, h } from "vue"

    // iconfont图标
    let SunIcon = h('i', { class: 'icon iconfont icon-sun', style: 'font-size: 12px;' })
    let MoonIcon = h('i', { class: 'icon iconfont icon-moon', style: 'font-size: 12px;' })

    let checked = ref<boolean>(true)

    const handleChange = (checked) => {
        const html = document.documentElement as HTMLElement;
        if(checked){
            html.setAttribute("class", "dark");
            localStorage.setItem('isDarkTheme', 'true')
        }else{
            html.removeAttribute("class");
            localStorage.setItem('isDarkTheme', 'false')
        }
    }

    const isDarkTheme = localStorage.getItem('isDarkTheme')
    if(isDarkTheme){
        checked.value = JSON.parse(isDarkTheme)
        handleChange(checked.value)
    }
</script>