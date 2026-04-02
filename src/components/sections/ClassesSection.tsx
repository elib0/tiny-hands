import { useTranslation } from 'react-i18next'
import ClassCard from '../ClassCard'

interface Class {
  id: number
  image: string
  titleKey: string
  descriptionKey: string
  feeKey: string
  ageKey: string
  timeKey: string
  capacityKey: string
  link: string
}

interface ClassesSectionProps {
  classes: Class[]
}

const ClassesSection = ({ classes }: ClassesSectionProps) => {
  const { t } = useTranslation()

  return (
    <section id="classes" className="classes-section space">
      <div className="container">
        <div className="row text-center justify-content-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9">
            <div className="title-area">
              <span className="sub-title">{t('classes.subtitle')}</span>
              <h2 className="sec-title">{t('classes.title')}</h2>
            </div>
          </div>
        </div>
        <div className="row vs-carousel" data-slide-show="3" data-arrows="true">
          {classes.map((classItem) => (
            <ClassCard
              key={classItem.id}
              image={classItem.image}
              title={t(classItem.titleKey)}
              description={t(classItem.descriptionKey)}
              fee={t(classItem.feeKey)}
              age={t(classItem.ageKey)}
              time={t(classItem.timeKey)}
              capacity={t(classItem.capacityKey)}
              link={classItem.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClassesSection
