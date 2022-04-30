// 用户相关
export interface UserStoreStateType {
  loginState: boolean
}

export interface MessageContentType {
  id: number
  senderId: number
  receiverId: number
  content: string
  sign: number
  img_url: string
  nick: string
}
export interface MessageType {
  success: boolean
  message: string
  code: number
  content: MessageContentType
}
