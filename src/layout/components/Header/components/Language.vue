<template>
    <el-dropdown trigger="click" class="language-wrap" @command="setLanguage">
        <i class="iconfont icon-language"/>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item v-for="(item, index) in langs" :key="index" :command="item" :disabled="i18n.locale.value === item">{{ $t(item) }}</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
    import { useI18n } from 'vue-i18n'
    import { useLanguage } from '@/utils/hooks/useLanguage'
    
    let { setLanguage } = useLanguage()

    let langs = ['zh', 'en']
    let i18n = useI18n()
</script>

<style scoped>
    .language-wrap{
        padding: 0 10px;
    }
    .icon-language{
        font-size: 22px;
        color: var(--el-text-color-primary);
        cursor: pointer;
    }
</style>