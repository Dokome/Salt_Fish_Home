import type { CommentResponseContentMsg } from '@/service/articleType'
import type { Ref } from 'vue'
import { getCommentList } from '@/service/article'
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'

export function useComment(articleId: string) {
  const articleIdNum = Number(articleId || 0)
  //
  const totalPage = ref(0)
  const currentPage = ref(1)
  const currentList: Ref<CommentResponseContentMsg[]> = ref([])
  // 获取评论 一级 / 二级
  async function getCommentListFunc(page: number, commentId = -1, listSize = 5) {
    const { commentCount, commentList } = await getCommentList({
      articleId: articleIdNum,
      page,
      commentId,
    })
    commentList.map((comment) => {
      comment.gmtCreate = dayjs().format('YYYY MM DD')
    })

    currentList.value = commentList
    totalPage.value = Math.ceil(commentCount / listSize)
  }

  onMounted(() => {
    getCommentListFunc(1)
  })

  return {
    totalPage,
    currentPage,
    currentList,
  }
}
