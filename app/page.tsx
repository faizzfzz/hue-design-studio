import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ProjectsSlider from '@/components/ProjectsSlider'
import ServicesGrid from '@/components/ServicesGrid'
import ProcessSection from '@/components/ProcessSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#0b011d] text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ContactSection />
      <ProjectsSlider />
      <ServicesGrid />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
