<template>
  <div class="hot-list">
    <cpn-block-card title="热门文章">
      <cpn-nav-list></cpn-nav-list>
    </cpn-block-card>
  </div>
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard'
import CpnNavList from '@/components/CpnNavList'
</script>

<style lang="scss" scoped>
.hot-list {
  width: 100%;
  display: flex;
}
</style>
