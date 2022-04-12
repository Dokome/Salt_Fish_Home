import { defineStore } from 'pinia'

export const userStore = defineStore({
  id: 'user',
  state: () => ({
    loginState: false,
  }),
})
