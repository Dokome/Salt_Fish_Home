<template>
  <ul class="concat">
    <li v-for="(item, index) in blocklist" :key="index" class="concat-item" @click="item.onClick">
      <cpn-block-card class="concat-item-card">
        <n-icon size="80" :color="item.color">
          <component :is="item.icon" />
        </n-icon>
        <div :style="{ color: item.color }">{{ item.title }}</div>
      </cpn-block-card>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard'
import { NIcon } from 'naive-ui'
import useBlockList from './hooks/useBlockList'
const blocklist = useBlockList()
</script>

<style lang="scss" scoped>
.concat {
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  .concat-item {
    width: calc(50% - 1rem);
    flex-shrink: 0;

    .concat-item-card {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      gap: 1rem;
      font-size: 1.1rem;
    }
  }
}
</style>
