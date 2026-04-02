import { useTranslation } from 'react-i18next'
import BlogCard from '../BlogCard'

interface BlogPost {
  id: number
  image: string
  title: string
  date: string
  comments: string
  link: string
}

interface BlogSectionProps {
  posts: BlogPost[]
}

const BlogSection = ({ posts }: BlogSectionProps) => {
  const { t } = useTranslation()

  return (
    <section id="blog" className="blog-section space-top space-extra-bottom">
      <div className="container">
        <div className="row text-center justify-content-center wow fadeInUp" data-wow-delay="0.1s">
          <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9">
            <div className="title-area">
              <span className="sub-title">{t('blog.subtitle')}</span>
              <h2 className="sec-title">{t('blog.title')}</h2>
            </div>
          </div>
        </div>
        <div className="row vs-carousel" data-slide-show="3" data-arrows="true">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              image={post.image}
              title={post.title}
              date={post.date}
              comments={post.comments}
              link={post.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection
