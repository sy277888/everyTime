<template>
  <div class="hmw-box">
    <!-- 这里是详情页面 -->
    <div class="hmw-top">
        <!-- 先不用vant了，自己写原生吧 -->
      <!-- 滚动导航 -->
      <!-- <van-tabs v-model="active" scrollspy sticky v-show="hmwFlag"> -->
          <!-- 表头左边插槽 -->
          <!-- <template #nav-left><van-icon name="arrow-left" /></template> -->
          <!-- 表头右边插槽 -->
          <!-- <template #nav-right><van-icon name="cluster-o" /></template> -->
          <!-- 这里是表头的内容还有页面的内容啥的 -->
        <!-- <van-tab v-show="!hmwFlag" :title="课程详情"> -->
        <!-- <van-tab :key="index" v-for="index in 3" :title="'选项 ' + index"> -->
          <!-- 内容 {{ index }} -->
        <!-- </van-tab> -->
      <!-- </van-tabs> -->
      <!-- 原生的导航 -->

    </div>
    <!-- 中间部分 -->
    <div class="hmw-center">

    </div>
    <!-- 底部按钮 -->
    <div class="hmw-foot"></div>
  </div>
</template>

<script>
export default {
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      //    导航要求的--选中哪一个
      active: 2,
    //   显示导航
    hmwFlag:false,
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    //  scrollHandle: function(e) {
    //     var top = e.srcElement.scrollingElement.scrollTop;    // 获取页面滚动高度
    //     if (top > 0) {
    //      this.flog =true
    //      this.fll=false
    //     } else{
    //       this.flog = false
    //       this.fll=true
    //     }
    //   },
  },
  mounted() {
    // window.addEventListener('scroll', this.scrollHandle);  // 绑定页面的滚动事
  },
};
</script>
<style scoped>
html,
body,
body > div {
  height: 100%;
}
/* 大体布局----------------------------------------------------------- */
.hmw-box {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.hmw-top{
    background: darkseagreen;
    height: 3.6rem;
    padding: 0 1rem;
}
.hmw-center{
    /* min-height: 4rem; */
    flex: 1;
}
.hmw-foot{
    background: darkseagreen;
    height: 4rem;
    z-index: 99999;
}
/* 头部导航的布局 */
/* 原生写导航的布局 */
/* 用vant的布局 */
.van-tabs{
    align-items: center;
}
/* .van-icon .van-icon-arrow-left{
    display: flex;
    align-items: center;
} */
.van-tabs .van-icon{
    font-size: 1.4rem;
    margin-top: 0.8rem;
    color:  #646464;
}
</style>
