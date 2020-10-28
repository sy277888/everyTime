<template>
  <div>
    <router-view />
    <!-- 传入 -->
    <Tabber :items="items" v-show="isShow" />
    <!-- 可拖拽小信封 -->
    <Web />
  </div>
</template>
<script>
//引入底部导航栏
import Tabber from "../src/components/Tabber/Tabber";
import Web from "../src/components/Web/Web";
export default {
  components: {
    Tabber,
    Web,
  },
  data() {
    return {
      items: [
        {
          title: "首页",
          path: "/",
          img: require("../src/assets/img/bottomBar1.png"),
          imgs: require("../src/assets/img/bottom1.png"),
        },
        {
          title: "课程",
          path: "/about",
          img: require("../src/assets/img/bottomBar2.png"),
          imgs: require("../src/assets/img/bottom2.png"),
        },
        {
          title: "约课记录",
          path: "/make",
          img: require("../src/assets/img/bottomBar3.png"),
          imgs: require("../src/assets/img/bottom3.png"),
        },
        {
          title: "练习",
          path: "/practice",
          img: require("../src/assets/img/bottomBar4.png"),
          imgs: require("../src/assets/img/bottom4.png"),
        },
        {
          title: "我的",
          path: "/Mime",
          img: require("../src/assets/img/bottomBar5.png"),
          imgs: require("../src/assets/img/bottom5.png"),
        },
      ],
      isShow: true,
    };
  },
  watch: {
    //利用监听属性判断全局路由
    $route(to, from) {
      if (to.path === "/login") {
        this.isShow = false;
      }
    },
  },
};
</script>
<style>
</style>