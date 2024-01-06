'use client'

import config from '$/sanity.config'
import clsx from 'clsx'
import { NextStudio } from 'next-sanity/studio'
import $ from './style.module.scss'

export default function AdminPage() {
  return (
    <body className={clsx('body_sanity', $.body)}>
      <NextStudio config={config} />
    </body>
  )
}
