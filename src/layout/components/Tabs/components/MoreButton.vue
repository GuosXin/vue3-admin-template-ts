<template>
    <el-dropdown trigger="click">
        <el-button type="primary" size="small">
            更多
            <el-icon class="el-icon--right"><ArrowDown/></el-icon>
        </el-button>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item icon="CircleClose" @click="closeOtherTabs">关闭其他</el-dropdown-item>
                <el-dropdown-item icon="FolderDelete" @click="closeAllTabs">关闭所有</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
    import { CircleClose, FolderDelete } from '@element-plus/icons-vue'
    import { useTabsStore } from '@/stores/tabs'
    import { useRoute, useRouter } from 'vue-router'

    const { closeMultipleTab } = useTabsStore()
    const route = useRoute()
    const router = useRouter()

    // 关闭其他
    const closeOtherTabs = () => {
        closeMultipleTab(route.path)
    }
    // 关闭所有
    const closeAllTabs = () => {
        closeMultipleTab()
        router.push('/home')
    }
</script>