import { request } from './core'
import API from './config'

const Net = {
  // 抛出方法
  List(params) {
    return request(API.Method.Get, API.Path.List, params)
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
    return request(API.Method.Get, API.Path.HMWXQ + params)
  },
  // 立即学习
  courseStudy(params) {
    return request(API.Method.Get, API.Path.HMWStudy+params)
  },
  // 删除列表
  courseDel(params) {
    return request(API.Method.Del, API.Path.HMWStudy+params)
  },
  // 立即报名
  courseBuy(params) {
    return request(API.Method.Post, API.Path.HMWBuy,params)
  },
   // 提交订单
   courseSubmit(params) {
    return request(API.Method.Post, API.Path.HMWSubmit,params)
  },
  // 设置收藏
  courseXQSC(params) {
    return request(API.Method.Post, API.Path.HMWSC, params)
  },
  // 取消收藏
  courseXQSCNO(params) {
    return request(API.Method.Put, '/api/app/collect/cancel/' + params + '/1')
  },
  // 课程评价数据
  courseXQPJ(params) {
    return request(API.Method.Post, API.Path.HMWPJ, params)
  },
  //获取个人信息
  // xuue() {
  //   return request(API.Method.Get, API.Path.XUE)
  // },
  //特色课获取
  te() {
    return request(API.Method.Get, API.Path.TE)
  },
  //我的关注
  guan(params) {
    return request(API.Method.Get, API.Path.GUAN, params)
  },
  xue() {
    return request(API.Method.Get, API.Path.Xue)
  },
  //首页推荐老师列表详情页内容
  HomeLIST(id) {
    return request(API.Method.Get, API.Path.HomeLIST + id)
  },
  //验证码登录
  yan() {
    return request(API.Method.Post, API.Path.YAN)
  },
  //修改个人信息
  xiu() {
    return request(API.Method.Put, API.Path.XIU)
  },
  //设置密码
  she(params) {
    return request(API.Method.Post, API.Path.SHE, params)
  },
  //课程收藏
  cang(params) {
    return request(API.Method.Get, API.Path.CANG, params)
  },
  //讲师详情
  shi(params) {
    console.log(params);
    return request(API.Method.Get, API.Path.SHI + params)
  },
  //列表老师关关注
  GuanZhu(params) {
    return request(API.Method.Get, '/api/app/teacher/collect/' + params)
  },
  //Mime 页面  获取关注
  xli(params) {
    return request(API.Method.Get, API.Path.XLI, params)
  },
  ke(params) {
    return request(API.Method.Get, API.Path.KE + params)
  },
  bao(params) {
    return request(API.Method.Post, API.Path.BAO, params)
  },
  //搜搜
  sou(params) {
    return request(API.Method.Get, API.Path.SOU + params)
  },
  //消息通知
  xiao(params){
    return request(API.Method.Post,API.Path.XIAO,params)
  },
  //个人信息
  grren(){
    return request(API.Method.Get,API.Path.GENREN)
  },
  //头像
  img(params){
    return request(API.Method.Post,API.Path.IMG,params)
  },
  user(params){
    return request(API.Method.Put,API.Path.USER,params)
  },
  //城市
  csi(id=0){
    return request(API.Method.Get,API.Path.CSI+id)
  },
  //课程学习
  kx(){
  return request(API.Method.Get,API.Path.KX)
  },
  //消息通知，获取数据
  hmwGetMsg(params) {
    return request(API.Method.Post, API.Path.hmwMsg, params)
  },
  // 我的学习导航
  hmwStudyNav(params) {
    return request(API.Method.Get, API.Path.hmwStudyNav+params)
  },
  // 我的-名片渲染
  hmwMine(params) {
    return request(API.Method.Get, API.Path.hmwMine,params)
  }
}

//抛出Net
export default Net;
