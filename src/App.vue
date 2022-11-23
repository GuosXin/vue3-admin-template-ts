<template>
    <router-view />
</template>

<script setup lang='ts'>
  import { useTheme } from "@/utils/hooks/useTheme"
  useTheme().initTheme()
</script>
