<template>
  <div class="active-author">
    <cpn-block-card title="昨日活跃作者 🏆">
      <ul class="author-list">
        <li v-for="item in 3" :key="item" class="author-item">
          <n-avatar round object-fit="cover" src="123" fallback-src="/src/assets/image/bgc1.jpg" />
          {{ 'Dokom' }}
        </li>
      </ul>
    </cpn-block-card>
  </div>
</template>

<script lang="ts" setup>
import { NAvatar } from 'naive-ui'
import CpnBlockCard from '@/components/CpnBlockCard'
</script>

<style lang="scss" scoped>
.active-author {
  display: flex;
  width: 100%;

  .author-list {
    display: flex;
    flex-direction: column;
    .author-item {
      padding: 1rem;
      display: flex;
      align-items: center;
      font-weight: 700;
      gap: 1rem;
      transition: 0.4s;

      &:hover {
        background-color: $background-yellow;
      }
    }
  }
}
</style>
