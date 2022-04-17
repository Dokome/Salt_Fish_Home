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
import { cardShadow, gray } from '@/assets/constant'
import BaseTitle from '@/base/BaseTitle'

const props = defineProps<{
  title?: string
  background?: string
  withoutGrow?: boolean
  canHover?: boolean
}>()

const baseStyle: CSSProperties = {
  borderRadius: '0.5rem',
  backgroundColor: '#fff',
  position: 'relative',
  overflow: 'hidden',
}

if (!props.withoutGrow) {
  baseStyle.flex = 1
}

const backgroundStyle: CSSProperties = {
  backgroundImage: `url(${props.background})`,
  backgroundSize: 'cover',
  color: '#fff',
  backgroundColor: gray,
}

const currentStyle = ref({ ...baseStyle })

if (props.background) {
  currentStyle.value = { ...currentStyle.value, ...backgroundStyle }
}

function mouseEnterHandle() {
  if (props.canHover) {
    return
  }
  currentStyle.value.boxShadow = cardShadow
  currentStyle.value.transform = 'scale(1.02)'
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
