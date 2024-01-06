'use client'

import { gsap } from '@/animations/config'
import { ANIM_VARS } from '@/animations/defaults'
import { useGsapContext } from '@/hooks/gsap/_use-gsap-context'
import { useStoreCursor, useStoreModal } from '@/store'
import { useLenis } from '@studio-freight/react-lenis'
import clsx from 'clsx'
import { memo, useCallback, useEffect, useLayoutEffect, useRef } from 'react'
import { Box, Container, Section } from '..'
import $ from './Modal.module.scss'

const Modal = () => {
  const comp = useRef<HTMLDivElement>(null)
  const tlRef = useRef<gsap.core.Timeline>()

  //Stores
  const open = useStoreModal.use.open()
  const title = useStoreModal.use.title()
  const content = useStoreModal.use.content()
  const setOpen = useStoreModal.use.setOpen()
  const reset = useStoreModal.use.reset()

  const setCursorDefault = useStoreCursor.use.setHoverDefault()
  //Hookes
  const lenis = useLenis()

  const ctx = useGsapContext(comp.current)
  useLayoutEffect(() => {
    ctx.add(() => {
      const slide = '[data-slide]'
      const mock = '[data-mock]'
      gsap.set([comp.current, mock], { autoAlpha: 0 })
      gsap.set(slide, { xPercent: 102 })
      tlRef.current = gsap.timeline({
        paused: true,
        defaults: {
          duration: ANIM_VARS.duration.default,
          ease: ANIM_VARS.ease.out,
        },
        onStart: () => {
          lenis.stop()
        },
        onReverseComplete: () => {
          lenis.start()
          reset()
        },
      })
      tlRef.current
        .to(comp.current, {
          display: 'block',
          duration: 0,
        })
        .to(
          comp.current,
          {
            autoAlpha: 1,
            duration: ANIM_VARS.duration.default / 2,
          },
          '<'
        )
        .to(slide, { xPercent: 0 }, '>-=0.12')
        .to(
          mock,
          { autoAlpha: 1, duration: ANIM_VARS.duration.default / 2 },
          '<+=0.12'
        )
    })
    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ctx, lenis])

  useEffect(() => {
    open ? tlRef.current?.play() : tlRef.current?.reverse()
  }, [open])

  //Effects
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [setOpen])

  //Handlers
  const handleClose = () => {
    setOpen(false)
  }

  const handleCloseHoverIn = useCallback(
    (tl: any) => {
      setCursorDefault(true)
      tl.play()
    },
    [setCursorDefault]
  )

  const handleCloseHoverOut = useCallback(
    (tl: any) => {
      setCursorDefault(false)
      tl.reverse()
    },
    [setCursorDefault]
  )

  return (
    <aside className={$.modal} ref={comp}>
      <div className="page-wrapper">
        <div className={clsx($.wrapper, 'main-wrapper')}>
          <Section>
            <Container>
              <div className={$.inner} data-slide data-lenis-prevent>
                <div className={$.head}>
                  <div data-title>{title}</div>
                  <Box
                    anim="modal-btn"
                    className={$.close}
                    onClick={handleClose}
                    onMouseEnter={({ tl }) => handleCloseHoverIn(tl)}
                    onMouseLeave={({ tl }) => handleCloseHoverOut(tl)}
                  >
                    <svg
                      viewBox="0 0 96 93"
                      width="100%"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g>
                        <path d="M5 92L95.51 1.49 94.8.78 4.29 91.29l.7.7Z" />
                        <path d="M92 91.99L1.49 1.48l-.71.7 90.51 90.51 .7-.71Z" />
                      </g>
                    </svg>
                  </Box>
                </div>
                <div className={$.content} data-content>
                  {content}
                </div>
              </div>
            </Container>
          </Section>
        </div>
        <div className={$.mock} data-mock />
      </div>
    </aside>
  )
}

export default memo(Modal)
