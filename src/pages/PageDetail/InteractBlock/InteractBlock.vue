<template>
  <div class="detail-interact">
    <cpn-block-card title="操作 💦">
      <div class="detail-interact-button">
        <n-button type="error">好文 😍</n-button>
        <n-button type="primary">水文 👎 </n-button>
      </div>
    </cpn-block-card>
  </div>
</template>

<script lang="ts" setup>
import { NButton } from 'naive-ui'
import CpnBlockCard from '@/components/CpnBlockCard'
</script>

<style lang="scss" scoped>
.detail-interact {
  width: 100%;
  display: flex;

  .detail-interact-button {
    padding: var(--padding-withTitle);
    display: flex;
    gap: 1rem;
  }
}
</style>
