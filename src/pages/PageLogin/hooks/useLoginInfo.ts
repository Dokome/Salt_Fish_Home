import { ref } from 'vue'
import type { Ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMessage } from 'naive-ui'
import { emailValidhandle, emailCodeValidhandle } from '@/utils/valid'
import { getLoginEmailCode, postloginWithCode } from '@/service/user'

export function useLoginInfo(cutDown: Ref<number>) {
  const loginLoading = ref(false)
  const router = useRouter()
  const message = useMessage()
  const email = ref('')
  const code = ref('')
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

  // 发送注册请求
  async function sendRegisterhandle() {
    if (validEmail() && validEmailCode()) {
      loginLoading.value = true
      const success = await postloginWithCode(email.value, emailTokenR.value, code.value)
      loginLoading.value = false
      if (success) {
        message.success('欢迎回来 😀~')
        return router.push('./home')
      }
    }
  }

  return {
    loginLoading,
    sendCodeMessage,
    emailValueChangeHandle,
    emailCodeValueChangeHandle,
    sendRegisterhandle,
  }
}
