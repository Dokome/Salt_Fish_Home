import type { BaseResponse } from './type'
export interface EmailRegisterResponseMsg {
  emailToken: string
  emailVerification: string
  currentTimeMillis: string
}

export interface LoginResponseMsg {
  loginSuccess: boolean
  token: string
  id: number
}

export interface RregisterResponse extends BaseResponse {
  content: EmailRegisterResponseMsg
}

export interface LoginResponse extends BaseResponse {
  content: LoginResponseMsg
}

// 用户信息

export interface UserInfoResponseMsg {
  id: number
  userId: number
  sex: number
  pageViews: number
  focusOnCount: number
  imgUrl: string
  followedCount: number
  sign: string
  nick: string
  articleCount: string
  gmtCreate: string
  focus: boolean
}

export interface UserInfoResponse extends BaseResponse {
  content: UserInfoResponseMsg
}

export interface UserInfoModifyRequestParams {
  imgUrl: string
  newPassword: string
  password: string
  nick: string
  sex: number
  sign: string
  userId: number
}

// 关注用户

export interface UserFocusRequestParams {
  focusOnUser: number
  followedUser: number
}

// 热门用户

export interface UserHotInfoResponse extends BaseResponse {
  content: UserInfoResponseMsg[]
}
