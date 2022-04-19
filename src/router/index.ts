import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// 引入组件
// import PageHome from '@/pages/PageHome'
// import PageConcat from '@/pages/PageConcat'
// import PageCenter from '@/pages/PageCenter'
// import PageAbout from '@/pages/PageAbout'
// import PageLogin from '@/pages/PageLogin'
// import PagePublish from '@/pages/PagePublish'
// import PageDetail from '@/pages/PageDetail'
// import PageRegister from '@/pages/PageRegister'
// import PageMoment from '@/pages/PageMoment'
// import PageNotFound from '@/pages/PageNotFound'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    component: () => import('@/pages/PageLogin'),
    meta: {
      title: '迈出第一步 ⛅',
    },
  },
  {
    path: '/register',
    component: () => import('@/pages/PageRegister'),
    meta: {
      title: '加入我们吧 😜',
    },
  },
  {
    path: '/home',
    component: () => import('@/pages/PageHome'),
    meta: {
      title: '欢迎来到咸鱼社区 😁',
    },
  },
  {
    path: '/moment',
    component: () => import('@/pages/PageMoment'),
    meta: {
      title: '看看大家在干啥 🥰',
    },
  },
  {
    path: '/concat',
    component: () => import('@/pages/PageConcat'),
    meta: {
      title: '联系我们 💭',
    },
  },

  {
    path: '/center/:userId(\\d+)?',
    component: () => import('@/pages/PageCenter'),
    meta: {
      title: '欢迎回来 🤗',
      needLogin: true,
    },
  },
  {
    path: '/about',
    component: () => import('@/pages/PageAbout'),
    meta: {
      title: '关于本站 💡',
    },
  },
  {
    path: '/publish',
    component: () => import('@/pages/PagePublish'),
    meta: {
      title: '写点什么 📝',
      needLogin: true,
    },
  },
  {
    path: '/detail/:articleId(\\d+)',
    component: () => import('@/pages/PageDetail'),
    meta: {
      title: '文章详情 📃',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/PageNotFound'),
    meta: {
      title: '页面走丢了 😥',
    },
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

router.beforeEach((from, to) => {
  // 更改页面标题
  const { meta } = from
  document.title = meta.title as string
  // ...
})

export default router
