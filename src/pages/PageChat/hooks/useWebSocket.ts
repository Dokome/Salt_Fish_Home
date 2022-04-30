import { useWsStore } from '@/store'
import { watch, computed, ref, onMounted, nextTick } from 'vue'
import { throttle } from 'lodash'

export function useWebSocket() {
  const fristLoaded = ref(true)
  const needScroll = ref(false)
  const messageBox = ref<HTMLDivElement>()
  const ws = useWsStore()
  const messages = computed(() => ws.messages)
  //

  onMounted(() => {
    ws.init()
    const box = messageBox.value as HTMLDivElement
    box.addEventListener(
      'scroll',
      throttle(function () {
        if (box.scrollHeight - box.scrollTop > box.clientHeight + 200) {
          needScroll.value = false
        } else {
          needScroll.value = true
        }
      }, 100)
    )
  })

  watch(ws.messages, async () => {
    const box = messageBox.value as HTMLDivElement
    await nextTick()
    const boxHeigt = box.clientHeight
    const total = box.scrollHeight
    const scrollAniamte = () => {
      const current = box.scrollTop
      if (Math.ceil(current) >= total - boxHeigt) {
        fristLoaded.value = false
        return
      }

      box.scrollTo(0, current + Math.ceil(total - current) / 100)
      requestAnimationFrame(scrollAniamte)
    }
    ;(fristLoaded.value || needScroll.value) && requestAnimationFrame(scrollAniamte)
  })

  return {
    messageBox,
    messages,
  }
}
