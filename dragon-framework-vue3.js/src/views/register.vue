<template>
  <div class="register eui-box" @click="goLogin()">
  </div>
</template>

<script>
export default {
  name: 'register',
  methods: {
    goLogin() {
      this.$router.push({ path: '/login' }).then().catch().finally();
    },
  },
};
</script>

<style scoped lang="less">
.register {
  background: url("@{PUBLIC_PATH}images/background.jpg") no-repeat center center;
  background-size: 100% 100%;
}
</style>
