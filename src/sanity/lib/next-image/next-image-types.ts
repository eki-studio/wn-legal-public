export const nextImageGroq = `{image{metadata, "asset":image{alt, options, "src":asset->url, "dimensions": asset->metadata.dimensions, "lqip":asset->metadata.lqip}}}`

export default interface SanityNextImage {
  metadata: {
    sizes?: string
    alt: string
    width?: number
    height?: number
    quality?: number
    fill?: boolean
    priority?: boolean
    objectFit?: boolean
    loading?: 'lazy' | 'eager'
    placeholder?: 'blur' | 'empty'
    lqip?: boolean
  }
  asset: {
    src: string
    dimensions: {
      width: number
      height: number
      aspectRatio: number
    }
    lqip?: string
  }
}
