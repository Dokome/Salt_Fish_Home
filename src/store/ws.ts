import { defineStore } from 'pinia'
import dayjs from 'dayjs'

const url = 'ws://112.74.108.218:8888/websocket'

export const useWsStore = defineStore({
  id: 'ws',
  state: () => ({
    ws: {} as WebSocket,
    messages: [] as any[],
    userlist: new Map<number, any>(),
    // 重连次数
    limit: 0,
    // 重连锁
    lockReconnect: false,
    // 重连定时器
    timer: null as any,
    userId: -1,
    // 心跳包启动定时器
    heartBeatTimer: null as any,
    recieveTimer: null as any,
  }),
  actions: {
    /**
     * @name 初始化会议
     * @param userId
     * @param uuid
     */
    init(userId: number, uuid = -1) {
      this.ws = new WebSocket(url)
      this.userId = userId
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
          this.userlist.delete(content.id as number)
        }

        this.resetHeartBeat()
      }

      // 加入会议
      ws.onopen = () => {
        this.limit = 0
        //
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

      // 断线重连
      ws.onclose = () => {
        this.reconnect()
      }

      ws.onerror = () => {
        this.reconnect()
      }
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
    /**
     * @name 断线重连
     */
    reconnect() {
      if (this.lockReconnect) {
        return
      }
      this.lockReconnect = true
      clearTimeout(this.timer)
      //
      if (this.limit < 10) {
        this.timer = setTimeout(() => {
          this.init(this.userId)
          this.lockReconnect = false
          this.limit += 1
        }, 5000)
      }
    },
    checkHeartBeat() {
      this.heartBeatTimer = setTimeout(() => {
        // 发送心跳包
        this.ws.send(
          JSON.stringify({
            action: 0,
            chat: {
              senderId: this.userId,
              receiverId: -1,
              content: `ID ${this.userId} user is online`,
              sign: 0,
            },
            uuid: -1,
            createrId: null,
          })
        )

        // 关闭
        this.recieveTimer = setTimeout(() => {
          this.leave()
        }, 10 * 1000)
      }, 50 * 1000)
    },

    resetHeartBeat() {
      this.heartBeatTimer && clearTimeout(this.heartBeatTimer)
      this.recieveTimer && clearTimeout(this.recieveTimer)
      this.checkHeartBeat()
    },
  },
})
