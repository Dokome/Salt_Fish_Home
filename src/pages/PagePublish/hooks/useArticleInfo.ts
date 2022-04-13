import type { UploadCustomRequestOptions } from 'naive-ui'
import storage from '@/utils/storage'
import { ref } from 'vue'
import { uploadImage } from '@/service/file'
import { postArticlePublish } from '@/service/article'
import { useRouter } from 'vue-router'

export function useArticleInfo() {
  const router = useRouter()
  // 富文本内容
  const text = ref(storage.get('__ARTICLE_SAVE_LOCAL__') || '')
  // 标题
  const title = ref('')
  // 封面
  const cover = ref('')
  // 标签
  const tag = ref(0)
  const showModal = ref(false)
  // 上传文章封面
  async function coverImgRequestHandle({ file }: UploadCustomRequestOptions) {
    const formData = new FormData()
    formData.append('file', file.file as File)
    const url = await uploadImage(formData)
    cover.value = `/file${url}`
  }

  // 上传文章图片
  async function articleUploadImage(_: any, insertImage: any, files: File[]) {
    const formData = new FormData()
    formData.append('file', files[0] as File)
    const url = await uploadImage(formData)
    insertImage({
      url: `http://112.74.108.218:8080/file${url}`,
    })
  }

  // 保存文章
  function saveArticleToStorage() {
    try {
      storage.set('__ARTICLE_SAVE_LOCAL__', text.value, 30 * 24 * 3600 * 1000)
      ;(window as any).$message.success('保存成功 ~')
    } catch (error) {
      ;(window as any).$message.success('保存失败 😥')
    }
  }

  // 标题值改变
  function titleValueChangeHandle(inputval: string) {
    title.value = inputval
  }

  // 标签值改变
  function tagValueChangeHandle(inputval: number) {
    tag.value = inputval
  }

  async function articlePublishHandle() {
    const success = await postArticlePublish(cover.value, text.value, tag.value, title.value)
    if (success) {
      // 情况当前内容
      title.value = ''
      text.value = ''
      cover.value = ''
      tag.value = 0
      //
      showModal.value = false
      router.push('/center')
    }
  }

  function changeModalState() {
    showModal.value = true
  }

  return {
    // 参数
    text,
    title,
    cover,
    tag,
    showModal,
    // 方法
    coverImgRequestHandle,
    articleUploadImage,
    saveArticleToStorage,
    titleValueChangeHandle,
    tagValueChangeHandle,
    articlePublishHandle,
    changeModalState,
  }
}
