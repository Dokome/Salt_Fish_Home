<template>
  <cpn-block-card>
    <div class="load-more">
      <n-pagination v-model:page="page" :page-count="10" />
    </div>
  </cpn-block-card>
</template>

<script lang="ts" setup>
import CpnBlockCard from '@/components/CpnBlockCard'
import { NPagination } from 'naive-ui'
import { ref } from 'vue'
const page = ref(3)
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
