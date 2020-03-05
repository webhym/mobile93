// 导入已经配置好的axios函数对象
// request就是经过初始配置的axios对象，可以直接使用
import request from '@/utils/request.js'

// 导出一个函数，可以对用户账号进行校验
// data{mobile:xx,code:xx}对象参数
// 现在对data做升级，使得在没有任何注释信息的条件下，也直接指导当前api函数需要什么参数
// 把参数做成 "对象解构赋值" 的样子，这样就知道需要哪个参数了
// export function apiUserLogin (data) {
export function apiUserLogin ({ mobile, code }) {
  // 调用axios
  // axios.get()
  // axios.post()
  // axios({
  //   url:请求地址,
  //   method:'get/post',
  //   params:xx, // get方式传递参数
  //   data:xx  // post方式传递参数
  // })
  // return 调用当前函数，可以获得到请求结果
  return request({
    url: '/app/v1_0/authorizations',
    method: 'POST',
    data: {
      // 简易成员赋值
      mobile,
      code
    }
  })
}
