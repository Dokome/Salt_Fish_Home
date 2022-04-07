<template>
  <cpn-block-card title="欢迎来到咸鱼社区 🎉" :background="'/src/assets/image/bgc1.jpg'" />
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard/CpnBlockCard.vue'
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
</style>
