import { ref } from 'vue'
export function useBackToTop() {
  const scrollElement = ref<HTMLDivElement>()
  const referElement = ref<HTMLDivElement>()
  return {
    scrollElement,
    referElement,
  }
}
