import { TransitionNames } from '@/animations/types'
import { EkiRef } from '@/components/EKI/Eki/Eki.types'
import { create } from 'zustand'
import createSelectors from '../utils/createSelectors'

interface State {
  transitionName: TransitionNames
  transitionDuration: number | null
  linkRef: EkiRef | null //Link trigger ref
  timeline: any
  status: 'play' | 'reverse' | null
}
interface Action {
  /* eslint-disable no-unused-vars */
  setTransitionName: (transitionName: State['transitionName']) => void
  setTransitionDuration: (
    transitionDuration: State['transitionDuration']
  ) => void
  setLinkRef: (linkRef: State['linkRef']) => void
  setTimeline: (timeline: State['timeline']) => void
  setStatus: (status: State['status']) => void
  reset: () => void
}
/* eslint-enable */

const initialState: State = {
  transitionName: undefined,
  transitionDuration: null,
  linkRef: null,
  timeline: null,
  status: null,
}

const baseStoreTransition = create<State & Action>((set) => ({
  transitionName: undefined,
  transitionDuration: null,
  linkRef: null,
  timeline: null,
  status: null,
  setTransitionName: (transitionName) =>
    set(() => ({ transitionName: transitionName })),
  setTimeline: (timeline) => set(() => ({ timeline: timeline })),
  setTransitionDuration: (transitionDuration) =>
    set(() => ({ transitionDuration: transitionDuration })),
  setLinkRef: (linkRef) => set(() => ({ linkRef: linkRef })),
  setStatus: (status) => set(() => ({ status: status })),
  reset: () => {
    set(() => ({ ...initialState }))
  },
}))

const useStoreTransition = createSelectors(baseStoreTransition)

export default useStoreTransition
