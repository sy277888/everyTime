<template>
  <div>
    <!-- 一对一辅导顶部导航栏 -->
    <van-nav-bar fixed>
      <template #title>
        <span class="Solo_top_title">一对一辅导</span>
      </template>
      <template #left>
        <van-icon name="arrow-left" size="30px" color="gray" @click="Onback" />
        <!-- <van-icon name="arrow-left" size="30px" color="gray"  @click="lefts"/> -->
      </template>
      <template #right>
        <van-icon name="search" size="25px" color="gray" @click="search" />
      </template>
    </van-nav-bar>
    <!-- 选择栏 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1">
        <div class="Solo_Popup">
          <van-calendar
            :show-title="false"
            :poppable="false"
            :show-confirm="false"
            :style="{ height: '450px' }"
          />
        </div>
      </van-dropdown-item>
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <!-- 选择框结束 -->
    <!-- 渲染讲师列表 -->
    <div class="Solo_list_box">
      <div v-for="(item, index) in order" :key="index" class="Solo_list">
        <div class="Solo_list_left">
          <img :src="item.teacher_avatar" alt="" />
          <ul>
            <li class="Solo_list_left_title">{{ item.teacher_name }}</li>
            <li class="Solo_list_title">8年金牌讲师</li>
          </ul>
        </div>
        <div class="Solo_list_right">
            <div class="Solo_list_right_but" @click="Ongo(item)">
                      预约
            </div>
        </div>
      </div>
    </div>
    <!-- 如果没有token则展示请求登录页 -->
    <van-popup v-model="show" closeable class="Solo_Prpup">
      <img
        src="https://wap.365msmk.com/img/feiji.decaf161.png"
        alt=""
        width="100%"
      />
      <p class="Solo_Prpup_title">赶紧登录一下吧</p>
      <p class="Solo_Prpup_titles">立即预约一对一辅导，浏览更多视频教程~</p>
      <van-button
        round
        type="info"
        color="rgb(235, 97, 0)"
        class="Solo_Prpup_but"
        @click="Onpath"
        >立即登录</van-button
      >
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      order: [], //预约老师名单
      value1: 0, //第一个下拉框
      value2: "a", //第二个下拉框
      show: false, //弹出框状态
      option1: [{ text: "选择上课时间", value: 0 }],
      option2: [{ text: "选择老师条件", value: "a" }],
    };
  },
  methods: {
    Onback() {
      this.$router.back();
    },
    Ongo(item) {
      var token = localStorage.getItem("token");
      if ((token = !token)) {
        this.show = true;
      } else if ((token = !token)) {
        this.$router.push({
          path: "/sololist",
          query: {
            id: item.teacher_id,
          },
        });
      }
    },
    Onpath() {
      this.$router.push({
        path: "/login",
      });
    },
    search() {
      this.$router.push("/search");
    },
  },
  created() {
    this.$Net.List().then((res) => {
      this.order = res.data.data[4].list;
      console.log(this.order);
    });
  },
};
</script>
<style scoped>
.Solo_top_title {
  font-size: 1.2rem;
  color: gray;
}
.Solo_Popup {
  width: 100%;
  height: 26rem;
}
.Solo_list_box {
  width: 100%;
  height: 55rem;
  background: rgb(240, 240, 240);
}
.Solo_list {
  width: 90%;
  margin-left: 5%;
  height: 6rem;
  background: #fff;
  border-radius: 1rem;
  margin-top: 0.6rem;
  line-height: 3rem;
  display: flex;
  justify-content: space-between;
}
.Solo_list_left {
  width: 3rem;
  height: 100%;
}
.Solo_list_left img {
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  margin-top: 1.5rem;
  margin-left: 1rem;
  float: left;
}
.Solo_list_title {
  font-size: 0.7rem;
  color: gray;
}
.Solo_list_left_title{
  font-size: 0.8rem;
}
.Solo_list_left ul{
  width: 10rem;
  height: 100%;
}
.Solo_list_right{
  width: 50%;
  height: 100%;
}
.Solo_list_right_but{
  width: 4rem;
  height: 2rem;
  border-radius: 1rem;
  border: 0.05rem solid gainsboro; 
  margin-left: 5rem;
  margin-top: 2rem;
  color: rgb(235, 97, 0);
  background: rgb(235, 238, 254);
  line-height: 2rem;
  text-align: center;
}
/* / */
.Solo_Prpup {
  width: 18rem;
  height: 20rem;
  border-radius: 1rem;
  text-align: center;
}
.Solo_Prpup img {
  width: 100%;
  height: 10rem;
}
.Solo_Prpup_title {
  font-size: 0.9rem;
}
.Solo_Prpup_titles {
  font-size: 0.7rem;
  color: gray;
}
.Solo_Prpup_but {
  margin-top: 1rem;
  width: 80%;
}
</style>
