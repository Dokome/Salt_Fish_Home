<template>
  <div class="detail-info">
    <cpn-block-card title="关于">
      <div class="detail-info-list">
        <div class="detail-info-author">{{ `作者 - ${props.author}` }}</div>
        <div class="detail-info-time">{{ `发布时间 - ${props.time}` }}</div>
        <div class="detail-info-tags">
          <n-tag :type="(tags[tag].color as any)"> {{ tags[tag].title }} </n-tag>
        </div>
      </div>
    </cpn-block-card>
  </div>
</template>

<script lang="ts" setup>
import { NTag } from 'naive-ui'
import CpnBlockCard from '@/components/CpnBlockCard'
const props = defineProps<{
  tag: number
  author: string
  time: string
}>()

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
  {
    title: '加载中...',
    color: 'primary',
  },
]
</script>

<style lang="scss" scoped>
.detail-info {
  width: 100%;
  display: flex;

  .detail-info-list {
    padding: var(--padding-withTitle);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-weight: 700;
  }

  .detail-info-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
}
</style>
