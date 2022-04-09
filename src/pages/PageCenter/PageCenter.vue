<template>
  <div class="center">
    <cpn-search-box />
    <cpn-layout-tem>
      <!-- 左边主要为列表 右边为杂项 -->
      <template #leftBox>
        <div class="main-list">
          <!-- 文章排序 -->
          <cpn-sort-block />
          <!-- 文章列表 -->
          <cpn-main-list />
          <!-- 加载更多 -->
          <cpn-load-more />
        </div>
      </template>
      <template #rightBox>
        <info-block />
        <new-block />
      </template>
    </cpn-layout-tem>
  </div>
</template>

<script lang="ts" setup>
import CpnLayoutTem from '@/components/CpnLayoutTem'
import CpnSearchBox from '@/components/CpnSearchBox'
import CpnSortBlock from '@/components/CpnSortBlock'
import CpnMainList from '@/components/CpnMainList'
import CpnLoadMore from '@/components/CpnLoadMore'
import InfoBlock from './InfoBlock'
import NewBlock from './NewBlock'
</script>

<style lang="scss" scoped>
.center {
  min-height: 100vh;
  overflow: auto;

  .main-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
