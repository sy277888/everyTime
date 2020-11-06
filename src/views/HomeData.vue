<template>
  <div>
    <div class="Homedata_box">
      <!-- 头部定位 -->
      <div class="Homedata_box_top">
        <van-icon
          name="arrow-left"
          color="#fff"
          size="1.5rem"
          @click="Onback"
          class="Home_box_top_icon"
        />
        <span class="Homedata_box_top_title">预约课程</span>
      </div>
      <div class="Homedata_top">
        <ul>
          <li>
            <img :src="HomedataImg" alt="" class="Homedata_top_img" />
            <p class="Homedata_top_title">{{ HomeTitle }}</p>
            <p class="Homedata_top_titleS">男 8年金牌讲师</p>
          </li>
        </ul>
        <div class="Home_top_but" @click="Onback">查看详情</div>
      </div>
      <!-- 顶部结束 中部开始-->
      <div class="Homedata_center">
        <p>
          <span class="Home_center_icon"></span>
          <span class="Homedata_center_title">选择时间</span>
        </p>
      </div>
      <!-- 底部选择时间 -->
      <Sj />
    </div>
  </div>
</template>
<script>
import Sj from "../components/sj";
export default {
  components: {
    Sj,
  },
  data() {
    return {
      HomedataImg: [], //老师照片
      HomeTitle: [], //老师名字
      active: 1,
    };
  },
  methods: {
    Onback() {
      this.$router.go(-1);
    },
  },
  created() {
    this.$Net.HomeLIST(this.$route.query.id).then((res) => {
      this.HomedataImg = res.data.data.teacher.avatar;
      this.HomeTitle = res.data.data.teacher.real_name;
      console.log(res.data.data.teacher.real_name);
    });
  },
};
</script>
<style scoped>
.Homedata_box {
  width: 100%;
  height: 41.71rem;
  background: #f0f2f5;
}
.Homedata_box_top {
  width: 100%;
  height: 5rem;
  background: rgb(93, 166, 245);
}
.Homedata_box_top_title {
  margin-left: 10rem;
  font-size: 1.2rem;
  color: #fff;
}
.Home_box_top_icon {
  position: fixed;
  top: 0.6rem;
}
.Homedata_top {
  width: 90%;
  margin-left: 5%;
  height: 5rem;
  background: #fff;
  position: absolute;
  border-radius: 0.3rem;
  top: 2.3rem;
}
.Homedata_top_img {
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  margin-left: 1rem;
  float: left;
}
.Homedata_top_title {
  margin-left: 5rem;
  font-size: 1rem;
}
.Homedata_top_titleS {
  margin-left: 5rem;
  font-size: 0.8rem;
  color: gray;
}
.Home_top_but {
  width: 5rem;
  height: 2rem;
  border: 0.05rem solid rgb(235, 97, 0);
  position: absolute;
  top: 1.3rem;
  left: 15rem;
  border-radius: 0.9rem;
  color: rgb(235, 97, 0);
  text-align: center;
  line-height: 2rem;
  font-size: 0.9rem;
}
.Homedata_center {
  width: 100%;
  margin-top: 4rem;
}
.Home_center_icon {
  display: block;
  width: 0.2rem;
  height: 1.4rem;
  background: rgb(235, 97, 0);
  margin-left: 1rem;
  float: left;
}
.Homedata_center_title {
  margin-left: 0.5rem;
  font-size: 0.99rem;
  color: gray;
}
.Homedata_center_titles {
  margin-left: 0.1rem;
  font-size: 0.9rem;
  color: gray;
}
</style>

