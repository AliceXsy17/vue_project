import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import routerConfig from './router.config.js'
import less from 'less'
import Jsonp from './jsonp.js'
import '../node_modules/animate.css/animate.min.css';


// 使用路由
Vue.use(VueRouter);
const router = new VueRouter(routerConfig);

// 使用less来开发
Vue.use(less);

// 使用自己封装的jsonp，继承
Vue.prototype.$YiJsonp = $YiJsonp;

// 自定义键盘事件
// Vue.config.keyCodes.enter = 13; 

new Vue({
  router,
  render: h => h(App)

}).$mount('#app');
