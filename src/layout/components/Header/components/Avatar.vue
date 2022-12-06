<template>
    <div class="avatar-bar flex-center">
        <div class="user-name">管理员</div>
        <el-dropdown trigger="click">
            <el-avatar src="/src/assets/images/avatar.gif"/>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item :icon="User">个人信息</el-dropdown-item>
                    <el-dropdown-item :icon="Edit">修改密码</el-dropdown-item>
                    <el-dropdown-item :icon="SwitchButton" divided @click="handleLogout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup lang="ts">
    import { User, Edit, SwitchButton } from '@element-plus/icons-vue'
    import { useRouter } from 'vue-router'

    let router = useRouter()
    const handleLogout = () => {
        router.push('/login')
    }
</script>

<style>
    .avatar-bar{
        padding: 0 25px 0 10px;
        font-size: 15px;
    }
    .user-name{
        margin-right: 20px;
    }
    .el-avatar{
        cursor: pointer;
    }
</style>