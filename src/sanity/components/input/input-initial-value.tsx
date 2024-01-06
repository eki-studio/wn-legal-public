import { TextInput } from '@sanity/ui'
import { set } from 'sanity'

const InputInitialValue = (props: any) => {
  const { value, onChange, schemaType } = props
  const fallback = schemaType.initialValue || ''
  const handleChange = (event: any) => {
    const nextValue = event.currentTarget.value
    onChange(nextValue ? set(nextValue) : set(fallback))
  }

  return <TextInput value={value} onChange={handleChange} />
}

export default InputInitialValue
