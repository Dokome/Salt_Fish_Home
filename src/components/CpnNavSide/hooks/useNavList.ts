import {
  HomeOutline,
  PersonOutline,
  ApertureOutline,
  ChatboxOutline,
  InformationCircleOutline,
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
    title: '个人中心',
    comp: PersonOutline,
    target: '/center',
  },
  {
    id: 2,
    title: '文章广场',
    comp: ApertureOutline,
    target: '/moment',
  },
  {
    id: 3,
    title: '联系我们',
    comp: ChatboxOutline,
    target: '/concat',
  },
  {
    id: 4,
    title: '关于',
    comp: InformationCircleOutline,
    target: '/about',
  },
]

export default function useNavList() {
  return menulist
}
