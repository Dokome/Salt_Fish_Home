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
