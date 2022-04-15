import { useRoute } from 'vue-router'
import { useUserStore } from '@/store'

export function useUserInfo() {
  const route = useRoute()
  const userStore = useUserStore()
  // 当有 userId 或者 userId 为自己的时候表示个人主页
  const currentUserId = route.params.userId || userStore.userId
  const isSelf = currentUserId === userStore.userId
  return {
    currentUserId,
    isSelf,
  }
}
