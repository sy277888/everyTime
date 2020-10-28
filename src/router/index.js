import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/kaodian',
    name: 'kaodian',
    component: () => import('../views/grids/kaodian.vue')
  },
  {
    path: '/taojuan',
    name: 'taojuan',
    component: () => import('../views/grids/taojuan.vue')
  },
  {
    path: '/fangzhen',
    name: 'fangzhen',
    component: () => import('../views/grids/fangzhen.vue')
  },
  {
    path: '/cuoti',
    name: 'cuoti',
    component: () => import('../views/grids/cuoti.vue')
  },
  {
    path: '/ceping',
    name: 'ceping',
    component: () => import('../views/grids/ceping.vue')
  },
  {
    path: '/xiti',
    name: 'xiti',
    component: () => import('../views/grids/xiti.vue')
  }
  ,
  {
    //约课记录
    path: '/make',
    name: 'Make',
    component: () => import('../views/Make.vue')
  }
  ,
  {
    //练习
    path: '/practice',
    name: 'Practice',
    component: () => import('../views/Practice.vue')
  }
  ,
  {
    //我的
    path: '/mime',
    name: 'Mime',
    component: () => import('../views/Mime.vue')
  }
  ,
  {
    //我的
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  //登录
  {
    path: "/login",
    name: "Login",
    component: () => import('../components/login/login.vue'),
  },
  //找回密码
  {
    path: "/mima",
    name: "Mima",
    component: () => import('../components/login/zhaohui.vue')
  },
  //注册
  {
    path: "/zhu",
    name: "Zhu",
    component: () => import('../components/login/zhuce.vue')
  },
  //设置
  {
    path: "/she",
    name: "She",
    component: () => import('../components/hhs/shezhi.vue')
  },
  //个人信息
  {
    path:"/ge",
    name:"Ge",
    component: () => import('../components/geren/geren.vue')

  },
  //课程详情页面
  {
    path:"/detail",
    name:"Detail",
    component: () => import('../components/Course/Detail.vue')

  },
  //我的特色课
  {
    path:"/xue",
    name:"Xue",
    component: () => import('../components/geren/xuexi.vue')
  },
  //剩余学习币
  {
    path:"/yuer",
    name:"Yuer",
    component: () => import('../components/geren/yuer.vue')
  },
  //我的关注
  {
    path:"/guan",
    name:"Guan",
    component: () => import('../components/geren/guuanzhu.vue')
  },
  //我的收藏
  {
    path:"/shou",
    name:"Shou",
    component: () => import('../components/geren/shou.vue')
  },
    //课程订单
    {
      path:"/ke",
      name:"Ke",
      component: () => import('../components/geren/kecheng.vue')
    },
  //会员订单
  {
    path:"/huiyuan",
    name:"Huiyuan",
    component: () => import('../components/geren/huiyuan.vue')
  },
  //约课订单
  {
    path:"/yueke",
    name:"Yueke",
    component: () => import('../components/geren/yueke.vue')
  },
  //优惠券
  {
    path:"/you",
    name:"You",
    component: () => import('../components/zhanghu/youhui.vue')
  },
  //我的学习卡
  {
    path:"/xu",
    name:"Xu",
    component: () => import('../components/zhanghu/xuexi.vue')
  },
  //开通会员
  {
    path:"/hu",
    name:"Hu",
    component: () => import('../components/zhanghu/hu.vue')
  },
  //我的消息
  {
    path:"/xiao",
    name:"Xiao",
    component: () => import('../components/fuwu/xiaoxi.vue')
  },
  //意见反馈
  {
    path:"/yi",
    name:"Yi",
    component: () => import('../components/fuwu/yijian.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
