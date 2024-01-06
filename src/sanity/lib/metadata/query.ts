import { groq } from 'next-sanity'

export default function queryMetadata(type: string) {
  return groq`*[_type == "${type}"][0]{
    metadata{ 
      title, 
      description, 
      ogTitle, 
      ogDescription, 
      "ogImage":ogImage.asset->url,  
      keywords}
  }`
}
