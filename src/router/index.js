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
  // 练习页面的考点路由
  {
    path: '/kaodian',
    name: 'kaodian',
    component: () => import('../views/grids/kaodian.vue')
  },
  // 练习页面的套卷路由
  {
    path: '/taojuan',
    name: 'taojuan',
    component: () => import('../views/grids/taojuan.vue')
  },
  // 练习页面的仿真练习
  {
    path: '/fangzhen',
    name: 'fangzhen',
    component: () => import('../views/grids/fangzhen.vue')
  },
  // 练习页面的错题路由
  {
    path: '/cuoti',
    name: 'cuoti',
    component: () => import('../views/grids/cuoti.vue')
  },
  // 练习页面的测评记录路由
  {
    path: '/ceping',
    name: 'ceping',
    component: () => import('../views/grids/ceping.vue')
  },
  // 练习页面的习题收藏路由
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
    component: () => import('../components/login/login.vue')
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
  // 拖拽点击跳转页面
  {
    path:"/drag",
    name:"Drag",
    component: () => import('../views/drage/Drag.vue')
  },
  // 练习页面击跳转第二页面
  {
    path:"/exect",
    name:"Exect",
    component: () => import('../views/grids/Exect.vue')
  },
  // 练习页面击跳转第二页面
  {
    path:"/exercise",
    name:"Exercise",
    component: () => import('../views/grids/Exercise.vue')
  },
  // 我的  个人信息修改页面

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
