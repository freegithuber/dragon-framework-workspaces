<script setup>
import { getCurrentInstance, ref } from 'vue';
import { useRouter } from 'vue-router';

import TokenHelper from '@/core/TokenHelper';

const instance = getCurrentInstance();

const router = useRouter();

const formData = ref({ username: '', password: '', remember: true });

const rules = {
  username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
};

function goRegister() {
  router.push({ path: '/register' }).then().catch().finally();
}

function forgetPassword() {
  instance.proxy.$message.warning('请联系管理员！');
}

function onLogin() {
  instance.refs.form.validate((verification) => {
    if (verification) {
      if (formData.value.username === 'administrator' && formData.value.password === '1234567890') {
        if (formData.value.remember) {
          instance.proxy.$message.info('记住密码');
        }
        TokenHelper.setToken(this.formData.username);
        router.push({ path: '/' }).then().catch().finally();
      } else {
        instance.proxy.$message.error('账号或密码错误');
      }
    }
  });
}
</script>

<template>
  <div class="login eui-box">
    <el-card class="login-box">
      <template #header>
        <div>
          <span>登录</span>
          <el-button link @click="goRegister()">注册</el-button>
        </div>
      </template>
      <el-form ref="form" :model="formData" :rules="rules">
        <el-form-item label="账号" prop="username">
          <el-input v-model="formData.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <br>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formData.password" placeholder="请输入密码" show-password></el-input>
        </el-form-item>
        <br>
        <el-form-item label="ㅤㅤ" prop="remember">
          <el-checkbox v-model="formData.remember" label="记住密码" name="type"></el-checkbox>
          <el-button style="margin-left: auto;" link @click="forgetPassword()">忘记密码？</el-button>
        </el-form-item>
        <br>
        <el-button style="width: 100%;" type="primary" @click="onLogin()">登ㅤㅤ录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<style scoped lang="less">
.login {
  background: url("@{PUBLIC_PATH}images/background.jpg") no-repeat center center;
  background-size: 100% 100%;
}

.login-box {
  width: 320px;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);

  :deep(.el-card__header) {
    font-size: 16px;

    .el-button {
      float: right;
      padding: 0;
      font-size: 16px;
    }
  }

  :deep(.el-form) {
    .el-form-item {
      display: flex;

      .el-form-item__label {
        width: 54px;
      }

      .el-form-item__content {
        flex: 1;
      }
    }
  }
}
</style>
