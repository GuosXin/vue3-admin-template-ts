<template>
    <el-form ref="formRef" :model="form" :rules="rules">
        <el-form-item prop="username">
            <el-input v-model="form.username" :prefix-icon="User" size="large" clearable placeholder="用户名：admin"/>
        </el-form-item>
        <el-form-item prop="password">
            <el-input v-model="form.password" type="password" :prefix-icon="Lock" size="large" show-password clearable placeholder="密码：123456"/>
        </el-form-item>
        <div class="form-btn">
            <el-button :icon="CircleClose" round size="large" @click="handleReset(formRef)">重置</el-button>
            <el-button type="primary" :icon="UserFilled" round size="large" @click="handleLogin">{{ $t('login') }}</el-button>
        </div>
    </el-form>
</template>

<script setup lang="ts">
    import { User, Lock, CircleClose, UserFilled } from '@element-plus/icons-vue'
    import { reactive, ref } from 'vue'
    import type { FormInstance, FormRules } from 'element-plus'
    import { Login } from '@/api/index'

    const formRef = ref<FormInstance>()
    const form = reactive({
        username: 'admin',
        password: '123456'
    })
    const rules = reactive<FormRules>({
        username: [{ required: true, message: '账号不能为空' }],
        password: [{ required: true, message: '密码不能为空' }],
    })

    const handleReset = (formEl: FormInstance | undefined) => {
        if(!formEl) return
        formEl.resetFields()
    }
    const handleLogin = async () => {
        try{
            Login(form)
            Login(form)
            Login(form)
            Login(form)
            Login(form)
            Login(form)
            Login(form)
            Login(form)
            Login(form)
            Login(form)
            Login(form)
            Login(form)
            Login(form)
        }catch(err){
            console.log(err)
        }
    }
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