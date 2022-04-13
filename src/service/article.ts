/* eslint-disable no-async-promise-executor */
import request from './base'
import { BaseResponse } from './type'

/**
 * @name 发布文章
 * @param articleImg
 * @param content
 * @param tag
 * @param title
 * @returns
 */
// eslint-disable-next-line max-params
export async function postArticlePublish(
  articleImg: string,
  content: string,
  tag: number,
  title: string
): Promise<boolean> {
  // 上传图片
  return new Promise<boolean>(async (resolve) => {
    const { success, message } = await request.post<BaseResponse>({
      url: '/article/publish',
      data: {
        articleImg,
        content,
        tag,
        title,
      },
    })

    ;(window as any).$message[success ? 'success' : 'error'](message)
    resolve(success)
  })
}
