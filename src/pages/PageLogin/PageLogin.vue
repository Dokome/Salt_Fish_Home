<template>
  <div class="login">
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
          <n-input-group>
            <n-input placeholder="验证码">
              <template #prefix>
                <n-icon :component="KeypadOutline" />
              </template>
            </n-input>
            <n-button type="primary" strong>获取验证码</n-button>
          </n-input-group>
          <div class="register">没有账号？立即注册</div>
          <n-button type="primary" strong>登录</n-button>
        </div>
      </cpn-block-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard'
import { NInput, NInputGroup, NIcon, NButton } from 'naive-ui'
import { MailOutline, KeypadOutline } from '@vicons/ionicons5'
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
    }
  }
}
</style>
