import { StateCreator } from 'zustand'

export interface AuthSlice {
  isAuthorized: boolean
  setAuthState: (isAuthorized: boolean) => void
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  isAuthorized: false,
  setAuthState: (isAuthorized) =>
    set((state) => ({
      ...state,
      isAuthorized,
    })),
})
