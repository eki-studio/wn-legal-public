import { groq } from 'next-sanity'

export const queryHomeMeta = groq`*[_type == "home"][0]{metadata}`

const queryHome = groq`*[_type == "home" && language=="it"][0]{
  hero,
  homeAbout{
    title, text, "image":image{alt, options, "src":asset->url, "width": asset->metadata.dimensions.width, "height":asset->metadata.dimensions.height}, "image2":image2{alt, options, "src":asset->url, "width": asset->metadata.dimensions.width, "height":asset->metadata.dimensions.height}
  },
  homeActivityFields,
  homeContact{
    title,
    "map":map{lat, lng},
    address,
    mail,
    phone,
    text
  },
  services{
    title,
    btnText,
    text,

  }
}`
export default queryHome

groq`*[_type == "home" && language=="it"]`
