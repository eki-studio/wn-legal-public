import { DEBUG, USE } from '$/eki.config'
import { gsap } from '@/animations/config'
import { useLenis } from '@studio-freight/react-lenis'

const useScrollBar = (scrollBarRef: any) => {
  useLenis((lenis) => {
    if (USE.scrollBar === false) return
    const progress = () => lenis.progress * 100
    scrollBarRef.current.moveTo(
      gsap.utils.unitize(progress, '%'),
      lenis.progress * 360
    )

    if (DEBUG.scrollBar) console.log('scrollBar progress', progress())
    if (DEBUG.scrollBar) console.log('Rotation', lenis.progress * 360)
  }, [])
}

export default useScrollBar
