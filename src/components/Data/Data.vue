<template>
  <div>
    <van-nav-bar title="约课记录" />
    <van-empty
      v-show="isShow"
      image="https://wap.365msmk.com/img/no-message.8d3ca5af.png"
      description="请登录查看相关内容"
    >
      <van-button class="bottom-button" @click="OnLogin">
        登录/注册
      </van-button>
    </van-empty>
    <!-- 空状态根据token设置 -->
    <van-tabs v-model="activeName" v-show="!isShow">
      <van-tab title="待上课" name="a">
        <template #default>
          <img
            src="https://wap.365msmk.com/img/no-message.8d3ca5af.png"
            alt=""
          />
          <p>还没有待上课记录哦</p>
          <van-button class="botton" @click="Go"> 立即约课</van-button>
        </template>
      </van-tab>
      <van-tab title="已上课" name="b">
        <template #default>
          <img
            src="https://wap.365msmk.com/img/no-message.8d3ca5af.png"
            alt=""
          />
          <p>还没有上课记录哦</p>
          <van-button class="botton" @click="Go"> 立即约课</van-button>
        </template>
      </van-tab>
      <van-tab title="已取消" name="c">
        <img src="https://wap.365msmk.com/img/no-message.8d3ca5af.png" alt="" />
        <p>还没有取消上课记录哦</p>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "a",
      isShow: true,
    };
  },
  created() {
    // 获取token 如果没有则显示登录页
    var token = localStorage.getItem("token");
    if (token == null) {
      this.isShow = true;
    } else if (token) {
      this.isShow = false;
    }
  },
  methods: {
    OnLogin() {
      this.$router.push({
        path: "/login",
      });
    },
    Go(){
       this.$router.push({
        path: "/solo",
      });
    }
  },
};
</script>
<style scoped>
.bottom-button {
  background-color: rgb(254, 97, 0);
  color: #fff;
}
p {
  text-align: center;
}
.botton {
  margin-left: 9rem;
  margin-top: 2rem;
  background-color: rgb(254, 97, 0);
  color: #fff;
}
img{
  width: 100%;
}
</style>
