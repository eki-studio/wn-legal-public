import { MEDIA } from '$/eki.config'
import { ScrollTrigger, gsap } from '@/animations/config'
import { generateAnim } from '@/animations/generators/generate-anim'
import { AnimNames } from '@/animations/types'
import { useStorePreload, useStoreTheme } from '@/store'
import { createID } from '@/utils/animations'
import { useCallback, useLayoutEffect } from 'react'

/* eslint-disable no-undef */
interface UseAnimationProps {
  ref: React.MutableRefObject<any>
  tlRef: any
  anim?: AnimNames
  animVars?: GSAPTweenVars
  refresh?: boolean
  deps?: any[]
}
/* eslint-enable no-undef */

const useAnimation = ({
  ref,
  anim,
  tlRef,
  animVars,
  refresh,
  deps = [],
}: UseAnimationProps) => {
  const animationPreloadStart = useStorePreload.use.animationsStart()
  const theme = useStoreTheme.getState().theme
  const MAX_DEPS_LENGTH = 3 // Set this to the maximum number of dependencies you expect
  const setDeps = [
    ...deps,
    ...new Array(MAX_DEPS_LENGTH - deps.length).fill(null),
  ]

  const generateAnimCallback = useCallback(
    (c: gsap.Context, id: string) => {
      generateAnim({
        comp: ref,
        tl: tlRef,
        context: c,
        animVars: animVars,
        id: id,
        anim: anim,
        theme: theme,
      })
    },
    [ref, tlRef, animVars, anim, theme]
  )

  useLayoutEffect(() => {
    if (!anim || !ref || animationPreloadStart === false) return
    let ctx = gsap.matchMedia()
    const id = createID({ length: 4, suffix: anim })
    ctx.add(
      MEDIA,
      (c) => {
        generateAnimCallback(c, id)
        if (refresh) {
          gsap.registerPlugin(ScrollTrigger)
          ScrollTrigger.refresh()
        }
      },
      ref.current
    )

    return () => ctx.revert()

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animationPreloadStart, ...setDeps])
}

export default useAnimation
