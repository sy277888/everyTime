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
    <van-icon name="notes-o" color=" #595959" size="18"/>
  </template>
</van-nav-bar>
<!-- 导航 -->
    <van-tabs>
  <van-tab :key="index" v-for="(item,index) in hmwNav" :title="item.name+'('+item.num+')'">
    内容 {{ index }}
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
      nei: [],
      list: [
        {
          base: 0,
          title: "直播课(1)",
        },
        {
          base: 100000,
          title: "点播课(2)",
        },
        {
          base: 6,
          title: "音频课(0)",
        },
        {
          title: "图文课(0)",
        },
        {
          title: "面授课(0)",
        },
        {
          title: "会员课(0)",
        },
      ],
    };
  },
  mounted() {
    this.getList()
  },
  methods: {
    onClickLeft() {
      //回到上一页
      this.$router.go("-1");
    },
    // 获取数据
    async getList() {
// 列表
      let { data } = await this.$Net.te({
        params: {
          browse_base: this.base,
        },
      });
      
       this.nei = data.data.list;
       console.log(this.nei)
      // 导航
      let { data:msg } = await this.$Net.hmwStudyNav()
       console.log(msg.data)
      this.hmwNav = msg.data.typeNum
      this.hmwList = msg.data.courseList
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

</style>
