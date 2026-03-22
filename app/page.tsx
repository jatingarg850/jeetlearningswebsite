import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import WhyChooseSection from "@/app/components/WhyChooseSection";
import ServicesSection from "@/app/components/ServicesSection";
import ProgramsSection from "@/app/components/ProgramsSection";
import StackingSection from "@/app/components/StackingSection";
import FAQSection from "@/app/components/FAQSection";
import TestimonialsSection from "@/app/components/TestimonialsSection";
import ImpactStrip from "@/app/components/ImpactStrip";
import AwardsStrip from "@/app/components/AwardsStrip";
import Footer from "@/app/components/Footer";

export default function Home() {
  const stackingItems = [
    {
      id: "1",
      title: "Expert Counselling",
      description: "Get personalized guidance from experienced counselors who understand your goals and aspirations.",
      icon: "🎯",
      color: "#C20000",
    },
    {
      id: "2",
      title: "University Selection",
      description: "Find the perfect university match based on your profile, preferences, and career objectives.",
      icon: "🎓",
      color: "#DA1313",
    },
    {
      id: "3",
      title: "Application Support",
      description: "Complete end-to-end assistance with applications, essays, and document preparation.",
      icon: "📝",
      color: "#E70000",
    },
    {
      id: "4",
      title: "Visa Guidance",
      description: "Navigate the visa process with expert support and documentation assistance.",
      icon: "✈️",
      color: "#B30000",
    },
    {
      id: "5",
      title: "Scholarship Access",
      description: "Unlock exclusive scholarship opportunities and financial aid programs.",
      icon: "💰",
      color: "#9B0000",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ImpactStrip />
      <AwardsStrip />
      <WhyChooseSection />
      <ServicesSection />
      <ProgramsSection />
      <StackingSection
        title="Why Choose Canam?"
        subtitle="Our Services"
        items={stackingItems}
        backgroundColor="bg-white"
      />
      <FAQSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
