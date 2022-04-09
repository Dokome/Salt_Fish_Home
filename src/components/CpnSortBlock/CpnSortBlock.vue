<template>
  <cpn-block-card title="文章排序 🧠">
    <div class="filter">
      <div class="filter-item current">
        <n-icon size="20">
          <arrow-up-outline />
        </n-icon>
        <span>时间先后</span>
      </div>
      <div class="filter-item">
        <n-icon size="20">
          <arrow-down-outline />
        </n-icon>
        <span>时间先后</span>
      </div>
      <div class="filter-item">
        <n-icon size="20">
          <arrow-up-outline />
        </n-icon>
        <span>浏览次数</span>
      </div>
      <div class="filter-item">
        <n-icon size="20">
          <arrow-down-outline />
        </n-icon>
        <span>浏览次数</span>
      </div>
    </div>
  </cpn-block-card>
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard'
import { ArrowUpOutline, ArrowDownOutline } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  padding: 0 1rem 1rem;

  .filter-item {
    display: flex;
    align-items: center;
    gap: 0.1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    transition: 0.4rem;
    user-select: none;
    color: $text-gray;

    &.current {
      background-color: $background-yellow;
      color: $background-white;
      font-weight: 700;
    }
  }
}
</style>
