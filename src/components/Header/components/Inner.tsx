'use client'

import { Locale, i18n } from '$/eki.config'
import { gsap } from '@/animations/config'
import { ANIM_DEFAULTS, ANIM_VARS } from '@/animations/defaults'
import { Box, Link_ } from '@/components'
import { useThemeSwitch } from '@/hooks'
import { QueryHeader } from '@/sanity/schemas/navigation/types'
import { useStoreCursor } from '@/store'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { Moon, Plus, Sun } from 'react-feather'
import $ from '../Header.module.scss'

const Logo = dynamic(() => import('./Logo'))

interface Props {
  data: QueryHeader
  lang: Locale
}

const Inner = ({ data, lang }: Props) => {
  //Refs
  const comp = useRef<HTMLDivElement>(null)
  const tl = useRef<gsap.core.Timeline>()

  //Stores
  const setHoverTheme = useStoreCursor.use.setHoverTheme()
  const setHoverDefault = useStoreCursor.use.setHoverDefault()

  //states
  const [open, setOpen] = useState(false)

  //Effects
  useEffect(() => {
    let ctx = gsap.context(() => {
      const items = '[data-item]'
      const langs = '[data-langs]'
      const nav = '[data-nav]'
      const icon = '[data-icon]'

      tl.current = gsap.timeline({ paused: true })
      tl.current
        .to(comp.current, {
          height: 'auto',
          ease: ANIM_VARS.ease.out,
          duration: ANIM_VARS.duration.default,
        })
        .to(
          icon,
          {
            rotate: 135,
            duration: ANIM_VARS.duration.default,
            transformOrigin: 'center',
          },
          '<'
        )
        .to(
          nav,
          { autoAlpha: 1, duration: ANIM_VARS.duration.default },
          '>-=0.5'
        )
        .fromTo(
          items,
          ANIM_DEFAULTS.fadeIn.from,
          {
            ...ANIM_DEFAULTS.fadeIn.to,
            stagger: ANIM_VARS.duration.stagger,
          },
          '>-=0.5'
        )
        .fromTo(
          langs,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: ANIM_VARS.duration.default },
          '>-=0.75'
        )
    }, comp)

    return () => ctx.revert()
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    open ? tl.current?.play() : tl.current?.reverse()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  //Handlers
  const handleThemeSwicth = useThemeSwitch()

  const handleThemeHoverIn = useCallback(
    () => setHoverTheme(true),
    [setHoverTheme]
  )
  const handleThemeHoverOut = useCallback(
    () => setHoverTheme(false),
    [setHoverTheme]
  )

  const handleDeafultCursoHvoerIn = useCallback(() => {
    setHoverDefault(true)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDeafultCursoHvoerOut = useCallback(() => {
    setHoverDefault(false)
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOpenNav = useCallback(() => {
    setOpen(!open)
  }, [open])

  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className={$.inner} ref={comp}>
      <div className={$.head}>
        <Box
          className={$.logo}
          onClick={({ lenis }) => {
            lenis?.scrollTo(0)
            setOpen(false)
          }}
        >
          <Logo />
        </Box>
        <div
          className={$.menu}
          onMouseEnter={handleDeafultCursoHvoerIn}
          onMouseLeave={handleDeafultCursoHvoerOut}
          onClick={handleOpenNav}
        >
          <p className="text-p2">Menu</p>
          <Plus className={$.menu_icon} data-icon />
        </div>
        <Box
          className={$.btn_theme}
          onMouseEnter={handleThemeHoverIn}
          onMouseLeave={handleThemeHoverOut}
          onClick={handleThemeSwicth}
        >
          <div className={$.switcher} data-theme-switcher />
          <div className={$.icon_wrap}>
            <Sun className={$.icon} />
            <Moon className={$.icon} />
          </div>
        </Box>
      </div>

      <nav className={$.nav} data-nav>
        <div className={$.links}>
          {data.links.map((item) => (
            <Box
              className={clsx($.link, 'text-p2')}
              key={item._key}
              data-item
              onClick={({ lenis }) => {
                lenis?.scrollTo(item.url)
                setOpen(false)
              }}
              onMouseEnter={handleDeafultCursoHvoerIn}
              onMouseLeave={handleDeafultCursoHvoerOut}
            >
              {item.name}
            </Box>
          ))}
        </div>
        <div className={$.langs} data-langs>
          {i18n.locales.map((locale) => (
            <Link_
              key={locale}
              href={redirectedPathName(locale)}
              onMouseEnter={handleDeafultCursoHvoerIn}
              onMouseLeave={handleDeafultCursoHvoerOut}
              className={clsx($.lang, locale === lang && $.active)}
            >
              {locale}
            </Link_>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default memo(Inner)
