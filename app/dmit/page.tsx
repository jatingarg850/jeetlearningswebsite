import NavbarWrapper from "@/app/components/NavbarWrapper";
import Footer from "@/app/components/Footer";
import DMITTestClient from "./DMITTestClient";

export default function DMITPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarWrapper />
      <DMITTestClient />
      <Footer />
    </div>
  );
}
