<template>
  <cpn-block-card title="热门动态 💥">
    <ul class="home-hot">
      <li v-for="(item, index) in hotlist" :key="item.id" @click="enterArticleDetail(item.id)">
        {{ iconlist[index] }} {{ item.title }}
      </li>
    </ul>
    <div class="home-hot-logo">
      <n-icon :component="Bonfire" :color="yellow" size="80" depth="3" />
    </div>
  </cpn-block-card>
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard/CpnBlockCard.vue'
import { Bonfire } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { yellow } from '@/assets/constant'
import { ref, onMounted } from 'vue'
import { getHotArticle } from '@/service/article'
import { ArticleListResponseMsg } from '@/service/articleType'
import { useRouter } from 'vue-router'

const router = useRouter()
const hotlist = ref<ArticleListResponseMsg[]>([])
onMounted(async () => {
  const res = await getHotArticle(5)
  hotlist.value = res
})

function enterArticleDetail(id: number) {
  router.push(`/detail/${id}`)
}

const iconlist = ['🌳', '🌺', '🌷', '🍀', '🌱']
</script>

<style lang="scss" scoped>
.home-hot {
  display: flex;
  flex-direction: column;
  padding: 0 0.5rem 1rem;
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
.home-hot-logo {
  position: absolute;
  right: 2rem;
  bottom: 2rem;
}
</style>
