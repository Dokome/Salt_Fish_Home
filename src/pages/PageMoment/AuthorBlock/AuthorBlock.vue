<template>
  <div v-if="userList.length" class="active-author">
    <cpn-block-card title="昨日活跃作者 🏆">
      <ul class="author-list">
        <li
          v-for="user in userList"
          :key="user.userId"
          class="author-item"
          @click="backToHome(user.userId)"
        >
          <n-avatar
            round
            object-fit="cover"
            :src="user.imgUrl ? `http://112.74.108.218:8080/${user.imgUrl}` : defaultAvatar"
            fallback-src="/src/assets/image/bgc1.jpg"
          />
          {{ user.nick }}
        </li>
      </ul>
    </cpn-block-card>
  </div>
</template>

<script lang="ts" setup>
import { NAvatar } from 'naive-ui'
import CpnBlockCard from '@/components/CpnBlockCard'
import { ref, onMounted } from 'vue'
import { getHotUser } from '@/service/user'
import { UserInfoResponseMsg } from '@/service/userType'
import defaultAvatar from '@/assets/image/default-avatar.png'

const userList = ref<UserInfoResponseMsg[]>([])

onMounted(async () => {
  const res = await getHotUser(3)
  userList.value = res
})

function backToHome(userId: number | string) {
  location.href = `/center/${userId}`
}
</script>

<style lang="scss" scoped>
.active-author {
  display: flex;
  width: 100%;

  .author-list {
    display: flex;
    flex-direction: column;
    .author-item {
      padding: 1rem;
      display: flex;
      align-items: center;
      font-weight: 700;
      gap: 1rem;
      transition: 0.4s;

      &:hover {
        background-color: $background-yellow;
      }
    }
  }
}
</style>
