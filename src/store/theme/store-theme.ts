import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import createSelectors from '../utils/createSelectors'

interface State {
  theme: 'dark' | 'light' | 'auto'
  themeClick: boolean
}
interface Action {
  /* eslint-disable no-unused-vars */
  setTheme: (theme: State['theme']) => void
  setThemeClick: () => void
}
/* eslint-enable no-unused-vars */

const baseStoreTheme = create<State & Action>()(
  persist(
    (set) => ({
      themeClick: false,
      theme: 'auto',
      themeFallback: undefined,
      setTheme: (theme) => set(() => ({ theme: theme })),
      setThemeClick: () => set((state) => ({ themeClick: !state.themeClick })),
    }),
    {
      name: 'theme',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        theme: state.theme,
      }),
    }
  )
)

const useStoreTheme = createSelectors(baseStoreTheme)

export default useStoreTheme
