/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
interface UserInfoStore {
  updateStatusAuth: (value: boolean) => void
  isAuth: boolean
}

const useUserInfoStore = create<UserInfoStore>()(
  persist(
    (set) => ({
      isAuth: false,
      updateStatusAuth: (value: boolean) => set({ isAuth: value })
    }),
    {
      name: 'user-info'
    }
  )
)
export default useUserInfoStore
