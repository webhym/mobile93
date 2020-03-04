// 对axios进行相关配置
import axios from 'axios'
import JSONBig from 'json-bigint'

// 导入store(vuex)用于获取用户信息
// store.state.user 获取用户信息
// store.commit(xx,yy) 调用mutations方法
// store.dispatch(xx,yy) 调用actions方法
import store from '@/store'

// 导入路由使得可以执行路由跳转(编程时导航)
// router.push()
import router from '@/router/index.js'

// 创建一个axios实例 和原来的axios没关系
// create()调用完毕会返回一个新的axios对象(instance接收)
// 新的axios对象 与原来的axios没有任何关系
// 给instance做各种配置应用，原生的axios对象不会做任何污染
// 这样不影响原生axios对象在其他场合的应用
const instance = axios.create(
  {
    // 请求根地址
    baseURL: 'http://ttapi.research.itcast.cn/',
    // 服务器端返回的data数据是字符串
    // 1.实体字符串 "{name:value,name:value,name:value}"
    // 2.空壳字符串
    transformResponse: [function (data) {
      try {
        // 成功：实体字符串
        // 失败：空壳字符串
        return JSONBig.parse(data)
      } catch (err) {
        // 步骤失败
        return data
      }
    }]
  }
)

// 对外导出axios对象
export default instance
