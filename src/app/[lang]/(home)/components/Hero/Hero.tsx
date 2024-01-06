'use client'

import { MEDIA } from '$/eki.config'
import { ANIM_VARS } from '@/animations/defaults'
import { Container, RichText, Section, Title } from '@/components'
import { useMedia } from '@/hooks'
import QueryHome from '@/sanity/schemas/home/types'
import $ from './Hero.module.scss'
import { SvgDesktop, SvgMobile } from './Svg'

interface SectionProps {
  data: QueryHome
}

const Hero = ({ data }: SectionProps) => {
  const isDesktop = useMedia(MEDIA.desktop)

  return (
    <Section className={$.section}>
      <Container>
        <div className={$.title}>
          <Title anim="title" className="title-optima" animRefresh>
            {data.title}
          </Title>

          <RichText
            value={data.heroDesc}
            className={$.sub_title}
            useClass={false}
            components={{
              block: {
                normal: ({ children }) => (
                  <Title
                    as="h2"
                    anim="title"
                    animVars={{ delay: ANIM_VARS.duration.stagger }}
                    className="title-h5"
                  >
                    {children}
                  </Title>
                ),
              },
            }}
          />
        </div>
        {isDesktop ? <SvgDesktop /> : <SvgMobile />}
      </Container>
    </Section>
  )
}

export default Hero
