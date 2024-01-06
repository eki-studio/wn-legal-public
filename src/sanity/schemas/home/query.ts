import { groq } from 'next-sanity'

groq`*[_type == "home"][0]`

export const queryHomeMeta = (locale: string) =>
  `*[_type == "home" && lang == "${locale}"][0]{metadata}`

export const queryHome = `*[_type == "home" && lang == $lang][0]{
    title,
  heroDesc,
  aboutTitle,
  aboutDesc,
  aboutImage{metadata, "asset":image{alt, options, "src":asset->url, "dimensions": asset->metadata.dimensions, "lqip":asset->metadata.lqip}},
  teamDeafult,
  team[]{
    name,
    position,
    showInfo,
    showActivity,
    showLanguages,
    image1{metadata, "asset":image{alt, options, "src":asset->url, "dimensions": asset->metadata.dimensions, "lqip":asset->metadata.lqip}},
    image2{metadata, "asset":image{alt, options, "src":asset->url, "dimensions": asset->metadata.dimensions, "lqip":asset->metadata.lqip}},
    info,
    activity,
    languages,
    email
  },
  servicesTitle,
  servicesDesc,
  servicesModalTitle,
  servicesButtonText,
  servicesActivity,
  services[]{
    title,
    id,
    description
  },
  contactTitle,
  contactDesc,
  email,
  phone,
  address,
  addressUrl,
  }`

groq`*[_type == "home"][0]{teamDeafult}`

groq`*[_type == "home"][0]{
  title,
  heroDesc,
  aboutTitle,
  aboutDesc,
  aboutImage{metadata, "asset":image{alt, options, "src":asset->url, "dimensions": asset->metadata.dimensions, "lqip":asset->metadata.lqip}},
  team[]{
    name,
    position,
    showInfo,
    showActivity,
    showLanguages,
    image1{metadata, "asset":image{alt, options, "src":asset->url, "dimensions": asset->metadata.dimensions, "lqip":asset->metadata.lqip}},
    image2{metadata, "asset":image{alt, options, "src":asset->url, "dimensions": asset->metadata.dimensions, "lqip":asset->metadata.lqip}},
    info,
    activity,
    languages,
    email
  },
  servicesTitle,
  servicesDesc,
  servicesActivity,
  services[]{
    title,
    id,
    description
  },
  contactTitle,
  contactDesc,
  email,
  phone,
  address,
  addressUrl,
}`
