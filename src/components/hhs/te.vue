<template>
  <div>
         <div class="sy_te">
      <ul @click="xuexi">
        <li class="zu">{{hmwList.courses}}</li>
        <li class="te">我的特色课</li>
        <li class="li">已购买特色课程的学习</li>
      </ul>
      <ul>
        <li class="zu" @click="tese">{{hmwList.oto}}</li>
        <li class="te">一对一辅导</li>
        <li class="li">我的一对一老师辅导</li>
      </ul>
      <ul>
        <li class="zu" @click="yu">{{(hmwList.integral/100).toFixed(2)}}</li>
        <li class="te">剩余学习币</li>
        <li class="li">查看剩余学习币</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
data() {
  return {
    hmwList:{}
  }
},
methods: {
  xuexi(){
    this.$router.push({path:"/xue"})
  },
  tese(){
    this.$router.push({path:"/solo"})
  },
  yu(){
this.$router.push({path:"/yuer"})
  },
  // 获取接口数据
  async getList(){
    let {data} = await this.$Net.hmwMine()
    this.hmwList = data.data
    console.log(data.data)
  }
},
mounted(){
  this.getList()
}
}
</script>

<style scoped>
.sy_te {
  width: 100%;
  height: 5rem;
  /* background: chartreuse; */
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  position: relative;
  top: -1.5rem;
}
.li {
  font-size: 0.5rem;
  color: rgb(158, 157, 157);
}
.zu {
  font-size: 1.5rem;
  color: #fb5500;
}
.te {
  font-size: 0.9rem;
}
</style>