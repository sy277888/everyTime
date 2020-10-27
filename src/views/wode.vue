<template>
  <div class="sy_dv">
    <Tou></Tou>
    <Te></Te>
    <Bu></Bu>
    <Ke></Ke>
    <Ding></Ding>
    <Zhang></Zhang>
    <Zi></Zi>
    <div class="sy_wu">

    </div>
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
import Zi from "../components/hhs/zidong"
export default {
  components: {
    Button,
    Zhang,
    Ding,
    Tou,
    Te,
    Bu,
    Ke,
    Zi
  },
  methods: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
.sy_dv{
  width: 100%;
}
.sy_wu{
  width: 100%;
  height: 10rem;
  background: black;
}
</style>