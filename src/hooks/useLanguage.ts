import { useTranslation } from 'react-i18next'

export const useLanguage = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lang: 'en' | 'es') => {
    i18n.changeLanguage(lang)
    localStorage.setItem('language', lang)
  }

  const currentLanguage = i18n.language as 'en' | 'es'

  return {
    currentLanguage,
    changeLanguage,
  }
}
