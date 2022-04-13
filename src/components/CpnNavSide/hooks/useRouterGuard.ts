import { useUserStore } from '@/store'
import { Ref } from 'vue'
import { useRouter } from 'vue-router'

export function useRouterGuard(currentNavTab: Ref<number>, menulist: any[]) {
  const userStore = useUserStore()
  const router = useRouter()

  router.beforeEach((to) => {
    if (to.meta.needLogin && !userStore.loginState) {
      ;(window as any).$message.warning('请先完成登录 ~')
      return '/login'
    }
    // 路由跳转
    const target = menulist.find((menu) => {
      return to.path.startsWith(menu.target)
    })

    currentNavTab.value = target ? target.id : currentNavTab.value
  })
}
