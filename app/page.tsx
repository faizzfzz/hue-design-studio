import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import CurvedLogoLoop from '@/components/CurvedLogoLoop'
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
      <div className="bg-[#0b011d] py-2 overflow-hidden">
        <CurvedLogoLoop speed={1.2} curveAmount={220} interactive={true} />
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
