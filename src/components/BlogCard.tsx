import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface BlogCardProps {
  image: string
  title: string
  date: string
  comments: string
  link?: string
}

const BlogCard = ({ image, title, date, comments, link = '/blog-details' }: BlogCardProps) => {
  const { t } = useTranslation()

  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      <div className="vs-blog blog-card">
        <div className="blog-img">
          <Link to={link}>
            <img src={image} alt="blog" />
          </Link>
        </div>
        <div className="blog-content">
          <div className="blog-meta">
            <Link to={link}>
              <i className="fal fa-calendar-alt"></i>{date}
            </Link>
            <Link to={link}>
              <i className="fal fa-comments"></i>{comments} {t('blog.comments')}
            </Link>
          </div>
          <h4 className="blog-title">
            <Link to={link}>{title}</Link>
          </h4>
          <Link to={link} className="link-btn">
            {t('blog.readMore')} <i className="far fa-angle-right"></i>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard
