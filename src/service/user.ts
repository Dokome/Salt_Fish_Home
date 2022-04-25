/* eslint-disable no-async-promise-executor */
import request from './base'
import storage from '@/utils/storage'

// import { MessageProviderInst } from 'naive-ui'
import type {
  RregisterResponse,
  EmailRegisterResponseMsg,
  LoginResponse,
  UserInfoResponseMsg,
  UserInfoResponse,
  UserInfoModifyRequestParams,
  UserFocusRequestParams,
  UserHotInfoResponse,
} from './userType'
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
  if (storage.get('__CURRENT_CODE_CD__')) {
    ;(window as any).$message.warning('发送验证码过于频繁 ~')
    throw new Error()
  }

  return new Promise<EmailRegisterResponseMsg>(async (resolve) => {
    const { success, content, message } = await request.get<RregisterResponse>({
      url: `/login/getVerification/${email}`,
    })

    // 设置 60s 过期时间
    if (success) {
      storage.set('__CURRENT_CODE_CD__', '60_sec', 60 * 1000)
    }

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
/**
 * @name 发送登录请求
 * @param email
 * @param emailToken
 * @param emailVerification
 * @returns
 */
export async function postloginWithCode(
  email: string,
  emailToken: string,
  emailVerification: string
): Promise<boolean> {
  return new Promise<boolean>(async (resolve) => {
    const { success, message, content } = await request.post<LoginResponse>({
      url: `/login/byEmail`,
      data: {
        email,
        emailToken,
        emailVerification,
      },
    })

    // console.log(content.token)
    if (success) {
      // 登录成功存 token 7 天
      storage.set('__USER_LOGIN_TOKEN__', content.token, 3600 * 1000 * 24 * 7)
      storage.set('__USER_LOGIN_ID__', content.id, 3600 * 1000 * 24 * 7)
    }

    ;(window as any).$message[success ? 'success' : 'error'](message)
    resolve(success)
  })
}

/**
 * @name 邮箱密码登录
 * @param email
 * @param password
 * @returns
 */
export async function postloginWithPassword(email: string, password: string): Promise<boolean> {
  return new Promise<boolean>(async (resolve) => {
    const { success, message, content } = await request.post<LoginResponse>({
      url: `/login/byPassword`,
      data: {
        email,
        password,
      },
    })

    if (success) {
      // 登录成功存 token 7 天
      storage.set('__USER_LOGIN_TOKEN__', content.token, 3600 * 1000 * 24 * 7)
      storage.set('__USER_LOGIN_ID__', content.id, 3600 * 1000 * 24 * 7)
    }

    ;(window as any).$message[success ? 'success' : 'error'](message)
    resolve(success)
  })
}

/**
 * @name 获取用户信息
 * @param id
 * @returns
 */
export async function getUserInfo(id: number): Promise<UserInfoResponseMsg> {
  return new Promise<UserInfoResponseMsg>(async (resolve) => {
    const { success, content, message } = await request.get<UserInfoResponse>({
      url: `/userInfo/getUserInfo/${id}`,
    })

    if (!success) {
      ;(window as any).$message.error(message)
    }
    resolve(content)
  })
}

/**
 * @name 修改用户信息
 * @param userInfo
 * @returns
 */
export async function postModifyUserInfo(userInfo: UserInfoModifyRequestParams): Promise<boolean> {
  return new Promise<boolean>(async (resolve) => {
    const { success, message } = await request.post<UserInfoResponse>({
      url: `/userInfo/modifyUserInfo`,
      data: userInfo,
    })

    ;(window as any).$message[success ? 'success' : 'error'](message)
    resolve(success)
  })
}
/**
 * @name 关注用户
 * @param param
 * @returns
 */
export async function postFocusUser(param: UserFocusRequestParams): Promise<boolean> {
  return new Promise<boolean>(async (resolve) => {
    const { success, message } = await request.post<UserInfoResponse>({
      url: `/userInfo/focusUser`,
      data: param,
    })

    ;(window as any).$message[success ? 'success' : 'error'](message)
    resolve(success)
  })
}

/**
 * @name 获取热门作者
 * @param count
 * @returns
 */
export async function getHotUser(count: number): Promise<UserInfoResponseMsg[]> {
  return new Promise<UserInfoResponseMsg[]>(async (resolve) => {
    const { content } = await request.get<UserHotInfoResponse>({
      url: `/article/activeAuthor/${count}`,
    })

    resolve(content)
  })
}
