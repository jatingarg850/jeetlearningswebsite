import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import WhyChooseSection from "@/app/components/WhyChooseSection";
import ServicesSection from "@/app/components/ServicesSection";
import ProgramsSection from "@/app/components/ProgramsSection";
import FAQSection from "@/app/components/FAQSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <WhyChooseSection />
      <ServicesSection />
      <ProgramsSection />
      <FAQSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
