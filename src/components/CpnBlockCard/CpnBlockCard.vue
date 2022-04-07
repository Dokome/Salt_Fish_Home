<template>
  <base-card v-bind="props">
    <template v-if="slot">
      <component :is="slot" />
    </template>
  </base-card>
</template>

<script lang="ts" setup>
import BaseCard from '@/base/BaseCard'
import { useSlots } from 'vue'
const slot = useSlots().default
const props = defineProps<{
  title?: string
  background?: string
}>()
</script>

<style lang="scss" scoped></style>
