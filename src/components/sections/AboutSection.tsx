import { useTranslation } from 'react-i18next'

interface AboutSectionProps {
  image: string
  subtitleKey: string
  titleKey: string
  descriptionKey: string
  buttonTextKey: string
  buttonLink: string
}

const AboutSection = ({ 
  image, 
  subtitleKey, 
  titleKey, 
  descriptionKey, 
  buttonTextKey, 
  buttonLink 
}: AboutSectionProps) => {
  const { t } = useTranslation()

  return (
    <section id="about" className="about-section bg-smoke space">
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row align-items-center gy-30">
          <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="text-center text-lg-start">
              <span className="sub-title">{t(subtitleKey)}</span>
              <h2 className="sec-title big-title">{t(titleKey)}</h2>
              <p className="fs-md mb-30">{t(descriptionKey)}</p>
              <a href={buttonLink} className="vs-btn wave-btn style-1">{t(buttonTextKey)}</a>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="shape-slider-area">
              <img src={image} alt="shape" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
