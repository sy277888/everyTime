<template>
  <div>
      <van-nav-bar title="课程订单" left-arrow @click-left="onClickLeft" />
  </div>
</template>

<script>
export default {
methods: {
    onClickLeft(){
        this.$router.go("-1")
    },
},
mounted() {
    this.$Net.ke().then(res=>{
        console.log(res);
    })
},
}
</script>

<style>

</style>