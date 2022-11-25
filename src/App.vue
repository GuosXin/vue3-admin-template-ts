<template>
    <router-view />
</template>

<script setup lang='ts'>
  import { useConfigStore } from "./stores/config"
  import { useTheme } from "./utils/hooks/useTheme"
  import { useLanguage } from "./utils/hooks/useLanguage"

  let configStore = useConfigStore()
  useTheme().setDarkTheme(configStore.isDarkTheme)
  useLanguage().setLanguage(configStore.language)
</script>
