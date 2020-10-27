<template>
  <div>
    <div class="sy_orange"></div>
    <div class="sy_top">
      <div class="sy_top1">
        <p class="sy_img">
          <img src="../../assets/头像.png" alt="" /><span
            class="s1"
            @click="denglv"
            >登录/注册</span
          >
        </p>
        <button class="sy_bu">去约课</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    denglv() {
      this.$router.push({ path: "/login" });
    },
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
.sy_top {
  width: 90%;
  position: relative;
  top: -3rem;
  left: 20px;
}
.sy_top1 {
  width: 100%;
  height: 10.5vh;
  background: white;
  border-radius: 5px;
}
.sy_img {
  position: absolute;
  left: 1rem;
}
.sy_img img {
  width: 4.5rem;
  height: 4.5rem;
}
.sy_img .s1 {
  position: relative;
  top: -1.8rem;
  left: 0.4rem;
}
.sy_top .sy_bu {
  width: 3.5rem;
  height: 1.5rem;
  font-size: 0.5rem;
  color: white;
  background-color: #fb5500;
  border: 0px;
  border-radius: 10px 0px 0px 10px;
  position: absolute;
  top: 3rem;
  right: 0rem;
}
</style>