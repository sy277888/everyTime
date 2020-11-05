<template>
  <div>
      <van-nav-bar @click-left="onClickLeft" >
  <template #left>
    <van-icon name="arrow-left" color=" #595959" size="18"/>
  </template>
  <template #title>
    <p>消息通知</p>
  </template>
</van-nav-bar>
<!-- 列表部分 -->
      <div class="hmw-box">
          <ul class="uuui" style="height:4.2rem;">
              <li class="uu-li">
                  <img src="../../assets/icon/信.png" alt="">
              </li>
              <li class="uu-li1">
                  <p>课程通知</p>
                  <p class="uu-p">你报名的课程《李老师18号20号地理大课堂开课啦》已经有3天没有学习了，快去学习吧</p>
              </li>
          </ul>
           <ul class="uuui">
              <li class="uu-li">
                  <img src="../../assets/icon/设置.png" alt="">
              </li>
              <li class="uu-li1">
                  <p>系统通知</p>
                  <p class="uu-p">暂无消息</p>
              </li>
          </ul>
           <ul class="uuui">
              <li class="uu-li">
                  <img src="../../assets/icon/gou.png" alt="">
              </li>
              <li class="uu-li1">
                  <p>订单通知</p>
                  <p class="uu-p">你的课程订单《》取消成功</p>
              </li>
          </ul>
           <ul class="uuui">
              <li class="uu-li">
                  <img src="../../assets/icon/信.png" alt="">
              </li>
              <li class="uu-li1">
                  <p>约课通知</p>
                  <p class="uu-p">暂无消息</p>
              </li>
          </ul>
           <ul class="uuui" style="border:none;">
              <li class="uu-li">
                  <img src="../../assets/icon/写.png" alt="">
              </li>
              <li class="uu-li1">
                  <p>考试通知</p>
                  <p class="uu-p">暂无消息</p>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
methods: {
    onClickLeft(){//回退页面
        this.$router.go("-1")
    },
    // 获取数据
    async hmwGetList(){
        let {data} = await this.$Net.hmwGetMsg()
        console.log(data)
    }
},
mounted(){
    this.hmwGetList()
}
}
</script>

<style scoped>
/* 列表部分 */
.hmw-box{
    padding: 0.2rem 1rem;
}
.uuui{
    width: 100%;
    display: inline-flex;
    font-size: 3.73333vw;
    color: #595959;
    border-bottom: 0.01rem solid #eee;
    height: 3rem;
    padding: 0.5rem 0;
    align-items: center;
}
.uuui img{
    width: 2.8rem;
    height: 2.8rem;
    border-radius:50% ;
}
.uu-li1{
    margin-left: 1rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.uu-li1 p{
     font-size: 4vw;
    font-weight: 500;
}
.uu-li1 .uu-p{
    font-size:0.5rem ;
}
/* 顶部 */
.van-nav-bar p{
    font-size: 4.8vw;
    color: #595959;
}
.van-nav-bar{
height: 11.73333vw;
}

</style>