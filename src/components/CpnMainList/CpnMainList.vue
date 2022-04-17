<template>
  <template v-if="props.list.length">
    <cpn-block-card v-for="article in props.list" :key="article.id">
      <div class="main-list-item" @click="enterDetail(article.id)">
        <n-avatar
          v-lli="`http://112.74.108.218:8080/${article.articleImg}`"
          style="width: 10rem; height: 10rem; background-color: #f6f6f8"
          object-fit="cover"
          :fallback-src="loadingImg"
          :src="loadingImg"
        />
        <div class="item-detail">
          <div class="item-detail-header">{{ article.title }}</div>
          <div class="item-detail-content">
            <n-ellipsis line-clamp="3" :tooltip="false">
              {{ article.content }}
            </n-ellipsis>
          </div>
          <div class="item-detail-footer">
            <div class="footer-tags">
              <n-tag
                style="cursor: var(--cursor-normal)"
                :type="(tags[article.tag].color as any)"
                >{{ tags[article.tag].title }}</n-tag
              >
            </div>
            <div class="footer-interact">
              <span>{{ `🕕 ${article.gmtCreateTime}` }}</span>
              <span>{{ `👁‍🗨 ${article.viewCount || 0}` }}</span>
              <span>{{ `😍 ${article.likeCount || 0}` }}</span>
            </div>
          </div>
        </div>
      </div>
    </cpn-block-card>
  </template>
  <template v-else-if="!props.list.length && !loading">
    <n-empty description="空空如也" class="empty"> </n-empty>
  </template>
  <template v-else-if="loading">
    <cpn-block-card v-for="item in 4" :key="item" style="height: 192px" without-grow>
      <div class="skeleton"><n-skeleton text :repeat="3" /> <n-skeleton text /></div>
    </cpn-block-card>
  </template>
</template>

<script lang="ts" setup>
import type { ArticleListResponseMsg } from '@/service/articleType'
import CpnBlockCard from '@/components/CpnBlockCard'
import { NAvatar, NEllipsis, NTag, NSkeleton, NEmpty } from 'naive-ui'
import { useRouter } from 'vue-router'
import loadingImg from '@/assets/image/loading.png'
// props
const props = defineProps<{
  list: ArticleListResponseMsg[]
  loading: boolean
}>()
// 标签 暂时固定
const tags = [
  {
    title: '学习',
    color: 'primary',
  },
  {
    title: '生活',
    color: 'info',
  },
  {
    title: '吐槽',
    color: 'warning',
  },
  {
    title: '树洞',
    color: 'error',
  },
]

const router = useRouter()

function enterDetail(articleId: number) {
  router.push(`/detail/${articleId}`)
}
</script>

<style lang="scss" scoped>
.main-list-item {
  display: flex;
  padding: 1rem;
  gap: 1rem;

  :nth-child(n) {
    flex-shrink: 0;
  }

  .item-detail {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;

    .item-detail-header {
      font-size: 1.1rem;
      font-weight: 700;
    }

    .item-detail-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;

      .footer-tags {
        display: flex;
        gap: 1rem;
      }

      .footer-interact {
        display: flex;
        gap: 0.5rem;
        color: $text-gray;
      }
    }
  }
}

.skeleton {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

.empty {
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
