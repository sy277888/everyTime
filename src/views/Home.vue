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
    <div class="Home_overall">111
      <!-- 主页推荐 -->
      <ul class="Home_advice">
        <li>
          <img src="../assets/1.png" alt="" class="img" />
          <p>特色课</p>
        </li>
        <li>
          <img src="../assets/2.png" alt="" class="img" />
          <p>一对一辅导</p>
        </li>
        <li>
          <img src="../assets/3.png" alt="" class="img" />
          <p>学习日历</p>
        </li>
      </ul>
      <!-- 名师推荐 -->
      <div class="Hh"></div>
      <p><span class="Home_probably_P"></span>名师推荐</p>
      <div v-for="(item, index) in probably.slice(1, 3)" :key="index + 'a'" @click="Onclick(item)">
        <div class="Home_teacher">
          <ul>
            <li>
              <img :src="item.teacher_avatar" alt="" />
              <p class="Home_teacher_title">{{ item.teacher_name }}</p>
              <p class="Home_teacher_p">{{ item.introduction }}</p>
            </li>
          </ul>
        </div>
      </div>
      <!-- 精品课程 -->
      <p><span class="Home_probably_P"></span>精品课程</p>
      <div v-for="(item, index) in course" :key="index + 'b'">
        <div class="Home_course">
          <div class="Home_course_box">
            <p>
              每时每课特级教师-自主招生冲刺讲座知识点总结————{{ item.title }}
            </p>
            <img :src="item.cover_img" alt="" class="Home_course_img" />
            <p>{{ courseTitle }}</p>
            <p>
              <span class="Home_course_title"
                >{{ item.sales_num }}人已报名
                <span class="Home_course_p_title"
                  >￥{{ item.total_periods }}</span
                ></span
              >
            </p>
          </div>
        </div>
      </div>
      <!-- 推荐课程 -->
      <p><span class="Home_probably_P"></span>推荐课程</p>
      <div v-for="(item, index) in courses" :key="index + 'c'">
        <div class="Home_course">
          <div class="Home_course_box">
            <p>
              每时每课特级教师-自主招生冲刺讲座知识点总结————{{ item.title }}
            </p>
            <img :src="coursesImg" alt="" class="Home_course_img" />
            <p>{{ courseTitle }}</p>
            <p>
              <span class="Home_course_title"
                >{{ item.sales_num }}人已报名
                <span class="Home_course_p_title"
                  >￥{{ item.total_periods }}</span
                ></span
              >
            </p>
          </div>
        </div>
      </div>
      <!-- 明星讲师 -->
      <p><span class="Home_probably_P"></span>明星讲师</p>
      <div v-for="(item, index) in teacher.slice(1, 6)" :key="index + 'd'">
        <div class="Home_teacher">
          <ul>
            <li>
              <img :src="item.teacher_avatar" alt="" />
              <!-- <span class="Home_title">M{{item.introduction}}</span> -->
              <p class="Home_teacher_title">{{ item.teacher_name }}</p>
              <p class="Home_teacher_p">{{ item.introduction }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      probably: [], //名师推荐
      course: [], //精品课程
      courseTitle: [], //精品课程讲师名字
      courses: [], //推荐课程
      coursesImg: [], //推荐课程老师照片
      teacher: [], //明星讲师
    };
  },
  mounted() {
    this.$Net.List().then((res) => {
      this.probably = res.data.data[0].list;
      this.course = res.data.data[1].list;
      this.courseTitle = res.data.data[1].list[0].teachers_list[0].teacher_name;
      this.courses = res.data.data[3].list;
      this.coursesImg =
        res.data.data[3].list[0].teachers_list[0].teacher_avatar;
      this.teacher = res.data.data[4].list;
      console.log(this.teacher);
    });
  },
  methods:{
    Onclick(item){
   this.$router.push({
     path:"/"
   })
    }
  }
};
</script>
<style  scoped>
.Home_overall {
  width: 100%;
  height: 145rem;
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
.Home_teacher ul li img {
  width: 3rem;
  height: 3rem;
  border-radius: 5rem;
  margin-top: 1rem;
  float: left;
}
.Home_teacher_title {
  font-size: 1rem;
  line-height: 2.5rem;
  margin-left: 4rem;
}
.Home_teacher_p {
  color: gray;
  margin-left: 4rem;
  font-size: 0.8rem;
}
.Home_course {
  width: 90%;
  height: 13rem;
  background: #fff;
  margin-left: 5%;
  margin-top: 0.5rem;
  border-radius: 0.6rem;
}
.Home_course_img {
  width: 3rem;
  height: 3rem;
  border-radius: 5rem;
  margin-top: 1rem;
}
.Home_course_title {
  color: gray;
  font-size: 0.7rem;
}
.Home_course_p_title {
  font-size: 0.8rem;
  color: red;
  float: right;
}
.Home_title {
  font-size: 0.6rem;
}
.img {
  margin-top: 0.5rem;
  width: 3rem;
}
</style>
