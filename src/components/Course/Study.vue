<template>
  <div class="hmwBox">
    <!-- 顶部 -->
    <van-sticky>
      <div class="hmw-top">
        <van-nav-bar
          :title="hmwStudyTop.title"
          @click-left="onClickLeft"
          @click-right="onClickRight"
        >
          <!-- 这里分别是nav两侧图标 -->
          <template #right>
            <van-icon color="#595959" name="notes-o" size="22" />
          </template>
          <template #left>
            <van-icon color="#595959" name="arrow-left" size="22" />
          </template>
        </van-nav-bar>
      </div>
    </van-sticky>
    <!-- 中间主体部分 -->
    <div class="hmw-center">
      <van-list>
        <!-- 主题的上部分 -->
        <div class="hmwC-top">
          <p>共{{ hmwStudyTop.section_num }}时</p>
          <!-- <van-progress  
          v-if="hmwStudyTop.progress_rate"
            inactive
            :percentage="Number(hmwStudyTop.progress_rate)"
          /> -->
           <!-- 进度条 -->
         <div class="hmwPercent"><span :style="{width:Number(hmwStudyTop.progress_rate)+'%'}"></span></div>
          <p>已学习{{ hmwStudyTop.progress_rate }}%</p>
        </div>
        <!-- 列表部分 -->
        <ul>
          <div :key="index" v-for="(item, index) in hmwStudyList">
            <li @click="hmwVideo(item)">
              <p>
                <span class="hmwS1" style="">[回放]</span
                ><span class="hmwS2">{{
                  item.title + item.child[0].periods_title
                }}</span>
              </p>
              <p class="hmwP3">
                <span>{{ item.child[0].teachers[0].teacher_name }}</span
                ><span>{{
                  item.child[0].start_play + "-" + item.child[0].end_play
                }}</span>
              </p>
              <p class="hmwJD">
                <span class="hmwPercent" style="width:70%;"><span :style="{width:Number(hmwStudyTop.progress_rate)+'%'}"></span></span>
                <span style="font-size:0.2rem;"
                  >已观看{{ item.child[0].progress_rate }}%</span
                >
              </p>
            </li>
          </div>
        </ul>
      </van-list>
    </div>
    <!-- 底部 -->
    <van-tabbar>
      <div class="hmw-foot">
        <p @click="showPopup"  >
          <van-icon size="18" name="edit" /><span>写评论</span>
        </p>
        <p @click="$router.push('/detail')">
          <van-icon size="18" name="apps-o" /><span>课程详情</span>
        </p>
        <p>
          <van-icon size="18" name="delete" /><span>移除列表</span>
        </p>
      </div>
    </van-tabbar>
    <!-- 评论弹出层 -->
   <van-popup closeable v-model="show" @close="value=''">
     <ul>
       <li>星级：<van-rate style="font-size: 0.6rem;" color="#ea7a2f" v-model="startNum" /></li>
       <li style="display:flex;"><span style="display:block;height:100%;width:3rem;">内容：</span><textarea v-model="value" name="" id="" cols="36rem" rows="5rem"></textarea></li>
       <li style="display:flex;justify-content: center;"><van-button color="#eb6100" @click="hmwPL">发布</van-button></li>
     </ul>
   </van-popup>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      //    底部导航
      active: 0,
      // 立即学习数据
      hmwStudyList: [],
      hmwStudyTop: {},

      //  弹出框
      show: false,
      startNum:3,//星星数量
      value:'',//文本框内容
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    //   导航部分事件
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push("/lenderData");
    },
    // 统一点击事件，只是一个效果
    hmwDian() {
      Toast.success('成功');
    },
    // 获取数据
    async getList() {
      let id = sessionStorage.getItem("hmwXQid");
      let { data } = await this.$Net.courseStudy(id);
      this.hmwStudyTop = data.data.course;
      this.hmwStudyList = data.data.chapter;
      console.log(data, this.hmwStudyList);
    },
    // 弹框显示
      showPopup() {
      this.show = true;
    },
    // 点击评论
    hmwPL(){
      Toast('已评论无法再次评论');
    },
    // 点击回放
    hmwVideo(i){
      console.log(i)
      if(i.child[0].video_id==0){
        Toast('回放未生成');
      }else{
        let id = sessionStorage.getItem("hmwXQid");
      window.location.href = `http://120.53.31.103:84/video?id=${id}&video_id=${i.child[0].video_id}&title=回放`
      }
      
    }
  },
  mounted() {
    this.getList();
  },
};
</script>
<style scoped>

* {
  margin: 0;
  padding: 0;
  
}
html,
body,
.hmwBox {
  height: 100%;
}
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
/* 大体布局 */
.hmwBox {
  display: flex;
  flex-direction: column;
}
.hmw-top {
  /* height: 4rem; */
  height: 11.73333vw;
  background: white;
  border-bottom: 1px solid #f5f5f5;
  margin-bottom: 1rem;
}
.hmw-center {
  flex: 1;
}
.hmw-foot {
  height: 9.86667vw;
  background-color: #fff;
  z-index: 999;
  width: 100%;
  border-top: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* 主体部分----------------------------------------------------------------------------- */
/* 主题的上半部分 */
.hmwC-top {
  font-size: 3.46667vw;
  color: #595959;
  height: 13vw;
  line-height: 13.86667vw;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
/* 进度条部分 */
.hmwPercent{
  width: 55%;
  height: 0.2rem;
  background-color: #f5f5f5;
    position: relative;
    border-radius: 0.14rem;
}
.hmwPercent>span{
  display: block;
  height: 100%;
  background:#eb6100;
 border-radius: 0.14rem;
  /* width: 10%; */
}
/* 列表部分 */
.hmw-center ul li {
  list-style: disc;
  color: #eb6100;
}
.hmw-center ul > div {
  margin-right: 1rem;
  margin-left: 0.7rem;
  margin-top: 1rem;
  border: 0.53333vw solid #e9e9e9;
  border-radius: 1.06667vw;
  padding: 4vw 4vw 4vw 7vw;
  /* width: 90%; */
}
/* span部分 */
.hmwS1 {
  /* padding: 0.2rem 0.4rem; */
  font-size: 0.1rem;
  color: #ea7a2f;
  border-radius: 0.2rem;
  margin-right: 0.4rem;
}
.hmwS2 {
  font-size: 3.2vw;
  font-weight: 400;
  color: #595959;
}
.hmw-center .hmwP3 {
  font-size: 3.6vw;
  padding: 0.5rem;
}
.hmwP3 {
  font-size: 4vw;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.45);
}
/* 主体的进度条部分 */
.hmwJD {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.hmwJD span {
  color: #8c8c8c;
  font-size: 0.2rem;
}
/* 底部导航布局------------------------------------------------------------------------- */
.hmw-foot p {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.2vw;
  color: #8c8c8c;
  vertical-align: middle;
  margin-left: 1.33333vw;
  height: 100%;
}
.hmw-foot p span {
  margin-left: 0.2rem;
}
.van-tabbar {
  height: 9.86667vw;
}

/* 遮罩层 */
/* 弹框样式 */
.van-popup{
  box-sizing: border-box;
  padding:2rem 1rem;
  width: 95%;
  border-radius: 0.2rem;
  padding-bottom: 0;
}
.van-popup li{
  margin-bottom: 1.5rem;
  font-size: 0.3rem;
  color: #595959;
}
.van-popup .van-popup__close-icon{
  font-size: 0.12rem;
}
.van-popup li .van-rate{
  font-size: 0.14rem;
}
/* 星星 */
.van-popup .van-rate__icon--full,.van-popup .van-rate__icon{
font-size: 0.6rem;
}
textarea{
  border-color:#ccc;
  border-radius: 0.1rem;
}
.van-popup .van-button{
  width: 6rem;
  height: 2rem;
  font-size: 0.14rem;
}
</style>
