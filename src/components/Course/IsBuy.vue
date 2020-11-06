<template>
<div class="hmwBox" style="height:100%;">
     <!-- 顶部 -->
    <!-- <van-sticky> -->
      <div class="hmw-top">
        <van-nav-bar
          title="确认订单"
          @click-left="onClickLeft"
        >
          <!-- 图标 -->
          <template #left>
            <van-icon color="#595959" name="arrow-left" size="22" />
          </template>
        </van-nav-bar>
      </div>
    <!-- </van-sticky> -->
     <!-- 中间主体部分 -->
    <div class="hmw-center" style="background: #f0f2f5;">
      <van-list style="background: #f0f2f5;">
          <!-- 中间顶部 -->
          <div class="hmwc-top">
              <div>
                  <p class="hmwP1">{{hmwList.title}}</p>
                  <span>{{(hmwList.price/100).toFixed(2)}}</span>
              </div>
              <p class="hmwP2">授课老师：{{hmwList.teacher_name}}</p>
          </div>
          <ul>
              <li class="hmwLi1">
                  <p>优惠券</p>
                  <p style="color:#969799;">{{hmwList.has_coupon==0?'无可用':hmwList.has_coupon}}</p>
              </li>
              <li class="hmwLi2" v-if="hmwList.checked_coupon">
                  <p><span style="color:#969799;">商品金额</span><span class="hmwSpanNum"><van-icon color="orange" name="gold-coin" />&emsp;{{(hmwList.price/100).toFixed(2)}}</span></p>
                  <p><span style="color:#969799;">优惠券金额</span><span class="hmwSpanNum"><van-icon color="orange" name="gold-coin" />&emsp;{{hmwList.checked_coupon.full_reduction==0?0:(hmwList.checked_coupon.full_reduction/100).toFixed(2)}}</span></p>
                  <p><span style="color:#969799;">合计</span><span class="hmwSpanNum" style="color:#eb6100;"><van-icon color="orange" name="gold-coin" />&emsp;{{(hmwList.order_price/100).toFixed(2)}}</span></p>
              </li>
          </ul>
      </van-list>
    </div>
    <!-- 底部 -->
    <van-tabbar>
      <div class="hmw-foot">
       <div>
           <span>实付价格</span>
           <van-icon color="orange" name="gold-coin" />
           <p>{{(hmwList.order_price/100).toFixed(2)}}</p>
       </div>
       <van-button type="primary" block color="#eb6100" @click="showPopup">提交订单</van-button>
      </div>
    </van-tabbar>
    <van-popup v-model="show" closeable>
      <ul>
        <li style="font-size: 3.2vw;">提示</li>
        <li><van-icon name="warning" color="#eb6100" /><span>{{hmwPs}}</span></li>
        <li><button style="margin-left:49%;" @click="show=false">取消</button> <button style="background:#409eff;color:white;" @click="$router.push('/yuer')">去充值</button></li>
      </ul>
    </van-popup>
</div>
</template>

<script>
import { Toast } from "vant";
export default {
  // 组件名称
  name: 'demo',
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data () {
   return {
    //  页面渲染数据
     hmwList:[],
    // 弹出框
    show: false,
    // 弹出框提示
    hmwPs:''
   }
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    //   返回的点击事件
    onClickLeft(){
        this.$router.push('/detail')
    },
    // 获取渲染数据
    async hmwgetList(){
      let xq = JSON.parse(sessionStorage.getItem('hmwXQ'))
      console.log(xq.id,xq.course_type)
      let {data} = await this.$Net.courseBuy({
        shop_id:xq.id+'',
        type:xq.course_type
      })
      
      this.hmwList = data.data.info
      console.log(this.hmwList)
    },
    // 弹出框
    async showPopup() {
      let xq = JSON.parse(sessionStorage.getItem('hmwXQ'))
      // 获取一下数据
      let {data} = await this.$Net.courseSubmit({
        shop_id:xq.id+'',
        type:xq.course_type,
        user_coupon_id:this.hmwList.checked_coupon.coupon_id
      })
      console.log(data)
      this.hmwPs = data.msg
      this.show = true;
    },
  },
  mounted(){
    this.hmwgetList()
  }
}
</script> 

<style scoped>
* {
  margin: 0;
  padding: 0;
}
html,
body,
.hmwBox {
  height: 100% !important;
  background: #f0f2f5;
}
/* 大体布局 */
.hmwBox {
  display: flex;
  flex-direction: column;
}
.hmw-top ,.van-nav-bar{
 height: 11.73333vw;
  background: white;
  border-bottom: 1px solid #f5f5f5;
}
.hmw-center {
  flex: 1 !important;
  background: #f0f2f5;
}
.hmw-foot,.van-tabbar {
    height: 14.4vw;
 display: flex;
    align-items: center;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    justify-content: space-between;
}
/* 主体部分顶部 */
.hmwc-top{
    background: white;
    width: 86%;
    padding: 1rem;
    margin: 1rem 0.6rem;
    border-radius: 0.3rem;
}
.hmwc-top>div{
    display: flex;
    justify-content: space-between;
    height: 4rem;
    width: 95%;
}
.hmwc-top>div .hmwP1{
font-size: 3.74vw;
    font-weight: 500;
    color: rgba(0,0,0,.85);
    line-height: 2rem;
}
.hmwc-top>div span{
    display: block;
    font-size: 4vw;
    font-weight: 500;
    color: #8c8c8c !important;
    padding-top: 0.45rem;
}
.hmwc-top .hmwP2{
font-size: 3.2vw;
    font-weight: 400;
    line-height: 5.86667vw;
        color: #b7b7b7;
}
ul>li{
    box-sizing: border-box;
    background: white;
    width: 100%;
    margin-bottom: 1rem;
    padding: 1rem;
}
/* 优惠券 */
ul>.hmwLi1{
    display: flex;
    justify-content: space-between;
}
ul>.hmwLi1 p{
    font-size: 1rem !important;
}
/* 最下方列表 */
.hmwLi2 p{
    display: flex;
    justify-content: space-between;
    line-height: 1.4em;
}
.hmwLi2 p span{
    font-size: 0.8rem;
}
.hmwSpanNum{
    font-size: 1rem;
    color:#b7b7b7;
    /* color: goldenrod; */
}
.hmwLi2 .van-icon{
    padding-top: 0.2rem !important;
}
/* 底部 */
.hmw-foot .van-button{
    height: 100%;
    width: 35%;
    font-size: 1.2rem;
}
.hmw-foot>div{
    display: flex;
    box-sizing: border-box;
    padding: 1rem 1rem 1rem 2rem;
    text-align: left;
}
.hmw-foot>div>p{
    font-size: 1.6rem;
    color: #e02020;
    font-weight: 500;
}
.hmw-foot .van-icon{
    padding-top: 0.5rem;
}
.hmw-foot>div>span{
        color: #8c8c8c;
    font-size: 0.75rem;
    padding-top: 0.5rem;
}
/* 弹出框样式 */
.van-popup{
  padding: 1rem;
  width: 50%;
  height: 4rem;
}
.van-popup li{
  color: #606266;
  font-size: 3.2vw;
  padding: 0;
  margin: 0;
  margin-bottom: 0.4rem;
}
.van-popup li button{
  padding: 0 0.4rem;
  height: 1.5rem;
  background: white;
  border: 0.01rem solid #ccc;
  border-radius: 0.1rem;
}
/* .van-popup .van-popup__close-icon{
  font-size: 0.12rem !important;
} */
.van-popup__close-icon{
  font-size: 0.14rem !important;
}
</style>
