'use client'

import { MEDIA } from '$/eki.config'
import { gsap } from '@/animations/config'
import {
  Box,
  ButtonBox,
  Container,
  Img,
  Line,
  RichText,
  Title,
} from '@/components'
import { EkiRef } from '@/components/EKI/Eki/Eki.types'
import { useMedia } from '@/hooks'
import QueryHome, { Team } from '@/sanity/schemas/home/types'
import { useStoreCursor, useStorePreload } from '@/store'
import { useLenis } from '@studio-freight/react-lenis'
import clsx from 'clsx'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import $ from '../Team.module.scss'

interface MemberProps {
  member: Team
  data: QueryHome
}

const Member = ({ member, data }: MemberProps) => {
  //Refs
  const comp = useRef<EkiRef>(null)

  //states
  const [info, setInfo] = useState(true)
  const [activity, setActivity] = useState(false)
  const [languages, setLanguages] = useState(false)
  const [tlDropdown, setTlDropdown] = useState<any>(null)
  const [tlHover, setTlHover] = useState<any>(null)
  const [openDropdown, setOpenDropdown] = useState(false)
  const [hoverDropdown, setHoverDropdown] = useState(false)

  //Stores
  const setCursorDefault = useStoreCursor.use.setHoverDefault()
  const preloadAnim = useStorePreload.use.animationsStart()

  //Hooks
  const isDesktop = useMedia(MEDIA.desktop)
  const lenis = useLenis()

  //Effects
  const ctx = gsap.matchMedia()
  useEffect(() => {
    if (comp?.current?.tl && preloadAnim) {
      ctx.add(MEDIA, (_c) => {
        setTlDropdown((comp?.current?.tl as gsap.core.Timeline[])[0])
        setTlHover((comp?.current?.tl as gsap.core.Timeline[])[1])
      })
    }
  }, [comp, preloadAnim, ctx])

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
  const handleInfo = useCallback(() => {
    setInfo(true)
    setActivity(false)
    setLanguages(false)
  }, [])

  const handleActivity = useCallback(() => {
    setInfo(false)
    setActivity(true)
    setLanguages(false)
  }, [])

  const handleLanguages = useCallback(() => {
    setInfo(false)
    setActivity(false)
    setLanguages(true)
  }, [])

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
  const titleComposer = clsx(isDesktop ? 'title-h2' : 'title-h4')
  const positionComposer = clsx(
    isDesktop ? 'title-h6' : 'text-btn',
    'text-stroke'
  )
  return (
    <Box as="article" className={$.team} anim="team-dropdown" ref={comp}>
      <Container>
        <div className={$.title}>
          <Title as="h4" anim="title" className={titleComposer}>
            {member.name}
          </Title>
          <Title as="h5" anim="title" className={positionComposer}>
            {member.position}
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

        <div className={$.content} data-content>
          <Container>
            <Box
              data-image
              className={$.image}
              anim="team-image"
              onMouseEnter={({ tl }) => {
                tl.play()
              }}
              onMouseLeave={({ tl }) => {
                tl.reverse()
              }}
            >
              <Img data={member.image1} className="object-fit" />
              <Img
                data={member.image2}
                className="object-fit hide-mobile"
                data-image-2
              />
            </Box>
            <div className={$.infos}>
              <div className={$.buttons}>
                {member.showInfo && (
                  <ButtonBox data-btn icon onClick={handleInfo} active={info}>
                    {data.teamDeafult.teamBtnInfo}
                  </ButtonBox>
                )}
                {member.showActivity && (
                  <ButtonBox
                    data-btn
                    icon
                    onClick={handleActivity}
                    active={activity}
                  >
                    {data.teamDeafult.teamBtnActivity}
                  </ButtonBox>
                )}
                {member.showLanguages && (
                  <ButtonBox
                    data-btn
                    icon
                    onClick={handleLanguages}
                    active={languages}
                  >
                    {data.teamDeafult.teamBtnLanguages}
                  </ButtonBox>
                )}
              </div>
              <div data-wrap>
                {member.showInfo && (
                  <MemberTab value={member.info} type={info} />
                )}
                {member.showActivity && (
                  <MemberTab value={member.activity} type={activity} />
                )}
                {member.showLanguages && (
                  <MemberTab value={member.languages} type={languages} />
                )}
              </div>

              <div className={$.contact} data-contact>
                <Title as="h4" className="title-h5 mb-xs">
                  {data.teamDeafult.contactText}
                </Title>
                <Box as="a" href={`mailto:${member.email}`}>
                  <Title as="h5" className="title-h6">
                    {member.email}
                  </Title>
                </Box>
              </div>
            </div>
          </Container>
        </div>
      </Container>
      <Line />
    </Box>
  )
}

export default memo(Member)

interface MemberTabProps {
  value: any
  type: boolean
}

const MemberTab = ({ value, type }: MemberTabProps) => (
  <div data-wrap>
    <CSSTransition
      in={type}
      timeout={300}
      classNames="fade"
      unmountOnExit
      mountOnEnter
    >
      <div data-tab>
        <RichText useClass={false} className={$.rich_text} value={value} />
      </div>
    </CSSTransition>
  </div>
)

const Plus = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    viewBox="0 0 128 128"
    fill="none"
    stroke="var(--secondary)"
    strokeWidth="var(--stroke-width)"
    data-icon
    className={$.plus}
  >
    <line x1="130" y1="65" x2="-1" y2="65" data-icon-line></line>
    <line x1="65" y1="-1" x2="65" y2="130" data-icon-line-2></line>
  </svg>
)
