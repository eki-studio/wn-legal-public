import { USE } from '$/eki.config'
import { StructureResolver } from 'sanity/desk'
import { structureDefault } from './structure'
import { structureI18n } from './structure-i18n'

const structure: StructureResolver = (S, context) => {
  if (USE.i18n) {
    return structureI18n(S, context)
  } else return structureDefault(S, context)
}

export default structure
