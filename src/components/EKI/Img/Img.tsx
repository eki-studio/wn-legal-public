import { SanityNextImage } from '@/sanity/lib/types'
import clsx from 'clsx'
import Image, { ImageProps } from 'next/image'

interface ImgProps extends Omit<ImageProps, 'src' | 'alt'> {
  data: SanityNextImage
}

const Img = ({ data, className, ...props }: ImgProps) => {
  const { asset, metadata } = data
  if (!asset) {
    console.warn(`Image is missing an asset`)
    return null
  }

  const width = metadata.width || asset.dimensions.width
  const height = metadata.height || asset.dimensions.height
  const fill = metadata.fill || props.fill || false
  const sizes = metadata.sizes || props.sizes || ''
  const quality = metadata.quality || props.quality || 75
  const priority = metadata.priority || props.priority
  const classNames = clsx(metadata.objectFit && 'object-fit', className)
  const placeholder = metadata.placeholder || props.placeholder
  const blurUrl =
    (placeholder == 'blur' && metadata.lqip && asset.lqip) || props.blurDataURL

  return (
    <Image
      src={asset.src}
      alt={metadata.alt || 'decorative'}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      sizes={sizes}
      quality={quality}
      priority={priority}
      className={classNames}
      placeholder={placeholder}
      blurDataURL={blurUrl}
      {...props}
    ></Image>
  )
}

export default Img
