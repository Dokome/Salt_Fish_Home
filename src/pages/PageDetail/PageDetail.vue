<template>
  <div class="detail">
    <cpn-layout-tem ref="detailWrapper">
      <template #leftBox>
        <div class="detail-main">
          <cpn-block-card
            :title="title || '内容详情 📖'"
            style="min-height: 90vh"
            :can-hover="true"
          >
            <v-md-editor ref="preview" :model-value="content" mode="preview"></v-md-editor>
          </cpn-block-card>
          <cpn-commnet-list
            :article-id="(articleId as string)"
            :current-list="currentList"
            :current-page="currentPage"
            :total-page="totalPage"
            @on-comment-update="onCommentUpdate"
            @change-current-page="changeCurrentPage"
          ></cpn-commnet-list>
        </div>
      </template>
      <template #rightBox>
        <info-block :author="authorName" :time="createTime" :tag="tag" />
        <recommand-block :tag="tag" />
        <interact-block ref="referElement" :article-id="Number(articleId)" />
        <div v-if="titles?.length" class="detail-catalogue">
          <cpn-block-card title="目录 🔰">
            <div class="catalogue">
              <div
                v-for="(anchor, index) in titles"
                :key="index"
                :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
                @click="handleAnchorClick(anchor)"
              >
                <a style="cursor: pointer">{{ anchor.title }}</a>
              </div>
            </div>
          </cpn-block-card>
        </div>
      </template>
    </cpn-layout-tem>
  </div>
</template>
<script lang="ts">
export default { name: 'PageDetail' }
</script>

<script lang="ts" setup>
import { useGetDetail, useHeadJump, useComment } from './hooks'
import CpnLayoutTem from '@/components/CpnLayoutTem'
import CpnBlockCard from '@/components/CpnBlockCard'
import CpnCommnetList from '@/components/CpnCommnetList'
import RecommandBlock from './RecommandBlock'
import InteractBlock from './InteractBlock'
import InfoBlock from './InfoBlock'
const { content, title, authorName, createTime, tag, articleId } = useGetDetail()
const { preview, detailWrapper, titles, handleAnchorClick } = useHeadJump(content)
const { totalPage, currentPage, currentList, onCommentUpdate, changeCurrentPage } = useComment(
  articleId as string
)
</script>

<style lang="scss" scoped>
.detail {
  .detail-main {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .detail-catalogue {
    position: sticky !important;
    top: 2rem;
    width: 100%;
    display: flex;
  }

  .detail-catalogue {
    user-select: none;
    .catalogue {
      padding: var(--padding-withTitle);
      max-height: 20rem;
      overflow: auto;
    }
  }
}
</style>
