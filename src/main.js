import Vue from 'vue'
import App from './App.vue'
// 导入饿了吗ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import './assets/statics/site/css/style.css'

import index from './components/index.vue'

// 导入路由
import VueRouter from 'vue-router'

Vue.use(VueRouter);

// 写规则
const routes=[
  {path:'/index',component:index}
]
// 创建router实例
const router =new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载Vue实例
  router
}).$mount('#app')
