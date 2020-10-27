import  {request} from './core'
import  {Method,Path} from './config'

const Net = {
    // 抛出方法
    courseNav(params){
      return request(Method.Get,Path.HMWFL,params)
    }
  }
  
  //抛出Net
  export default Net;