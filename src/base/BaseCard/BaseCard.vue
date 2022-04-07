<template>
  <div
    class="card"
    :style="currentStyle"
    @mouseenter="mouseEnterHandle"
    @mouseleave="mouseLeaveHandle"
  >
    <base-title v-if="props.title" :title="props.title" />
    <slot class="card-slot"></slot>
  </div>
</template>

<script lang="ts" setup>
import type { CSSProperties } from 'vue'
import { ref } from 'vue'
import { cardShadow } from '@/assets/constant'
import BaseTitle from '@/base/BaseTitle'

const props = defineProps<{ title?: string }>()

const baseStyle: CSSProperties = {
  flex: 1,
  borderRadius: '0.5rem',
  backgroundColor: '#fff',
}

const currentStyle = ref({ ...baseStyle })

function mouseEnterHandle() {
  currentStyle.value.boxShadow = cardShadow
  currentStyle.value.transform = 'scale(1.05)'
}

function mouseLeaveHandle() {
  currentStyle.value.boxShadow = ''
  currentStyle.value.transform = 'scale(1)'
}
</script>

<style lang="scss" scoped>
.card {
  transition: 0.6s;
  cursor: var(--cursor-pointer);
  display: flex;
  flex-direction: column;
  .card-slot {
    flex: 1;
  }
}
</style>
