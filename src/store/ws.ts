import { defineStore } from 'pinia'
const url = 'ws://112.74.108.218:8888/websocket'
const enterChat = {
  action: 1,
  chat: {
    senderId: 16,
    receiverId: -1,
    content: 'dokom is comming',
    sign: 0,
  },
  uuid: -1,
  createrId: null,
}

export const useWsStore = defineStore({
  id: 'ws',
  state: () => ({
    ws: {} as WebSocket,
    messages: [] as any[],
  }),
  actions: {
    /**
     * @name 初始化
     */
    init() {
      this.ws = new WebSocket(url)
      const ws = this.ws
      // 接收消息
      ws.onmessage = (msg) => {
        const message = JSON.parse(msg.data)
        if (message instanceof Array) {
          this.messages.push(...message)
        } else {
          this.messages.push(message)
        }
      }
      // 创建连接
      ws.onopen = () => {
        ws.send(JSON.stringify(enterChat))
      }
    },
  },
})
