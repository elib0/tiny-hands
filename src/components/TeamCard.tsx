import { Link } from 'react-router-dom'

interface TeamCardProps {
  image: string
  name: string
  designation: string
  description: string
  link?: string
  social?: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
  }
}

const TeamCard = ({ image, name, designation, description, link = '/team-details', social }: TeamCardProps) => {
  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="team-card">
        <div className="team-img" data-mask-src="/assets/img/team/t-mask.png">
          <img src={image} alt="team" />
          <div className="team-content">
            <p className="team-text">{description}</p>
            <div className="multi-social">
              {social?.facebook && <a href={social.facebook}><i className="fab fa-facebook-f"></i></a>}
              {social?.twitter && <a href={social.twitter}><i className="fab fa-twitter"></i></a>}
              {social?.instagram && <a href={social.instagram}><i className="fab fa-instagram"></i></a>}
              {social?.linkedin && <a href={social.linkedin}><i className="fab fa-linkedin-in"></i></a>}
            </div>
          </div>
        </div>
        <button className="icon-btn expand-btn">
          <i className="fas fa-share-alt"></i>
        </button>
        <div className="team-info">
          <h4 className="team-title">
            <Link to={link}>{name}</Link>
          </h4>
          <span className="team-desig">{designation}</span>
        </div>
      </div>
    </div>
  )
}

export default TeamCard
