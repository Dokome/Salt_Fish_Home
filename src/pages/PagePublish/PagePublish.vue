<template>
  <div class="publish">
    <div class="publish-group">
      <n-select
        :options="options"
        placeholder="选择标签"
        multiple
        :max-tag-count="3"
        tag
        filterable
        style="width: fit-content; max-width: 50rem; min-width: 10rem"
      ></n-select>
      <n-button type="info">保存草稿</n-button>
      <n-button type="primary">发布文章</n-button>
    </div>
    <v-md-editor v-model="text" height="80vh"></v-md-editor>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { NButton, NSelect } from 'naive-ui'
import { useRecomendTags } from './hooks'

const text = ref('')
const { options } = useRecomendTags()
</script>

<style lang="scss" scoped>
.publish {
  padding: 2rem;

  .publish-group {
    display: flex;
    justify-content: flex-end;
    padding-bottom: 2rem;
    gap: 1rem;
  }
}
</style>
