import { PortableText, PortableTextProps } from '@portabletext/react'
import clsx from 'clsx'
import React, { HTMLAttributes } from 'react'

interface RichTextProps
  extends HTMLAttributes<HTMLDivElement>,
    PortableTextProps {
  extract?: boolean
  useClass?: boolean
}

const RichText = ({ extract, useClass = true, ...props }: RichTextProps) => {
  // Make sure to pass className to PortableText correctly
  return extract ? (
    <PortableText {...props} />
  ) : (
    <div className={clsx(useClass && `rich-text`, props.className)}>
      <PortableText {...props} />
    </div>
  )
}

export default React.memo(RichText)
