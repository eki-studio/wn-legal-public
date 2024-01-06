'use client'

import { MEDIA } from '$/eki.config'
import {
  Box,
  ButtonBox,
  Container,
  Line,
  RichText,
  Section,
  Text,
  Title,
} from '@/components'
import { useMedia } from '@/hooks'
import QueryHome from '@/sanity/schemas/home/types'
import { useStoreModal } from '@/store'
import dynamic from 'next/dynamic'
import { memo, useEffect } from 'react'
import $ from './Services.module.scss'

const Service = dynamic(() => import('./Components/Service'))
const ShapeDesktop = dynamic(() => import('./Components/ShapeDesktop'))

interface SectionProps {
  data: QueryHome
}

const Services = ({ data }: SectionProps) => {
  //Stores
  const setOpenModal = useStoreModal.use.setOpen()
  const openModal = useStoreModal.use.open()
  const setTitleModal = useStoreModal.use.setTitle()
  const setContentModal = useStoreModal.use.setContent()

  //Hookes
  const isDesktop = useMedia(MEDIA.desktop, true)

  //Effects
  useEffect(() => {
    if (openModal) {
      setTitleModal(<h3>{data.servicesModalTitle}</h3>)
      setContentModal(
        <RichText
          className={$.text}
          value={data.servicesActivity}
          components={{
            block: {
              normal: ({ children }) => <h5 className="mb-s">{children}</h5>,
            },
          }}
        />
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openModal])

  return (
    <>
      <Section className={$.section} id="services">
        <Container>
          <div className={$.content}>
            <Title as="h3" anim="title">
              {data.title}
            </Title>
            <div className="mb-s" />
            <RichText
              value={data.servicesDesc}
              components={{
                block: {
                  normal: ({ children }) => (
                    <Text anim="fade-in" className="text-p2">
                      {children}
                    </Text>
                  ),
                },
              }}
            />
            <div className="mb-s" />
            <Box anim="fade-in">
              <ButtonBox icon onClick={() => setOpenModal(true)}>
                {data.servicesButtonText}
              </ButtonBox>
            </Box>
          </div>

          {isDesktop && <ShapeDesktop />}
        </Container>
        <Line />
      </Section>
      <Section className={$.section_service}>
        {data.services.map((item, i) => (
          <Service key={i} data={item} />
        ))}
      </Section>
    </>
  )
}

export default memo(Services)
