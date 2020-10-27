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
    path: '/wode',
    name: 'Wode',
    component: () => import('../views/wode.vue')
  }
  ,
  {
    //我的
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
