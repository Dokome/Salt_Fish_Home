import { useMessage } from 'naive-ui'
import { emailValidhandle, emailCodeValidhandle } from '@/utils/valid'
import { ref, Ref } from 'vue'
import { useRouter } from 'vue-router'
import { getEmailCode, postRegister } from '@/service/user'

export function useRegisterInfo(cutDown: Ref<number>) {
  const registerLoading = ref(false)
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
      const { emailToken } = await getEmailCode(email.value)
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
      registerLoading.value = true
      const success = await postRegister(email.value, emailTokenR.value, code.value)
      registerLoading.value = false
      if (success) {
        return router.push('./login')
      }
    }
  }

  return {
    message,
    code,
    email,
    emailTokenR,
    registerLoading,
    //
    sendCodeMessage,
    validEmailCode,
    emailValueChangeHandle,
    emailCodeValueChangeHandle,
    sendRegisterhandle,
  }
}
