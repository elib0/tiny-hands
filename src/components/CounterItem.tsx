interface CounterItemProps {
  icon: string
  number: number
  text: string
}

const CounterItem = ({ icon, number, text }: CounterItemProps) => {
  return (
    <div className="col-lg-auto col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="counter-item text-center">
        <div className="connter_icon">
          <i className={icon}></i>
        </div>
        <span className="counter-number">{number}</span>
        <p className="counter-text h4">{text}</p>
      </div>
    </div>
  )
}

export default CounterItem
