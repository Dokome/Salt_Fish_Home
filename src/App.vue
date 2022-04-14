<template>
  <div class="app">
    <n-loading-bar-provider>
      <n-message-provider>
        <cpn-nav-side />
        <router-view v-slot="{ Component }" style="flex: 1">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </n-message-provider>
    </n-loading-bar-provider>
  </div>
</template>

<script lang="ts" setup>
import CpnNavSide from '@/components/CpnNavSide'
import { NMessageProvider, NLoadingBarProvider } from 'naive-ui'
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
  // overflow: auto;
  background-color: $background-gray;
}
</style>
