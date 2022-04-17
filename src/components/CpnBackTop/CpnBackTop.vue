<template>
  <transition name="fade">
    <div v-if="show" class="backTop">123</div>
  </transition>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue'
import type { ComponentPublicInstance } from 'vue'
import { throttle } from 'lodash'
const props = defineProps<{
  scrollElement: HTMLDivElement | undefined | ComponentPublicInstance
  referElement: HTMLDivElement | undefined | ComponentPublicInstance
}>()

const referBottom = ref(0)
const show = ref(false)

const onScroll = throttle(function (e: Event) {
  if ((e.target as HTMLDivElement).scrollTop > referBottom.value) {
    show.value = true
  } else {
    show.value = false
  }
}, 100)

function judgeType(el: HTMLDivElement | undefined | ComponentPublicInstance) {
  if (el instanceof HTMLDivElement) {
    return 'htmlEl'
  } else if (typeof el === 'undefined') {
    return 'undefined'
  }
  return 'component'
}

nextTick(() => {
  // 添加监听滚动事件
  if (judgeType(props.scrollElement) === 'htmlEl') {
    ;(props.scrollElement as HTMLElement).addEventListener('scroll', onScroll)
  } else if (judgeType(props.scrollElement) === 'component') {
    ;(props.scrollElement as ComponentPublicInstance).$el.addEventListener('scroll', onScroll)
  }
  // 判断参考元素的高度
  if (judgeType(props.referElement) === 'htmlEl') {
    referBottom.value = (props.referElement as HTMLElement).getBoundingClientRect().bottom
  } else if (judgeType(props.referElement) === 'component') {
    referBottom.value = (
      props.referElement as ComponentPublicInstance
    ).$el.getBoundingClientRect().bottom
  }
})
</script>

<style lang="scss" scoped>
.backTop {
  position: fixed;
  bottom: 2rem;
  right: 10rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
