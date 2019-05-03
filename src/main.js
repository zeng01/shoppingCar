import Vue from 'vue'
import App from './App.vue'
// 导入饿了吗ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import './assets/statics/site/css/style.css'

// 导入组件
import index from './components/index.vue'
import detail from './components/detail.vue'
import cart from './components/cart.vue'
import login from './components/login.vue'
import order from './components/order.vue'
import orderDetail from './components/orderDetail.vue'
import pay from './components/pay.vue'
import myOrderList from './components/myOrderList.vue'
import myOrderDetail from './components/myOrderDetail.vue'
import vipCenter from './components/vipCenter.vue'
// 导入路由
import VueRouter from 'vue-router'
import axios from 'axios'
Vue.use(VueRouter);

// 写规则
const routes=[
  { path: '/', redirect: '/index' },
  {path:'/index',component:index},
  {path:'/detail/:id',component:detail},
  {path:'/cart/:id',component:cart},
  {path:'/login',component:login},
  {path:'/order/:id',component:order},
  {path:'/orderDetail',component:orderDetail},
  {path:'/pay',component:pay},
  {path:'/myOrderList',component:myOrderList},
  {path:'/myOrderDetail',component:myOrderDetail},
  {path:'/vipCenter',component:vipCenter}
]
// 创建router实例
const router =new VueRouter({
  routes
})

/** 验证用户是否登录 **/
// router.beforeEach((to,from,next) => {
//   if(from.path=='/login'){
//               next();
//           }else{
  // axios.get("http://111.230.232.110:8899/site/account/islogin").then(response=>{
  //                     console.log('是否登录',response);
  //                     if(response.data.code=='logined'){
  //                         next();
  //                     }else{
  //                         // alert('未登录，请重新登录');
  //                         next('/login');
  //                         location='/login'
  //                     }
  //             })
            // }
//   if(to.matched.some( m => m.meta.auth)) {
//       // console.log("先判断是否登录");
//       if(to.name=='login'){
//           next();
//       }else{
//         // if(localStorage.getItem('token')){

//         //访问服务器缓存数据，判断当前token是否失效
//           Vue.http.get("http://111.230.232.110:8899/site/account/islogin",{withCredentials: true}).then(response => response.json()).then(num => {
//                   // console.log('是否登录',num);
//                   if(num.code=='logined'){
//                       next();
//                   }else{
//                       alert('您的token已超时，请重新登录');
//                       next('/login');
//                   }
//           })
//         // }else{
//         //   next('/Login');
//         // }

//       }
// 　} else {
//   alert("请先登录");
//       next()
//   }
// })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 挂载Vue实例
  router
}).$mount('#app')
