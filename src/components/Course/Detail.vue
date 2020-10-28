<template>
  <div class="hmw">
    <!-- 这里是详情页面 -->
    
        <!-- 吸顶试试 -->
        <van-sticky>
            <div class="hmw-top">
            <!-- 原生的导航 -->
      <van-icon name="arrow-left" @click="$router.push('/about')" />
      <p v-show="!hmwFlag">课程详情</p>
      <div class="hmwNav" v-show="hmwFlag">
          <span :class="hmwIndex==0?'hmwActiveTop':''" @click="hmwDian(310,0)" id="hmwKc">课程介绍</span>
          <span :class="hmwIndex==1?'hmwActiveTop':''" @click="hmwDian(394,1)" id="hmwDg">课程大纲</span>
          <span :class="hmwIndex==2?'hmwActiveTop':''" @click="hmwDian(1125,2)" id="hmwPj">课程评价</span>
      </div>
      <van-icon name="cluster-o" />
    </div>
</van-sticky>
      
    <!-- 中间部分 -->
    <div class="hmw-center" style="background: #f0f2f5;">
      <!-- 可滑动啥的 -->
      <van-list>
        <ol>
          <!-- 详情 -->
          <li class="hmwXQ" v-if="hmwObj.teachers_list">
            <p class="hmwP1 hmwTOP1">{{hmwObj.title}}</p>
            <p class="hmwP2">{{hmwObj.price==0?'免费':hmwObj.price}}</p>
            <p class="hmwP3">共{{hmwObj.total_periods}}课时 | {{ hmwObj.brows_num }}人已报名</p>
            <p class="hmwP3">开课时间：{{ hmwObj.start_play_date | timefnxq }} - {{
                    hmwObj.end_play_date | timefnxq
                  }}</p>
            <van-icon name="star-o" />
          </li>
          <!-- 教学团队 -->
          <li class="hmwTD">
            <p class="hmwP1">教学团队</p>
            <div>
              <img :src="hmwObj.teachers_list[0].teacher_avatar" alt="" /><span
                  >{{ hmwObj.teachers_list[0].teacher_name }}</span
                >
            </div>
          </li>
          <!-- 课程介绍 -->
          <li class="hmwJS">
            <p class="hmwP1">课程介绍</p>
          </li>
          <!-- 课程大纲 -->
          <li class="hmwDG" style="padding-bottom: 2px;">
            <p class="hmwP1">课程大纲</p>
            <!-- 无序列表 -->
            <ul>
              <li :key="index" v-for="(item, index) in 10">
                <p>
                  <span class="hmwS1" style="">回放</span
                  ><span class="hmwS2">第二讲第一课时</span>
                </p>
                <p class="hmwP3">共8课时 | 134人已报名</p>
              </li>
            </ul>
          </li>
          <!-- 课程评论 -->
          <li class="hmwPL">
            <p class="hmwP1">课程评论</p>
            <ul>
              <li :key="index" v-for="(item, index) in 10">
                <img :src="hmwObj.teachers_list[0].teacher_avatar" alt="" />
                <div class="hmwPL-center">
                  <p class="hmwCP1">
                    <span>1234566789</span
                    ><van-rate
                      :size="14"
                      void-color="#eee"
                      color="rgb(234, 122, 47)"
                      v-model="value"
                      readonly
                    />
                  </p>
                  <p class="hmwCP2">好</p>
                </div>
                <div class="hmwPL-right">2020-07-15 21:32</div>
              </li>
            </ul>
          </li>
        </ol>
      </van-list>
    </div>
    <!-- 底部按钮 -->
    <van-tabbar>
  <div class="hmw-foot">
      <van-button v-if="!hmwBtnFlag" type="primary" block @click="hmwStudyJump()">立即报名</van-button>
      <van-button v-if="hmwBtnFlag" type="primary" block @click="hmwStudyJump()">立即学习</van-button>
    </div>
</van-tabbar>
    
  </div>
</template>

<script>
export default {
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      //    导航要求的--选中哪一个
      active: 2,
      //   显示导航
      hmwFlag: false,
      hmwIndex:0,
    //   二维码是否出现
      hmwShow:false,
    //   页面渲染的主数据
    hmwObj:JSON.parse(sessionStorage.getItem('hmwXQ')),
    // 底部按钮状态（有没有登录）
    hmwBtnFlag:false,
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    //   nav是否显示判断事件
     scrollHandle: function(e) {
        var top = e.srcElement.scrollingElement.scrollTop;    // 获取页面滚动高度
        if (top > 0) {
         this.hmwFlag=true
        } else{
          this.hmwFlag = false
        }
      },
    //   nav的点击事件
    hmwDian(i,id){
      console.log(this.$el)
      // let anchor = this.$el.querySelector(selector);
        // document.getElementById(i).scrollIntoView();
        // 相当于锚点
        document.documentElement.scrollTop =i
        // 样式的改变
        this.hmwIndex = id
    },
    // 立即学习点击事件
    hmwStudyJump(){
        this.$router.push('/study')
         document.documentElement.scrollTop =0
    }
  },
  mounted() {
      console.log(this.hmwObj)
      document.documentElement.scrollTop =0
    window.addEventListener('scroll', this.scrollHandle);  // 绑定页面的滚动事
  },
  updated(){
    // document.documentElement.scrollTop =0
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
html,
body,
body > div,
#app {
  height: 100%;
}
/* 大体布局----------------------------------------------------------- */
.hmw {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.hmw-top {
  height: 3rem;
  padding: 0 1rem;
  background: white;
  border-bottom: 0.01rem solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hmw-center {
  /* min-height: 4rem; */
  flex: 1;
  margin-bottom: 2.8rem;
}
.hmw-foot {
  /* background: darkseagreen; */
  width: 100%;
  height: 2.8rem;
  z-index: 99999;
}
/* 头部导航的布局 ------------------------------------------------------------------*/
/* 原生写导航的布局 */

.hmw-top .van-icon {
  font-size: 1.4rem;
  /* margin-top: 0.8rem; */
  color: #646464;
}
.hmw-top p {
  font-size: 4.8vw;
  color: #595959;
}
.hmwNav{
    display: flex;
    width: 80%;
}
.hmwNav span{
    flex: 1;
    text-align: center;
    font-size: 4vw;
    font-weight: 400;
    color: #8c8c8c;
}
.hmwNav .hmwActiveTop{
    flex: 1;
    text-align: center;
    color: #333;
    font-weight: 500;
    font-size: 4.26667vw;
}
/* 中间部分布局 -------------------------------------------------------------------------------------*/
.hmw-center ol > li {
  background: white;
  padding: 1rem;
  margin-bottom: 1rem;
}
.hmw-center ol > li > p,
.hmw-center ol > li > .hmwTOP1 {
  padding-bottom: 0.5rem;
}
/* 第一行文本 */
.hmw-center .hmwP1 {
  padding-bottom: 1rem;
  font-size: 4.26667vw;
}
.hmwP2 {
  color: #eb6100;
  font-size: 4.53333vw;
}
.hmwP3 {
  font-size: 4vw;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.45);
}
.hmwP4 {
  color: #eb6100;
  font-size: 4.53333vw;
}
/* 最上面li的样式 */
.hmw-center .hmwXQ {
  position: relative;
}
.hmwXQ .van-icon {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  font-size: 1.2rem;
  color: #646464;
  font-weight: bold;
}
/* 教学团队 */
.hmwTD>div{
    display: flex;
    flex-direction: column;
font-size: 3.2vw;
    font-weight: 400;
    color: #595959;
    align-items: center;
    width: 4.5rem;
}
.hmwTD img{
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 2rem;
}
.hmwPL img{
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 1rem;
}
.hmwTD span{
    padding: 2.13333vw .8vw 0;
    padding-top: 1vw;
    padding-bottom: 1rem;
}
/* 课程大纲 */
.hmwDG ul > li {
  list-style: disc;
  color: #eb6100;
  margin: 0 2rem;
  margin-bottom: 1rem;
}
/* span部分 */
.hmwS1 {
  padding: 0.2rem 0.4rem;
  font-size: 0.1rem;
  background: #ea7a2f;
  color: white;
  border-radius: 0.2rem;
  margin-right: 0.5rem;
}
.hmwS2 {
  font-size: 3.2vw;
  font-weight: 400;
  color: #595959;
}
.hmwDG .hmwP3 {
  font-size: 3.6vw;
  padding: 0.5rem;
}
/* 课程讲评 */
.hmwPL li{
    display: flex;
    justify-content: space-between;
    padding-left: 1rem;
    padding-bottom: 1rem;
}
.hmwPL-center .hmwCP1{
    display: flex;
    flex-wrap: nowrap;
    font-size: 3.73333vw;
    font-weight: 400;
    color: #333;
}
.hmwPL-center .hmwCP1 span{
    margin-right: 0.5rem;
}
.hmwCP2{
    padding: 0.8rem 0;
    line-height: 3.4vw;
    color: #999;
    font-size: 3.2vw;
}
.hmwPL-right{
font-size: 3.2vw;
    font-weight: 400;
    color: #999;
    text-align: right;
}
/* 评分小图标样式 */
.hmwPL .van-rate__item{
    padding-left: 0;
}
/* 底部的按钮 -----------------------------------------------------------------------------------------*/
.hmw-foot .van-button {
  background: #eb6100;
  color: white;
  border: none;
  height: 2.8rem;
  font-size: 1.2rem;
}
.van-tabbar{
    height: 2.8rem;
}
</style>
