<template>
  <div class="box">
    <van-nav-bar
      title="初三化学一模拟考试题"
      @click-left="onClickLeft"
      left-arrow
    >
    
    </van-nav-bar>
    <div class="tiku">
      <van-row>
        <van-col class="col" span="2"
          ><van-icon size="22" name="column"
        /></van-col>
        <van-col class="wenz" span="20" @click="onclick">题库选择</van-col>
        <van-col class="col" span="2"
          ><van-icon size="22" name="setting-o"
        /></van-col>
      </van-row>
      <div class="box-div">
      <van-row class="box-div1">
        <van-col span="3"><button class="button">-</button></van-col>
        <van-col span="18">
          <div class="huaxue">化学</div>
          <div>
            <van-progress pivot-text="" color="#f2826a" :percentage="75" />
          </div>
        </van-col>
        <van-col span="3" ><van-icon @click="jiantou" class="jiantou" name="arrow" /></van-col>
      </van-row>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      window.history.back();
    },
    onclick() {
      this.$router.push({
        path: "/kaodian",
      });
    },
    jiantou(){
        this.$router.push({
        path: "/exect",
      });
    }
  },
};
</script>

<style scoped>
.tiku {
  margin-top: 0.5rem;
  font-size: 1.5rem;
  width: 100%;
  height: 90vh;
  vertical-align: middle;
  background: white;
}
.van-row{
  margin-bottom: 1rem;

}
.col {
  line-height: 1rem;
}
.wenz {
  line-height: 1rem;
}
.box {
  width: 100%;
  height: 100vh;

  /* background: rgb(224, 231, 230); */
}
.box-div {
  width: 100%;
  font-size:1.2rem;

}
.box-div1{ 
     border-radius: 0.05rem;
    width: 93%;
    margin: 0.08rem;
    height: 4rem;
    border:.01rem solid gray;
}
.button{
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    border: none;
    background: rgb(199, 198, 198);
    color: white;
    text-align: center;
    margin: 0.8rem 0.4rem;
}
.huaxue{
    margin:  0.2rem 0;
}
.jiantou{
    margin: 1.3rem 0.8rem;
}
</style>
