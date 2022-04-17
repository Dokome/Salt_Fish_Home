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

// 详情
export interface ArticleDetailResponseMsg {
  title: string
  createTime: string
  modifiedTime: string
  authorName: string
  viewCount: number
  likeCount?: number
  tag: number
  content: string
  articleImg: string
}

export interface ArticleDetailResponse extends BaseResponse {
  content: ArticleDetailResponseMsg
}

// 评论
export interface CommentListRequestParams {
  articleId: number
  commentId?: number
  page: number
  pageSize?: number
}

export interface CommentResponseUserInfo {
  id: number
  userId: number
  sex: number
  pageViews: number
  focusOnCount: number
  imgUrl: string
  followedCount: number
  sign: string
  nick: string
}
export interface CommentResponseContentMsg {
  id: number
  parentId: number
  type: number
  gmtCreate: string
  likeCount: number
  commenterId: number
  articleId: number
  commentCount: number
  content?: string
  userinfo: CommentResponseUserInfo
}

export interface CommentResponseContentMsgWrapper {
  commentList: CommentResponseContentMsg[]
  commentCount: number
}

export interface CommentListResponse extends BaseResponse {
  content: CommentResponseContentMsgWrapper
}
