<template>
  <div>
    <van-nav-bar title="我的收藏" left-arrow @click-left="onClickLeft" />
    <!-- <div class="sy-dvv">
      <img src="../../assets/icon/收藏.png" alt="" />
      <p class="sy_p">暂无收藏</p>
    </div> -->
    <div v-for="item in date" :key="item.id">
      <Card :data="item" @CancelCollectioner="CancelCollectioner"></Card>
    </div>
  </div>
</template>

<script>
import Card from "../gong/Card copy";
export default {
  // 组件名称
  name: "",
  // 组件参数 接收来自父组件的数据
  props: [],
  components: {
    Card,
  },
  data() {
    return {
      date: [],
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go("-1");
    },
    async getinfo() {
      let res = await this.$Net.cang();
      this.date = res.data.data.list;
      console.log(res);
      console.log(this.date);
    },
    async CancelCollectioner(id) {
      let res = await this.$Net.courseXQSCNO(id);
      this.getinfo();
    },
  },
  mounted() {
    this.getinfo();
  },
};
</script>

<style scoped lang="scss">
/* .sy-dvv {
  width: 100%;
  margin-top: 3rem;
}
.sy-dvv img {
  width: 50%;
  height: 50%;
  margin-left: 6rem;
}
.sy_p {
  font-size: 0.5rem;
  color: rgb(182, 179, 179);
  text-align: center;
} */
</style>