<template>
  <div class="detail-interact">
    <cpn-block-card title="操作 💦">
      <div class="detail-interact-button">
        <n-button type="error" @click="articleLikeHandle">好文 😍</n-button>
        <n-button type="primary" @click="articledisLikeHandle">水文 👎 </n-button>
      </div>
    </cpn-block-card>
  </div>
</template>

<script lang="ts" setup>
import { NButton } from 'naive-ui'
import CpnBlockCard from '@/components/CpnBlockCard'
import { getArticleLike, getArticleDislike } from '@/service/article'

const props = defineProps<{ articleId: number }>()

function articleLikeHandle() {
  getArticleLike(props.articleId)
}

function articledisLikeHandle() {
  getArticleDislike(props.articleId)
}
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
