<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less" scoped>
</style>
// 引入全局的自定义样式  因为要覆盖vant的样式
import '@/assets/css/global.less'