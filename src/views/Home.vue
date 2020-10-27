<template>
  <div>
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img
          src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20193KAjU2cB6h1569839562.jpg"
          width="100%"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20197Cxc53hktC1569839552.jpg"
          width="100%"
        />
      </van-swipe-item>
      <van-swipe-item>
        <img
          src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019MGNW3BtiS91569839576.jpg"
          width="100%"
        />
      </van-swipe-item>
    </van-swipe>
    <!-- 主页列表 -->
    <div class="Home_overall">
      <!-- 主页推荐 -->
      <ul class="Home_advice">
        <li>
          <p>特色课11</p>
        </li>
        <li><p>一对一辅导</p></li>
        <li><p>学习日历</p></li>
      </ul>
      <!-- 名师推荐 -->
      <div class="Hh"></div>
      <p><span class="Home_probably_P"></span>名师推荐</p>
      <div v-for="index in 3" :key="index+'a'">
        <div class="Home_teacher">{{ index }}</div>
      </div>
      <!-- 精品课程 -->
      <p><span class="Home_probably_P"></span>精品课程</p>
      <div v-for="index in 7" :key="index+'b'">
        <div class="Home_course">{{ index }}</div>
      </div>
      <!-- 推荐课程 -->
      <p><span class="Home_probably_P"></span>精品课程</p>
      <div v-for="index in 5" :key="index+'c'">
        <div class="Home_course">{{ index }}</div>
      </div>
      <!-- 明星讲师 -->
        <p><span class="Home_probably_P"></span>明星讲师</p>
         <div v-for="index in 7" :key="index+'d'">
        <div class="Home_teacher">{{ index }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },created(){
  }
};
</script>
<style  scoped>
.Home_overall {
  width: 100%;
  height: 245rem;
  background: rgb(240, 242, 245);
}
.Home_advice {
  width: 100%;
  display: flex;
  justify-content: space-around;
  text-align: center;
  position: absolute;
  left: 0;
  top: 11rem;
}
.Home_advice li {
  display: block;
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 1rem;
  background: #fff;
  margin-left: 0.3rem;
}
.Hh {
  width: 100%;
  height: 5rem;
}
.Home_probably_P {
  width: 0.2rem;
  height: 1.3rem;
  background: rgb(235, 97, 0);
  margin-left: 1rem;
  margin-right: 0.5rem;
  float: left;
}
.Home_teacher {
  width: 85%;
  height: 5rem;
  margin-top: 1rem;
  margin-left: 7%;
  background: #fff;
  border-radius: 0.6rem;
}
.Home_course {
  width: 90%;
  height: 13rem;
  background: #fff;
  margin-left: 5%;
  margin-top: 0.5rem;
  border-radius: 0.6rem;
}
</style>
