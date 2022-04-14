import { ref } from 'vue'
import type { Ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMessage } from 'naive-ui'
import { emailValidhandle, emailCodeValidhandle } from '@/utils/valid'
import { getLoginEmailCode, postloginWithCode, postloginWithPassword } from '@/service/user'
import { useUserStore } from '@/store'
import hexMd5 from '@/utils/encrypt'

export function useLoginInfo(cutDown: Ref<number>) {
  const userStore = useUserStore()
  const loginMethod = ref(false)
  const loginLoading = ref(false)
  const router = useRouter()
  const message = useMessage()
  const email = ref('')
  const code = ref('')
  const password = ref('')
  // 返回的邮箱验证 token
  const emailTokenR = ref('')
  // 验证邮箱格式
  function validEmail() {
    if (!emailValidhandle(email.value)) {
      message.error('请填写正确的邮箱')
      return false
    }
    return true
  }
  // 发送验证码
  async function sendCodeMessage() {
    if (validEmail()) {
      const { emailToken } = await getLoginEmailCode(email.value)
      emailTokenR.value = emailToken
      cutDown.value = 60
    }
  }
  // 验证验证码格式
  function validEmailCode() {
    if (!emailCodeValidhandle(code.value)) {
      message.error('验证码需为六位数字')
      return false
    }

    return true
  }

  // 处理输入框输入
  function emailValueChangeHandle(inputval: string) {
    email.value = inputval
  }

  function emailCodeValueChangeHandle(inputval: string) {
    code.value = inputval
  }

  function passwordValueChangeHandle(inputval: string) {
    password.value = inputval
  }

  function changeLoginMethod() {
    loginMethod.value = !loginMethod.value
  }

  // 发送登录请求
  async function sendLoginhandle() {
    if (validEmail() && (loginMethod.value || validEmailCode())) {
      loginLoading.value = true
      let success = true
      if (loginMethod.value) {
        success = await postloginWithPassword(email.value, hexMd5(password.value))
      } else {
        success = await postloginWithCode(email.value, emailTokenR.value, code.value)
      }
      loginLoading.value = false
      if (success) {
        userStore.changeLoginState(true)
        message.success('欢迎回来 😀~')
        return router.push('./home')
      }
    }
  }

  return {
    loginMethod,
    loginLoading,
    sendCodeMessage,
    emailValueChangeHandle,
    emailCodeValueChangeHandle,
    passwordValueChangeHandle,
    sendLoginhandle,
    changeLoginMethod,
  }
}
