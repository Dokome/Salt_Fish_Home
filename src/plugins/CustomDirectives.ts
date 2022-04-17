import { App, Directive } from 'vue'
// 图片懒加载
const LazyLoadImage: Directive = {
  mounted(el, { value }) {
    const img = el.children[0]
    // img.src = ''
    if (window.IntersectionObserver) {
      let imageObserve: IntersectionObserver | null = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          // 通过该属性判断元素是否出现在视口内
          if (entry.isIntersecting) {
            // entry.target能够取得那个dom元素
            const img = (entry as any).target
            let tempImg = new Image()
            tempImg.src = value
            tempImg.onload = () => {
              img.src = value
            }
            ;(tempImg as any) = null
            // 解除监视
            imageObserve!.unobserve(img)
            imageObserve = null
          }
        })
      })
      imageObserve.observe(img)
    } else {
      let tempImg = new Image()
      tempImg.src = value
      tempImg.onload = () => {
        img.src = value
      }
      ;(tempImg as any) = null
      img.src = value
    }
  },
}

export const CustomDirectives = {
  install(app: App) {
    app.directive('lli', LazyLoadImage)
  },
}
