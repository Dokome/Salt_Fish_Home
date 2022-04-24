<template>
  <ul v-if="list.length" class="command">
    <li v-for="item in props.list" :key="item.id" @click="enterArticleDetail(item.id)">
      {{ item.title }}
    </li>
  </ul>
  <div v-else class="loading">
    <n-skeleton text :repeat="3" />
  </div>
</template>

<script lang="ts" setup>
import { NSkeleton } from 'naive-ui'
import { ArticleListResponseMsg } from '@/service/articleType'

const props = defineProps<{
  list: ArticleListResponseMsg[]
}>()

function enterArticleDetail(id: number) {
  location.href = `/detail/${id}`
}
</script>

<style lang="scss" scoped>
.command {
  display: flex;
  flex-direction: column;
  padding: var(--padding-withTitle);
  li {
    width: 100%;
    padding: 0.5rem 0.5rem;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.05rem;
    transition: 0.4s;
    &:hover {
      background-color: $text-yellow;
      border-radius: 0.5rem;
      color: $text-white;
    }
  }
}

.loading {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
}
</style>
