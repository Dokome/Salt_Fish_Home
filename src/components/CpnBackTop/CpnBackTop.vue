<template>
  <transition name="fade">
    <div v-if="show" class="backTop" @click="scrollToTop">
      <n-icon size="20" :color="yellow">
        <arrow-up />
      </n-icon>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import type { ComponentPublicInstance } from 'vue'
import { nextTick, ref } from 'vue'
import { ArrowUp } from '@vicons/ionicons5'
import { NIcon } from 'naive-ui'
import { throttle } from 'lodash'
import { yellow } from '@/assets/constant'
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
    return props.scrollElement as HTMLElement
  } else if (typeof el === 'undefined') {
    return {}
  }
  return (props.scrollElement as ComponentPublicInstance).$el
}

// 滚动到顶部
function scrollToTop() {
  const el = judgeType(props.scrollElement)
  // 动画实现
  function animation() {
    const offset = Math.floor(el.scrollTop / 2)
    if (offset) {
      el.scrollTo(0, offset)
      requestAnimationFrame(animation)
    }
  }
  requestAnimationFrame(animation)
}

nextTick(() => {
  // 添加监听滚动事件
  judgeType(props.scrollElement).addEventListener('scroll', onScroll)
  // 判断参考元素的高度
  referBottom.value = judgeType(props.scrollElement).getBoundingClientRect().bottom
})
</script>

<style lang="scss" scoped>
.backTop {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  bottom: 2rem;
  right: 10rem;
  background-color: $background-white;
  cursor: var(--cursor-pointer);
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
