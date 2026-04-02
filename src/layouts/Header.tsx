import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../components/LanguageSwitcher'
import siteData from '../data/siteData.json'

const Header = () => {
  const { t } = useTranslation()
  const { contact, social } = siteData

  return (
    <header className="vs-header">
      <div className="header-top-area d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <div className="header-links">
                <ul>
                  <li><i className="fal fa-clock"></i>{contact.schedule}</li>
                  <li><i className="fal fa-phone"></i><a href={`tel:${contact.phone}`}>{contact.phone}</a></li>
                  <li><i className="fal fa-map-marker-alt"></i>{contact.address}</li>
                </ul>
              </div>
            </div>
            <div className="col-auto">
              <div className="header-social">
                <ul>
                  {social.facebook && <li><a href={social.facebook}><i className="fab fa-facebook-f"></i></a></li>}
                  {social.twitter && <li><a href={social.twitter}><i className="fab fa-twitter"></i></a></li>}
                  {social.instagram && <li><a href={social.instagram}><i className="fab fa-instagram"></i></a></li>}
                  {social.linkedin && <li><a href={social.linkedin}><i className="fab fa-linkedin-in"></i></a></li>}
                  {social.skype && <li><a href={social.skype}><i className="fab fa-skype"></i></a></li>}
                  <li><LanguageSwitcher /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky-wrapper">
        <div className="sticky-active">
          <div className="header-menu-area">
            <div className="container position-relative">
              <div className="row gx-20 align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <Link to="/">
                      <img src="/assets/img/logo.png" width="150" alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu menu-style1 d-none d-lg-inline-block">
                    <ul>
                      <li><a href="/">{t('nav.home')}</a></li>
                      <li><a href="#services">{t('nav.services')}</a></li>
                      <li><a href="#about">{t('nav.about')}</a></li>
                      <li><a href="#classes">{t('nav.classes')}</a></li>
                      <li><a href="#team">{t('nav.team')}</a></li>
                      <li><a href="#blog">{t('nav.blog')}</a></li>
                      <li><Link to="/contact">{t('nav.contact')}</Link></li>
                    </ul>
                  </nav>
                  <button type="button" className="vs-menu-toggle d-block d-lg-none">
                    <i className="far fa-bars"></i> Menu
                  </button>
                </div>
                <div className="col-auto d-none d-xl-block">
                  <div className="header-button">
                    <Link to="/contact" className="vs-btn wave-btn">{t('nav.bookVisit')}</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
