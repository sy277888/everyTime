import  {request} from './core'
import  API from './config'

const Net = {
    // 抛出方法
  login(params){
    return request(API.Method.Post,API.Path.LOGIN,params)
  }
  }
  
  //抛出Net
  export default Net;