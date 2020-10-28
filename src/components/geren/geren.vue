<template>
  <div>
      <van-nav-bar title="个人信息" left-arrow @click-left="onClickLeft" />
  </div>
</template>

<script>
export default {
data() {
    return {
        
    }
},
methods: {
    onClickLeft(){
        this.$router.push({path:"/wode"})
    }
},
}
</script>

<style>

</style>