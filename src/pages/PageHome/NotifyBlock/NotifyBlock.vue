<template>
  <cpn-block-card title="更新公告 😀">
    <ul class="home-notify">
      <li v-for="(item, index) in notice" :key="index">{{ `${item.prefix} ${item.content}` }}</li>
    </ul>
    <div class="home-notify-logo">
      <n-icon :component="MegaphoneSharp" :color="yellow" size="80" depth="3" />
    </div>
  </cpn-block-card>
</template>
<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard/CpnBlockCard.vue'
import { MegaphoneSharp } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { yellow } from '@/assets/constant'

const notice = [
  {
    prefix: '✨',
    content: '咸鱼社区上线啦',
  },
  {
    prefix: '✅',
    content: '在这里你可以发布自己的文章，分享自己的心情，和小伙伴们一起交流与学习~',
  },
  {
    prefix: '🙋‍♀️',
    content: '笔记支持 markdown 语法，书写观看更加舒适',
  },
  {
    prefix: '🙋‍♂️',
    content: '还等什么，快来发布你的第一条动态吧',
  },
  {
    prefix: '🔛',
    content: 'F11 全屏体验更佳',
  },
]
</script>

<style lang="scss" scoped>
.home-notify {
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem;

  li {
    padding: 0.5rem 0.5rem;
    font-size: 1.05rem;
  }
}

.home-notify-logo {
  position: absolute;
  right: 2rem;
  bottom: 2rem;
}
</style>
