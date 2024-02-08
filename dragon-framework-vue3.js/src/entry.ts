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

import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
// import 'element-plus/dist/index.css';
import './element-ui-theme.scss';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

const vueApp = createApp(App);
vueApp.use(ElementPlus, { locale: zhCn });
vueApp.use(router).use(store).mount('#app');
