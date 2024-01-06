import {
  SCROLLTRIGGER_CONFIG,
  SCROLLTRIGGER_DEFAULTS,
  SCROLLTRIGGER_NORMALIZE,
  ScrollTrigger,
  gsap,
} from '@/animations/config'
import useIsomorphicLayoutEffect from 'use-isomorphic-layout-effect'

const useGsapConfig = () => {
  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.config(SCROLLTRIGGER_CONFIG)
    ScrollTrigger.normalizeScroll(SCROLLTRIGGER_NORMALIZE)
    ScrollTrigger.defaults(SCROLLTRIGGER_DEFAULTS)
  }, [])
}
export default useGsapConfig
