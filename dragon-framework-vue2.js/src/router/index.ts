import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import TokenHelper from '@/core/TokenHelper';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/homepage',
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: () => import(/* webpackChunkName: "homepage" */ '@/views/homepage.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '@/views/register.vue'),
  },
  {
    path: '*',
    redirect: '/',
  },
];

const router = new VueRouter({ mode: 'history', base: process.env.BASE_URL, routes });

router.beforeEach(async (to, from, next) => {
  // 登录地址
  const loginUrl = '/login';
  // 注册地址
  const registerUrl = '/register';
  // 判断是否含有令牌
  if (TokenHelper.getToken()) {
    // 如果含有令牌，并且跳转“登录”、“注册”页面，重定向到“首页”
    if (loginUrl === to.path || registerUrl === to.path) {
      return next({ path: '/' });
    } else {
      // 否则直接放行
      return next();
    }
  } else {
    // 如果没有令牌，并且跳转“登录”、“注册”页面，直接放行
    if (loginUrl === to.path || registerUrl === to.path) {
      return next();
    } else {
      // 否则重定向到“登录”页面
      return next({ path: loginUrl });
    }
  }
});

router.afterEach((to, from) => {
  window.scrollTo(0, 0);
});

export default router;
