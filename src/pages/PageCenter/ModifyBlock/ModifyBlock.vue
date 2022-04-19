<template>
  <!-- 修改用户信息 -->
  <n-modal v-model:show="show">
    <div class="modify">
      <cpn-block-card title="修改信息 📝">
        <div class="modify-main">
          <n-tag type="warning">无需修改的资料可不填入内容 😃</n-tag>
          <n-input-group>
            <n-input-group-label style="width: 5rem; text-align: center"
              >用户名</n-input-group-label
            >
            <n-input
              :maxlength="8"
              show-count
              clearable
              placeholder="在此输入修改后的用户名"
              :value="userInfo.nick"
              @update-value="changeNickHandle"
            />
          </n-input-group>
          <n-input-group>
            <n-input-group-label style="width: 6rem; text-align: center"
              >修改密码</n-input-group-label
            >
            <n-input
              :maxlength="16"
              show-count
              clearable
              type="password"
              placeholder="修改后的密码"
              :value="(userInfo as any).newPassword"
              @update-value="changeNewPasswordHandle"
            />
          </n-input-group>
          <n-input-group>
            <n-input-group-label style="width: 5rem; text-align: center"
              >原密码</n-input-group-label
            >
            <n-input
              :maxlength="16"
              show-count
              clearable
              placeholder="修改密码请输入原密码"
              type="password"
              :value="(userInfo as any).password"
              @update-value="changePasswordHandle"
            />
          </n-input-group>
          <n-input-group>
            <n-input-group-label style="width: 6rem; text-align: center"
              >个性签名</n-input-group-label
            >
            <n-input
              :maxlength="30"
              show-count
              clearable
              placeholder="输入您的个性签名"
              :value="userInfo.sign"
              @update-value="changeSignHandle"
            />
          </n-input-group>
          <n-input-group>
            <n-input-group-label style="width: 5rem; text-align: center">性别</n-input-group-label>
            <n-select
              :options="options"
              placeholder="性别"
              :value="userInfo.sex"
              @update-value="changeGenderHandle"
            />
          </n-input-group>
          <n-tag type="primary">上传头像 （推荐使用 1:1 的图片 🤗）</n-tag>
          <n-upload list-type="image-card" :max="1" :custom-request="coverImgRequestHandle" />
          <n-button
            type="primary"
            style="width: 8rem; align-self: flex-end"
            :disabled="loading"
            @click="modifyUserInfo"
            >修改</n-button
          >
        </div>
      </cpn-block-card>
    </div>
  </n-modal>
</template>

<script lang="ts" setup>
import {
  NModal,
  NInputGroup,
  NInput,
  NInputGroupLabel,
  NButton,
  NTag,
  NUpload,
  NSelect,
} from 'naive-ui'
import { UserInfoResponseMsg } from '@/service/userType'
import CpnBlockCard from '@/components/CpnBlockCard'
import { useOptions, useUserInfo } from './hooks'
const props = defineProps<{
  modalShow?: boolean
  userInfo: UserInfoResponseMsg | undefined
}>()
const { options } = useOptions()
const {
  show,
  userInfo,
  loading,
  coverImgRequestHandle,
  changeGenderHandle,
  changeNewPasswordHandle,
  changeNickHandle,
  changePasswordHandle,
  changeSignHandle,
  modifyUserInfo,
} = useUserInfo(props)
</script>

<style lang="scss" scoped>
.modify {
  display: flex;
  width: 40rem;

  .modify-main {
    padding: var(--padding-withTitle);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
