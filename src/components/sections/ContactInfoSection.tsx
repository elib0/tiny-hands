import { useTranslation } from 'react-i18next'

interface ContactInfoSectionProps {
  mapUrl: string
  address: string
  phone: string
  email: string
}

const ContactInfoSection = ({ mapUrl, address, phone, email }: ContactInfoSectionProps) => {
  const { t } = useTranslation()

  return (
    <div className="contact-info-box">
      <h2 className="contact-title">{t('contact.info.title')}</h2>
      
      <div className="info-media">
        <div className="media-icon">
          <img src="/assets/img/icon/location.png" alt="icon" />
        </div>
        <div className="media-body">
          <h4 className="info-title">{t('contact.info.addressTitle')}</h4>
          <p className="info-text">{address}</p>
        </div>
      </div>

      <div className="info-media">
        <div className="media-icon">
          <img src="/assets/img/icon/phone.png" alt="icon" />
        </div>
        <div className="media-body">
          <h4 className="info-title">{t('contact.info.phoneTitle')}</h4>
          <p className="info-text">
            <a href={`tel:${phone}`}>{phone}</a>
          </p>
        </div>
      </div>

      <div className="info-media">
        <div className="media-icon">
          <img src="/assets/img/icon/email.png" alt="icon" />
        </div>
        <div className="media-body">
          <h4 className="info-title">{t('contact.info.emailTitle')}</h4>
          <p className="info-text">
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
      </div>

      <div className="contact-location">
        <iframe
          src={mapUrl}
          allowFullScreen
          loading="lazy"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  )
}

export default ContactInfoSection
