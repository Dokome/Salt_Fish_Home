<template>
  <div class="home">
    <div class="home-bottompart">
      <welcome-block />
      <notify-block />
    </div>
    <div class="home-toppart">
      <luck-block />
      <hot-block />
      <data-block />
    </div>
  </div>
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard'
import WelcomeBlock from './WelcomeBlock'
import NotifyBlock from './NotifyBlock'
import DataBlock from './DataBlock'
import HotBlock from './HotBlock'
import LuckBlock from './LuckBlock'
</script>

<style lang="scss" scoped>
.home {
  padding: 2rem;
  min-height: calc(100vh - 4rem);
  overflow: hidden;
  display: flex;
  // flex-wrap: wrap;
  flex-direction: column;
  gap: 2rem;

  .home-toppart,
  .home-bottompart {
    display: flex;
    flex: 1;
    flex-shrink: 0;
    gap: 2rem;
    max-height: 50%;
  }
}
</style>
