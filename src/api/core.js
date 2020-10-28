import axios from 'axios'
//引入封装接口
import API from './config'

//axios 实例
const instance  = axios.create({
    baseURL:'http://120.53.31.103:84',
    timeout:6000 //设置超时时间
})
//判断Post 还是Get 请求
export function request(method,url,params){
    switch(method){
        case API.Method.Get:
        return Get(url,params)
        case API.Method.Post:
        return Post(url,params)
    }
}
function Get(url,params){
    return instance.get(url,params)
}

function Post(url,params){
    return instance.post(url,params)
}