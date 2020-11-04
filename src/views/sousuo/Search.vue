<template>
  <div>
    <van-search v-model="value" show-action placeholder="请输入搜索关键词">
      <template #left>
        <van-icon name="arrow-left" size="18" @click="fan" />
      </template>
      <template #action>
        <div @click="search">搜索</div>
      </template>
    </van-search>
    <div v-show="show">
      <div class="dv">
        搜索历史
        <van-icon name="delete" @click="del" />
      </div>
      <van-tag
        v-for="(item, index) in list"
        :key="index"
        @click="hui"
        closeable
        size="medium"
        type="primary"
        @close="close(index)"
        style="margin: 10px"
        >{{ item }}</van-tag
      >
    </div>
    <div  v-show="!show">
    <div v-for="(item, index) in date.list" :key="index">
     <ul class="sy-uui">
       <li>{{item.title}}</li>
       <li class="lis">共{{item.has_buy}}课时</li>
       <li class="liis"><img :src="item.teachers_list[0].teacher_avatar" alt=""><span class="lili">{{item.teachers_list[0].teacher_name}}</span></li>
       <li class="liiii"><span class="liss">{{item.brows_num}}已报名</span><span class="lisss">{{item.price}}</span></li>
     </ul>
    </div>
    <p class="sy_uu">没有更多了</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      list: [],
      searchlist: JSON.parse(localStorage.getItem("searchlist")),
      date: [],
    };
  },
  mounted() {
    let list = localStorage.searchlist;
    if (list) {
      this.list = JSON.parse(list);
    }
  },
  methods: {
    fan() {
      this.$router.go("-1");
    },
    search() {
      this.list.push(this.value);
      localStorage.searchlist = JSON.stringify(this.list);
      this.$Net.sou(this.value).then((res) => {
        this.date = res.data.data;
        console.log(this.date);
      });
    },
    del() {
      this.$dialog
        .confirm({
          title: "确认清空吗",
          message: "你确定要把搜索历史清空吗！",
        })
        .then(() => {
          // on confirm
          this.list = [];
          localStorage.searchlist = JSON.stringify(this.list);
        })
        .catch(() => {
          // on cancel
        });
    },
    hui(){
     this.list.forEach((item,index)=>{
       this.value=item
     })
    },
    close(index) {
      this.list.splice(index, 1);
      // this.value.push(this.searchlist)
      localStorage.searchlist = JSON.stringify(this.list);
    },
  },
  computed: {
    show() {
      if (this.value == "") {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.dv {
  margin-left: 1rem;
}
.van-icon {
  float: right;
  margin-right: 1rem;
  margin-top: 0.3rem;
}
.sy_uu{
font-size: 0.6rem;
color: rgb(173, 173, 173);
text-align: center;
}
.sy-uui{
  width: 90%;
  height: 10rem;
  /* background:red; */
  margin: 1rem;
}
.sy-uui .lis{
  font-size: 0.5rem;
  color: grey;
  margin-top: 0.3rem;

}
.sy-uui .liis{
  width: 100%;
  height: 3rem;
  display: inline-flex;
  align-items: center;
  font-size: 0.5rem;
  color: rgb(181, 178, 178);
  margin-top: 0.5rem;
}
.sy-uui .liis img{
  width: 2rem;
  height: 2rem;
  border-radius:50% ;
}
.lili{
  margin-left: 0.4rem;
}
.liiii{
  margin-top: 0.9rem;
  font-size: 0.5rem;
  color: rgb(196, 196, 196);
}
.lisss{
  float: right;
  color: rgb(47, 255, 54);
}
</style>