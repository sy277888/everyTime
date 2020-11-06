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
    <div class="solo_boxtop"></div>
    <!-- 选择栏 -->
    <div class="Solo_Dropdown">
      <div
        :class="
          Dropdownleft == false ? 'Solo_Dropdown_left' : 'Solo_Dropdown_lefts'
        "
        @click="left"
      >
        选择上课时间
        <i
          :class="
            Dropdownleft == true ? 'el-icon-caret-top' : 'el-icon-caret-bottom'
          "
        />
      </div>
      <div
        :class="
          Dropdownrigth == false
            ? 'Solo_Dropdown_right'
            : 'Solo_Dropdown_rights'
        "
        @click="rigth"
      >
        选择老师条件
        <i
          :class="
            Dropdownrigth == true ? 'el-icon-caret-top' : 'el-icon-caret-bottom'
          "
        />
      </div>
    </div>
    <div class="Solo_Dropdown_left_box" v-show="Dropdownleft">
      <van-calendar
        title="日历"
        :poppable="false"
        :show-confirm="false"
        :show-title="false"
        :style="{ height: '350px' }"
      />
      <div class="Solo_Dropdown_left_box_bottom">
        <p>时段</p>
        <el-time-select
          placeholder="起始时间"
          v-model="startTime"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
          }"
        >
        </el-time-select>
        <el-time-select
          placeholder="结束时间"
          v-model="endTime"
          :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30',
            minTime: startTime,
          }"
        >
        </el-time-select>
      </div>
    </div>
    <!-- 右下拉 -->
    <div class="Solo_Dropdown_right_box" v-show="Dropdownrigth">
      <div class="Solo_Dropdown_right_box_a">
        <p>老师类型</p>
        <ul class="Solo_Dropdown_right_box_a_ul">
          <li
            v-for="(item, index) in classify"
            :key="index"
            :class="
              index == lxId
                ? 'Solo_Dropdown_right_box_a_ul_li_title'
                : 'Solo_Dropdown_right_box_a_ul_li'
            "
            @click="Dropdown(index)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="Solo_Dropdown_right_box_b">
        <p>年纪</p>
        <ul class="Solo_Dropdown_right_box_a_ul">
          <li
            v-for="(item, index) in child"
            :key="index"
            :class="
              index == lxId
                ? 'Solo_Dropdown_right_box_a_ul_li_title'
                : 'Solo_Dropdown_right_box_a_ul_li'
            "
            @click="Dropdown(index)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="Solo_Dropdown_right_box_c">
        <p>学科</p>
        <ul class="Solo_Dropdown_right_box_a_ul">
          <li
            v-for="(item, index) in childtitile"
            :key="index"
            :class="
              index == lxId
                ? 'Solo_Dropdown_right_box_a_ul_li_title'
                : 'Solo_Dropdown_right_box_a_ul_li'
            "
            @click="Dropdown(index)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="Solo_Dropdown_right_box_d">
        <p>性别</p>
        <ul class="Solo_Dropdown_right_box_a_ul">
          <li
            v-for="(item, index) in data"
            :key="index"
            :class="
              index == lxId
                ? 'Solo_Dropdown_right_box_a_ul_li_title'
                : 'Solo_Dropdown_right_box_a_ul_li'
            "
            @click="Dropdown(index)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="Solo_Dropdown_botton">
        <div class="Solo_Dropdown_botton_left" @click="BottonLeft">重置</div>
        <div class="Solo_Dropdown_botton_right" @click="BottonRight">确认</div>
      </div>
    </div>
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
          <div class="Solo_list_right_but" @click="Ongo(item)">预约</div>
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
      Dropdownleft: false, //左边下拉框
      Dropdownrigth: false, //右边下拉框\
      startTime: "", //左边下拉时间
      endTime: "",
      classify: [], //右下拉老师类型,
      lxId: -1, //类型id
      child: [], //年级
      childtitile: [], //学课
      data: [], //性别
      ti:[]
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
    ShowPopup() {
      this.show = true;
    },
    left() {
      this.Dropdownleft = !this.Dropdownleft;
      this.Dropdownrigth = false;
    },
    rigth() {
      this.Dropdownrigth = !this.Dropdownrigth;
      this.Dropdownleft = false;
    },
    Dropdown(index) {
      this.lxId = index;
    },
    BottonLeft(){
       this.$router.push({
         path:'/solo',
         name:'Solo'
       })
       this.order = []
         this.Dropdownrigth =false
    },
    BottonRight(){
      this.$router.push({
         path:'/solo',
         name:'Solo'
       })
       this.Dropdownrigth =false
       this.order = this.ti
    }
  },
  created() {
    this.$Net.List().then((res) => {
      this.order = res.data.data[4].list;
      // console.log(this.order);
    });
    this.$axios.get("http://localhost:8080/name.json").then((res) => {
      this.classify = res.data.data.classify;
      this.child = res.data.data.attrclassify[0].child;
      this.childtitile = res.data.data.attrclassify[1].child;
      this.data = res.data.data.data;
      this.ti = res.data.data.ti
      console.log(this.ti);
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
.Solo_list_left_title {
  font-size: 0.8rem;
}
.Solo_list_left ul {
  width: 10rem;
  height: 100%;
}
.Solo_list_right {
  width: 50%;
  height: 100%;
}
.Solo_list_right_but {
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
  height: 18rem;
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
.solo_boxtop {
  height: 5rem;
  width: 100%;
}
.Solo_Dropdown {
  width: 100%;
  height: 2.5rem;
  position: fixed;
  background: #fff;
  top: 2.6rem;
  display: flex;
  justify-content: space-between;
}
.Solo_Dropdown_right {
  width: 50%;
  text-align: center;
  line-height: 2.5rem;
  color: rgb(150, 150, 150);
}
.Solo_Dropdown_rights {
  width: 50%;
  text-align: center;
  line-height: 2.5rem;
  color: rgb(235, 97, 0);
}
.Solo_Dropdown_lefts {
  width: 50%;
  text-align: center;
  line-height: 2.5rem;
  color: rgb(235, 97, 0);
}
.Solo_Dropdown_left {
  width: 50%;
  text-align: center;
  line-height: 2.5rem;
  color: rgb(150, 150, 150);
}
.el-icon-caret-bottom {
  color: gainsboro;
}
.Solo_Dropdown_left_box {
  width: 100%;
  height: 36.5rem;
  position: fixed;
  background: rgb(240, 240, 240);
  z-index: 999;
  top: 5rem;
}
.Solo_Dropdown_right_box {
  width: 100%;
  height: 36.5rem;
  position: fixed;
  background: rgb(240, 240, 240);
  z-index: 999;
  top: 5rem;
}
.Solo_Dropdown_left_box_bottom {
  margin-top: 2rem;
  width: 94%;
  margin-left: 3%;
  height: 5rem;
  background: #fff;
  border-radius: 0.5rem;
}
.el-date-editor.el-input {
  width: 10rem;
  margin-left: 0.5rem;
  margin-top: 0.6rem;
  color: black;
}
.Solo_Dropdown_left_box_bottom p {
  width: 100%;
  height: 1.2rem;
  display: block;
  text-align: left;
  color: black;
  font-size: 0.8rem;
  margin-left: 1rem;
}
.Solo_Dropdown_right_box_a {
  width: 94%;
  height: 11.5rem;
  margin-left: 3%;
  background: #fff;
  margin-top: 1rem;
  border-bottom: 0.05rem solid gainsboro;
}
.Solo_Dropdown_right_box_a p {
  width: 100%;
  height: 1rem;
  text-align: left;
  font-size: 0.8rem;
  display: block;
}
.Solo_Dropdown_right_box_a_ul {
  width: 100%;
}
.Solo_Dropdown_right_box_a_ul_li {
  width: 3.5rem;
  height: 1.5rem;
  display: block;
  float: left;
  font-size: 0.6rem;
  text-align: center;
  line-height: 1.5rem;
  background: rgb(245, 245, 245);
  margin-left: 0.8rem;
  margin-top: 1rem;
}
.Solo_Dropdown_right_box_a_ul_li_title {
  width: 3.5rem;
  height: 1.5rem;
  display: block;
  float: left;
  font-size: 0.6rem;
  text-align: center;
  line-height: 1.5rem;
  background: rgb(235, 238, 254);
  margin-left: 0.8rem;
  margin-top: 1rem;
  color: rgb(235, 97, 0);
}
.Solo_Dropdown_right_box_b {
  width: 94%;
  height: 5rem;
  margin-left: 3%;
  background: #fff;
  margin-top: 1rem;
  border-bottom: 0.05rem solid gainsboro;
}
.Solo_Dropdown_right_box_c {
  width: 94%;
  height: 5rem;
  margin-left: 3%;
  background: #fff;
  margin-top: 1rem;
  border-bottom: 0.05rem solid gainsboro;
}
.Solo_Dropdown_right_box_d {
  width: 94%;
  height: 5rem;
  margin-left: 3%;
  background: #fff;
  margin-top: 1rem;
  border-bottom: 0.05rem solid gainsboro;
}
.Solo_Dropdown_botton {
  width: 100%;
  height: 3rem;
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
}
.Solo_Dropdown_botton_left {
  width: 50%;
  height: 3rem;
  line-height: 3rem;
  background: #fff;
  font-size: 1.2rem;
  text-align: center;
  color: rgb(235, 97, 0);
}
.Solo_Dropdown_botton_right {
  width: 50%;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  background: rgb(235, 97, 0);
  font-size: 1.2rem;
  color: #fff;
}
</style>
