import { Locale } from '$/eki.config'
import { client } from '@/sanity/client'
import { queryFooter } from '@/sanity/schemas/navigation/query'
import { QueryFooter } from '@/sanity/schemas/navigation/types'
import queryPolicies from '@/sanity/schemas/policies/query'
import QueryPolicy from '@/sanity/schemas/policies/types'
import dynamic from 'next/dynamic'
import { memo } from 'react'
import { Box, Container, Section, Text } from '..'
import $ from './Footer.module.scss'
import Navigation from './Navigation'
import Svg from './Svg'

const Logo = dynamic(() => import('$/public/images/footer-logo-desktop.svg'))

const Footer = async ({ lang }: { lang: Locale }) => {
  const DATA = await client.fetch<QueryFooter>(queryFooter, { lang })
  const POLICIES = await client.fetch<QueryPolicy[]>(queryPolicies, { lang })

  const year = new Date().getFullYear()

  return (
    <Section as="footer" className={$.footer}>
      <Container>
        <Svg />
        <div className={$.top}>
          <Box className={$.logo} anim="fade-in">
            <Logo />
          </Box>
          <Box className={$.footer_line} anim="draw-svg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="1"
              fill="none"
            >
              <line y1="0.5" x2="100%" y2="0.5" stroke="var(--stroke)"></line>
            </svg>
          </Box>
        </div>
        <Box className={$.links} anim="footer-links">
          <Text className="text-stroke" data-link>
            <span>©</span>
            <span>{year} </span>
            <span>{DATA.copyText}</span>
          </Text>
          <Navigation data={DATA.links} policies={POLICIES} />
        </Box>
      </Container>
    </Section>
  )
}

export default memo(Footer)
