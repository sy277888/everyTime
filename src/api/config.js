//定义两种请求方式
const API = {
    Method: {
        Get: 'get',
        Post: 'post'
    },
    //定义请求地址
    Path: {
        HMWFL: '/api/app/courseClassify',
        LOGIN:'/api/app/login'
    }
}
//定义请求地址
export const Path = {
   HMWFL:'/api/app/courseClassify',
   HMWLIST:'/api/app/courseBasis?page=1&limit=10&'
}
export default API
