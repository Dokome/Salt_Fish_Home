<template>
  <div v-if="props.title.length" class="title">
    <div class="title-pre"></div>
    <div>{{ props.title }}</div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: '默认标题',
  }
)
</script>

<style lang="scss" scoped>
.title {
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem;
  display: flex;
  align-items: center;

  .title-pre {
    width: 0.2rem;
    height: 1rem;
    background-color: $text-yellow;
    margin-right: 0.5rem;
  }
}
</style>
