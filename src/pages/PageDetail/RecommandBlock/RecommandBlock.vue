<template>
  <div class="detail-command">
    <cpn-block-card title="相关推荐 😀">
      <cpn-nav-list :list="list" />
    </cpn-block-card>
  </div>
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard'
import CpnNavList from '@/components/CpnNavList'
import { getRecommendList } from '@/service/article'
import { ArticleListResponseMsg } from '@/service/articleType'
import { ref, watch } from 'vue'
const props = defineProps<{ tag: number }>()
const list = ref<ArticleListResponseMsg[]>([])
watch(
  () => props.tag,
  async (tag) => {
    const res = await getRecommendList(5, tag)
    list.value = res
  }
)
</script>

<style lang="scss" scoped>
.detail-command {
  width: 100%;
  display: flex;
}
</style>
