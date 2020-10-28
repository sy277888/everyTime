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
  xue(){
    return request(API.Method.Get,API.Path.Xue)
  }
}

//抛出Net
export default Net;
