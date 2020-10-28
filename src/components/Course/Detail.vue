<template>
  <div class="hmw-box">
    <!-- 这里是详情页面 -->
    <div class="hmw-top">
      <!-- 滚动导航 -->
      <van-tabs v-model="active" scrollspy sticky>
        <van-tab :key="index" v-for="index in 2" :title="'选项 ' + index">
          内容 {{ index }}
        </van-tab>
      </van-tabs>
    </div>
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
  height: 100% !important;
}
/* 大体布局----------------------------------------------------------- */
.hmw-box {
}
</style>
