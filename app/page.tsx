import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import CurvedLoop from '@/components/CurvedLoop'
import ProjectsSlider from '@/components/ProjectsSlider'
import ServicesGrid from '@/components/ServicesGrid'
import ProcessSection from '@/components/ProcessSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#0b011d] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <div className="bg-[#0b011d] py-4 overflow-hidden">
        <CurvedLoop
          marqueeText="Web Design ✦ Webflow Development ✦ SEO Optimised ✦ High Converting ✦ Custom Built ✦"
          speed={2}
          curveAmount={200}
          direction="left"
          interactive={true}
          className="curved-marquee-text"
        />
      </div>
      <ProjectsSlider />
      <ServicesGrid />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
