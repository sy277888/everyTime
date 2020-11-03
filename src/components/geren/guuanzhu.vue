<template>
  <div>
    <van-nav-bar title="我的关注" left-arrow @click-left="onClickLeft" />
    <div class="guanzhu_box">
      <div class="guanzhu" v-for="(item, index) in list" :key="index">
        <ul>
          <li>
            <img :src="item.avatar" alt="" />
            <p>{{ item.teacher_name }}</p>
            <p>{{ item.introduction }}</p>
          </li>
        </ul>
        <span> 已关注 </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.$Net.guan({ params: { page: 1, limit: 10, type: 2 } }).then((res) => {
      this.list = res.data.data.list;

      console.log(res.data.data.list);
    });
  },
  methods: {
    onClickLeft() {
      this.$router.go("-1");
    },
  },
};
</script>

<style scoped>
.guanzhu_box {
  width: 100%;
  height: 35.3rem;
  background: gainsboro;
  overflow: scroll;
}
.guanzhu {
  width: 90%;
  margin-left: 5%;
  margin-top: 1rem;
  height: 5rem;
  background: #fff;
  border-radius: 0.3rem;
}
.guanzhu img {
  width: 4rem;
  height: 4rem;
  border-radius: 3rem;
  margin-top: 0.5rem;
  float: left;
}
.guanzhu p {
  margin-top: 1rem;
  margin-left: 2rem;
}
</style>