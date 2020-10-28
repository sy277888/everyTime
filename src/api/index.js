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
  courseNav(params) {
    return request(API.Method.Get, API.Path.HMWFL, params)
  },
  // 获取课程列表的方法
  courseList(params) {
    return request(API.Method.Get, API.Path.HMWLIST, params)
  },
  //获取我的学习
  xue(params){
    return request(API.Method.Get,API.Path.XUE,params)
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
  }
}

//抛出Net
export default Net;
