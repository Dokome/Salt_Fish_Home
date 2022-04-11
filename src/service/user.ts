/* eslint-disable no-async-promise-executor */
import request from './base'
// import { MessageProviderInst } from 'naive-ui'
import type { RregisterResponse, EmailRegisterResponseMsg } from './userType'
// 获取 message 组件
// const messager: MessageProviderInst =

/**
 * @name 获取邮箱验证码 (注册)
 * @param email 邮箱
 * @returns Promise 包裹的验证码相关信息
 */
export async function getEmailCode(email: string): Promise<EmailRegisterResponseMsg> {
  return new Promise<EmailRegisterResponseMsg>(async (resolve) => {
    const { success, content, message } = await request.get<RregisterResponse>({
      url: `/register/getQQVerification/${email}`,
    })

    ;(window as any).$message[success ? 'success' : 'error'](message)
    resolve(content)
  })
}
/**
 * @name 获取邮箱验证码 (登录)
 * @param email 邮箱
 * @returns Promise 包裹的验证码相关信息
 */
export async function getLoginEmailCode(email: string): Promise<EmailRegisterResponseMsg> {
  return new Promise<EmailRegisterResponseMsg>(async (resolve) => {
    const { success, content, message } = await request.get<RregisterResponse>({
      url: `/login/getVerification/${email}`,
    })

    ;(window as any).$message[success ? 'success' : 'error'](message)
    resolve(content)
  })
}

/**
 * @name 发送注册请求
 * @param email 邮箱
 * @param emailToken 邮箱 token
 * @param emailVerification 验证码
 * @returns Promise boolean
 */
export async function postRegister(
  email: string,
  emailToken: string,
  emailVerification: string
): Promise<boolean> {
  return new Promise<boolean>(async (resolve) => {
    const { success, message } = await request.post<RregisterResponse>({
      url: `register`,
      data: {
        email,
        emailToken,
        emailVerification,
      },
    })

    ;(window as any).$message[success ? 'success' : 'error'](message)
    resolve(success)
  })
}

export async function postloginWithCode(
  email: string,
  emailToken: string,
  emailVerification: string
): Promise<boolean> {
  return new Promise<boolean>(async (resolve) => {
    const { success, message } = await request.post<RregisterResponse>({
      url: `/login/byEmail`,
      data: {
        email,
        emailToken,
        emailVerification,
      },
    })

    ;(window as any).$message[success ? 'success' : 'error'](message)
    resolve(success)
  })
}
