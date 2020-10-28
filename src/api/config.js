//定义两种请求方式
const API = {
    Method: {
        Get: 'get',
        Post: 'post'
    },
    //定义请求地址
    Path: {
        HMWFL: '/api/app/courseClassify',
        LOGIN: '/api/app/login',
        HMWFL: '/api/app/courseClassify',
        HMWLIST: '/api/app/courseBasis?page=1&limit=10&',
        //首页列表
        List: '/api/app/recommend/appIndex'
    }
}
//定义请求地址
// export const Path = {
//     //首页列表
//     List: '/api/app/recommend/appIndex'
// }
// export const Method = {
//         Get: 'get',
//         Post: 'post'
//     }
// export const Path = {
//         HMWFL: '/api/app/courseClassify',
//         HMWLIST: '/api/app/courseBasis?page=1&limit=10&'
//     }
export default API
