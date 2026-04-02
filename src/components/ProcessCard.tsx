interface ProcessCardProps {
  number: string
  icon: string
  title: string
  description: string
  showDirection?: boolean
}

const ProcessCard = ({ number, icon, title, description, showDirection = true }: ProcessCardProps) => {
  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="process-card">
        <span className="process-number">{number}</span>
        {showDirection && (
          <img className="process-direction" src="/assets/img/icon/arrow-curve.png" alt="direction" />
        )}
        <div className="process-head">
          <div className="process-icon">
            <img src={icon} alt="icon" />
          </div>
          <h4 className="process-title">{title}</h4>
        </div>
        <p className="process-text">{description}</p>
      </div>
    </div>
  )
}

export default ProcessCard
