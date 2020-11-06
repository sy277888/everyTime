<template>
  <div>
    <!-- 顶部 -->
    <van-nav-bar @click-left="onClickLeft" >
  <template #left>
    <van-icon name="arrow-left" color=" #595959" size="18"/>
  </template>
  <template #title>
    <p>我的学习</p>
  </template>
  <template #right>
    <van-icon name="notes-o" color=" #595959" size="18" @click="$router.push('/lenderData')"/>
  </template>
</van-nav-bar>
<!-- 导航 -->
    <van-tabs @click="hmwDian($event)" line-height="0.08rem" title-active-color="#eb6100">
  <van-tab :key="index" v-for="(item,index) in hmwNav">
    <template #title>{{item.name+'('+item.num+')'}}</template>
    <ul>
      <!-- 列表部分 -->
     <li v-for="(i,xb) in hmwList" :key="xb" v-show="i.course_type==item.type" @click="hmwJump(i)">
       <p>{{i.title}}</p>
       <div class="hmwtime">
<van-icon name="clock-o" size="12" color="#ccc" style="font-weight:700;"/>
<p>{{i.start_play_date|timefn}}~{{i.end_play_date|timefn}} | 共{{i.section_num}}课时</p>
       </div>
       <div class="hmwpercent">
         <!-- 进度条 -->
         <div><span :style="{width:i.progress_rate+'%'}"></span></div>
         <p>已学习{{i.progress_rate}}%</p>
       </div>
     </li>
    </ul>
  </van-tab>
</van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hmwNav:[],//导航
      hmwList:[],//列表
     hmwNavId:0,//导航渲染页面id
    };
  },
  mounted() {
    // this.getList(this.hmwNavId)
    this.getList(2)
    this.hmwGetList(7)
  },
  created(){
    
  },
  methods: {
    onClickLeft() {
      //回到上一页
      this.$router.go("-1");
    },
    // 获取数据
    async getList(i) {
      // 导航
      let { data:msg } = await this.$Net.hmwStudyNav(i)
       console.log(msg.data)
      this.hmwNav = msg.data.typeNum
      this.hmwList = msg.data.courseList
      this.hmwNavId = this.hmwNav[0].type
    },
    // 导航点击事件
    hmwDian(i){
      this.getList(this.hmwNav[i].type)
    },
    // 跳转到学习详情页面
    hmwJump(i){
      sessionStorage.setItem('hmwXQid',i.course_id+'')
      this.$router.push('/study')
    },
    // 获取导航栏数据所有看看
    async hmwGetList(i) {
      // 导航
      let { data:msg } = await this.$Net.hmwStudyNav(i)
       console.log(msg.data)
     
    },
  },
};
</script>

<style scoped>
/* 顶部 */
.van-nav-bar p{
    font-size: 4.8vw;
    color: #595959;
}
.van-nav-bar{
height: 11.73333vw;
}
/* 列表部分 */
.van-tabs .van-tabs__nav--line{
  height: 80% !important;
}
.van-tab{
  color: #646566;
    font-size: 14px;
    line-height: 20px;
}
.van-tabs ul{
  border-top: 0.03rem solid #eee;
  padding: 2.66667vw 4vw;
}
.van-tabs ul li{
background-color: #fff;
    border-radius: 1.33333vw;
    padding: 6vw 3.73333vw;
    margin-bottom: 4vw;
    position: relative;
    box-shadow: 0 0 2vw rgba(0,0,0,.1);
}
/* 标题 */
.van-tabs ul li>p{
  font-size: 4.26667vw;
    font-weight: 400;
    color: #333;
    vertical-align: top;
}
/* 时间部分 */
.van-tabs ul li>div{
  display: flex;
  align-items: center;
}
.van-tabs ul li>.hmwtime{
    margin: 0.4rem 0 1.6rem 0;
}
.van-tabs ul li>.hmwtime>p{
    color: #666;
  font-size: 0.16rem;
  margin-left: 0.3rem;
}
.van-tabs{
  border-top: 0.03rem solid #eee;
}
/* 进度条部分 */
.hmwpercent>div{
  width: 30%;
  height: 0.22rem;
  background-color: #f5f5f5;
    position: relative;
    border-radius: 0.14rem;
}
.hmwpercent>div>span{
  display: block;
  height: 100%;
  background:#eb6100;
 border-radius: 0.14rem;
  /* width: 10%; */
}
.hmwpercent p{
  font-size: 3.4vw;
    color: #8c8c8c;
    margin-left: 0.5rem;
}
</style>
