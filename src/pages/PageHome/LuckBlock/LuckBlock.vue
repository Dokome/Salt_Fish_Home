<template>
  <cpn-block-card title="今日运势 🎐">
    <div class="home-lucky">
      <div class="home-lucky-star">
        <template v-for="_ in currentStarNum" :key="_"
          ><n-icon size="40"> <star :color="yellow" /> </n-icon
        ></template>
      </div>
      <div class="home-lucky-result">{{ currentTextDesc }}</div>
      <n-button type="primary" class="home-lucky-button" @click="startLuckTest">{{
        currentTextDesc === '还未测试~' ? '点击测试' : '明天再来吧'
      }}</n-button>
    </div>
  </cpn-block-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CpnBlockCard from '@/components/CpnBlockCard/CpnBlockCard.vue'
import { NButton, NIcon } from 'naive-ui'
import { Star } from '@vicons/ionicons5'
import { yellow } from '@/assets/constant'
import dayjs from 'dayjs'
import storage from '@/utils/storage'
const currentStarNum = ref(1)
const currentTextDesc = ref(storage.get('__LUCKY_EXPIRE_TIME__') || '还未测试~')
const textlist = [
  '我们遇到什么困难也不要怕',
  '感觉累了就放空自己',
  '平平淡淡才是真',
  '考的全会，蒙的全对',
  '今天可以考虑买彩票了',
]

function setTodayLuck(value: any) {
  storage.set('__LUCKY_EXPIRE_TIME__', value, (+dayjs().endOf('date') - +dayjs()) / 1000)
}

function startLuckTest() {
  if (currentTextDesc.value !== '还未测试~') {
    return
  }
  const random = Math.floor(50 + Math.random() * 50)
  let current = 0
  function randomAnimate() {
    requestAnimationFrame(() => {
      if (current !== random) {
        currentStarNum.value = (current++ % 5) + 1
        randomAnimate()
      } else {
        currentTextDesc.value = textlist[currentStarNum.value - 1]
        setTodayLuck(currentTextDesc.value)
      }
    })
  }
  randomAnimate()
}
</script>

<style lang="scss" scoped>
.welcome {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: $text-white;
}

.home-lucky {
  padding: 2rem;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  .home-lucky-button {
    font-weight: 700 !important;
    width: 35%;
  }

  .home-lucky-result {
    font-weight: 700;
  }
}
</style>
