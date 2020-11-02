import { request } from './core'
import API from './config'

const Net = {
  // 抛出方法
  List(params) {
    return request(API.Method.Get,API.Path.List, params)
  },
  // 抛出方法
  login(params) {
    return request(API.Method.Post, API.Path.LOGIN, params)
  },
  // 课程导航
  courseNav(params) {
    return request(API.Method.Get, API.Path.HMWFL, params)
  },
  // 获取课程列表的方法
  courseList(params) {
    return request(API.Method.Get, API.Path.HMWLIST, params)
  },
  // 获取详情页面数据
  courseXQList(params) {
    return request(API.Method.Get, API.Path.HMWXQ, params)
  },
  //获取个人信息
  xuue(){
    return request(API.Method.Get,API.Path.XUE)
  },
  //特色课获取
  te(){
    return request(API.Method.Get,API.Path.TE)
  },
  //我的关注
  guan(){
    return request(API.Method.Get,API.Path.GUAN)
  },
  ke(){
    return request(API.Method.Get,API.Path.KE)
  },
  xue(){
    return request(API.Method.Get,API.Path.Xue)
  },
  //首页推荐老师列表详情页内容
  HomeLIST(params){
    return request(API.Method.Get,API.Path.HomeLIST,params)
  },
  //验证码登录
  yan(){
    return request(API.Method.Post,API.Path.YAN)
  },
  //修改个人信息
  xiu(){
    return request(API.Method.Put,API.Path.XIU)
  },
  //设置密码
  she(params){
    return request(API.Method.Post,API.Path.SHE,params)
  },
  //课程收藏
  cang(){
    return request(API.Method.Post,API.Path.CANG)
  }
}

//抛出Net
export default Net;
