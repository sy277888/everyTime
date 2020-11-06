<template>
<div class="hmw-box">
  <!-- 顶部 -->
   <van-nav-bar @click-left="$router.go(-1)" >
  <template #left>
    <van-icon name="arrow-left" color=" #595959" size="18"/>
  </template>
  <template #title>
    <p>{{$route.query.title}}</p>
  </template>
</van-nav-bar>
<!-- 主体部分 -->
<div class="hmw-main">
  <div>
  <img src="../../assets/icon/收藏.png" alt="">
  <p>暂无消息通知</p>
</div>
</div>

</div>
</template>

<script>
export default {
  // 组件名称
  name: 'demo',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--使用了scoped属性之后，父组件的style样式将不会渗透到子组件中，-->
<!--然而子组件的根节点元素会同时被设置了scoped的父css样式和设置了scoped的子css样式影响，-->
<!--这么设计的目的是父组件可以对子组件根元素进行布局。-->
<style scoped>
/* 顶部 */
.van-nav-bar p{
    font-size: 4.8vw;
    color: #595959;
}
.van-nav-bar{
height: 11.73333vw;
}
/* 主体部分 */
.hmw-main{
  width: 100%;
  height: 100%;
}
.hmw-main>div{
  width: 100%;
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  align-items: center;
  margin-top: 4rem;
}
.hmw-main>div img{
  width: 40vw;

}
.hmw-main>div p{
font-size: 4vw;
    color: #8c8c8c;
}
</style>
