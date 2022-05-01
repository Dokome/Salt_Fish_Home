<template>
  <div class="search">
    <div class="box">
      <n-input-group>
        <n-input v-model:value="searchVal" placeholder="搜索文章标题" clearable round>
          <template #prefix>
            <n-icon>
              <search />
            </n-icon>
          </template>
        </n-input>
        <n-button type="primary" round @click="searchForArticle">搜索</n-button>
      </n-input-group>
    </div>
    <div class="host">
      <span v-if="props.isCenter">{{
        `欢迎来到 ${props.currentUser || '...'} 的个人空间 🏳‍🌈`
      }}</span>
      <span v-else>{{ `随便看看吧 😁` }}</span>
    </div>
    <div class="avatar">
      <n-avatar
        :src="userInfo.imgUrl ? `http://112.74.108.218:8080/${userInfo.imgUrl}` : defaultAvatar"
        round
        @click="backToHome"
      />
      <!-- <n-badge v-if="!props.isSelf" dot> -->
      <span v-if="!props.isSelf" style="color: #000" @click="backToHome">{{ '返回主页' }}</span>
      <!-- </n-badge> -->
      <span v-if="props.isCenter && props.isSelf" @click="modifyUserInfo">{{ '资料设置 ✏' }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
// import { UserInfoResponseMsg } from '@/service/userType'
import { NInput, NIcon, NAvatar, /* NBadge, */ NInputGroup, NButton } from 'naive-ui'
import { Search } from '@vicons/ionicons5'
import { useUserStore } from '@/store/user'
import defaultAvatar from '@/assets/image/default-avatar.png'
const searchVal = ref('')
const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)
const emits = defineEmits(['searchForArticle', 'modifyUserInfo'])
const props = defineProps<{
  isCenter?: boolean
  currentUser?: string
  isSelf?: boolean
}>()

function searchForArticle() {
  emits('searchForArticle', searchVal.value)
}
function modifyUserInfo() {
  emits('modifyUserInfo')
}
function backToHome() {
  location.href = '/center'
}
</script>

<style lang="scss" scoped>
.search {
  padding: 2rem 2rem 0;
  display: flex;
  justify-content: space-between;
  .box {
    width: 30vw;
  }

  .host {
    display: flex;
    align-items: center;
    gap: 3rem;
    font-weight: 700;
  }

  .avatar {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 700;
    cursor: var(--cursor-pointer);
  }
}
</style>
