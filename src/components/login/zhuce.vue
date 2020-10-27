<template>
  <div>
      <div class="sy_img">
      <img src="../../assets/login.png" alt="" />
    </div>
    <div class="sy_input">
      <van-form>
        <van-field
          v-model="username"
          name="手机号"
          placeholder="请输入手机号"
          :rules="[{ required: true, message: '请填写手机号' }]"
        />
          <van-field
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
  </div>
</template>

<script>
export default {
data() {
    return {
        
    }
},
methods: {
    denglv(){
        this.$router.push({path:"/login"})
    }
},
}
</script>

<style scopde>
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
.sp{
    color: rgb(194, 194, 194);
}
</style>