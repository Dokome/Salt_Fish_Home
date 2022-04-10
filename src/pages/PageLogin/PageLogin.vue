<template>
  <div class="login" @click.self="closeLoginModal">
    <div class="login-main">
      <cpn-block-card title="请先完成登录 😛">
        <div class="main-inner">
          <n-input-group>
            <n-input placeholder="输入您的邮箱">
              <template #prefix>
                <n-icon :component="MailOutline" />
              </template>
            </n-input>
          </n-input-group>
          <n-input-group v-if="!loginMethod">
            <n-input placeholder="验证码">
              <template #prefix>
                <n-icon :component="KeypadOutline" />
              </template>
            </n-input>
            <n-button type="primary" strong>获取验证码</n-button>
          </n-input-group>
          <n-input-group v-else>
            <n-input placeholder="密码" type="password">
              <template #prefix>
                <n-icon :component="KeyOutline" />
              </template>
            </n-input>
          </n-input-group>
          <div class="register">没有账号？立即注册</div>
          <div class="change" @click="changeLoginMethod">切换密码登录</div>
          <n-button type="primary" strong>登录</n-button>
        </div>
      </cpn-block-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard'
import { NInput, NInputGroup, NIcon, NButton } from 'naive-ui'
import { MailOutline, KeypadOutline, KeyOutline } from '@vicons/ionicons5'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
// 0 为验证码 1 为邮箱 登录
const loginMethod = ref(false)
const router = useRouter()

function changeLoginMethod() {
  loginMethod.value = !loginMethod.value
}

function closeLoginModal() {
  router.push('/home')
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
