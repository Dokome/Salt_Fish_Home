//
import type { ArticleListResponseMsg } from '@/service/articleType'
import { ref, onMounted, watch } from 'vue'
import { getArticleList, getSearchArticleList } from '@/service/article'
import { md2text } from '@/utils/md2text'
import { useUserStore } from '@/store'
import { useLoadingBar } from 'naive-ui'
// 上次搜索的值
let lastSearchValue = ''
//
export function useArticleList(needId = false) {
  const loadingBar = useLoadingBar()
  const userStore = useUserStore()
  const userId = userStore.userId
  const searchVal = ref('')
  // 获取动态列表
  const curPage = ref(1)
  const totalPage = ref(0)
  const currentList = ref<ArticleListResponseMsg[]>([])
  const isloading = ref(false)
  // 获取文章列表
  async function getArticleListPublic(currentPage: number, listSize = 8, search = false) {
    const getListFunc = search ? getSearchArticleList : getArticleList
    isloading.value = true
    //
    const requestData: any = {
      currentPage,
      listSize,
    }

    if (needId) {
      requestData.userId = needId ? userId : null
    }

    if (search) {
      if (searchVal.value !== lastSearchValue) {
        requestData.currentPage = 1
      }
      lastSearchValue = searchVal.value
      requestData.key = searchVal.value
    }

    const { articles, totalArticlesCount } = await getListFunc(requestData)
    isloading.value = false
    // 转换内容的格式
    articles.forEach((article) => {
      article.content = md2text(article.content)
    })
    currentList.value = articles
    totalPage.value = Math.ceil(totalArticlesCount / listSize)
  }
  // 更改当前页码
  async function changeCurrentPage(page: number) {
    curPage.value = page
    getArticleListPublic(page, 8, searchVal.value ? true : false)
  }

  async function searchForArticle(searchWord: string) {
    searchVal.value = searchWord
    changeCurrentPage(1)
  }

  onMounted(() => {
    getArticleListPublic(1)
  })

  watch(isloading, (state) => {
    state ? loadingBar.start() : loadingBar.finish()
  })

  return {
    curPage,
    totalPage,
    currentList,
    isloading,
    //
    changeCurrentPage,
    searchForArticle,
  }
}
