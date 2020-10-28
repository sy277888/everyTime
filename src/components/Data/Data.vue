<template>
  <div>
    <van-nav-bar title="约课记录" />
    <!-- 利用token判断 -->
    <van-tabs v-model="activeName" >
      <van-tab title="标签 1" name="a"></van-tab>
      <van-tab title="标签 2" name="b">内容 2</van-tab>
      <van-tab title="标签 3" name="c">内容 3</van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "a",
      iSshow: false,
    };
  },
  created() {
  
 
  },
  computed: {
         // 获取token 如果没有则显示登录页
    iSshow: function () {
      var token = localStorage.getItem("token");
      if (token) {
        this.iSshow = !this.iSshow;
      }
      return
    },
  },
};
</script>