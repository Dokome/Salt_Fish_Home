<template>
  <cpn-nav-side />
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import CpnNavSide from '@/components/CpnNavSide'
</script>

<style lang="scss" scoped>
.app {
  position: absolute;
  left: 15rem;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  background-color: $background-gray;
}
</style>
