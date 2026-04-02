import { useTranslation } from 'react-i18next'

interface HeroSlide {
  id: number
  background: string
  tag1: string
  tag2: string
  title: string
  buttonText: string
  buttonLink: string
}

interface HeroSectionProps {
  slides: HeroSlide[]
}

const HeroSection = ({ slides }: HeroSectionProps) => {
  const { t } = useTranslation()

  return (
    <section id="home" className="vs-hero-wrapper position-relative">
      <div className="section-before">
        <img src="/assets/img/shape/header-after.png" alt="shape" />
      </div>
      <div className="section-after d-none d-md-block">
        <img src="/assets/img/shape/hero-after.png" alt="shape" />
      </div>
      <div className="hero-slider1 vs-carousel" data-slide-show="1" data-md-slide-show="1" data-fade="true">
        {slides.map((slide) => (
          <div key={slide.id} className="vs-hero-inner">
            <div className="vs-hero-bg" data-bg-src={slide.background}></div>
            <div className="hero-content" data-bg-src="/assets/img/shape/hcontent-bg.png">
              <img className="con-before" src="/assets/img/shape/hero-con-before.png" alt="shape" />
              <img className="con-after" src="/assets/img/shape/hero-con-after.png" alt="shape" />
              <img className="car" src="/assets/img/icon/car.png" alt="icon" />
              <div className="hero-text">
                <span>{t(slide.tag1) || slide.tag1}</span>
                <i className="fas fa-circle"></i>
                <span>{t(slide.tag2) || slide.tag2}</span>
              </div>
              <h1 className="hero-title text-title mb-30" dangerouslySetInnerHTML={{ __html: t('hero.slide1.title') }}></h1>
              <a href={slide.buttonLink} className="vs-btn wave-btn">{t('hero.slide1.button')}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HeroSection
