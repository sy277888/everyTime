<template>
  <div>
    <van-nav-bar
      title="找回密码"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="sy_top">
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
        <van-field
          v-model="password"
          type="password"
          name="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round native-type="submit" @click="onLogin">
            确定
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
            text:"",
            username:"",
            password:"",
        }
    },
    methods: {
        onClickLeft(){
            this.$router.go("-1")
        },
        onLogin(){
          console.log(1111);
        }
    },
 
};
</script>

<style scoped>
.sy_top {
  width: 100%;
  margin-top: 50px;
}
.van-button {
  width: 20rem;
  height: 3rem;
  background-color: #ff9248;
  margin-top: 25px;
  color: white;
}
.van-form {
  margin-left: 30px;
}
</style>