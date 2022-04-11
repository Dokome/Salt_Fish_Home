import type { BaseResponse } from './type'
export interface EmailRegisterResponseMsg {
  emailToken: string
  emailVerification: string
  currentTimeMillis: string
}

export interface LoginResponseMsg {
  loginSuccess: boolean
  token: string
}

export interface RregisterResponse extends BaseResponse {
  content: EmailRegisterResponseMsg
}

export interface LoginResponse extends BaseResponse {
  content: LoginResponseMsg
}
