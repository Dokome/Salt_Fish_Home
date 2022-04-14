/* eslint-disable no-async-promise-executor */
import request from './base'
import { BaseResponse } from './type'
import {
  ArticleRequestParams,
  ArticleListRequestParams,
  ArticleListResponse,
  ArticleListResponseMsgWrapper,
} from './articleType'

/**
 * @name 发布文章
 * @param params
 * @returns
 */
export async function postArticlePublish(params: ArticleRequestParams): Promise<boolean> {
  // 上传图片
  return new Promise<boolean>(async (resolve) => {
    const { success, message } = await request.post<BaseResponse>({
      url: '/article/publish',
      data: params,
    })

    ;(window as any).$message[success ? 'success' : 'error'](message)
    resolve(success)
  })
}

/**
 * @name 获取文章列表
 * @param  ArticleListReqParams
 * @returns
 */
export async function getArticleList({
  currentPage,
  listSize,
  userId,
  sortKind,
}: ArticleListRequestParams): Promise<ArticleListResponseMsgWrapper> {
  // 上传图片
  return new Promise<ArticleListResponseMsgWrapper>(async (resolve) => {
    const { success, message, content } = await request.get<ArticleListResponse>({
      url: `/article/getArticleLists/${currentPage}/${listSize}${
        userId ? '/' + userId : ''
      }?sortKind=${sortKind || 1}`,
    })

    if (!success) {
      ;(window as any).$message.error(message)
    }
    resolve(content)
  })
}

/**
 * @name 搜索文章列表
 * @param  ArticleListReqParams
 * @returns
 */
export async function getSearchArticleList({
  currentPage,
  listSize,
  userId,
  key,
  sortKind,
}: ArticleListRequestParams): Promise<ArticleListResponseMsgWrapper> {
  // 上传图片
  return new Promise<ArticleListResponseMsgWrapper>(async (resolve) => {
    const { success, message, content } = await request.get<ArticleListResponse>({
      url: `/article/search/${currentPage}/${listSize}${userId ? '/' + userId : ''}?sortKind=${
        sortKind || 1
      }&key=${key}`,
    })

    if (!success) {
      ;(window as any).$message.error(message)
    }
    resolve(content)
  })
}
