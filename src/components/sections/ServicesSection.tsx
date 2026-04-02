import { useTranslation } from 'react-i18next'
import ServiceCard from '../ServiceCard'

interface Service {
  id: number
  icon: string
  color: string
  titleKey: string
  descriptionKey: string
  link: string
}

interface ServicesSectionProps {
  services: Service[]
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
  const { t } = useTranslation()

  return (
    <section id="services" className="service-section space">
      <div className="container">
        <div className="row text-center justify-content-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9">
            <div className="title-area">
              <span className="sub-title">{t('services.subtitle')}</span>
              <h2 className="sec-title">{t('services.title')}</h2>
            </div>
          </div>
        </div>
        <div className="row gy-30">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={t(service.titleKey)}
              description={t(service.descriptionKey)}
              link={service.link}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
