import { create } from 'zustand'
import createSelectors from '../utils/createSelectors'

interface State {
  open: boolean
  title: React.ReactNode
  content: React.ReactNode
}
interface Action {
  /* eslint-disable no-unused-vars */
  setOpen: (open: State['open']) => void
  setTitle: (title: State['title']) => void
  setContent: (content: State['content']) => void
  reset: () => void
}
/* eslint-enable */

const initialState: State = {
  open: false,
  title: null,
  content: null,
}

const baseStoreModal = create<State & Action>((set) => ({
  open: false,
  title: null,
  content: null,
  setTitle: (title) => set(() => ({ title: title })),
  setContent: (content) => set(() => ({ content: content })),
  setOpen: (open) => set(() => ({ open: open })),
  reset: () => set(() => initialState),
}))

const useStoreModal = createSelectors(baseStoreModal)

export default useStoreModal
