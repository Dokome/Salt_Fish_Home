<template>
  <cpn-block-card title="文章排序 🧠">
    <div class="filter">
      <div
        v-for="(filterItem, index) in filterList"
        :key="index"
        class="filter-item"
        :class="{ current: currentIndex === index }"
        @click="changeCurrentTab(index)"
      >
        <n-icon size="20">
          <component :is="index & 1 ? ArrowDownOutline : ArrowUpOutline" />
        </n-icon>
        <span>{{ filterItem }}</span>
      </div>
    </div>
  </cpn-block-card>
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard'
import { ArrowUpOutline, ArrowDownOutline } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { ref } from 'vue'
const filterList = ['时间先后', '时间先后', '浏览次数', '浏览次数']
const currentIndex = ref(0)
const emits = defineEmits(['changeSortKind'])

function changeCurrentTab(index: number) {
  currentIndex.value = index
  emits('changeSortKind', index + 1)
}
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  padding: var(--padding-withTitle);
  gap: 0.5rem;

  .filter-item {
    display: flex;
    align-items: center;
    gap: 0.1rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    transition: 0.4s;
    user-select: none;
    color: $text-gray;

    &:hover,
    &.current {
      background-color: $background-yellow;
      color: $background-white;
      font-weight: 700;
    }
  }
}
</style>
