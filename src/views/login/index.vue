<template>
    <div class="login-wrap">
        <div class="login-box">
            <SwitchDark class="switch-dark"/>
            <img class="login-left" src="@/assets/images/login_left.png" />
            <div class="login-right">
                <div class="login-header">
                    <img src="@/assets/images/vue.svg"/>
                    <h1>Vue3-Admin-Ts</h1>
                </div>
                <LoginForm/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import SwitchDark from "@/components/SwitchDark/index.vue"
    import LoginForm from "./components/LoginForm.vue"
</script>

<style scoped>
    .login-wrap{
        width: 100vw;
        height: 100vh;
        min-height: 550px;
        padding: 3vh 2vw;
        box-sizing: border-box;
        background-color: var(--grey-1);
        background-image: url('@/assets/images/login_bg.svg');
        background-size: cover;
        background-repeat: no-repeat;
    }
    .login-box{
        width: 100%;
        height: 100%;
        /* background-color: hsl(0deg 0% 100% / 80%); */
        background-color: var(--mask-color);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .switch-dark{
        position: absolute;
        top: 4.5%;
		right: 3.2%;
    }
    .login-left{
        width: 750px;
    }
    .login-right{
        width: 450px;
        padding: 50px 40px 45px;
        background-color: var(--login-bg-color);
        box-shadow: 2px 3px 7px var(--shadow-color);
        border-radius: 10px;
    }
    .login-header {
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .login-header img{
        width: 68px;
    }
    .login-header h1{
        font-size: 40px;
        color: var(--text-color);
        padding-left: 25px;
    }

    @media screen and (max-width: 1440px) {
        .login-left{
            display: none;
        }
    }
</style>