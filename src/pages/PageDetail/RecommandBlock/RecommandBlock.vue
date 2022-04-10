<template>
  <div class="detail-command">
    <cpn-block-card title="相关推荐 😀">
      <cpn-nav-list />
    </cpn-block-card>
  </div>
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard'
import CpnNavList from '@/components/CpnNavList'
</script>

<style lang="scss" scoped>
.detail-command {
  width: 100%;
  display: flex;
}
</style>
