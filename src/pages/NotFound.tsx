import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect, useRef } from 'react'
import { useTemplateScripts } from '../hooks/useTemplateScripts'
import MainLayout from '../layouts/MainLayout'

const NotFound = () => {
  const { t } = useTranslation()
  useTemplateScripts()
  const astronautRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!astronautRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Calcular el movimiento basado en la posición del mouse
      // Centrar en 0,0 cuando el mouse está en el centro
      const moveX = ((clientX - innerWidth / 2) / innerWidth) * 50
      const moveY = ((clientY - innerHeight / 2) / innerHeight) * 50

      // Aplicar transformación con efecto parallax
      astronautRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <MainLayout>
      <section className="vs-error-wrapper parallax" data-bg-src="/assets/img/bg/error-bg.jpg">
        <div className="layer error-shape">
          <img 
            ref={astronautRef}
            src="/assets/img/normal/astronut.png" 
            alt="astronut"
            style={{ 
              transition: 'transform 0.3s ease-out',
              willChange: 'transform'
            }}
          />
        </div>
        <div className="container">
          <div className="error-content wow fadeInUp" data-wow-delay="0.1s">
            <span className="h1 error-number">{t('error.number')}</span>
            <h1 className="error-title text-white">{t('error.title')}</h1>
            <p className="error-text text-white">{t('error.description')}</p>
            <Link to="/" className="vs-btn wave-btn">{t('error.button')}</Link>
          </div>
        </div>
      </section>
    </MainLayout>
  )
}

export default NotFound
