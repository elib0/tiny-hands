import { useTranslation } from 'react-i18next'

interface CTASectionProps {
  subtitleKey: string
  titleKey: string
  phone: string
  buttonTextKey: string
  buttonLink: string
}

const CTASection = ({ subtitleKey, titleKey, phone, buttonTextKey, buttonLink }: CTASectionProps) => {
  const { t } = useTranslation()

  return (
    <section className="cta-section bg-smoke-blue space">
      <div className="container text-center">
        <div className="title-area mb-35 wow fadeInUp" data-wow-delay="0.1s">
          <span className="sub-title">{t(subtitleKey)}</span>
          <h2 className="sec-title">
            {t(titleKey)} <br />
            <a className="text-inherit" href={`tel:${phone}`}>{phone}</a>
          </h2>
        </div>
        <a href={buttonLink} className="vs-btn wave-btn">{t(buttonTextKey)}</a>
      </div>
    </section>
  )
}

export default CTASection
