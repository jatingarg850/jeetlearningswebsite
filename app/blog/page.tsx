import NavbarWrapper from "@/app/components/NavbarWrapper";
import Footer from "@/app/components/Footer";
import BlogClient from "./BlogClient";

export const metadata = {
  title: "Blog | Career Guidance",
  description: "Read latest articles on career development, trends, and professional growth",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarWrapper />
      <BlogClient />
      <Footer />
    </div>
  );
}
