// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// 引入 echarts 组件相关依赖
import * as echarts from 'echarts';

// 引入 Element UI 组件相关依赖
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale';
import lang from 'element-ui/lib/locale/lang/zh-CN';
// 定制主题无需引入 Element UI 编译好的 CSS 文件
// import 'element-ui/lib/theme-chalk/index.css';
import './element-ui-theme.scss';

// 创建项目自动生产
import App from './App';
import router from './router';

// 引入 echarts 组件
Vue.prototype.$echarts = echarts;

// 设置 Element UI 语言
locale.use(lang);
// 引入 Element UI 组件
Vue.use(ElementUI, { size: 'mini', zIndex: 3000 });

//
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({ el: '#app', router, components: { App }, template: '<App/>' });
