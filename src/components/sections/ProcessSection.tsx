import { useTranslation } from 'react-i18next'
import ProcessCard from '../ProcessCard'

interface Process {
  id: number
  number: string
  icon: string
  titleKey: string
  descriptionKey: string
  showDirection: boolean
}

interface ProcessSectionProps {
  processes: Process[]
}

const ProcessSection = ({ processes }: ProcessSectionProps) => {
  const { t } = useTranslation()

  return (
    <section className="process-section bg-smoke-blue space-extra">
      <div className="container">
        <div className="row gx-150 gy-30 justify-content-center">
          {processes.map((process) => (
            <ProcessCard
              key={process.id}
              number={process.number}
              icon={process.icon}
              title={t(process.titleKey)}
              description={t(process.descriptionKey)}
              showDirection={process.showDirection}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
