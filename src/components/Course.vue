<template>
  <div class="hmw-box">
    <!-- 顶部 -->
 <van-nav-bar title="标题" />
    <!-- 这里才是我要做的部分 -->
    <div class="hmw-center">
      <van-list>
         <div class="hmw-nav">
        <van-dropdown-menu>
          <van-dropdown-item title="分类" ref="item" style="height:100%;">
            <van-cell style="height:100%;">
              <ul class="hmwNavLeft">
                <li :key="item" v-for="item in 2">
                  <p>年级</p>
                  <div class="hmw-nav-tag">
                    <van-row gutter="20">
                      <van-col :key="i" v-for="i in 5" :class="hmwActiveNum1==i?'hmwSpanActive':''" span="6" @click="hmwActiveNum1=i"><span>出一</span></van-col>
                    </van-row>
                  </div>
                </li>
                <div>
                  <van-button style="border:1px solid #ccc;" plain
                    >重置</van-button
                  >
                  <van-button color="#eb6100">确定</van-button>
                </div>
              </ul>
            </van-cell>
          </van-dropdown-item>
          <van-dropdown-item title="排序" ref="item">
            <van-cell class="hmwCenterNav" center>
              <li
                :class="[index == hmwSort.length - 1 ? 'hmwsortActive' : '',hmwActiveNum2==index?'hmwSpanActive':'']"
                v-for="(item, index) in hmwSort"
                :key="index" @click="hmwActiveNum2=index"
              >
                {{ item }}
              </li>
            </van-cell>
          </van-dropdown-item>
          <van-dropdown-item title="筛选" ref="item">
            <van-cell class="hmwChoose" style="padding-top:20px;">
              <van-row gutter="20">
                <van-col
                  :key="index"
                  v-for="(item, index) in hmwChoose"
                  span="6"
                  :class="hmwActiveNum3==index?'hmwSpanActive':''" @click="hmwActiveNum3=index"
                  ><span>{{ item }}</span></van-col
                >
              </van-row>
            </van-cell>
          </van-dropdown-item>
        </van-dropdown-menu>
      </div>
      <div class="hmw-main">
        <van-list>
          <li :key="index" v-for="(item, index) in hmwList">
            <h2>{{ item.title }}</h2>
            <p class="hmwP1"><van-icon name="clock-o" /><span>{{ item.date+'共'+item.course+'课时' }}</span></p>
            <p class="hmwP2"><img :src="item.img" alt=""><span>{{ item.name }}</span></p>
            <div class="hmwListBottom">
              <span>{{ item.number }}人已报名</span>
              <strong>{{ item.price==0?'免费':item.price+'.00' }}</strong>
            </div>
          </li>
        </van-list>
      </div>
</van-list>

    </div>
    <!-- 底部 -->
    <div class="hmw-foot">2</div>
  </div>
</template>

<script>
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
      // 用来保存下标来做点击时样式
      hmwActiveNum1:0,
      hmwActiveNum2:0,
      hmwActiveNum3:0,
      //    下拉菜单导航所需
      value: 0,
      switch1: false,
      switch2: false,
      //   综合排序
      hmwSort: ["综合排序", "最新", "罪人", "价格从低到高", "价格从低到高"],
      hmwChoose: [
        "全部",
        "大可版",
        "小可版",
        "大可版",
        "小可版",
        "大可版",
        "小可版",
        "大可版",
        "小可版",
        "大可版",
        "小可版",
      ],
      hmwList: [
        {
          title: "李老师16号到22号地理大课堂开课了",
          date: "03月26日 18:30 ~ 03月22日 15:00 | ",
          name: "李青",
          number: 134,
          price: 0,
          course: 5,
          img:'http://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg'
        },
        {
          title: "李老师啦啦啦啦啦开课啦！",
          date: "3月26日123456789087",
          name: "李青",
          number: 134,
          price: 0,
          course: 5,
          img:'http://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg'
        },
        {
          title: "李老师啦啦啦啦啦开课啦！",
          date: "3月26日123456789087",
          name: "李青",
          number: 134,
          price: 0,
          course: 5,
          img:'http://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg'
        },
        {
          title: "李老师啦啦啦啦啦开课啦！",
          date: "3月26日123456789087",
          name: "李青",
          number: 134,
          price: 0,
          course: 5,
          img:'http://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg'
        },
        {
          title: "李老师啦啦啦啦啦开课啦！",
          date: "3月26日123456789087",
          name: "李青",
          number: 134,
          price: 0,
          course: 5,
          img:'http://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg'
        },
        {
          title: "李老师啦啦啦啦啦开课啦！",
          date: "3月26日123456789087",
          name: "李青",
          number: 134,
          price: 0,
          course: 5,
          img:'http://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg'
        },
        {
          title: "李老师啦啦啦啦啦开课啦！",
          date: "3月26日123456789087",
          name: "李青",
          number: 134,
          price: 0,
          course: 5,
          img:'http://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg'
        },
        {
          title: "李老师啦啦啦啦啦开课啦！",
          date: "3月26日123456789087",
          name: "李青",
          number: 134,
          price: 0,
          course: 5,
          img:'http://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg'
        },
      ],
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {
    onConfirm() {
      this.$refs.item.toggle();
      console.log(this.$refs);
    },
    // 接受导航数据
    hmwGetNav() {
      this.$Net.courseNav().then((res) => {
        console.log(res);
      });
    },
  },
  mounted() {
    this.hmwGetNav();
  },
};
</script>

<style>
li {
  list-style: none;
}
.hmw-box {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.hmw-top,
.hmw-foot {
  background: steelblue;
  width: 100%;
  height: 3rem;
  flex-shrink: none;
}
.hmw-center {
  flex: 1;
  overflow: scroll;
}
/* 左边导航拓展样式 */
.hmwNavLeft p {
  padding-top: 0.4rem;
  font-size: 0.23rem;
  /* margin-top: 1rem; */
}
.hmwNavLeft li {
  border-bottom: 1px solid #eee;
}
/* 导航span父级 */
.hmw-nav-tag {
  display: inline-block;
  font-size: 3.46667vw;
  font-weight: 400;
  color: #646464;
  overflow: hidden;
  padding: 0.5rem 0;
}
.hmw-nav-tag span,
.hmwChoose span {
  display: inline-block;
  width: 4rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  background: #f5f5f5;
  margin-bottom: 0.6rem;
  border-radius: 0.2rem;
  font-size: 0.32rem;
  font-family: "PingFangSC-Regular";
  font-weight: 400;
  color: #646464;
}
.hmw-nav-tag .hmwSpanActive span,.hmwChoose .hmwSpanActive span{
color: #eb6100;
    background: #ebeefe;
}
/* 按钮部分 */
.hmwNavLeft > div {
  display: flex;
  justify-content: space-between;
}
.hmwNavLeft .van-button {
  width: 48%;
  height: 2rem;
  margin-top: 1rem;
}
/* 中间排序部分 */
.hmwCenterNav li {
  text-align: center;
  height: 13.6vw;
  text-align: center;
  line-height: 13.6vw;
  font-size: 3.73333vw;
  font-weight: 400;
  color: #595959;
  border-bottom: 1px solid #f5f5f5;
}
.hmwCenterNav .hmwsortActive {
  border: none;
  margin-bottom: 0;
  padding-bottom: 0;
}
.hmwCenterNav .hmwSpanActive{
      color: #eb6100;
}
/* 最右边部分 */
.hmwChoose {
  padding-top: 2rem;
}

/* 主体部分----------------------------------------------------------------------------------- */
.hmw-main {
  background: #f0f2f5;
  height: 100%;
}
.hmw-main > .van-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.hmw-main > .van-list > li {
  width: 84%;
  min-height: 2rem;
  background: white;
  border-radius: 0.3rem;
  padding: 1rem;
  margin-top: 1rem;
}
/* 图片部分卡片布局 */
.hmw-main > .van-list > li>h2{
  font-size: 4.26667vw;
    font-weight: 400;
    color: #333;
}
.hmw-main > .van-list > li>.hmwP1{
  font-size: 0.8rem;
  margin-top: 0.2rem;
  color: #333;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
}
.hmw-main > .van-list > li>.hmwP1>.van-icon{
  color: #646464;
  margin-right: 0.3rem;
}
.hmw-main > .van-list > li>.hmwP2{
 font-size: 3.2vw;
    font-weight: 400;
    color: rgba(0,0,0,.45);
    padding: 1rem 0;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
}
.hmw-main > .van-list > li>.hmwP2>img{
  width: 2rem;
  margin-right: 0.5rem;
}
.hmwListBottom{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
}
.hmwListBottom>span{
padding-right: 2.66667vw;
    color: rgba(0,0,0,.45);
}
.hmwListBottom>strong{
color: #44a426;
    font-size: 4.26667vw;
}

</style>
