import { useTranslation } from 'react-i18next'
import { useTemplateScripts } from '../hooks/useTemplateScripts'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import MainLayout from '../layouts/MainLayout'
import Breadcrumb from '../components/Breadcrumb'
import ScrollToTop from '../components/ScrollToTop'
import siteData from '../data/siteData.json'

const About = () => {
  const { t } = useTranslation()
  useTemplateScripts()
  useSmoothScroll()

  const breadcrumbItems = [
    { label: t('nav.home'), link: '/' },
    { label: t('about.breadcrumb') }
  ]

  return (
    <MainLayout>
      <Breadcrumb
        title={t('about.pageTitle')}
        background="/assets/img/bg/breadcrumb-bg-1.jpg"
        items={breadcrumbItems}
      />

      <section className="about-section space">
        <div className="container">
          <div className="row align-items-center gy-40">
            <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
              <div className="about-content">
                <span className="sub-title">{t('about.subtitle')}</span>
                <h2 className="sec-title big-title">{t('about.pageTitle')}</h2>
                <p className="fs-md mb-30">{t('about.intro')}</p>
                
                <h3 className="h4 mb-20">{t('about.missionTitle')}</h3>
                <p className="mb-30">{t('about.missionText')}</p>

                <h3 className="h4 mb-20">{t('about.visionTitle')}</h3>
                <p className="mb-30">{t('about.visionText')}</p>

                <h3 className="h4 mb-20">{t('about.valuesTitle')}</h3>
                <ul className="vs-list list-unstyled">
                  <li><i className="fas fa-check-circle text-theme"></i> {t('about.value1')}</li>
                  <li><i className="fas fa-check-circle text-theme"></i> {t('about.value2')}</li>
                  <li><i className="fas fa-check-circle text-theme"></i> {t('about.value3')}</li>
                  <li><i className="fas fa-check-circle text-theme"></i> {t('about.value4')}</li>
                  <li><i className="fas fa-check-circle text-theme"></i> {t('about.value5')}</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.1s">
              <div className="about-images">
                <div className="row gy-30">
                  {siteData.aboutPage.images.map((image, index) => (
                    <div key={index} className="col-6">
                      <img src={image} alt={`About ${index + 1}`} className="w-100 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-60">
            <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
              <div className="about-extra-content bg-smoke p-40 rounded">
                <h3 className="h3 mb-30">{t('about.whyChooseTitle')}</h3>
                <div className="row gy-30">
                  <div className="col-md-6">
                    <div className="media-style1">
                      <div className="media-icon">
                        <i className="fas fa-graduation-cap"></i>
                      </div>
                      <div className="media-body">
                        <h4 className="media-title">{t('about.feature1Title')}</h4>
                        <p className="media-text">{t('about.feature1Text')}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media-style1">
                      <div className="media-icon">
                        <i className="fas fa-shield-alt"></i>
                      </div>
                      <div className="media-body">
                        <h4 className="media-title">{t('about.feature2Title')}</h4>
                        <p className="media-text">{t('about.feature2Text')}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media-style1">
                      <div className="media-icon">
                        <i className="fas fa-users"></i>
                      </div>
                      <div className="media-body">
                        <h4 className="media-title">{t('about.feature3Title')}</h4>
                        <p className="media-text">{t('about.feature3Text')}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="media-style1">
                      <div className="media-icon">
                        <i className="fas fa-heart"></i>
                      </div>
                      <div className="media-body">
                        <h4 className="media-title">{t('about.feature4Title')}</h4>
                        <p className="media-text">{t('about.feature4Text')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </MainLayout>
  )
}

export default About
