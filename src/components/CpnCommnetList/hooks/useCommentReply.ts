import { postSendCommentReply } from '@/service/article'
import type { CommentResponseContentMsg } from '@/service/articleType'
import { ref } from 'vue'
import { useUserStore } from '@/store'
import { getCommentList } from '@/service/article'
const initPlaceHolder = '输入回复的内容'

export function useCommentReply(articleId: number, emits: any) {
  // 评论的内容
  const content = ref('')
  // 回复的内容
  const replyContent = ref('')
  // 当前回复的用户 id
  const parentId = ref(-1)
  const parentUserId = ref(-1)
  const userStore = useUserStore()
  const userId = userStore.userId
  const loading = ref(false)
  // 回复 层主 ? 还是某个二级评论
  const replyPlaceHolder = ref(initPlaceHolder)
  // 模态框
  const modalShow = ref(false)
  //
  // 当前访问的框
  const currentId = ref(-1)
  // 回复列表
  const replyList = ref(new Map<number, Map<number, CommentResponseContentMsg[]>>())
  const replyLoading = ref(false)
  // 获取回复分页的辅助变量
  const currentChangeTarget = ref()

  async function replyCommentHandle(isReply = false) {
    loading.value = true

    const info = {
      content: isReply ? replyContent.value : content.value,
      // 回复的那个用户
      parentId: parentId.value,
      // 评论者的 id
      commenterId: userId,
      articleId,
      // 被评论的评论者的id
      commentedId: parentUserId.value,
      // 根评论
      rootId: currentId.value,
    }

    // true 回复 false 评论
    const suceess = await postSendCommentReply(info)

    if (suceess) {
      content.value = ''
      replyContent.value = ''
      modalShow.value = false

      if (isReply) {
        getReplyList(1)
      }
    }

    loading.value = false
  }

  // 获取二级回复列表
  async function getReplyList(page = 1) {
    replyLoading.value = true
    const { commentList } = await getCommentList({
      articleId,
      page,
      rootId: currentId.value,
    })
    replyLoading.value = false

    if (!replyList.value.has(currentId.value)) {
      replyList.value.set(currentId.value, new Map())
    }
    replyList.value.get(currentId.value)?.set(page, commentList)
  }

  function replyOpenHandle(id: number, rootId: number, { nick, userId }: any) {
    // parentId 为 -1 ,rootComment id 为 -1 评论
    // parentId 为 -1 ,rootComment id 非 -1 一级回复
    // parentId 非 -1 ,rootComment id 非 -1 为二级回复
    currentId.value = rootId
    modalShow.value = true
    // id 和 parrent 相同的时候代表点击的是我有话说 否则是点击了回复进行二级回复
    parentId.value = id
    parentUserId.value = userId
    replyPlaceHolder.value = `回复 ${nick} :`
  }

  function replyCloseHandle() {
    // 清空一下
    parentId.value = -1
    parentUserId.value = -1
    replyPlaceHolder.value = initPlaceHolder
    replyContent.value = ''
  }

  async function replyHandle() {
    await replyCommentHandle(true)
  }

  async function commentHandle() {
    parentId.value = -1
    currentId.value = -1
    await replyCommentHandle()
    emits('onCommentUpdate')
  }

  // 值的改变
  function changeCommentValue(input: any) {
    content.value = input
  }

  function changeReplyValue(input: any) {
    replyContent.value = input
  }

  // 更改当前页码
  function changeCurrentPage(page: number) {
    emits('changeCurrentPage', page)
  }

  function pageChangeHandle(page: number) {
    currentChangeTarget.value.currentPage = page
    currentId.value = currentChangeTarget.value.id
    getReplyList(page)
  }

  // 更改回复框的状态 当分页点击的时候，切换当前的 currentId
  // 并设置 currentPage 将这个 currentPage绑定在 comment 上简化代码实现
  function changeReplyHandle(comment: any) {
    parentId.value = comment.id
    currentId.value = comment.id
    getReplyList()
    comment._isOpen = !comment._isOpen
  }

  function changeCurrentTarget(target: any) {
    currentChangeTarget.value = target
  }

  return {
    content,
    parentId,
    loading,
    replyLoading,
    modalShow,
    replyPlaceHolder,
    replyContent,
    replyList,
    //
    replyHandle,
    commentHandle,
    changeCommentValue,
    changeCurrentPage,
    changeReplyHandle,
    changeReplyValue,
    replyOpenHandle,
    replyCloseHandle,
    getReplyList,
    pageChangeHandle,
    changeCurrentTarget,
  }
}
