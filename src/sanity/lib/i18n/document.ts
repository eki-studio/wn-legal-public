import { defineField } from 'sanity'

const i18Document: any = () => {
  return defineField({
    name: 'lang',
    type: 'string',
    readOnly: true,
    hidden: true,
  })
}

export default i18Document
