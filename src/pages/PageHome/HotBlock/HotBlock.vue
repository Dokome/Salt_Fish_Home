<template>
  <cpn-block-card title="热门动态 💥">
    <ul class="home-hot">
      <li v-for="(item, index) in hotlist" :key="item.id">
        {{ iconlist[index] }} {{ item.title }}
      </li>
    </ul>
    <div class="home-hot-logo">
      <n-icon :component="Bonfire" :color="yellow" size="80" depth="3" />
    </div>
  </cpn-block-card>
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard/CpnBlockCard.vue'
// import {ref} from 'vue'
import { Bonfire } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { yellow } from '@/assets/constant'
const iconlist = ['🌳', '🌺', '🌷', '🍀', '🌱']
const hotlist = [
  {
    id: 1,
    title: '前后端常见网络安全问题及防范措施',
  },
  {
    id: 2,
    title: '你所不知道的Vue插槽',
  },
  {
    id: 3,
    title: '使用eslint替代prettier格式化',
  },
  {
    id: 4,
    title: 'vue+electron实现对图片的截选，拖拽等功能。',
  },
  {
    id: 5,
    title: 'electron + vue项目实现打印小票功能',
  },
]
</script>

<style lang="scss" scoped>
.home-hot {
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;
  li {
    width: 100%;
    padding: 0.5rem 0.5rem;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.05rem;
    transition: 0.4s;
    &:hover {
      background-color: $text-yellow;
      border-radius: 0.5rem;
      color: $text-white;
    }
  }
}
.home-hot-logo {
  position: absolute;
  right: 2rem;
  bottom: 2rem;
}
</style>
