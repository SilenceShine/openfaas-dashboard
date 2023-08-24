<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <body id="poster">
        <el-form :rules="rules">
            <h3 class="login_title" style="text-align: center">Carmen系统登陆</h3>
            <el-form-item>
                <el-input v-model="loginForm.gateway" placeholder="Please input">
                    <template #prepend>Http://</template>
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="username"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input type="password" v-model="loginForm.password" auto-complete="off" show-password
                    placeholder="password"></el-input>
            </el-form-item>
            <el-form-item style="width: 100%">
                <el-button type="primary" style="width: 100%;background: #505458;border: none"
                    v-on:click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </body>
</template>

<script setup lang="ts">
import router from '@/router'

const loginForm = reactive({
    gateway: '',
    username: '',
    password: '',
});

const rules = ref({
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
});

const login = () => {
    ElMessage.success(loginForm);
    router.push('/home');
};

</script>

<style scoped></style>
