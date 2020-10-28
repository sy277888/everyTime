<template>
  <div>
    <van-nav-bar title="个人信息" left-arrow @click-left="onClickLeft" />
    <div class="sy_geren">
      <ul>
        <li>
          <span>头像</span>
          <p>
            <span></span
            ><img src="../../assets/icon/右灰.png" alt="" class="img" />
          </p>
        </li>
        <li>
          <span>昵称</span>
          <p>
            <span></span
            ><img src="../../assets/icon/右灰.png" alt="" class="img" />
          </p>
        </li>
        <li>
          <span>手机号</span>
          <p>
            <span></span
            ><img src="../../assets/icon/右灰.png" alt="" class="img" />
          </p>
        </li>
        <li>
          <span>性别</span>
          <p>
            <span></span
            ><img src="../../assets/icon/右灰.png" alt="" class="img" />
          </p>
        </li>
        <li>
          <span>出生日期</span>
          <p>
            <span></span
            ><img src="../../assets/icon/右灰.png" alt="" class="img" />
          </p>
        </li>
        <li>
          <span>所在城市</span>
          <p>
            <span></span
            ><img src="../../assets/icon/右灰.png" alt="" class="img" />
          </p>
        </li>
        <li>
          <span>学科</span>
          <p>
            <span></span
            ><img src="../../assets/icon/右灰.png" alt="" class="img" />
          </p>
        </li>
        <li>
          <span>年级</span>
          <p>
            <span></span
            ><img src="../../assets/icon/右灰.png" alt="" class="img" />
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.push({ path: "/mime" });
    },
  },
  mounted() {
    var token = localStorage.getItem("token");
    this.$Net
      .xue({
        params: {
          token: token,
        },
      })
      .then((res) => {
        console.log(res);
      });
  },
};
</script>

<style scoped>
.sy_geren {
  width: 100%;
  margin-top: 2.4rem;
}
.sy_geren ul li {
  width: 95%;
  height: 2rem;
  margin-left: 1rem;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
}
.img {
  width: 1.5rem;
  height: 1.5rem;
}
</style>