import { ANIM_VARS } from '@/animations/defaults'
import {
  Box,
  ButtonBox,
  Container,
  RichText,
  Section,
  Text,
  Title,
} from '@/components'
import QueryHome from '@/sanity/schemas/home/types'
import clsx from 'clsx'
import { memo } from 'react'
import $ from './Contact.module.scss'
import Shape from './Shape'
import Svg from './Svg'

interface SectionProps {
  data: QueryHome
}

const Contact = ({ data }: SectionProps) => {
  return (
    <Section id="contact">
      <Container className={clsx($.container, 'is-fluid')}>
        <div className={$.content}>
          <Svg />
          <div className={$.text}>
            <Title as="h3" anim="title">
              {data.contactTitle}
            </Title>
            <div className="mb-s" />
            <RichText
              value={data.contactDesc}
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
            <div className={$.bottom}>
              <Box
                as="a"
                href={data.addressUrl}
                target="_blank"
                aria-label="address"
              >
                <Box anim="title">
                  <ButtonBox as="h4" className="title-h6" naked>
                    {data.address}
                  </ButtonBox>
                </Box>
              </Box>
              <div className={$.buttons}>
                <Box anim="fade-in">
                  <ButtonBox as="a" href={`tel:${data.phone}`} icon>
                    {data.phone}
                  </ButtonBox>
                </Box>
                <Box
                  anim="fade-in"
                  animVars={{ delay: ANIM_VARS.duration.stagger }}
                >
                  <ButtonBox as="a" href={`mailto:${data.email}`} icon>
                    {data.email}
                  </ButtonBox>
                </Box>
              </div>
            </div>
          </div>
        </div>
        <Shape />
      </Container>
    </Section>
  )
}

export default memo(Contact)
