import { defineStore } from 'pinia'
import storage from '@/utils/storage'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    loginState: storage.get('__USER_LOGIN_TOKEN__') ? true : false,
    userId: storage.get('__USER_LOGIN_ID__') || '',
  }),
  actions: {
    /**
     * @name 切换登录状态
     * @param state
     */
    changeLoginState(state: boolean) {
      this.loginState = state
      if (state) {
        this.userId = storage.get('__USER_LOGIN_ID__')
      }
    },
  },
})
