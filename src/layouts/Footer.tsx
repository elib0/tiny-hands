import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import siteData from '../data/siteData.json'

const Footer = () => {
  const { t } = useTranslation()
  const { contact, social } = siteData

  return (
    <footer className="footer-wrapper footer-layout3" data-bg-src="/assets/img/bg/footer-4.png">
      <div className="widget-area">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-auto col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="widget footer-widget">
                <div className="vs-widget-about">
                  <div className="about-logo">
                    <Link to="/">
                      <img src="/assets/img/logo-white.svg" alt="Knirpse" />
                    </Link>
                  </div>
                  <p className="about-text">{t('footer.about')}</p>
                  <div className="multi-social">
                    <a href={social.facebook}><i className="fab fa-facebook-f"></i></a>
                    <a href={social.twitter}><i className="fab fa-twitter"></i></a>
                    <a href={social.pinterest}><i className="fab fa-pinterest-p"></i></a>
                    <a href={social.linkedin}><i className="fab fa-linkedin-in"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-auto col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="widget footer-widget widget_nav_menu">
                <h4 className="widget_title">{t('footer.detailsInfo')}</h4>
                <ul className="menu">
                  <li><a href="/#classes">{t('footer.links.onlineClass')}</a></li>
                  <li><Link to="/contact">{t('footer.links.appointment')}</Link></li>
                  <li><a href="/#about">{t('footer.links.aboutUs')}</a></li>
                  <li><a href="/#team">{t('footer.links.ourTeam')}</a></li>
                </ul>
              </div>
            </div>


            <div className="col-xl-auto col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="widget footer-widget">
                <h3 className="widget_title">{t('footer.contactUs')}</h3>
                <div className="vs-widget-contact">
                  <p className="footer-info">
                    <i className="fas fa-map-marker-alt"></i>{contact.address}
                  </p>
                  <p className="footer-info">
                    <i className="fas fa-envelope"></i>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </p>
                  <p className="footer-info">
                    <i className="fas fa-phone-alt"></i>
                    <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          <p className="copyright">
            &copy; {t('footer.copyright')} <a href="https://themeforest.net/user/vecuro_themes">Vecuro</a>.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
