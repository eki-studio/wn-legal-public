import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import createSelectors from '../utils/createSelectors'

interface State {
  cookie: boolean
}
interface Action {
  /* eslint-disable no-unused-vars */
  setCookie: (cookie: State['cookie']) => void
}
/* eslint-enable no-unused-vars */

const baseStoreCookie = create<State & Action>()(
  persist(
    (set) => ({
      cookie: false,
      setCookie: (cookie) => set(() => ({ cookie: cookie })),
    }),
    {
      name: 'cookie',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        cookie: state.cookie,
      }),
    }
  )
)

const useStoreCookie = createSelectors(baseStoreCookie)

export default useStoreCookie
