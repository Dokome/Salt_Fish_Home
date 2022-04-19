<template>
  <cpn-block-card :background="bgc2" title="关于我 🥝" :without-grow="true">
    <div class="main-info">
      <n-avatar
        round
        :src="
          props.userInfo?.imgUrl
            ? `http://112.74.108.218:8080/${props.userInfo?.imgUrl}`
            : defaultAvatar
        "
        :size="240"
        :color="grey"
        object-fit="cover"
      />
      <div class="main-info-username">
        {{ props.userInfo?.nick || '加载中 ...' }}
        <n-icon size="30" :color="props.userInfo?.sex ? blue : pink">
          <male />
        </n-icon>
      </div>
      <div class="main-info-age">
        <n-icon size="20" :color="white">
          <fish />
        </n-icon>
        <span>{{ `${20} 天` }}</span>
      </div>
      <div class="main-info-sign">
        {{ props.userInfo?.sign || '该用户很懒，没有留下什么' }}
      </div>
      <div class="main-info-data">
        <div>
          <n-icon size="20" :component="EyeOutline" />
          <span>{{ props.userInfo?.pageViews || 0 }}</span>
        </div>
        <div>
          <n-icon size="20" :color="yellow" :component="Star" />
          <span>{{ props.userInfo?.focusOnCount || 0 }}</span>
        </div>
        <div>
          <n-icon size="20" :color="blue" :component="People" />
          <span>{{ props.userInfo?.followedCount || 0 }}</span>
        </div>
      </div>
      <div class="main-info-follow">
        <n-button type="primary">🤩 关注</n-button>
        <n-button type="error">😥 举报</n-button>
      </div>
    </div>
  </cpn-block-card>
</template>

<script lang="ts" setup>
import { NAvatar, NIcon, NButton } from 'naive-ui'
import { Fish, EyeOutline, Star, People, Male } from '@vicons/ionicons5'
import { grey, yellow, blue, white, pink } from '@/assets/constant'
import CpnBlockCard from '@/components/CpnBlockCard'
import bgc2 from '@/assets/image/bgc2.jpg'
import defaultAvatar from '@/assets/image/default-avatar.png'
import { UserInfoResponseMsg } from '@/service/userType'
const props = defineProps<{
  userInfo: UserInfoResponseMsg | undefined
}>()
</script>

<style lang="scss" scoped>
.main-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  width: 20rem;
  padding: 2rem;
  border-radius: 0.5rem;
  .main-info-username {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 2rem;
    font-weight: 700;
    margin-top: 1rem;
  }
  .main-info-age {
    display: flex;
    gap: 0.5rem;
    font-size: 1.1rem;
    align-items: center;
  }

  .main-info-sign {
    margin-top: 0.5rem;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .main-info-data {
    margin-top: 0.5rem;
    display: flex;
    gap: 1rem;

    :nth-child(n) {
      display: flex;
      align-items: center;
      gap: 0.2rem;

      span {
        font-size: 1.1rem;
        font-weight: 700;
      }
    }
  }

  .main-info-follow {
    margin-top: 0.5rem;
    display: flex;
    gap: 1rem;
    :nth-child(n) {
      font-weight: 700 !important;
    }
  }
}
</style>
