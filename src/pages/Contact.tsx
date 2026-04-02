import { useTranslation } from 'react-i18next'
import { useTemplateScripts } from '../hooks/useTemplateScripts'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import MainLayout from '../layouts/MainLayout'
import Breadcrumb from '../components/Breadcrumb'
import ContactFormSection from '../components/sections/ContactFormSection'
import ContactInfoSection from '../components/sections/ContactInfoSection'
import ScrollToTop from '../components/ScrollToTop'
import siteData from '../data/siteData.json'

const Contact = () => {
  const { t } = useTranslation()
  useTemplateScripts()
  useSmoothScroll()

  const breadcrumbItems = [
    { label: t('nav.home'), link: '/' },
    { label: t('contact.breadcrumb') }
  ]

  return (
    <MainLayout>
      <Breadcrumb
        title={t('contact.title')}
        background="/assets/img/bg/contact.png"
        items={breadcrumbItems}
      />

      <section className="contact-section space-page">
        <div className="container">
          <div className="row gx-50 gy-30">
            <div className="col-lg-5 wow fadeInLeft" data-wow-delay="0.1s">
              <ContactFormSection />
            </div>
            <div className="col-lg-7 wow fadeInRight" data-wow-delay="0.1s">
              <ContactInfoSection
                mapUrl={siteData.contactPage.mapUrl}
                address={siteData.contact.address}
                phone={siteData.contact.phone}
                email={siteData.contact.email}
              />
            </div>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </MainLayout>
  )
}

export default Contact
