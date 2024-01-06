import {
  Box,
  Container,
  Img,
  Line,
  RichText,
  Section,
  Text,
  Title,
} from '@/components'
import QueryHome from '@/sanity/schemas/home/types'
import { memo } from 'react'
import $ from './About.module.scss'

interface SectionProps {
  data: QueryHome
}

const About = ({ data }: SectionProps) => {
  return (
    <Section className={$.section} id="about">
      <Container>
        <div className={$.content}>
          <Title as="h3" anim="title" animRefresh>
            {data.aboutTitle}
          </Title>
          <div className="mb-s" />
          <RichText
            className={$.text}
            value={data.aboutDesc}
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
        </div>
        <Box className={$.image} anim="fade-in">
          <Img data={data.aboutImage} className="object-fit" />
        </Box>
      </Container>
      <Line />
    </Section>
  )
}

export default memo(About)
