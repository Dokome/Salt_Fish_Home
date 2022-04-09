<template>
  <div class="app">
    <cpn-nav-side />
    <router-view v-slot="{ Component }" style="flex: 1">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import CpnNavSide from '@/components/CpnNavSide'
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  min-width: 1200px;
  min-height: 600px;
  overflow: auto;
  background-color: $background-gray;
}
</style>
