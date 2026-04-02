import { useTranslation } from 'react-i18next'
import TeamCard from '../TeamCard'

interface TeamMember {
  id: number
  image: string
  name: string
  designation: string
  description: string
  social: {
    facebook: string
    twitter: string
    instagram: string
    linkedin: string
  }
  link: string
}

interface TeamSectionProps {
  team: TeamMember[]
}

const TeamSection = ({ team }: TeamSectionProps) => {
  const { t } = useTranslation()

  return (
    <section id="team" className="team-section bg-smoke space-top space-extra-bottom">
      <div className="container">
        <div className="row text-center justify-content-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9">
            <div className="title-area">
              <span className="sub-title">{t('team.subtitle')}</span>
              <h2 className="sec-title">{t('team.title')}</h2>
            </div>
          </div>
        </div>
        <div className="row vs-carousel" data-slide-show="3" data-lg-slide-show="2" data-arrows="true">
          {team.map((member) => (
            <TeamCard
              key={member.id}
              image={member.image}
              name={member.name}
              designation={member.designation}
              description={member.description}
              social={member.social}
              link={member.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
