<template>
  <div class="container">
    <!--
      van-tabs:标签页组件
      v-model设置默认激活项目 ，激活根据是项目的下标，从0开始
      van-tab: 标签页项目组件
      title：标签名称
      内容区域：标签对应内容
    -->
    <van-tabs v-model="activeChannelIndex">
      <van-tab title="推荐">
        <com-aricle></com-aricle>
      </van-tab>
      <van-tab title="数据库">
        <com-aricle></com-aricle>
      </van-tab>
      <van-tab title="后端">
        <com-aricle></com-aricle>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
// 导入文章瀑布组件
import ComAricle from './components/com-article.vue'
export default {
  name: 'home-index',
  // 注册
  components: {
    ComAricle
  },
  data () {
    return {
      // 设置频道默认激活项目
      activeChannelIndex: 0
    }
  }
}
</script>

<style scoped lang='less'>
.van-tabs {
  // 弹性布局
  display: flex;
  // 灵活的项目将垂直显示，正如一个列一样
  flex-direction: column;
  height: 100%;
  // 标签页全部内容展示区域
  /deep/ .van-tabs__content {
    // flex:1;的值是1 1 0%，【父控件有剩余空间占1份放大，父控件空间不足按1缩小，自身的空间大小是0%】
    flex: 1;
    overflow: hidden;
  }
  // 标签页具体内容展示区域
  /deep/ .van-tab__pane {
    height: 100%;
  }
  // 给频道下边沿横向设置样式
  /deep/ .van-tabs__line {
    background-color: #1989fa;
  }
}
</style>
