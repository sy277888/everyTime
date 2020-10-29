//定义两种请求方式
const API = {
    Method: {
        Get: 'get',
        Post: 'post',
    },
    //定义请求地址
    Path: {
        HMWFL: '/api/app/courseClassify',
        LOGIN: '/api/app/login',
        HMWFL: '/api/app/courseClassify',
        HMWLIST: '/api/app/courseBasis?page=1&limit=10&',
        //首页列表
        List: '/api/app/recommend/appIndex',
        //个人信息
        XUE: '/api/app/userInfo',
        //特色课
        TE:"/api/app/courseBasis?page=1&limit=10&",
        //我的关注
        GUAN:"/api/app/collect",
        KE:"/api/app/courseInfo/basis_id=189",
        //学习
        Xue:"/api/app/myStudy/2",
        //首页推荐老师列表
        HomeLIST:'/api/app/teacher/info/id',
        //验证码登录
        YAN:"/api/app/login"
    }
}

export default API
