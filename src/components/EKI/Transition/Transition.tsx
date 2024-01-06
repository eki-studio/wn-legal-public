'use client'

import { DEBUG, MEDIA, USE } from '$/eki.config'
import { gsap } from '@/animations/config'
import generateTransition from '@/animations/generators/generate-transition'
import { useFadeTransition } from '@/hooks'
import { useStoreTransition } from '@/store'
import { memo, useEffect, useRef } from 'react'
import $ from './Transition.module.scss'

const Transition = () => {
  const ref = useRef(null)
  const tlRef = useRef<any>(null)

  const transitionName = useStoreTransition.use.transitionName()
  const linkRef = useStoreTransition.use.linkRef()
  const setTimeline = useStoreTransition.use.setTimeline()
  const setDuration = useStoreTransition.use.setTransitionDuration()

  useEffect(() => {
    if (!linkRef || !transitionName || USE.transition === false) return
    //Generate timelines
    let ctx = gsap.matchMedia()
    ctx.add(MEDIA, (c) => {
      generateTransition({
        transition: transitionName,
        linkRef: linkRef,
        tl: tlRef,
        context: c,
      })
    })

    tlRef.current && setTimeline(tlRef.current)
    tlRef.current && setDuration(tlRef.current.duration())
    if (DEBUG.transition) {
      console.log('--------- Debug Transition-----------')
      console.log('build store')
      console.log(useStoreTransition.getState())
    }

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transitionName, linkRef])

  useFadeTransition()
  if (USE.transition === false) return null
  return <aside className={$.transition} ref={ref}></aside>
}

export default memo(Transition)
