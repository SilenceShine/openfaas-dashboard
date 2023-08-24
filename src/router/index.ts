import { createRouter, createWebHashHistory } from 'vue-router'
import { userStore } from '@/store/user'

const history = createWebHashHistory()
// const history = createWebHistory()
const routers = [
  {
    path: '/',
    name: 'home',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/view/Login.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/view/Home.vue'),
  }
];

const router = createRouter({
  history: history,
  routes: routers,
})

// 判断是否登录
router.beforeEach((to, _, next) => {
  if (to.path == '/login') {
    return next()
  }
  const userInfo = userStore().userInfo
  if (userInfo.token == null || userInfo.token == '') {
    console.log('未登录')
    return next('/login')
  }
  next()
})

export default router