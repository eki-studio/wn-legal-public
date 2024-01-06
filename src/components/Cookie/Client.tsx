'use client'

import { gsap } from '@/animations/config'
import { QueryCookieBanner } from '@/sanity/schemas/navigation/types'
import { useStoreCookie } from '@/store'
import clsx from 'clsx'
import { memo, useEffect, useRef } from 'react'
import { ButtonBox, RichText } from '..'
import $ from './Cookie.module.scss'
interface Props {
  data: QueryCookieBanner
}

const Client = ({ data }: Props) => {
  //Refs
  const ref = useRef<any>(null)
  const animRef = useRef<any>(null)

  //Store
  const cookieStore = useStoreCookie.use.cookie()
  const setCookieStore = useStoreCookie.use.setCookie()

  useEffect(() => {
    if (!cookieStore) {
      animRef.current = gsap.to(ref.current, {
        paused: true,
        y: '1rem',
        autoAlpha: 0,
        onComplete: () => setCookieStore(true),
      })
    } else {
      ref.current.remove()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = () => {
    if (!cookieStore) {
      animRef.current.play()
    }
  }

  return (
    <aside className={$.cookie} ref={ref}>
      <div className={clsx('main-wrapper', $.wrapper)}>
        <div className={$.inner}>
          <RichText
            value={data.text}
            components={{
              block: {
                normal: ({ children }) => (
                  <p className="text-btn text-grey mb-xs">{children}</p>
                ),
              },
            }}
          />

          <ButtonBox icon onClick={handleClick}>
            {data.buttonText}
          </ButtonBox>
        </div>
      </div>
    </aside>
  )
}

export default memo(Client)
