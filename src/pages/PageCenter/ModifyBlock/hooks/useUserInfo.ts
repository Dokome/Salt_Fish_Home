import { ref, watch, toRaw } from 'vue'
import { uploadImage } from '@/service/file'
import { postModifyUserInfo, getUserInfo } from '@/service/user'
import { UserInfoResponseMsg } from '@/service/userType'
import { useUserStore } from '@/store'
import type { UploadCustomRequestOptions } from 'naive-ui'

export function useUserInfo(props: any) {
  const show = ref(false)
  const userInfo = ref<UserInfoResponseMsg>()
  const loading = ref(false)
  const userStore = useUserStore()

  watch(
    () => props.modalShow,
    () => {
      show.value = true
      userInfo.value = {
        ...toRaw(props.userInfo || ({} as any)),
        password: '',
        newPassword: '',
      }
    }
  )

  async function coverImgRequestHandle({ file }: UploadCustomRequestOptions) {
    const formData = new FormData()
    formData.append('file', file.file as File)
    const url = await uploadImage(formData)
    ;(userInfo as any).value.imgUrl = `file${url}`
  }

  async function modifyUserInfo() {
    loading.value = true
    const success = await postModifyUserInfo(userInfo.value as any)
    loading.value = false
    if (success) {
      const info = await getUserInfo((userInfo as any).value.userId)
      userStore.updateUserInfo(info)
    }
  }

  // 更新值
  function changeNickHandle(inputval: string) {
    ;(userInfo as any).value.nick = inputval
  }
  function changePasswordHandle(inputval: string) {
    ;(userInfo as any).value.password = inputval
  }
  function changeNewPasswordHandle(inputval: string) {
    ;(userInfo as any).value.newPassword = inputval
  }
  function changeSignHandle(inputval: string) {
    ;(userInfo as any).value.sign = inputval
  }
  function changeGenderHandle(inputval: number) {
    ;(userInfo as any).value.sex = inputval
  }

  // 提交修改

  return {
    show,
    userInfo,
    loading,
    //
    coverImgRequestHandle,
    changeNickHandle,
    changePasswordHandle,
    changeNewPasswordHandle,
    changeGenderHandle,
    changeSignHandle,
    modifyUserInfo,
  }
}
