import { SanityNextImage } from '@/sanity/lib/types'

export default interface QueryHome {
  title: string
  heroDesc: any
  aboutTitle: string
  aboutDesc: any
  aboutImage: SanityNextImage
  teamDeafult: {
    teamBtnLanguages: string
    teamBtnActivity: string
    teamBtnInfo: string
    contactText: string
  }
  team: Team[]
  servicesTitle: string
  servicesModalTitle: string
  servicesButtonText: string
  servicesDesc: any
  servicesActivity: any
  services: Service[]
  contactTitle: string
  contactDesc: any
  email: string
  phone: string
  address: string
  addressUrl: string
}

export interface Team {
  name: string
  position: string
  showInfo: boolean
  showActivity: boolean
  showLanguages: boolean
  image1: SanityNextImage
  image2: SanityNextImage
  info: any
  activity: any
  languages: any
  contactText: string
  email: string
}

interface Service {
  title: string
  id: string
  description: any
}
