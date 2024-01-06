import useGsapConfig from './_use-gsap-config'
import { useGsapContext, useGsapMatchMedia } from './_use-gsap-context'

const useGsap = () => {
  const context = useGsapContext
  const matchMedia = useGsapMatchMedia
  const config = useGsapConfig
  return {
    context,
    matchMedia,
    config,
  }
}

export default useGsap
