<template>
  <div ref="scrollElement" class="center">
    <cpn-search-box
      :is-center="true"
      :is-self="isSelf"
      :current-user="currentUser?.nick"
      @search-for-article="searchForArticle"
      @modify-user-info="modifyUserInfo"
    />

    <cpn-layout-tem>
      <!-- 左边主要为列表 右边为杂项 -->
      <template #leftBox>
        <div class="main-list">
          <!-- 文章排序 -->
          <cpn-sort-block v-if="currentList.length" @change-sort-kind="changeSortKind" />
          <!-- 文章列表 -->
          <cpn-main-list :list="currentList" :loading="isloading" />
          <!-- 加载更多 -->
          <cpn-load-more
            v-if="currentList.length"
            :current-page="curPage"
            :total-page="totalPage"
            @change-current-page="changeCurrentPage"
          />
        </div>
      </template>
      <template #rightBox>
        <info-block
          :user-info="currentUser"
          :user-id="userInfo.userId"
          @get-current-user-info="getCurrentUserInfo"
        />
        <new-block v-if="isSelf" ref="referElement" />
        <modify-block :modal-show="modalShow" :user-info="userInfo" />
        <cpn-back-top :scroll-element="scrollElement" :refer-element="referElement"></cpn-back-top>
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
import CpnBackTop from '@/components/CpnBackTop'
import InfoBlock from './InfoBlock'
import NewBlock from './NewBlock'
import ModifyBlock from './ModifyBlock'
import { useArticleList, useBackToTop } from '@/hooks'
import { useUserInfo } from './hooks'
const {
  currentUserId,
  currentUser,
  isSelf,
  userInfo,
  modalShow,
  getCurrentUserInfo,
  modifyUserInfo,
} = useUserInfo()
const {
  curPage,
  totalPage,
  currentList,
  isloading,
  //
  changeCurrentPage,
  searchForArticle,
  changeSortKind,
} = useArticleList(true, currentUserId)
const { scrollElement, referElement } = useBackToTop()
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
