import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: "首页"
    },
    component: Home,
  },
  {
    //首页推荐老师详情
    path: '/homelist',
    name: 'Homelist',
    meta: {
      title: "老师详情"
    },
    component: () => import('../views/Homelist.vue'),

  }, {
    //首页推荐老师详情预约页
    path: '/homedata',
    name: 'HomeData',
    meta: {
      title: "预约课程"
    },
    component: () => import('../views/HomeData.vue')
  },
  //学历日历
  {
    path: '/lenderData',
    name: 'LenderData',
    meta: {
      title: "学习日历"
    },
    component: () => import('../views/LenderData.vue')
  },
  {
    // 一对一辅导
    path: '/solo',
    name: 'Solo',
    meta: {
      title: "一对一辅导"
    },
    component: () => import('../views/Solo.vue')
  }, {
    // 一对一辅导预约页
    path: '/sololist',
    name: 'Sololist',
    meta: {
      title: "预约课程"
    },
    component: () => import('../views/Sololist.vue')
  },
  {
    // 一对一辅导详情页
    path: '/solodata',
    name: 'Solodata',
    meta: {
      title: "讲师详情"
    },
    component: () => import('../views/Solodata.vue')
  },
  // 课程
  {
    path: '/about',
    name: 'About',
    meta: {
      title: "课程"
    },
    component: () => import('../views/About.vue')
  },
  // 练习页面的考点路由
  {
    path: '/kaodian',
    name: 'kaodian',
    meta: {
      title: "考点专练"
    },
    component: () => import('../views/grids/kaodian.vue')
  },
  // 练习页面的套卷路由
  {
    path: '/taojuan',
    name: 'taojuan',
    meta: {
      title: "套卷练习"
    },
    component: () => import('../views/grids/taojuan.vue')
  },
  // 练习页面的仿真练习
  {
    path: '/fangzhen',
    name: 'fangzhen',
    meta: {
      title: "仿真练习"
    },
    component: () => import('../views/grids/fangzhen.vue')
  },
  // 练习页面的错题路由
  {
    path: '/cuoti',
    name: 'cuoti',
    meta: {
      title: "错题练习"
    },
    component: () => import('../views/grids/cuoti.vue')
  },
  // 练习页面的测评记录路由
  {
    path: '/ceping',
    name: 'ceping',
    meta: {
      title: "测评纪录"
    },
    component: () => import('../views/grids/ceping.vue')
  },
  // 练习页面的习题收藏路由
  {
    path: '/xiti',
    name: 'xiti',
    meta: {
      title: "习题收藏"
    },
    component: () => import('../views/grids/xiti.vue')
  },
  {
    //约课记录
    path: '/make',
    name: 'Make',
    meta: {
      title: "约课纪录"
    },
    component: () => import('../views/Make.vue'),
  }
  ,
  {
    //练习
    path: '/practice',
    name: 'Practice',
    meta: {
      title: "练习"
    },
    component: () => import('../views/Practice.vue')
  }
  ,
  {
    //我的
    path: '/mime',
    name: 'Mime',
    meta: {
      title: "我的"
    },
    component: () => import('../views/Mime.vue'),
  }
  ,
  {
    //课程
    path: '/about',
    name: 'About',
    meta: {
      title: "课程"
    },
    component: () => import('../views/About.vue')
  },
  //登录
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "登录"
    },
    component: () => import('../components/login/login.vue'),
  },
  //找回密码
  {
    path: "/mima",
    name: "Mima",
    meta: {
      title: "找回密码"
    },
    component: () => import('../components/login/zhaohui.vue')
  },
  //注册
  {
    path: "/zhu",
    name: "Zhu",
    meta: {
      title: "注册"
    },
    component: () => import('../components/login/zhuce.vue')
  },
  //设置
  {
    path: "/she",
    name: "She",
    meta: {
      title: "设置"
    },
    component: () => import('../components/hhs/shezhi.vue')
  },
  //个人信息 
  {
    path: "/per",
    name: "Per",
    meta: {
      title: "个人信息"
    },
    component: () => import('../components/grenxinxi/PersonalInformation.vue')
  },
  //昵称修改
  {
    path: "/nickname",
    name: "Nickname",
    meta: {
      title: "修改昵称"
    },
    component: () => import('../components/grenxinxi/Nickname.vue')
  },
  //性别的修改
  {
    path: "/sex",
    name: "Sex",
    meta: {
      title: "修改性别"
    },
    component: () => import('../components/grenxinxi/Sex.vue')
  },
  //学科的修改
  {
    path: "/subject",
    name: "Subject",
    meta: {
      title: "修改学科"
    },
    component: () => import('../components/grenxinxi/Subject.vue')

  },
  // 拖拽点击跳转页面
  {
    path: "/drag",
    name: "Drag",
    meta: {
      title: "练习"
    },
    component: () => import('../views/drage/Drag.vue')
  },
  // 练习页面击跳转第二页面
  {
    path: "/exect",
    name: "Exect",
    component: () => import('../views/grids/Exect.vue')
  },
  // 练习页面击跳转第二页面
  {
    path: "/exercise",
    name: "Exercise",
    component: () => import('../views/grids/Exercise.vue')
  },


  //课程详情页面
  {
    path: "/detail",
    name: "Detail",
    meta: {
      title: "课程详情"
    },
    component: () => import('../components/Course/Detail.vue')

  },
  //确认订单页面
  {
    path: "/isbuy",
    name: "IsBuy",
    meta: {
      title: "确认订单"
    },
    component: () => import('../components/Course/IsBuy.vue')

  },
  //我的特色课
  {
    path: "/xue",
    name: "Xue",
    meta: {
      title: "我的学习"
    },
    component: () => import('../components/geren/xuexi.vue')
  },
  //剩余学习币
  {
    path: "/yuer",
    name: "Yuer",
    meta: {
      title: "剩余学习币"
    },
    component: () => import('../components/geren/yuer.vue')
  },
  //我的关注
  {
    path: "/guan",
    name: "Guan",
    meta: {
      title: "我的关注"
    },
    component: () => import('../components/geren/guuanzhu.vue')
  },
  //我的收藏
  {
    path: "/shou",
    name: "Shou",
    meta: {
      title: "我的收藏"
    },
    component: () => import('../components/geren/shou.vue')
  },
  //课程订单
  {
    path: "/ke",
    name: "Ke",
    meta: {
      title: "课程订单"
    },
    component: () => import('../components/geren/kecheng.vue')
  },
  //会员订单
  {
    path: "/huiyuan",
    name: "Huiyuan",
    meta: {
      title: "会员订单"
    },
    component: () => import('../components/geren/huiyuan.vue')
  },
  //约课订单
  {
    path: "/yueke",
    name: "Yueke",
    meta: {
      title: "约课订单"
    },
    component: () => import('../components/geren/yueke.vue')
  },
  //优惠券
  {
    path: "/you",
    name: "You",
    meta: {
      title: "优惠券"
    },
    component: () => import('../components/zhanghu/youhui.vue')
  },
  //我的学习卡
  {
    path: "/xu",
    name: "Xu",
    meta: {
      title: "我的学习卡"
    },
    component: () => import('../components/zhanghu/xuexi.vue')
  },
  //开通会员
  {
    path: "/hu",
    name: "Hu",
    meta: {
      title: "开通会员"
    },
    component: () => import('../components/zhanghu/hu.vue')
  },
  //我的消息
  {
    path: "/xiao",
    name: "Xiao",
    meta: {
      title: "消息中心"
    },
    component: () => import('../components/fuwu/xiaoxi.vue')
  },
  //消息
  {
    path: "/message",
    name: "message",
    meta: {
      title: "消息"
    },
    component: () => import('../components/fuwu/Message.vue')
  },
  //意见反馈
  {
    path: "/yi",
    name: "Yi",
    meta: {
      title: "意见反馈"
    },
    component: () => import('../components/fuwu/yijian.vue')
  },
  //立即页面
  {
    path: "/study",
    name: "Study",
    meta: {
      title: "学习详情"
    },
    component: () => import('../components/Course/Study.vue')

  },
  //设置密码
  {
    path: "/shezhi",
    name: "Shezhi",
    meta: {
      title: "设置密码"
    },
    component: () => import('../components/mimaxiu/xiumi.vue')
  },
  //一对一辅导的搜索页
  {
    path: "/search",
    name: "Search",
    meta: {
      title: "搜索"
    },
    component: () => import('../views/sousuo/Search.vue')
  },
  // 练习页面的测评记录解析详情
  {
    path: "/cakans",
    name: "Cakans",
    component: () => import('../views/shoucang/Cakans.vue')
  },
  // 练习页面的测评记录
  {
    path: "/ping",
    name: "Ping",
    component: () => import('../views/shoucang/Ping.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//全局前置守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next()
  if (to.name === 'Home') {
    window.localStorage.removeItem('Tabindex')
  }
  if (to.name === 'About') {
    localStorage.setItem('Tabindex', '1')
  } else if (to.name === 'Make') {
    localStorage.setItem('Tabindex', '2')
  } else if (to.name === 'Practice') {
    localStorage.setItem('Tabindex', '3')
  } else if (to.name === 'Practice') {
    localStorage.setItem('Mime', '4')
  }
})


export default router
