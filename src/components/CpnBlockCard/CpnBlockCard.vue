<template>
  <base-card>
    <template v-if="slot">
      <component :is="slot" />
    </template>
  </base-card>
</template>

<script lang="ts" setup>
import BaseCard from '@/base/BaseCard'
import { useSlots } from 'vue'
const slot = useSlots().default
</script>

<style lang="scss" scoped></style>
