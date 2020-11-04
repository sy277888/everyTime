<template>
  <div>
    <van-nav-bar title="我的关注" left-arrow @click-left="onClickLeft" />
    <div class="guanzhu_box">
      <!-- 空状态判断 -->
      <van-empty
        v-show="isShow"
        description="暂无关注"
        image="https://wap.365msmk.com/img/empty.0d284c2e.png"
      >
      </van-empty>
      <!-- 关注老师 -->
      <div class="guanzhu" v-for="(item, index) in list" :key="index">
        <ul>
          <li>
            <img :src="item.avatar" alt="" />
            <p class="guanzhu_p">{{ item.teacher_name }}</p>
            <div class="van-ellipsis">{{ item.introduction }}</div>
          </li>
        </ul>
        <span @click="SHOW(item, index)"> 已关注 </span>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
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
    async SHOW(item, index) {
      let id = item.teacher_id;
      let { data } = await this.$Net.GuanZhu(id + "");
      if (data.data.flag === 2) {
        this.list.splice(index, 1);
        Toast.success("取消关注成功");
      }
    },
  },
  computed: {
    isShow() {
      let show = this.list.length > 0 ? false : true;
      return show;
    },
  },
};
</script>

<style scoped>
.guanzhu_box {
  width: 100%;
  height: 39rem;
  background: rgb(240, 242, 245);
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
  width: 3rem;
  height: 3rem;
  border-radius: 3rem;
  margin-top: 1rem;
  margin-left: 0.5rem;
  float: left;
}
.van-ellipsis {
  font-size: 0.2rem;
  margin-left: 3.5rem;
  margin-top: rem;
  color: grey;
}
.guanzhu_p {
  line-height: 2rem;
}
.guanzhu span {
  margin-left: 15rem;
  display: block;
  width: 4rem;
  height: 1.5rem;
  background: rgb(235, 238, 254);
  border-radius: 2rem;
  color: rgb(235, 97, 0);
  text-align: center;
}
</style>