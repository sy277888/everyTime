<template>
  <div>
    <van-nav-bar title="我的收藏" left-arrow @click-left="onClickLeft" fixed />
    <div class="box"></div>

    <div class="shou_box">
      <van-empty
        v-show="isShow"
        description="暂无收藏"
        image="https://wap.365msmk.com/img/empty.0d284c2e.png"
      />
      <div class="shou" v-for="(item, index) in list" :key="index">
        <ul class="shou_ul">
          <li>
            <p>每时每课特级教师-自主招生冲刺讲座————{{ item.title }}</p>
            <van-icon name="star" color="rgb(235, 97, 0)" class="shou_star" @click="Show(item,index)" />
            <p>共{{ item.section_num }}课时</p>
            <p>
              <img :src="item.teachersAvatar" alt="" class="shou_img" />{{
                item.teachers
              }}
            </p>
          </li>
          <li class="shou_li">
            <p class="shou_li_p">
              {{ item.sales_num }}人已报名<span
                ><van-icon name="gold-coin" color="rgb(235, 97, 0)" />{{
                  item.price
                }}</span
              >
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
export default {
  data() {
    return {
      list: [], //老师课程收藏
      id:""  //老师对应id
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go("-1");
    },
   async Show(item,index){
       let id = item.collect_id
       let res = await this.$Net.courseXQSCNO(id+ "")
       console.log(res.data)
       if(res.data.code==200){
        this.list.splice(index,1)
        Toast.success('取消收藏')
       }
    }
  },
  mounted() {
    this.$Net.guan({ params: { page: 1, limit: 10, type: 1 } }).then((res) => {
      this.list = res.data.data.list;
    });
  },
  computed: {
    isShow() {
      let show = this.list.length > 0 ? false : true;
      return show;
    },
  },
};
</script>

<style scoped>
.shou_li_p {
  font-size: 0.75rem;
  margin-top: 0.2rem;
  color: gray;
}
.shou_li_p span {
  float: right;
  line-height: 1rem;
  text-align: center;
}
.shou_li {
  width: 100%;
  border-top: 0.09rem solid gainsboro;
  height: 2rem;
  display: block;
  margin-top: 2.5rem;
}
.shou_img {
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  float: left;
}
.box {
  width: 100%;
  height: 1.5rem;
   background: rgb(240, 242, 245);
}
.shou_box {
  width: 100%;
  height: 39rem;
  background: rgb(240, 242, 245);
}

.shou {
  margin: 1rem 0 0 0;
  width: 90%;
  margin-left: 5%;
  height: 11rem;
  background: #fff;
  border-radius: 0.5rem;
}
.shou_ul {
  width: 100%;
}
.shou_star {
  margin-left: 19rem;
}
</style>