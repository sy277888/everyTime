<template>
  <div class="waw_nickname_container">
    <NavTitle @onClickRight="onClickRight"></NavTitle>
    <div class="waw_nickname_box">
      <van-cell-group>
        <!-- {{nickname}} -->
        <van-field v-model="nickname" placeholder="请输入用户名" />
      </van-cell-group>
    </div>
  </div>
</template>
<script>
import NavTitle from "./TitlePreservation";
export default {
  components: {
    NavTitle,
  },
  data() {
    return {
      nickname: "",
    };
  },
  methods: {
    async onClickRight() {
      //点击保存更改昵称
      let res = await this.$Net.user({ nickname: this.nickname });
      this.hhah();
      this.$router.go(-1);
    },
    hhah() {
      this.$Net.grren().then((res) => {
        console.log(res);
        this.nickname = res.data.data.nickname;
      });
    },
  },
  mounted() {
    this.hhah();
  },
};
</script>
<style lang='scss' scoped>
.waw_nickname_container {
  width: 100%;
  height: 100vh;
  background: whitesmoke;
}
.waw_nickname_box {
  width: 100%;
  height: 2.5rem;
  margin-top: 0.4rem;
  background: white;
}
</style>