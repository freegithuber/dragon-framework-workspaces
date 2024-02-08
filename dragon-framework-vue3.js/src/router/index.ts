/*
 * Copyright 2002-2122 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import TokenHelper from '@/core/TokenHelper';

const routes: Array<RouteRecordRaw> = [
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
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

const router = createRouter({ history: createWebHistory(process.env.BASE_URL), routes });

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
