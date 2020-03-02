import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.min.js'

// vant导入
import Vant from 'vant'
// vant的样式导入
import 'vant/lib/index.css'
// vant的注册
// 本质：全局方式注册了n多个组件和全局成员
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
