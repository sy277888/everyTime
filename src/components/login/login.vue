<template>
  <div class="sy_dv">
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
          v-model="password"
          type="password"
          name="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div class="sy_zhao">
          <span @click="zhao">找回密码</span>
          <span @click="zhuce">注册/验证码登录</span>
        </div>
        <div style="margin: 16px">
          <van-button round native-type="submit" @click="onLogin">
            登录
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      type:1,
      num:0,
      show:0,
    };
  },
  methods: {
    onLogin() {
      this.$Net
        .login({
            mobile:this.username,
            password:this.password,
            type:this.type
        })
        .then((res) => {
          console.log(res);
          // localStorage.token = res.data.token;
          var token=res.data.data.remember_token;
          var mobile=res.data.data.mobile
          var sex=res.data.data.sex
          localStorage.setItem("token",token);
          localStorage.setItem("username",this.username)
          localStorage.setItem("value","admin")
          localStorage.setItem("mobile",mobile)
          localStorage.setItem("sex",sex)
          this.$router.push({ path: "/mime" });
        })
        .catch((err) => {
          console.log(err);
          alert('登录失败')
        });
    },  
       gao(i) {
      this.show = i;
    },
    zhao() {
      this.$router.push({ path: "/mima" });
    },
    zhuce() {
      this.$router.push({ path: "/zhu" });
    },
  },
  mounted() {
    
  },
};
</script>

<style scoped>
.sy_dv {
  width: 100%;
}
.sy_img {
  width: 100%;
}
.sy_img img {
  width: 226.55px;
  height: 49.79px;
  margin-left: 50px;
  margin-top: 50px;
}
.sy_input {
  width: 100%;
  margin-top: 60px;
}
.van-form {
  margin-left: 20px;
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
.van-field {
  border-bottom: 0.01rem solid orangered;
}
.shi {
  border-bottom: 0px;
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
</style>