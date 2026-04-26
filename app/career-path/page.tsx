import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CareerPathClient from "./CareerPathClient";

export const metadata = {
  title: "Career Path | Career Paths & Categories",
  description: "Explore all career paths and categories to find your perfect career fit",
};

export default function CareerPathPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CareerPathClient />
      <Footer />
    </div>
  );
}
