import { useTranslation } from 'react-i18next'
import CounterItem from '../CounterItem'

interface Counter {
  id: number
  icon: string
  number: number
  textKey: string
}

interface CounterSectionProps {
  counters: Counter[]
}

const CounterSection = ({ counters }: CounterSectionProps) => {
  const { t } = useTranslation()

  return (
    <div className="counter-section bg-smoke-blue space">
      <div className="container">
        <div className="row gy-20 justify-content-between">
          {counters.map((counter) => (
            <CounterItem
              key={counter.id}
              icon={counter.icon}
              number={counter.number}
              text={t(counter.textKey)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CounterSection
