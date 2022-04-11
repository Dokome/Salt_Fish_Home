import { ref, watch, computed } from 'vue'

export function useCutDown() {
  const cutDown = ref(-1)
  const codeMessage = computed(() => {
    if (cutDown.value < 0) {
      return '获取验证码'
    }
    return `${cutDown.value} s`
  })

  watch(cutDown, (time) => {
    if (time !== -1) {
      setTimeout(() => {
        cutDown.value--
      }, 1000)
    }
  })

  return {
    cutDown,
    codeMessage,
  }
}
