import { create } from 'zustand'
import { AuthSlice, createAuthSlice } from '~/store/auth'
import { ThemeSlice, createThemeSlice } from '~/store/theme'

type Store = ThemeSlice & AuthSlice

export const useStore = create<Store>()((set, get, api) => ({
  ...createThemeSlice(set, get, api),
  ...createAuthSlice(set, get, api),
}))
