import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface ClassCardProps {
  image: string
  title: string
  description: string
  fee: string
  age: string
  time: string
  capacity: string
  link?: string
}

const ClassCard = ({ 
  image, 
  title, 
  description, 
  fee, 
  age, 
  time, 
  capacity, 
  link = '/class-details' 
}: ClassCardProps) => {
  const { t } = useTranslation()

  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="class-card">
        <div className="class-img">
          <Link to={link}>
            <img src={image} alt="class" />
          </Link>
          <span className="class-fee">{fee}</span>
        </div>
        <div className="class-content">
          <h2 className="class-title h4">
            <Link to={link}>{title}</Link>
          </h2>
          <p className="class-text">{description}</p>
          <ul className="class-info">
            <li>
              <p>{t('classes.age')}</p>
              <span>{age}</span>
            </li>
            <li>
              <p>{t('classes.time')}</p>
              <span>{time}</span>
            </li>
            <li>
              <p>{t('classes.capacity')}</p>
              <span>{capacity}</span>
            </li>
          </ul>
          <Link to={link} className="vs-btn style-1">
            {t('classes.readMore')}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ClassCard
