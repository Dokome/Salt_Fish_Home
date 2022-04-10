<template>
  <ul class="command">
    <li v-for="item in hotlist" :key="item.id">{{ item.title }}</li>
  </ul>
</template>

<script lang="ts" setup>
const hotlist = [
  {
    id: 1,
    title: '前后端常见网络安全问题及防范措施',
  },
  {
    id: 2,
    title: '你所不知道的Vue插槽',
  },
  {
    id: 3,
    title: '使用eslint替代prettier格式化',
  },
  {
    id: 4,
    title: 'vue+electron实现对图片的截选，拖拽等功能。',
  },
  {
    id: 5,
    title: 'electron + vue项目实现打印小票功能',
  },
]
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
</style>
