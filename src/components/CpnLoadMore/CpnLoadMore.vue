<template>
  <cpn-block-card>
    <div class="load-more">加载更多</div>
  </cpn-block-card>
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard'
</script>

<style lang="scss" scoped>
.load-more {
  padding: 1rem;
  text-align: center;
  font-weight: 700;
  color: $text-yellow;
}
</style>
