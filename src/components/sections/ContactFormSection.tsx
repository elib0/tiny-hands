import { useState, FormEvent } from 'react'
import { useTranslation } from 'react-i18next'

const ContactFormSection = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Aquí puedes integrar con Firebase o tu backend
    // Por ahora simulamos el envío
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 3000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="contact-form-box">
      <h2 className="contact-title">{t('contact.form.title')}</h2>
      <p className="mb-35">{t('contact.form.description')}</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="row">
          <div className="form-group col-12">
            <label htmlFor="name" className="form-label">{t('contact.form.name')}*</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              placeholder={t('contact.form.namePlaceholder')}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-12">
            <label htmlFor="email" className="form-label">{t('contact.form.email')}*</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder={t('contact.form.emailPlaceholder')}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-12">
            <label htmlFor="message" className="form-label">{t('contact.form.message')}*</label>
            <textarea
              className="form-control"
              name="message"
              id="message"
              placeholder={t('contact.form.messagePlaceholder')}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group col-12">
            <button type="submit" className="vs-btn wave-btn" disabled={status === 'sending'}>
              {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
            </button>
          </div>
        </div>
        {status === 'success' && (
          <p className="form-messages mb-0 mt-3 text-success">{t('contact.form.success')}</p>
        )}
        {status === 'error' && (
          <p className="form-messages mb-0 mt-3 text-danger">{t('contact.form.error')}</p>
        )}
      </form>
    </div>
  )
}

export default ContactFormSection
