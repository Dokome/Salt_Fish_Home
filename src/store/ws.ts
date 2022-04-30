import { defineStore } from 'pinia'
const url = 'ws://112.74.108.218:8888/websocket'

export const useWsStore = defineStore({
  id: 'ws',
  state: () => ({
    ws: {} as WebSocket,
    messages: [] as any[],
    userlist: new Map<number, any>(),
  }),
  actions: {
    /**
     * @name 初始化会议
     * @param userId
     * @param uuid
     */
    init(userId: number, uuid = -1) {
      this.ws = new WebSocket(url)
      const ws = this.ws
      // 接收消息
      ws.onmessage = (msg) => {
        const { content, code } = JSON.parse(msg.data)
        if (code === 200 || code === 3) {
          const message = content
          if (message instanceof Array) {
            this.messages.push(...message)
          } else {
            this.messages.push(message)
          }
        } else if (code === 1) {
          const user = content
          if (user instanceof Array) {
            user.forEach((uitem) => this.userlist.set(uitem.id as number, uitem))
          } else {
            this.userlist.set(user.id as number, user)
          }
        } else if (code === 2) {
          const user = content as any[]
          this.userlist.clear()
          user.forEach((uitem) => this.userlist.set(uitem.id as number, uitem))
        }
      }
      // 加入会议
      ws.onopen = () => {
        ws.send(
          JSON.stringify({
            action: 1,
            chat: {
              senderId: userId,
              receiverId: -1,
              content: `ID ${userId} user is online`,
              sign: 0,
            },
            uuid,
            createrId: null,
          })
        )
      }
      // 检测关闭事件断开连接
      window.addEventListener('beforeunload', () => {
        this.leave()
      })
    },
    /**
     * @name 发送消息
     * @param data
     */
    send(data: any) {
      this.ws.send(JSON.stringify(data))
    },
    /**
     * @name 离开会议
     */
    leave() {
      this.ws.close()
    },
  },
})
