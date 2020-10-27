import axios from 'axios'
//引入封装接口
import {Method} from '../api/config'

//axios 实例
const instance  = axios.create({
    baseURL:'',
    timeout:6000 //设置超时时间
})
//判断Post 还是Get 请求
export function request(method,url,parasm){
    switch(method){
        case Method.Get:
        return Get(url,parasm)
        case Method.Post:
        return Post(url,parasm)
    }
}
function Get(url,parasm){
    return instance.get(url,parasm)
}

function Post(url,params){
    return instance.post(url,params)
}