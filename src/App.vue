<template>
    <el-config-provider :locale="locale">
        <router-view />
    </el-config-provider>
</template>

<script setup lang='ts'>
  import { ref, computed } from 'vue'
  import { ElConfigProvider } from 'element-plus'
  import { useTheme } from './utils/hooks/useTheme'
  import { useLanguage } from './utils/hooks/useLanguage'
  import { useConfigStore } from './stores/config'

  import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
  import en from 'element-plus/dist/locale/en.mjs'

  // 初始化主题
  let theme = useTheme()
  theme.setDarkTheme()
  theme.setPrimary()

  // 初始化语言
  useLanguage().setLanguage()

  let configStore = useConfigStore()
  let locale = computed(() => {
    return configStore.language === 'zh' ? zhCn : en
  })
</script>
