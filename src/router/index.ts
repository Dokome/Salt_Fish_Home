import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// 引入组件
import PageHome from '@/pages/PageHome'
import PageConcat from '@/pages/PageConcat'
import PageNotFound from '@/pages/PageNotFound'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: PageHome,
    meta: {
      title: '欢迎来到咸鱼社区 😁',
    },
  },
  {
    path: '/concat',
    component: PageConcat,
    meta: {
      title: '联系我们 💭',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFound,
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
