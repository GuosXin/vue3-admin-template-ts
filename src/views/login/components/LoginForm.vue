<template>
    <el-form ref="formRef" :model="form" :rules="rules">
        <el-form-item prop="username">
            <el-input :prefix-icon="User" size="large" placeholder="用户名："/>
        </el-form-item>
        <el-form-item prop="password">
            <el-input :prefix-icon="Lock" size="large" placeholder="密码："/>
        </el-form-item>
        <div class="form-btn">
            <el-button :icon="CircleClose" round size="large">重置</el-button>
            <el-button type="primary" :icon="UserFilled" round size="large">登录</el-button>
        </div>
    </el-form>
</template>

<script setup lang="ts">
    import { User, Lock, CircleClose, UserFilled } from '@element-plus/icons-vue'
    import { reactive, ref } from 'vue'
    import type { FormInstance, FormRules } from 'element-plus'

    const formRef = ref<FormInstance>()
    const form = reactive({
        username: '',
        password: ''
    })

    const rules = reactive<FormRules>({
        username: [{ required: true, message: '账号不能为空' }],
        password: [{ required: true, message: '密码不能为空' }],
    })
</script>

<style scoped>
    .el-form-item{
        margin-bottom: 40px;
    }
    .form-btn{
        display: flex;
        justify-content: space-between;
    }
    .el-button {
        width: 185px;
    }
</style>