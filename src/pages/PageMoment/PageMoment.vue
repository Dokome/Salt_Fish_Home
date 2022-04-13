<template>
  <div class="moment">
    <cpn-search-box />
    <cpn-layout-tem>
      <!-- 左边主要为列表 右边为杂项 -->
      <template #leftBox>
        <div class="moment-list">
          <!-- 文章排序 -->
          <cpn-sort-block />
          <!-- 文章列表 -->
          <cpn-main-list />
          <!-- 加载更多 -->
          <cpn-load-more />
        </div>
      </template>
      <template #rightBox>
        <author-block />
        <hot-block />
        <tags-block />
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
import HotBlock from './HotBlock'
import AuthorBlock from './AuthorBlock'
import TagsBlock from './TagsBlock'
</script>

<style lang="scss" scoped>
.moment {
  min-height: 100vh;
  overflow: auto;

  .moment-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
