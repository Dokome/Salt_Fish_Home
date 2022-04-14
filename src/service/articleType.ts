import { BaseResponse } from './type'

// 发布
export interface ArticleRequestParams {
  articleImg: string
  content: string
  tag: number
  title: string
}

// 列表
export interface ArticleListRequestParams {
  currentPage: number
  listSize: number
  sortKind?: number
  userId?: number
  key?: string
}

export interface ArticleListResponseMsg {
  id: number
  title: string
  content: string
  gmtCreateTime: string
  gmtModifiedTime: string
  author: number
  viewCount?: number
  likeCount?: number
  tag: number
  articleImg: string
}

export interface ArticleListResponseMsgWrapper {
  articles: ArticleListResponseMsg[]
  totalArticlesCount: number
}

export interface ArticleListResponse extends BaseResponse {
  content: ArticleListResponseMsgWrapper
}
