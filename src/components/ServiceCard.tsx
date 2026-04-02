import { Link } from 'react-router-dom'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  link?: string
  color?: string
}

const ServiceCard = ({ icon, title, description, link = '/service-details', color }: ServiceCardProps) => {
  return (
    <div className="col-lg-3 col-md-6 service-card wow fadeInUp" data-wow-delay="0.1s">
      <div className="service-card-inner" style={color ? { borderTopColor: color } : undefined}>
        <div className="sr-icon" style={color ? { backgroundColor: color } : undefined}>
          <img src={icon} alt="icon" />
        </div>
        <h2 className="sr-title h4">
          <Link to={link}>{title}</Link>
        </h2>
        <p className="sr-text">{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard
