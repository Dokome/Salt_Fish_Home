<template>
  <div class="detail-info">
    <cpn-block-card title="关于">
      <div class="detail-info-list">
        <div class="detail-info-author">{{ `作者 - ${'dokom'}` }}</div>
        <div class="detail-info-time">{{ `发布时间 - ${'2022 4 10'}` }}</div>
        <div class="detail-info-tags">
          <n-tag type="warning"> wu </n-tag>
          <n-tag type="info"> 超人不会飞 </n-tag>
          <n-tag type="primary"> 超人不会飞 </n-tag>
        </div>
      </div>
    </cpn-block-card>
  </div>
</template>

<script lang="ts" setup>
import { NTag } from 'naive-ui'
import CpnBlockCard from '@/components/CpnBlockCard'
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
