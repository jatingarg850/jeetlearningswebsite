import NavbarWrapper from "@/app/components/NavbarWrapper";
import Footer from "@/app/components/Footer";
import ResourcesClient from "./ResourcesClient";

export const metadata = {
  title: "Resources | Career Guidance",
  description: "Comprehensive resources for all career paths including professional bodies, universities, and scholarships",
};

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarWrapper />
      <ResourcesClient />
      <Footer />
    </div>
  );
}
