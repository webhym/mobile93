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

// 配置【请求拦截器】
instance.interceptors.request.use(function (config) {
  // 判断token存在再做配置(vuex判断)
  // store.user.token 根据是否有值，就知道用户是否登录系统
  if (store.state.user.token) {
    // 注意：token前边有 'Bearer ' 的信息前缀
    config.headers.Authorization = 'Bearer ' + store.state.user.token
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 配置【响应拦截器】
// f1(10,20)
instance.interceptors.request.use(function (response) {
  // 正常响应处理
  // 确认服务器端返回的数据：返回data、返回data.data
  // const result = await axios()
  // this.xxx = result
  try {
    // data.data如果报错，没有获得到，错误信息会被catch步骤，就走data了
    return response.data.data
  } catch (err) {
    return response.data
  }
}, function (error) {
  // 非正常响应处理(包括401)
  // console.dir(error) //对象：config request response inAxiosError toJSON
  if (error.response.status === 401) {
    // token不ok(token在服务器端已经失效了，2个小时时效)
    // 强制用户重新登录系统，以刷新服务器端的token时效
    router.push('./login')
    // 不要给错误提示了
    return new Promise(function () {})// 空的Promise对象，没有机会执行catch，进而不做错误提示了
  }
  // return new Promise((resolve,reject)=>{
  // reject('获得文章失败!')
  // })
  return Promise.reject(error)
})

// 对外导出axios对象
export default instance
