<template>
  <cpn-block-card title="写点新东西 📝" :without-grow="true">
    <div class="main-publish">
      <n-button strong secondary type="info"> 文章 </n-button>
      <n-button strong secondary> 讨论 </n-button>
    </div>
  </cpn-block-card>
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard'
import { NButton } from 'naive-ui'
</script>

<style lang="scss" scoped>
.main-publish {
  width: 20rem;
  display: flex;
  gap: 1rem;
  padding: 1rem;
}
</style>
