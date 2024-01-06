'use client'

import { EkiRef } from '@/components/EKI/Eki/Eki.types'
import { memo, useCallback, useEffect, useRef, useState } from 'react'

import { MEDIA } from '$/eki.config'
import { Box, Container, Line, RichText, Title } from '@/components'
import { useMedia } from '@/hooks'
import QueryHome from '@/sanity/schemas/home/types'
import { useStoreCursor, useStorePreload } from '@/store'
import { useLenis } from '@studio-freight/react-lenis'
import clsx from 'clsx'
import $ from '../Services.module.scss'
import Plus from './Plus'
import { SvgConsult, SvgMediation, SvgNotary, SvgPatrocinio } from './Svgs'

interface ServiceProps {
  data: QueryHome['services'][0]
}

const Service = ({ data }: ServiceProps) => {
  const comp = useRef<EkiRef>(null)

  //States
  const [tlDropdown, setTlDropdown] = useState<any>(null)
  const [tlHover, setTlHover] = useState<any>(null)
  const [openDropdown, setOpenDropdown] = useState(false)
  const [hoverDropdown, setHoverDropdown] = useState(false)
  //Hooks
  const isDesktop = useMedia(MEDIA.desktop)
  const lenis = useLenis()

  //Stores
  const setCursorDefault = useStoreCursor.use.setHoverDefault()
  const preloadAnim = useStorePreload.use.animationsStart()

  //Effects
  useEffect(() => {
    if (comp?.current?.tl && preloadAnim) {
      // eslint-disable-next-line
      setTlDropdown((comp?.current?.tl as gsap.core.Timeline[])[0])
      // eslint-disable-next-line
      setTlHover((comp?.current?.tl as gsap.core.Timeline[])[1])
    }
  }, [comp, preloadAnim])

  useEffect(() => {
    if (tlDropdown) {
      openDropdown ? tlDropdown.play() : tlDropdown.timeScale(1.25).reverse()
      openDropdown && lenis?.scrollTo(comp.current?.ekiRef as HTMLElement)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tlDropdown, openDropdown])

  useEffect(() => {
    if (openDropdown) return
    if (tlHover) {
      hoverDropdown ? tlHover.play() : tlHover.reverse()
    }
  }, [openDropdown, tlHover, hoverDropdown])

  //Handlers
  const hanldeClickDropdown = useCallback(() => {
    setOpenDropdown(!openDropdown)
  }, [openDropdown])

  const handleHoverDropDownIn = useCallback(() => {
    setHoverDropdown(true)
    setCursorDefault(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleHoverDropDownOut = useCallback(() => {
    setHoverDropdown(false)
    setCursorDefault(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //Composer
  const titleComposer = clsx(isDesktop ? 'title-h2' : 'title-h3')

  return (
    <Box
      as="article"
      className={$.service}
      ref={comp}
      data-id={data.id}
      anim="service-dropdown"
      animRefresh
    >
      <Container>
        <div className={$.title}>
          <Title as="h4" anim="title" className={titleComposer}>
            {data.title}
          </Title>
        </div>
        <Box className={$.open} anim="fade-in">
          <div
            className={$.icon}
            onClick={hanldeClickDropdown}
            onMouseEnter={handleHoverDropDownIn}
            onMouseLeave={handleHoverDropDownOut}
          >
            <Plus />
          </div>
        </Box>
      </Container>
      <div className={$.content} data-content>
        <Container>
          <div className={$.desc} data-text>
            <RichText
              value={data.description}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="text-p2">{children}</p>
                  ),
                },
              }}
            />
          </div>
          <div className={$.svg} data-svg>
            {data.id === 'consulenza' && <SvgConsult />}
            {data.id === 'patrocinio' && <SvgPatrocinio />}
            {data.id === 'mediazione' && <SvgMediation />}
            {data.id === 'notariato' && <SvgNotary />}
          </div>
        </Container>
      </div>
      <Line />
    </Box>
  )
}

export default memo(Service)
