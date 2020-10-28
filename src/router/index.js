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
    //首页推荐老师详情
    path: '/homelist',
    name: 'Homelist',
    component: ()=>import('../views/Homelist.vue')
  },{
    //首页推荐老师详情预约页
    path: '/homedata',
    name: 'HomeData',
    component: ()=>import('../views/HomeData.vue')
  },
  {
    //学历日历
    path: '/calendar',
    name: 'Calendar',
    component: ()=>import('../views/Calendar.vue')
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
    //课程
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
