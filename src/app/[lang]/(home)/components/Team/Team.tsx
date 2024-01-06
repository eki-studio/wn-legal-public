import { Section } from '@/components'
import QueryHome from '@/sanity/schemas/home/types'
import $ from './Team.module.scss'
import Member from './components/Member'

interface SectionProps {
  data: QueryHome
}

const Team = ({ data }: SectionProps) => {
  return (
    <Section className={$.section}>
      {data.team.map((member, i) => (
        <Member key={i} member={member} data={data} />
      ))}
    </Section>
  )
}

export default Team
