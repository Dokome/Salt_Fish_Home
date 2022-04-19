import { defineStore } from 'pinia'
import storage from '@/utils/storage'
import { getUserInfo } from '@/service/user'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    loginState: storage.get('__USER_LOGIN_TOKEN__') ? true : false,
    userId: storage.get('__USER_LOGIN_ID__') || '',
    userInfo: storage.get('__USER_LOGIN_INFO__') || {},
  }),
  actions: {
    /**
     * @name 切换登录状态
     * @param state
     */
    async changeLoginState(state: boolean) {
      this.loginState = state
      if (state) {
        this.userId = storage.get('__USER_LOGIN_ID__')
        // 登录成功获取用户信息
        const userInfo = await getUserInfo(this.userId)
        this.updateUserInfo(userInfo)
      }
    },
    /**
     * @name 更新用户信息
     * @param userInfo
     */
    updateUserInfo(userInfo: any) {
      storage.set('__USER_LOGIN_INFO__', userInfo || {}, 1000 * 3600 * 24 * 30)
      this.userInfo = userInfo || {}
    },
  },
})
