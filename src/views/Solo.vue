<template>
  <div>
    <!-- 一对一辅导顶部导航栏 -->
    <van-nav-bar>
      <template #title>
        <span class="Solo_top_title">一对一辅导</span>
      </template>
      <template #left>
        <van-icon name="arrow-left" size="30px" color="gray" />
      </template>
      <template #right>
        <van-icon name="search" size="25px" color="gray" />
      </template>
    </van-nav-bar>
    
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.Solo_top_title {
  font-size: 1.2rem;
  color: gray;
}
</style>
