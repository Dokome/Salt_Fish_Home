import { defineStore } from 'pinia'

export const useMainStore = defineStore({
  id: 'main',
  state: () => ({
    name: 'super admin',
  }),
  // getters
  getters: {
    nameLength: (state) => state.name.length,
  },
})
