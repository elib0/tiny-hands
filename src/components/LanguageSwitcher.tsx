import { useLanguage } from '../hooks/useLanguage'

const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLanguage()

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${currentLanguage === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button
        className={`lang-btn ${currentLanguage === 'es' ? 'active' : ''}`}
        onClick={() => changeLanguage('es')}
      >
        ES
      </button>
    </div>
  )
}

export default LanguageSwitcher
