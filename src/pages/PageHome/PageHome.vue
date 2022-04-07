<template>
  <div class="home">
    <div class="home-bottompart">
      <cpn-block-card title="欢迎来到咸鱼社区 🎉"></cpn-block-card>
      <cpn-block-card title="在这里你可以 😀">123</cpn-block-card>
    </div>
    <div class="home-toppart">
      <cpn-block-card></cpn-block-card>
      <cpn-block-card></cpn-block-card>
      <cpn-block-card></cpn-block-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard'
</script>

<style lang="scss" scoped>
.home {
  padding: 2rem;
  min-height: calc(100vh - 4rem);
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 2rem;

  .home-toppart {
    display: flex;
    flex: 1;
    gap: 2rem;
  }

  .home-bottompart {
    display: flex;
    flex: 1;
    gap: 2rem;
  }
}
</style>
