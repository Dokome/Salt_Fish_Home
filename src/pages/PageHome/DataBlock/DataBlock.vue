<template>
  <cpn-block-card :background="'/src/assets/image/bgc2.jpg'">
    <div class="home-data">
      <div class="home-data-title">🕐 {{ currentDate }}</div>
      <div>365</div>
      <div>运 / 行 / 天 / 数 🚩</div>
      <div>120132</div>
      <div>今 / 日 / 访 / 问 🏁</div>
    </div>
  </cpn-block-card>
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard/CpnBlockCard.vue'
import dayjs from 'dayjs'
import { ref } from 'vue'
const currentDate = ref(dayjs().format('M月D日 hh:mm:ss'))

setInterval(() => {
  currentDate.value = dayjs().format('M月D日 hh:mm:ss')
}, 1000)
</script>

<style lang="scss" scoped>
.home-data {
  padding: 1rem;
  box-sizing: border-box;
  text-align: right;

  :nth-child(even) {
    font-size: 2.5rem;
  }

  .home-data-title {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 1.3vw;
  }
}
</style>
