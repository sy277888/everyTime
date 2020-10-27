import  {request} from './core'
import  {Method,Path} from './config'

const Net = {
    // 抛出方法
    courseNav(params){
      return request(Method.Get,Path.HMWFL,params)
    },
    // 获取课程列表的方法
    courseList(params){
      return request(Method.Get,Path.HMWLIST,params)
    }
  }
  
  //抛出Net
  export default Net;