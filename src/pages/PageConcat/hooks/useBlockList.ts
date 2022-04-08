import { LogoGithub, LogoWechat, MailOpen, Clipboard } from '@vicons/ionicons5'
import { yellow, green, gray } from '@/assets/constant'
import { useRouter } from 'vue-router'

export default function useBlockList() {
  const router = useRouter()

  function enterGithub() {
    window.open('https://github.com/Dokome/Salt_Fish_Home', '__blank')
  }

  function leavingMessage() {
    router.push('/leavemessage')
  }

  const blocklist = [
    {
      title: 'Github: Dokome',
      icon: LogoGithub,
      onClick: enterGithub,
    },
    {
      title: '微信: niubiaDK',
      icon: LogoWechat,
      color: green,
    },
    {
      title: 'Email: dokom123@163.com',
      icon: MailOpen,
      color: gray,
    },
    {
      title: '在网站上留言',
      icon: Clipboard,
      color: yellow,
      onClick: leavingMessage,
    },
  ]

  return blocklist
}
