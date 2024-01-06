'use client'

import { QueryFooter } from '@/sanity/schemas/navigation/types'
import QueryPolicy from '@/sanity/schemas/policies/types'
import { useStoreCursor, useStoreModal } from '@/store'
import clsx from 'clsx'
import { memo, useCallback, useEffect, useState } from 'react'
import { RichText, Text } from '..'
import $ from './Footer.module.scss'

interface Props {
  data: QueryFooter['links']
  policies: QueryPolicy[]
}

const Navigation = ({ data, policies }: Props) => {
  const setHoverDefault = useStoreCursor.use.setHoverDefault()

  return (
    <>
      <div className={$.nav}>
        {data.map((item) => (
          <Text
            data-link
            className={$.item}
            key={item._key}
            data-scroll={item.url}
            onClick={({ lenis }) => {
              lenis?.scrollTo(item.url)
            }}
            onMouseEnter={() => setHoverDefault(true)}
            onMouseLeave={() => setHoverDefault(false)}
          >
            {item.name}
          </Text>
        ))}
      </div>
      <div className={clsx($.nav, $.policies)}>
        {policies.map((item, i) => (
          <PoliciyItem key={i} item={item} />
        ))}
      </div>
    </>
  )
}

export default memo(Navigation)

const PoliciyItem = ({ item }: { item: QueryPolicy }) => {
  //Stores
  const setOpenModal = useStoreModal.use.setOpen()
  const openModal = useStoreModal.use.open()
  const setTitleModal = useStoreModal.use.setTitle()
  const setContentModal = useStoreModal.use.setContent()
  const setHoverDefault = useStoreCursor.use.setHoverDefault()

  //States
  const [click, setClick] = useState(false)

  //Effects
  useEffect(() => {
    if (click) {
      setTitleModal(<h3>{item.title}</h3>)
      setContentModal(<RichText value={item.content}></RichText>)
    }
  })

  useEffect(() => {
    !openModal && setClick(false)
  }, [openModal])

  //Handlers
  const handleClick = useCallback(() => {
    setClick(true)
    setOpenModal(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Text
      className={$.item}
      onClick={handleClick}
      onMouseEnter={() => setHoverDefault(true)}
      onMouseLeave={() => setHoverDefault(false)}
      data-link
    >
      {item.title}
    </Text>
  )
}
