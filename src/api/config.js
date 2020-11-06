//定义两种请求方式
const API = {
    Method: {
        Get: 'get',
        Post: 'post',
        Put: 'put'
    },
    //定义请求地址
    Path: {
        LOGIN: '/api/app/login',
        // 课程导航
        HMWFL: '/api/app/courseClassify',
        // 课程列表
        HMWLIST: '/api/app/courseBasis?page=1&limit=100&',
        // 课程详情数据
        HMWXQ: '/api/app/courseInfo/basis_id=',
        // 课程收藏操作
        HMWSC: '/api/app/collect',
        // 立即学习
        HMWStudy: '/api/app/myStudy/course/',
        // 立即报名
        HMWBuy: '/api/app/order/shopInfo',
        // 提交订单
        HMWSubmit: '/api/app/order/downOrder',
        // 课程评价数据获取
        HMWPJ: '/api/app/courseComment',
        //首页列表
        List: '/api/app/recommend/appIndex',
        // //个人信息
        // XUE: '/api/app/userInfo',
        //特色课
        TE: "/api/app/courseBasis?page=1&limit=10&",
        //我的关注
        GUAN: "/api/app/collect",
        //
        KE: "/api/app/courseInfo/basis_id=",
        //学习
        Xue: "/api/app/myStudy/2",
        //首页推荐老师列表
        HomeLIST: '/api/app/teacher/',
        //验证码登录
        YAN: "/api/app/login",
        //修改个人信息
        XIU: "/api/app/user",
        //设置密码
        SHE: "/api/app/smsCode",
        //课程收藏
        CANG: "/api/app/collect?page=1&limit=10&type=1",
        //课程取消收藏
        CANCEL: "/api/app/collect/cancel/227/1",
        //教师详情
        SHI: "/api/app/teacher/",
        //我的学习
        XLI:"/api/app/myStudy/3?",
        BAO:"/api/app/order/downOrder",
        hmwStudyNav:'/api/app/myStudy/',//我的学习页面渲染
        //搜索
        SOU:"/api/app/courseBasis?limit=10&page=1&course_type=0&keywords=",
        //消息通知
        XIAO:"/api/app/message/classifyMessage",
        //个人信息
        GENREN:"/api/app/userInfo?",
        //头像保存
        IMG:"/api/app/public/img",
        USER:"/api/app/user",
        //城市
        CSI:"/api/app/sonArea/",
        //课程和学习
        KX:"/api/app/module/attribute/1?",
        // 消息通知
        hmwMsg:"api/app/message/classifyMessage",
    }
}

export default API
