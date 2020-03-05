import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible/index.min.js'

// vant导入
import Vant from 'vant'
// vant的样式导入
import 'vant/lib/index.css'
// 引入全局的自定义样式  因为要覆盖vant的样式
// 注意：在vant都css样式导入之后设置
import '@/assets/css/global.less'

// 导入vee-validate规则文件
// 本质：就是validate.js文件内容在该处执行
import '@/utils/validate.js' // 验证相关
// vant的注册
// 本质：全局方式注册了n多个组件和全局成员
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
