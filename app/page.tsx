import Navbar from "@/app/components/Navbar";
import { HomeHeroSlider } from "@/app/components/HomeHeroSlider";
import { DMITOverview } from "@/app/components/DMITOverview";
import { PsychometricOverview } from "@/app/components/PsychometricOverview";
import { ResourcesSection } from "@/app/components/ResourcesSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HomeHeroSlider />
      <DMITOverview />
      <PsychometricOverview />
      <ResourcesSection />
      <Footer />
    </div>
  );
}
