<template>
  <div>
    <Navbar></Navbar>
    <div>
      <van-search
        v-model="value"
        shape="round"
        background="#FFFFFF"
        placeholder="请输入题库名称关键字"
      />
    </div>
    <div class="bao">
      <van-sidebar v-model="activeKey" @change="OnClick">
        <van-sidebar-item
          v-for="(item, index) in list"
          :key="index"
          :title="item.name"
        />
      </van-sidebar>
      <div class="you">
        <div>
          <p>{{ right }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      activeKey: 0,
      value: "",
      list: [],
      right: [],
    };
  },
  methods: {
    OnClick(index) {
      this.right = this.list[index].cname.name_z;
    },
  },
  created() {
    this.$axios.get("http://localhost:8080/api/list.json").then((res) => {
      this.list = res.data.data.users;
      this.right = this.list[0].cname.name_z;
    });
  },
};
</script>

<style scoped>
.you {
  width: 80%;
  height: 500px;
  background-color: gainsboro;
}
.bao {
  display: flex;
}
</style>