import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import createSelectors from '../utils/createSelectors'

interface State {
  preload: boolean
  animationsStart: boolean
}
interface Action {
  /* eslint-disable no-unused-vars */
  setPreload: (preload: State['preload']) => void
  setAnimationsStart: (animationsStart: State['animationsStart']) => void
  reset: () => void
}
/* eslint-enable no-unused-vars */

const initialState: State = {
  preload: true,
  animationsStart: false,
}

const baseStorePreload = create<State & Action>()(
  persist(
    (set) => ({
      preload: true,
      animationsStart: false,
      setPreload: (preload) => set(() => ({ preload: preload })),
      setAnimationsStart: (animationsStart) =>
        set(() => ({ animationsStart: animationsStart })),
      reset: () => {
        set(() => ({ ...initialState }))
      },
    }),
    {
      name: 'preload',
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        preload: state.preload,
        animationsStart: state.animationsStart,
      }),
    }
  )
)

const useStorePreload = createSelectors(baseStorePreload)

export default useStorePreload
