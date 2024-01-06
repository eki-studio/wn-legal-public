import { groq } from 'next-sanity'

const queryPolicies = `*[_type == "policy" && lang == $lang]{title,content}`

export default queryPolicies

groq`*[_type == "policy" ]{title,content}`
