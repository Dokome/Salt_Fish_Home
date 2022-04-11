<template>
  <div class="register" @click.self="closeLoginModal">
    <div class="register-main">
      <cpn-block-card title="注册账号 🔳">
        <div class="register-inner">
          <n-input-group>
            <n-input placeholder="输入您的邮箱" :on-update:value="emailValueChangeHandle">
              <template #prefix>
                <n-icon :component="MailOutline" />
              </template>
            </n-input>
          </n-input-group>
          <n-input-group>
            <n-input placeholder="验证码" :on-update:value="emailCodeValueChangeHandle">
              <template #prefix>
                <n-icon :component="KeypadOutline" />
              </template>
            </n-input>
            <n-button type="primary" :disabled="cutDown > -1" strong @click="sendCodeMessage">{{
              codeMessage
            }}</n-button>
          </n-input-group>
          <div class="login" @click="changeToLogin">已有账号？跳转登录</div>
          <n-button
            type="primary"
            strong
            :loading="registerLoading"
            :disabled="registerLoading"
            @click="sendRegisterhandle"
            >注册</n-button
          >
        </div>
      </cpn-block-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NInputGroup, NInput, NIcon, NButton } from 'naive-ui'
import { MailOutline, KeypadOutline } from '@vicons/ionicons5'
import { useCutDown, useRegisterInfo } from './hooks'
import { useRouter } from 'vue-router'
import CpnBlockCard from '@/components/CpnBlockCard'

const router = useRouter()
const { codeMessage, cutDown } = useCutDown()
const {
  registerLoading,
  sendCodeMessage,
  emailValueChangeHandle,
  emailCodeValueChangeHandle,
  sendRegisterhandle,
} = useRegisterInfo(cutDown)

function closeLoginModal() {
  router.push('/home')
}

function changeToLogin() {
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.register {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba($color: #000000, $alpha: 0.5);
  user-select: none;

  .register-main {
    width: 25rem;
    display: flex;

    .register-inner {
      padding: 1rem 2rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
}

.login {
  font-size: 0.5rem;
  align-self: flex-end;
  color: $text-gray;
}
</style>
