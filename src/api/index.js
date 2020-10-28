import  {request} from './core'
import  {Method,Path} from './config'

const Net = {
    // 抛出方法
    List(params){
      return request(Method.Get,Path.List,params)
    }
  }
  
  //抛出Net
  export default Net;