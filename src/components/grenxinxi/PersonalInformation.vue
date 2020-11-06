<template>
  <div>
    <NavTitle></NavTitle>
    <div class="waw_hidden"></div>
    <div class="waw_person_container">
      <div class="waw_person_wrapper">
        <div class="waw_img">
          <div class="waw_img_title">头像</div>
          <div class="waw_img_box">
            <img :src="img" />
            <van-icon
              name="arrow"
              color="lightgray"
              @click="onClickChangeImg"
            />
          </div>
        </div>
        <div class="waw_person">
          <div>昵称</div>
          <div class="waw_user_box">
            <div>
              <span>{{ nickName }}</span>
            </div>
            <van-icon
              name="arrow"
              color="lightgray"
              @click="onClickChangeNickname()"
            />
          </div>
        </div>
        <div class="waw_person">
          <div>手机号</div>
          <span class="waw_mobile">{{ user }}</span>
        </div>
        <div class="waw_person">
          <div>性别</div>
          <div class="waw_sex_box">
            <span>{{ sex }}</span>
            <van-icon
              name="arrow"
              color="lightgray"
              @click="onClickChangeSex"
            />
          </div>
        </div>
        <div class="waw_person">
          <div>出生日期</div>
          <div class="waw_time_box">
            <span>{{ time }}</span>
            <van-icon name="arrow" color="lightgray" @click="onClickTime" />
          </div>
        </div>
        <div class="waw_person">
          <div>所在城市</div>
          <div class="waw_address_box">
            <div>
              <span>{{
                userInfoOF.province_name +
                "-" +
                userInfoOF.city_name +
                "-" +
                userInfoOF.district_name
              }}</span>
            </div>
            <van-icon
              name="arrow"
              color="lightgray"
              @click="onClickChangeAddress"
            />
          </div>
        </div>
        <div class="waw_person">
          <div>学科</div>
          <div class="waw_subject_box">
            <div>
              <span v-for="(item, index) in subject" :key="index">{{
                item
              }}</span>
            </div>
            <van-icon name="arrow" color="lightgray" @click="onClickSubject" />
          </div>
        </div>
        <div class="waw_person">
          <div>年级</div>
          <div class="waw_class_box">
            <div>小学一年级</div>
            <van-icon name="arrow" color="lightgray" @click="onClickClass" />
          </div>
        </div>
      </div>
    </div>

    <!-- 相册弹出层 -->
    <van-popup v-model="showImg" position="bottom" :style="{ height: '30%' }">
      <div class="waw_popup_box">
        <div class="waw_popup_wrapper">
          <div>
            <p>拍照</p>
          </div>
          <div @click.stop="uploadHeadImg">
            <p>从手机相册选择</p>
            <input
              type="file"
              accept="image/*"
              @change="takePhoto"
              class="hiddenInput"
            />
          </div>
          <div>
            <p @click="onClickHide">取消</p>
          </div>
        </div>
      </div>
    </van-popup>

    <!-- 日期弹出层 -->
    <van-popup v-model="showTime" position="bottom" :style="{ height: '45%' }">
      <van-datetime-picker
        @cancel="onCancel"
        @confirm="onConfirm"
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
      />
    </van-popup>

    <!-- 地址弹出层 -->
    <van-popup
      v-model="showAddress"
      position="bottom"
      :style="{ height: '45%' }"
    >
      <van-area
        :area-list="areaList"
        @cancel="onClickCancel"
        @confirm="onClickConfirm"
        @change="changeCity"
        :value="userInfoOF.district_id + ''"
        :columns-num="3"
        :columns-placeholder="['请选择', '请选择', '请选择']"
      />
    </van-popup>

    <!-- 学校弹出层 -->
    <van-popup v-model="showClass" position="bottom" :style="{ height: '45%' }">
      <van-picker
        title="标题"
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        @cancel="onCancel"
        @change="onChange"
      />
    </van-popup>
  </div>
</template>
<script>
import { Divider } from "vant";
import NavTitle from "./TitlePreservation";
export default {
  components: {
    NavTitle,
  },
  data() {
    return {
      district_id: "",
      columns: ["高一", "高二", "高三", "大一", "大二", "大三", "大四", "小学"],
      nickName: "", //昵称
      user: "", //手机号
      img: "",
      name: "", //省区
      shi: "", //市区
      qu: "", //区
      sex: "", //性别
      time: localStorage.getItem("time") || "2000-10-10", //日期
      subject: JSON.parse(localStorage.getItem("result")) || ["语文"],
      showImg: false, //图片修改（默认隐藏）
      showTime: false, //日期修改（默认隐藏）
      showAddress: false, //修改地址（默认隐藏）
      showClass: false, //修改年级（默认隐藏）
      minDate: new Date(1980, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(1980, 0, 1),
      areaList: {
        province_list: {},
        city_list: {},
        county_list: {},
      },
      userInfoOF: {},
    };
  },
  methods: {
    onConfirm(value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onChange(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`);
    },
    onCancel() {
      Toast("取消");
    },
    //获取城市数据
    async sheng() {
      //省
      let { data: resp } = await this.$Net.csi();
      // console.log(resp);
      this.areaList.province_list = this.changData(resp.data);
      //市区
      // console.log(this.userInfoOF);
      let { data: resCity } = await this.$Net.csi(
        this.userInfoOF.province_id
          ? this.userInfoOF.province_id
          : resp.data[0].id
      );
      // console.log(resCity);
      this.areaList.city_list = this.changData(resCity.data);
      //区县
      console.log(this.userInfoOF.city_id);
      let { data: resC } = await this.$Net.csi(
        this.userInfoOF.city_id ? this.userInfoOF.city_id : resCity.data[0].id
      );

      this.areaList.county_list = this.changData(resC.data);
      // console.log(res);
      // let sj = {};
      // res.data.data.forEach((item) => {
      //   this.$set(sj, item.id, item.area_name);
      // });
      // this.areaList.province_list = sj;
      // console.log(this.areaList.province_list);
    },
    //当我改变省或者市或者市区时触发事件
    async changeCity(picker, data, index) {
      console.log(picker, data, index);
      switch (index) {
        case 0:
          let { data: resp } = await this.$Net.csi(data[index].code);
          this.areaList.city_list = this.changData(resp.data);
          let { data: resC } = await this.$Net.csi(resp.data[0].id);
          this.areaList.county_list = this.changData(resC.data);
          break;
        case 1:
          let { data: resCounty } = await this.$Net.csi(data[index].code);
          this.areaList.county_list = this.changData(resCounty.data);
          break;
      }
    },
    changData(arr) {
      let obj = {};
      for (let i = 0; i < arr.length; i++) {
        obj[arr[i].id] = arr[i].area_name;
      }
      return obj;
    },
    //个人信息数据
    async userInfo() {
      let res = await this.$Net.grren();
      console.log(res);
      this.userInfoOF = res.data.data;
      console.log(this.userInfoOF);
      this.nickName = res.data.data.nickname;
      this.user = res.data.data.mobile;
      this.img = res.data.data.avatar;
      this.sex = res.data.data.sex;
      if (this.sex == 0) {
        this.sex = "男";
      } else if (this.num == 1) {
        this.sex = "女";
      } else if (this.num == 3) {
        this.sex = "保密";
      }
      this.name = res.data.data.province_name;
      this.shi = res.data.data.city_name;
      this.qu = res.data.data.district_name;
    },
    uploadHeadImg: function () {
      this.$el.querySelector(".hiddenInput").click();
    },
    async takePhoto() {
      let formdata = new FormData();
      formdata.append("file", event.target.files[0]);
      let { data: res } = await this.$Net.img(formdata);
      // console.log(res);
      let path = res.data.path;
      let { data: re } = await this.$Net.user({ avatar: path });
      if (re.code == 200) {
        this.userInfo();//个人信息的接口数据
        this.showImg = false;
      }
    },
    onClickChangeImg() {
      //点击修改图片(显示)
      this.showImg = true;
    },
    onClickHide() {
      //点击隐藏（图片）
      this.showImg = false;
    },
    onClickChangeNickname() {
      //点击跳转修改昵称页面
      this.$router.push("/nickname");
    },
    onClickChangeSex() {
      //点击跳转页面改变性别
      this.$router.push("/sex");
    },
    onClickTime() {
      //点击修改时间
      this.showTime = true;
    },
    onCancel() {
      //点击修改时间里面的取消
      this.showTime = false;
    },
    async onConfirm(value) {
      //点击修改时间里面的确认
      console.log(value);
      var y = value.getFullYear();
      var m = value.getMonth() + 1;
      var d = value.getDate() > 9 ? value.getDate() : "0" + value.getDate();
      this.time = `${y}-${m}-${d}`;

      let res = await this.$Net.user({ birthday: this.time });
      console.log(res);
      if (res.data.code == 200) {
        localStorage.setItem("time", this.time);
        this.userInfo();
        this.showTime = false;
      } else {
        Toast(res.data.msg);
      }

      // console.log(this.time);
    },
    onClickChangeAddress() {
      //点击修改地址
      this.showAddress = true;
    },
    onClickCancel() {
      //隐藏地址
      this.showAddress = false;
    },
    onClickConfirm(arr) {
      //点击修改地址
      console.log(arr);
      this.$Net
        .user({
          city_id: arr[1].code,
          district_id: arr[2].code,
          province_id: arr[0].code,
        })
        .then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            this.userInfo();
            this.showAddress = false;
          }
        });
    },
    onClickSubject() {
      //点击学科
      this.$router.push("/subject");
    },
    onClickClass() {
      //点击从选年级
      this.showClass = true;
    },
  },
  mounted() {
    var Nick = localStorage.getItem("nickName"); //读取昵称
    if (Nick) {
      this.nickName = Nick;
    }
    this.userInfo();
    setTimeout(() => {
      this.sheng();
    }, 500);
  },
};
</script>
<style lang='scss' scoped>
.dvv {
  width: 100%;
  border: 0px;
}
.hiddenInput {
  display: none;
}
.waw_hidden {
  width: 100%;
  height: 0.5rem;
  background: whitesmoke;
}
.waw_person_container {
  width: 100%;
  display: inline-flex;
  justify-content: center;
}
.waw_person_wrapper {
  width: 94%;
}
.waw_img {
  width: 100%;
  height: 3rem;
  font-size: 0.7rem;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
}
.waw_img_title {
  font-size: 0.7rem;
  color: gray;
}
.waw_img_box {
  width: 20%;
  height: 100%;
  // background: red;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
.waw_img_box img {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
.waw_person {
  width: 100%;
  height: 3rem;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7rem;
  color: gray;
  border-bottom: 1px solid lightgray;
}
.waw_user_box {
  // background: red;
  width: 80%;
  height: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 90%;
    display: inline-flex;
    justify-content: flex-end;
  }
}
.waw_mobile {
  margin-right: 8%;
}
.waw_sex_box {
  width: 10%;
  height: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
.waw_time_box {
  width: 28%;
  height: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
.waw_address_box {
  width: 90%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  div {
    width: 90%;
    display: inline-flex;
    justify-content: flex-end;
  }
}
.waw_subject_box {
  // background: red;
  width: 80%;
  height: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  div {
    width: 90%;
    display: inline-flex;
    justify-content: flex-end;
    span {
      margin-left: 2%;
    }
  }
}
.waw_class_box {
  width: 27%;
  height: 100%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
.waw_popup_box {
  width: 100%;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  .waw_popup_wrapper {
    width: 94%;
    height: 100%;
    div {
      width: 100%;
      height: 33.3%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid lightgray;
      font-size: 0.8rem;
      color: gray;
    }
  }
}
.van-picker__toolbar {
  width: 100%;
}
</style>