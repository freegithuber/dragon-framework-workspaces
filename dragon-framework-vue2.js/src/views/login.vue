<template>
  <div class="login eui-box">
    <el-card class="login-box">
      <div slot="header">
        <span>登录</span>
        <el-button type="text" @click="goRegister()">注册</el-button>
      </div>
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
          <el-button style="float: right;" type="text" @click="forgetPassword()">忘记密码？</el-button>
        </el-form-item>
        <br>
        <el-button style="width: 100%;" type="primary" @click="onLogin()">登ㅤㅤ录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import TokenHelper from '@/core/TokenHelper';

export default {
  name: 'login',
  data() {
    return {
      formData: { username: '', password: '', remember: true },
      rules: {
        username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    };
  },
  methods: {
    goRegister() {
      this.$router.push({ path: '/register' }).then().catch().finally();
    },
    forgetPassword() {
      this.$message.warning('请联系管理员！');
    },
    onLogin() {
      this.$refs.form.validate((verification) => {
        if (verification) {
          if (this.formData.username === 'administrator' && this.formData.password === '1234567890') {
            if (this.formData.remember) {
              this.$message.info('记住密码');
            }
            TokenHelper.setToken(this.formData.username);
            this.$router.push({ path: '/' }).then().catch().finally();
          } else {
            this.$message.error('账号或密码错误');
          }
        }
      });
    },
  },
};
</script>

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
  /deep/ .el-card__header {
    font-size: 16px;
    .el-button {
      float: right; padding: 0; font-size: 16px;
    }
  }
  /deep/ .el-form {
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
