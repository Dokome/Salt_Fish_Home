<template>
  <cpn-block-card :background="'src/assets/image/bgc2.jpg'" title="关于我 🥝" :without-grow="true">
    <div class="main-info">
      <n-avatar
        round
        src="https://img2.baidu.com/it/u=3810088904,2972189392&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=6682"
        :size="240"
        :color="grey"
        object-fit="cover"
      />
      <div class="main-info-username">
        {{ 'Dokom' }}
        <n-icon size="30" :color="blue">
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
        {{ 'IM A SALT FISH WITH BIG DREAM IM A SALT FISH WITH BIG DREAM' }}
      </div>
      <div class="main-info-data">
        <div>
          <n-icon size="20">
            <eye-outline />
          </n-icon>
          <span>{{ `112.3 K` }}</span>
        </div>
        <div>
          <n-icon size="20" :color="yellow">
            <star />
          </n-icon>
          <span>{{ `110` }}</span>
        </div>
        <div>
          <n-icon size="20" :color="blue">
            <people />
          </n-icon>
          <span>{{ `110` }}</span>
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
import { grey, yellow, blue, white } from '@/assets/constant'
import CpnBlockCard from '@/components/CpnBlockCard'
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
