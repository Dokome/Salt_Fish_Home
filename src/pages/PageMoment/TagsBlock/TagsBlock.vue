<template>
  <div class="tag-list">
    <cpn-block-card title="热门标签">
      <ul class="tag-list-main">
        <li><n-tag>学习</n-tag></li>
        <li><n-tag>生活</n-tag></li>
        <li><n-tag>树洞</n-tag></li>
      </ul>
    </cpn-block-card>
  </div>
</template>

<script lang="ts" setup>
import { NTag } from 'naive-ui'
import CpnBlockCard from '@/components/CpnBlockCard'
</script>

<style lang="scss" scoped>
.tag-list {
  width: 100%;
  display: flex;
  .tag-list-main {
    padding: var(--padding-withTitle);
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
}
</style>
