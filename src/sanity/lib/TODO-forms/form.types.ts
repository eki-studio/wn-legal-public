export interface SchemaFormProps {
  formSettings: {
    cssClass: string
    id: string
    useCSSmodules: Boolean
  }
  fields: Field[]
}

interface Field {
  _type: string
  _key: string
  fieldName: string
  placeholder?: string
  HTMLfield: string
  type?: string
  slug: {
    _type: string
    current: string
  }
  cssClassDiv: string
  cssClassField: string

  validation: {
    required: boolean
    prefix?: string
  }

  label: {
    cssClass?: string
    hasLabel: boolean
    labelTitle?: string
  }
}
