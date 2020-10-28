<template>
  <div>
    <Tou></Tou>
    <Te></Te>
    <Bu></Bu>
    <Ke></Ke>
    <Ding></Ding>
    <Zhang></Zhang>
  </div>
</template>

<script>
import Ke from "../components/hhs/ke";
import Te from "../components/hhs/te";
import Button from "../components/vantbutton/vantButton";
import Tou from "../components/hhs/tou";
import Bu from "../components/hhs/bu";
import Ding from "../components/hhs/dingdan";
import Zhang from "../components/hhs/zhanghu"
export default {
  components: {
    Button,
    Zhang,
    Ding,
    Tou,
    Te,
    Bu,
    Ke,
  },
  methods: {},
  data() {
    return {};
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
.sy_te {
  width: 100%;
  height: 5rem;
  /* background: chartreuse; */
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  position: relative;
  top: -1.5rem;
}
.li {
  font-size: 0.5rem;
  color: rgb(158, 157, 157);
}
.zu {
  font-size: 1.5rem;
  color: #fb5500;
}
.te {
  font-size: 0.9rem;
}
.sy_yao {
  width: 95%;
  height: 2.7rem;
  background: #ed741f;
  border: 0px;
  border-radius: 30px;
  margin-left: 0.5rem;
}
.sy_uu {
  height: 2.7rem;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
}
.sy_uu li {
  font-size: 0.5rem;
  color: white;
  margin-left: 1rem;
}
.s2 {
  float: right;
  font-size: 1rem;
  margin-top: 0.7rem;
  margin-bottom: 1.5rem;
  color: white;
}
.pp {
  margin-left: 0.5rem;
}
.sy_button {
  width: 50%;
}
.sy_but {
  width: 70%;
}
.sy_qu {
  width: 70%;
}
</style>