<template>
  <cpn-block-card :background="bgc2">
    <div class="home-data">
      <div class="home-data-title">🕐 {{ currentDate }}</div>
      <div>{{ last }}</div>
      <div>运 / 行 / 天 / 数 🚩</div>
      <div>{{ todayVisit }}</div>
      <div>今 / 日 / 访 / 问 🏁</div>
    </div>
  </cpn-block-card>
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard/CpnBlockCard.vue'
import dayjs from 'dayjs'
import { ref, onMounted } from 'vue'
import bgc2 from '@/assets/image/bgc2.jpg'
import { getTodayVisit } from '@/service/other'

const todayVisit = ref(0)
const currentDate = ref(dayjs().format('M月D日 hh:mm:ss'))
const last = Math.floor((+dayjs() - +dayjs('2022-04-10')) / 3600 / 1000 / 24)

setInterval(() => {
  currentDate.value = dayjs().format('M月D日 hh:mm:ss')
}, 1000)

onMounted(async () => {
  const res = await getTodayVisit()
  todayVisit.value = res
})
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
