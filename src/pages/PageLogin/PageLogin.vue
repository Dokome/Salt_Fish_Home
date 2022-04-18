<template>
  <div class="login" @click.self="closeLoginModal">
    <div class="login-main">
      <cpn-block-card title="请先完成登录 😛">
        <div class="main-inner">
          <n-input-group>
            <n-input placeholder="输入您的邮箱" :on-update:value="emailValueChangeHandle">
              <template #prefix>
                <n-icon :component="MailOutline" />
              </template>
            </n-input>
          </n-input-group>
          <n-input-group v-if="!loginMethod">
            <n-input placeholder="验证码" :on-update:value="emailCodeValueChangeHandle">
              <template #prefix>
                <n-icon :component="KeypadOutline" />
              </template>
            </n-input>
            <n-button type="primary" strong :disabled="cutDown > -1" @click="sendCodeMessage">{{
              codeMessage
            }}</n-button>
          </n-input-group>
          <n-input-group v-else>
            <n-input
              placeholder="密码"
              type="password"
              :on-update:value="passwordValueChangeHandle"
            >
              <template #prefix>
                <n-icon :component="KeyOutline" />
              </template>
            </n-input>
          </n-input-group>
          <div class="register" @click="changeToRegister">没有账号？立即注册</div>
          <div class="change" @click="changeLoginMethod">
            {{ !loginMethod ? '切换密码登录' : '切换验证码登录' }}
          </div>
          <n-button
            type="primary"
            strong
            :loading="loginLoading"
            :disabled="loginLoading"
            @click="sendLoginhandle"
            >登录</n-button
          >
        </div>
      </cpn-block-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard'
import { NInput, NInputGroup, NIcon, NButton } from 'naive-ui'
import { MailOutline, KeypadOutline, KeyOutline } from '@vicons/ionicons5'
import { useCutDown } from '../PageRegister/hooks'
import { useLoginInfo } from './hooks'
import { useRouter } from 'vue-router'
// 0 为验证码 1 为邮箱 登录
const router = useRouter()
const { codeMessage, cutDown } = useCutDown()
const {
  loginLoading,
  loginMethod,
  sendCodeMessage,
  emailValueChangeHandle,
  emailCodeValueChangeHandle,
  passwordValueChangeHandle,
  sendLoginhandle,
  changeLoginMethod,
} = useLoginInfo(cutDown)

function closeLoginModal() {
  router.push('/home')
}

function changeToRegister() {
  router.push('/register')
}
</script>

<style lang="scss" scoped>
.login {
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

  .login-main {
    width: 25rem;
    display: flex;

    .main-inner {
      padding: 1rem 2rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .register {
        font-size: 0.5rem;
        align-self: flex-end;
        color: $text-gray;
      }

      .change {
        font-size: 0.5rem;
        align-self: center;
        text-decoration: underline;
      }
    }
  }
}
</style>
