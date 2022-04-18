import type { CommentResponseContentMsg } from '@/service/articleType'
import type { Ref } from 'vue'
import { getCommentList } from '@/service/article'
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'
import { useLoadingBar } from 'naive-ui'

export function useComment(articleId: string) {
  const articleIdNum = Number(articleId || 0)
  const loading = useLoadingBar()
  //
  const totalPage = ref(0)
  const currentPage = ref(1)
  const currentList: Ref<CommentResponseContentMsg[]> = ref([])
  // 获取评论
  async function getCommentListFunc(page: number, listSize = 5) {
    loading.start()
    const { commentCount, commentList } = await getCommentList({
      articleId: articleIdNum,
      page,
    })
    loading.finish()

    commentList.map((comment) => {
      comment.gmtCreate = dayjs().format('YYYY MM DD')
      comment.currentPage = 1
      ;(comment as any)._isOpen = false
    })

    currentList.value = commentList
    totalPage.value = Math.ceil(commentCount / listSize)
  }

  function onCommentUpdate() {
    getCommentListFunc(1)
  }

  function changeCurrentPage(page: number) {
    currentPage.value = page
    getCommentListFunc(page)
  }

  onMounted(() => {
    getCommentListFunc(1)
  })

  return {
    totalPage,
    currentPage,
    currentList,
    //
    onCommentUpdate,
    changeCurrentPage,
  }
}
