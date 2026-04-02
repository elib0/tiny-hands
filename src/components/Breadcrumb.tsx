import { Link } from 'react-router-dom'

interface BreadcrumbProps {
  title: string
  background?: string
  items?: Array<{
    label: string
    link?: string
  }>
}

const Breadcrumb = ({ title, background = '/assets/img/bg/breadcrumb-bg-1.jpg', items }: BreadcrumbProps) => {
  return (
    <div className="breadcumb-wrapper" data-bg-src={background}>
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">{title}</h1>
          {items && items.length > 0 && (
            <ul className="breadcumb-menu">
              {items.map((item, index) => (
                <li key={index} className={index === items.length - 1 ? 'active' : ''}>
                  {item.link ? (
                    <Link to={item.link}>{item.label}</Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb
