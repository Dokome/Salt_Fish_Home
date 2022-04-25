import { useRoute } from 'vue-router'
import { useUserStore } from '@/store'
import { getUserInfo } from '@/service/user'
import { onActivated, ref, computed, watch } from 'vue'
// import { UserInfoResponseMsg } from '@/service/userType'

export function useUserInfo() {
  const route = useRoute()
  const userStore = useUserStore()
  // const userInfo = userStore.userInfo
  // 当有 userId 或者 userId 为自己的时候表示个人主页
  const currentUserId = route.params.userId || userStore.userId
  const userInfo = computed(() => userStore.userInfo)
  const modalShow = ref(false)
  let isSelf = currentUserId === userStore.userId
  //
  const currentUser = ref()

  // 获取用户信息
  async function getCurrentUserInfo() {
    const info = await getUserInfo(currentUserId)
    isSelf && userStore.updateUserInfo(info)
    currentUser.value = info
  }

  function modifyUserInfo() {
    modalShow.value = !modalShow.value
  }

  watch(userInfo, () => {
    currentUser.value = userInfo.value
  })

  onActivated(() => {
    isSelf = currentUserId === userStore.userId
    getCurrentUserInfo()
  })

  return {
    userInfo,
    currentUserId,
    currentUser,
    isSelf,
    modalShow,
    //
    modifyUserInfo,
  }
}
