import { DEBUG, USE } from '$/eki.config'
import { useStoreTransition } from '@/store'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const useFadeTransition = () => {
  const transitionName = useStoreTransition.use.transitionName()
  const timeline = useStoreTransition.use.timeline()
  const status = useStoreTransition.use.status()
  const setStatus = useStoreTransition.use.setStatus()
  const reset = useStoreTransition.use.reset()

  const pathName = usePathname()

  useEffect(() => {
    if (USE.transition === false) return
    if (transitionName === 'fade' && timeline) {
      setStatus('play')
      if (DEBUG.transition) {
        console.log('--------- Debug Transition-----------')
        console.log('play timeline')
        console.log(useStoreTransition.getState())
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transitionName, timeline])

  useEffect(() => {
    if (USE.transition === false) return
    if (transitionName === 'fade' && timeline) {
      setStatus('reverse')
      if (DEBUG.transition) {
        console.log('--------- Debug Transition-----------')
        console.log('Reverse timeline timeline')
        console.log(useStoreTransition.getState())
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName])

  useEffect(() => {
    if (USE.transition === false) return
    status === 'play' && timeline?.play()
    status === 'reverse' && timeline?.reverse()
    timeline?.eventCallback('onReverseComplete', () => {
      reset()
      if (DEBUG.transition) {
        console.log('--------- Debug Transition-----------')
        console.log('Reset Store')
        console.log(useStoreTransition.getState())
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, timeline])
}

export default useFadeTransition
