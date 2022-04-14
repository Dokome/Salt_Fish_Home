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
