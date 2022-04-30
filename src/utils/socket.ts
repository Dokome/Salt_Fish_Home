// const url = 'ws://112.74.108.218:8888/websocket'

// export class MyWebSocket {
//   ws: WebSocket
//   messages: any[]
//   constructor(url: string) {
//     this.ws = new WebSocket(url)
//     this.messages = []
//     this.init()
//   }

//   init() {
//     const ws = this.ws
//     // 创建连接
//     // ws.onopen = () => {
//     // console.log('连接 websocket 成功')
//     // }
//     // 收到消息
//     ws.onmessage = (msg) => {
//       const message = JSON.parse(msg.data)
//       if (message instanceof Array) {
//         this.messages.push(...message)
//       } else {
//         this.messages.push(message)
//       }
//     }
//     // 关闭连接
//     // ws.onclose = () => {
//     //   console.log('websocket 关闭')
//     // }
//     // 发生错误
//     // ws.onerror = (err) => {
//     //   console.log(err)
//     // }
//   }

//   send(msg: any) {
//     const ws = this.ws
//     if (ws.readyState === ws.OPEN) {
//       ws.send(JSON.stringify(msg))
//     }
//   }
// }

// const ws = new MyWebSocket(url)

// export default ws
