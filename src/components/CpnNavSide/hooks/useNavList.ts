import {
  HomeOutline,
  PersonOutline,
  ApertureOutline,
  ChatboxOutline,
  InformationCircleOutline,
  LogInOutline,
  ChatbubblesOutline,
} from '@vicons/ionicons5'

const menulist = [
  {
    id: 0,
    title: '首页',
    comp: HomeOutline,
    target: '/home',
  },
  {
    id: 1,
    title: '登录 & 注册',
    comp: LogInOutline,
    target: '/login',
  },
  {
    id: 2,
    title: '个人中心',
    comp: PersonOutline,
    target: '/center',
  },
  {
    id: 3,
    title: '文章广场',
    comp: ApertureOutline,
    target: '/moment',
  },
  {
    id: 4,
    title: '联系我们',
    comp: ChatboxOutline,
    target: '/concat',
  },

  {
    id: 5,
    title: '一起聊',
    comp: ChatbubblesOutline,
    target: '/chat',
  },
  {
    id: 6,
    title: '关于',
    comp: InformationCircleOutline,
    target: '/about',
  },
]

export function useNavList() {
  return menulist
}
