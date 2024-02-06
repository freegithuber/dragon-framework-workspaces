// 引入根据分辨率修改页面字体大小的插件
import 'amfe-flexible';

// 引入监听元素大小变化的自定义指令插件
import VueElementResizeDetector from 'vue-element-resize-detector';

// 引入时间处理工具相关依赖
import moment from 'moment';

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
import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

// 引入 v-resize 指令
Vue.use(VueElementResizeDetector);

// 设置 moment 语言
moment.locale('zh-cn');
// 引入 moment 组件
Vue.prototype.$moment = moment;

// 引入 echarts 组件
Vue.prototype.$echarts = echarts;

// 设置 Element UI 语言
locale.use(lang);
// 引入 Element UI 组件
Vue.use(ElementUI, { size: 'mini', zIndex: 3000 });

// 设置 PUBLIC_PATH 的值
Vue.prototype.$publicPath = process.env.VUE_APP_PUBLIC_PATH;

Vue.config.productionTip = false;

new Vue({ router, store, render: (h) => h(App) }).$mount('#app');
