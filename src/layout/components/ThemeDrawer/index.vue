<template>
    <el-drawer
        v-model="drawer"
        title="全局配置"
        size="300px"
    >
        <el-divider>
            <el-icon><ColdDrink /></el-icon>
            <span>全局主题</span>
        </el-divider>
        <div class="theme-item">
            <span>主题颜色</span>
            <SwitchTheme/>
        </div>
        <div class="theme-item">
            <span>暗黑模式</span>
            <SwitchDark/>
        </div>
    </el-drawer>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import Bus from '@/utils/bus'
    import SwitchDark from '@/components/SwitchDark/index.vue'
    import SwitchTheme from '@/components/SwitchTheme/index.vue'

    const drawer = ref(false)
    
    Bus.$on('openDrawer', () => {
        drawer.value = true
    })
</script>

<style scoped>
    .el-icon{
        margin-right: 10px;
    }
    .theme-item{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }
    .theme-item span{
        font-size: 14px;
    }
</style>