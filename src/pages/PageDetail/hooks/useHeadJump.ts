import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'

export function useHeadJump() {
  const preview: Ref = ref(null)

  const titles: Ref = ref([])
  const detailWrapper: Ref = ref(null)
  onMounted(() => {
    const anchors = preview.value?.$el.querySelectorAll('h1,h2,h3,h4,h5,h6')
    // 去除空白头部
    const titlelist = Array.from(anchors).filter((title: any) => !!title.innerText.trim())
    if (!titlelist.length) {
      return
    }
    // 去重
    const hTags = Array.from(new Set(titlelist.map((title: any) => title.tagName))).sort()
    titles.value = titlelist.map((el: any) => ({
      title: el.innerText,
      lineIndex: el.getAttribute('data-v-md-line'),
      indent: hTags.indexOf(el.tagName),
    }))
  })

  function handleAnchorClick(anchor: any) {
    const { lineIndex } = anchor
    const prevEl = preview.value?.$el
    const heading = prevEl.querySelector(`[data-v-md-line="${lineIndex}"]`)

    if (heading) {
      heading.scrollIntoView()
    }
  }

  return {
    // 编辑器
    preview,
    // 标题
    titles,
    //包裹元素
    detailWrapper,
    // 标题点击
    handleAnchorClick,
  }
}
