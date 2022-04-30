import { useWsStore, useUserStore } from '@/store'
import { MessageContentType } from '@/store/typs'
import { UserInfoResponseMsg } from '@/service/userType'

import { watch, computed, ref, onMounted, nextTick } from 'vue'
import { throttle } from 'lodash'

export function useWebSocket() {
  const fristLoaded = ref(true)
  const needScroll = ref(false)
  const messageBox = ref<HTMLDivElement>()
  const ws = useWsStore()
  const user = useUserStore()
  const messages = computed<MessageContentType[]>(() => ws.messages)
  const userlist = computed<Map<number, UserInfoResponseMsg>>(() => ws.userlist)
  // 消息
  const sendValue = ref('')

  onMounted(() => {
    ws.init(user.userId)
    const box = messageBox.value as HTMLDivElement
    box.addEventListener(
      'scroll',
      throttle(function () {
        if (box.scrollHeight - box.scrollTop > box.clientHeight + 200) {
          needScroll.value = false
        } else {
          needScroll.value = true
        }
      }, 100)
    )
  })

  watch(ws.messages, async () => {
    const box = messageBox.value as HTMLDivElement
    await nextTick()
    const boxHeigt = box.clientHeight
    const total = box.scrollHeight
    const scrollAniamte = () => {
      const current = box.scrollTop
      if (Math.ceil(current) >= total - boxHeigt) {
        fristLoaded.value = false
        return
      }

      box.scrollTo(0, current + Math.ceil(total - current) / 100)
      requestAnimationFrame(scrollAniamte)
    }

    ;(fristLoaded.value || needScroll.value) && requestAnimationFrame(scrollAniamte)
  })

  // 发送消息
  function sendValueChangeValue(inputValue: any) {
    sendValue.value = inputValue
  }

  function sendMessage() {
    const data = {
      action: 3,
      chat: {
        senderId: user.userId,
        receiverId: -1,
        content: sendValue.value,
        sign: 0,
      },
      uuid: -1,
      createrId: null,
    }
    needScroll.value = true
    ws.send(data)
    sendValue.value = ''
  }

  return {
    messageBox,
    messages,
    user,
    sendValue,
    userlist,
    //
    sendValueChangeValue,
    sendMessage,
  }
}
