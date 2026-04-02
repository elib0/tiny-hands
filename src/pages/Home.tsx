import { useTemplateScripts } from '../hooks/useTemplateScripts'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import MainLayout from '../layouts/MainLayout'
import HeroSection from '../components/sections/HeroSection'
import ServicesSection from '../components/sections/ServicesSection'
import AboutSection from '../components/sections/AboutSection'
import CounterSection from '../components/sections/CounterSection'
import ClassesSection from '../components/sections/ClassesSection'
import ProcessSection from '../components/sections/ProcessSection'
import TeamSection from '../components/sections/TeamSection'
import CTASection from '../components/sections/CTASection'
import BlogSection from '../components/sections/BlogSection'
import ScrollToTop from '../components/ScrollToTop'
import siteData from '../data/siteData.json'

const Home = () => {
  useTemplateScripts()
  useSmoothScroll()

  return (
    <MainLayout>
      <HeroSection slides={siteData.hero.slides} />
      <ServicesSection services={siteData.services} />
      <AboutSection {...siteData.about} />
      <CounterSection counters={siteData.counters} />
      <ClassesSection classes={siteData.classes} />
      <ProcessSection processes={siteData.process} />
      <TeamSection team={siteData.team} />
      <CTASection {...siteData.cta} phone={siteData.contact.phone} />
      <BlogSection posts={siteData.blog} />
      <ScrollToTop />
    </MainLayout>
  )
}

export default Home
