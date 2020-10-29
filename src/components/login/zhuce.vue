<template>
  <div>
    <div class="sy_img">
      <img src="../../assets/login.png" alt="" />
    </div>
    <div class="sy_input">
      <van-form>
        <van-field
          @click="gao(1)"
          :class="show == 1 ? 'van-field' : 'shi'"
          v-model="username"
          name="手机号"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
        <van-field
          @click="gao(2)"
          :class="show == 2 ? 'van-field' : 'shi'"
          v-model="text"
          type="text"
          name="验证码"
          placeholder="请输入验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
        />
        <div class="sy_zhao">
          <span class="sp">*未注册的手机号将自动注册</span>
          <span @click="denglv">使用密码登录</span>
        </div>
        <div style="margin: 16px">
          <van-button round native-type="submit" @click="onLogin">
            立即注册
          </van-button>
        </div>
      </van-form>
    </div>
    <p class="p-uu" @click="add" v-show="shaw">获取验证码</p>
    <span v-show="!shaw" class="count">{{ count }}</span>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  data() {
    return {
      username: "",
      text: "",
      show: 0,
      shaw: true,
      count: "",
      timer: null,
    };
  },
  methods: {
    denglv() {
      this.$router.push({ path: "/login" });
    },
    onLogin() {
      this.$axios
        .post("http://120.53.31.103:84/api/app/login", {
          mobile: this.username,
          sms_code: this.text,
          client: 1,
          type: 2,
        })
        .then((res) => {
          // console.log(res);
          var isnew = res.data.data.is_new;
          localStorage.setItem("isnew", isnew);
          var isnew = localStorage.getItem("isnew");
          var token = res.data.data.remember_token;
          localStorage.setItem("username", this.username);
          localStorage.setItem("token", token);
          if (isnew == 1) {
            this.$router.push({
              path: "/shezhi",
            });
          } else if (isnew == 2) {
            this.$router.push({ path: "/" });
          }
        });
    },
    gao(i) {
      this.show = i;
    },
    add() {
      if (this.username == "") {
        return alert("手机号必填");
      }
      var phone = /^[1]([3-9])[0-9]{9}$/;
      if (!phone.test(this.username)) {
        Toast.loading({
          message: "手机号码格式不正确",
          position:"center"
        });
        return
      }else{
      }
      const TIME_COUNT=60;
      if(!this.timer){
        this.count=TIME_COUNT
        this.shaw=false;
      this.timer=setInterval(()=>{
        if(this.count>0 && this.count<=TIME_COUNT){
          this.count--
        }else{
          this.shaw=true;
          clearInterval(this.timer);
          this.timer=null;
        }
      },1000)
      }
      this.$axios
        .post("http://120.53.31.103:84/api/app/smsCode", {
          mobile: this.username,
          sms_type: "login",
        })
        .then((res) => {
          // console.log(res);
        });
    },
  },
  mounted() {
    this.$axios
      .post("http://120.53.31.103:84/api/app/smsCode", {
        mobile: this.username,
        sms_type: "login",
      })
      .then((res) => {
        console.log(res);
      });
  },
};
</script>

<style scopde>
.van-field {
  border-bottom: 0.01rem solid orangered;
}
.shi {
  border-bottom: 0px;
}
.sy_img {
  width: 100%;
}
.sy_img img {
  width: 226.55px;
  height: 49.79px;
  margin-left: 70px;
  margin-top: 50px;
}
.sy_input {
  width: 100%;
  margin-top: 60px;
}
.van-form {
  margin-left: 33px;
}
.van-field {
  width: 259.2px;
  height: 54.99px;
}
.van-button {
  width: 20rem;
  height: 3rem;
  background-color: #ff9248;
  margin-top: 25px;
  color: white;
}
.sy_zhao {
  width: 85%;
  /* border: 1px solid black; */
  font-size: 0.5rem;
  margin-left: 15px;
  margin-top: 10px;
  display: inline-flex;
  justify-content: space-between;
  color: grey;
}
.sp {
  color: rgb(194, 194, 194);
}
.p-uu {
  font-size: 0.45rem;
  color: orangered;
  position: fixed;
  right: 2rem;
  top: 12rem;
}
.count{
    position: fixed;
  right: 2.7rem;
  top: 12.5rem;
}
</style>