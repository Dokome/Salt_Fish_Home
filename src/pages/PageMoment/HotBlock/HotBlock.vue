<template>
  <div class="hot-list">
    <cpn-block-card title="热门文章">
      <cpn-nav-list :list="hotlist"></cpn-nav-list>
    </cpn-block-card>
  </div>
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard'
import CpnNavList from '@/components/CpnNavList'
import { getHotArticle } from '@/service/article'
import { ArticleListResponseMsg } from '@/service/articleType'
import { ref, onMounted } from 'vue'
const hotlist = ref<ArticleListResponseMsg[]>([])
onMounted(async () => {
  const res = await getHotArticle(5)
  hotlist.value = res
})
</script>

<style lang="scss" scoped>
.hot-list {
  width: 100%;
  display: flex;
}
</style>
