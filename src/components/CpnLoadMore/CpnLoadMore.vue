<template>
  <cpn-block-card v-if="props.totalPage > 1">
    <div class="load-more">
      <n-pagination
        :page="props.currentPage"
        :page-count="props.totalPage"
        :on-update:page="changeCurrentPage"
      />
    </div>
  </cpn-block-card>
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard'
import { NPagination } from 'naive-ui'
const props = defineProps<{
  currentPage: number
  totalPage: number
}>()
//
const emits = defineEmits(['changeCurrentPage'])
function changeCurrentPage(page: any) {
  emits('changeCurrentPage', page)
}
</script>

<style lang="scss" scoped>
.load-more {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-weight: 700;
  color: $text-yellow;
}
</style>
