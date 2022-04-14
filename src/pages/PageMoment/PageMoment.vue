<template>
  <div class="moment">
    <cpn-search-box @search-for-article="searchForArticle" />
    <cpn-layout-tem>
      <!-- 左边主要为列表 右边为杂项 -->
      <template #leftBox>
        <div class="moment-list">
          <!-- 文章排序 -->
          <cpn-sort-block />
          <!-- 文章列表 -->
          <cpn-main-list :list="currentList" :loading="isloading" />
          <!-- 加载更多 -->
          <cpn-load-more
            :current-page="curPage"
            :total-page="totalPage"
            @change-current-page="changeCurrentPage"
          />
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
import { useArticleList } from './hooks'
const {
  curPage,
  totalPage,
  currentList,
  isloading,
  //
  changeCurrentPage,
  searchForArticle,
} = useArticleList()
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
