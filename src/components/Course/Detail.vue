<template>
<div class="box">
    <!-- 这里是详情页面 -->
    <div class="hmw-top">
        <!-- 滚动导航 -->
        <van-tabs v-model="active" scrollspy sticky>
  <van-tab :key="index" v-for="index in 2" :title="'选项 ' + index">
    内容 {{ index }}
  </van-tab>
</van-tabs>
    </div>
    <div class="hmw-center"></div>
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
  data () {
   return {}
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},
}
</script> 
<style scoped>
/* 大体布局----------------------------------------------------------- */
.hmw-box {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.hmw-top,
.hmw-foot {
  background: steelblue;
  width: 100%;
  height: 4rem;
  flex-shrink: none;
}
.hmw-center {
  flex: 1;
  /* overflow: scroll; */
 padding-top: 3rem;
}
</style>
