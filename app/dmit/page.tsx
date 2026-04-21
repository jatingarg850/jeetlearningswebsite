"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import DMITTestClient from "./DMITTestClient";

export default function DMITPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <DMITTestClient />
      <Footer />
    </div>
  );
}
