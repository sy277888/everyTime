<template>
  <div>
    <div class="sy_orange"></div>
    <div class="sy_top1">
      <div class="sy_img">
        <div class="sy_left">
          <img
            v-show="district_name.length <= 0"
            src="../../assets/头像.png"
            alt=""
          />
          <img
            v-show="district_name.length > 0"
            :src="list.avatar"
            alt=""
            @click="ge"
          />
          <p v-show="district_name.length <= 0" class="s1" @click="denglv">
            登录/注册
          </p>
          <p v-show="district_name.length > 0" class="s1" @click="ge">
            {{ district_name }}
          </p>
        </div>

        <div class="sy_right">
              <button class="sy_bu" @click="quyue">去约课</button>
     
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      district_name: "",
    };
  },
  methods: {
    denglv() {
      this.$router.push({ path: "/login" });
    },
    ge() {
      var district_name = localStorage.setItem("nickname", this.district_name);
      var mobile = localStorage.setItem("mobile", this.list.mobile);
      var token = localStorage.getItem("token");
      if (token) {
        this.$router.push({ path: "/per" });
      } else {
        this.$router.push("/login");
      }
    },
    quyue() {
      this.$router.push({ path: "/make" });
    },
  },
  mounted() {
    this.$Net
      .grren({
        params: {},
      })
      .then((res) => {
        console.log(res);
        this.list = res.data.data;
        this.district_name = res.data.data.nickname;
      });
  },
};
</script>

<style scoped>
.sy_orange {
  width: 100%;
  height: 13vh;
  background-color: #fb5500;
  border-radius: 0px 0px 25px 25px;
}
.sy_top1 {
  width: 100%;
  height: 10.5vh;
  background: white;
  border-radius: 1rem;
}
.sy_left{
  width: 50%;
}
.sy_left p{
   font-size: 0.7rem;
   margin-top: 1.8rem;
   margin-left: 6rem;
   
}
.sy_right{
   width: 50%;
}
.sy_img {
  background: #fff;
  width: 90%;
  margin-left: 5%;
  height: 6rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  box-shadow: 0 0 0.5rem 0 gray;
  top: 2rem;
}
.sy_img img {
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  float: left;
}

.sy_bu {
  width: 3.5rem;
  height: 1.5rem;
  font-size: 0.5rem;
  color: white;
  background-color: #fb5500;
  border: 0px;
  border-radius: 10px 0px 0px 10px;
  margin-left: 6.5rem;
  margin-top: 3rem;

}
</style>