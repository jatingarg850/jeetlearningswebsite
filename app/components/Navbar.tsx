"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { careerCategories } from "@/app/data/careers";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = Object.entries(careerCategories).map(([slug, data]) => ({
    slug,
    name: data.name,
  }));

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-md bg-white/80 border-b border-white/20 shadow-lg"
            : "bg-white border-b border-[#EEEEEE]"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex justify-between items-center h-[78px]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/assets/canam-logo.png"
                alt="Canam Study Abroad"
                width={146}
                height={78}
                className="h-[60px] w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Categories Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-2 font-poppins text-[#505050] font-medium hover:text-[#C20000] transition-colors py-2">
                  Programs
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="backdrop-blur-md bg-white/95 border border-white/20 rounded-xl shadow-xl p-2 min-w-[280px]">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/${category.slug}`}
                        className="block px-4 py-2.5 text-[#505050] hover:text-[#C20000] hover:bg-[#C20000]/5 rounded-lg transition-all duration-200 font-poppins text-sm"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/"
                className="font-poppins text-[#505050] font-medium hover:text-[#C20000] transition-colors"
              >
                Home
              </Link>
            </div>

            {/* Phone */}
            <div className="hidden md:flex items-center gap-3">
              <img
                src="/assets/phone-icon.svg"
                alt="Phone"
                className="w-[30px] h-[30px]"
              />
              <span className="font-poppins text-[#505050] font-bold text-lg lg:text-[28px] leading-tight">
                <span className="hidden lg:inline">Request Call Back: </span>
                <span className="whitespace-nowrap">1800 137 8055</span>
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-[#C20000]/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#505050]" />
              ) : (
                <Menu className="w-6 h-6 text-[#505050]" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`fixed top-[78px] left-0 right-0 z-40 backdrop-blur-md bg-white/95 border-b border-white/20 transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="max-w-[1440px] mx-auto px-6 py-4">
            {/* Mobile Categories */}
            <div className="mb-4">
              <button
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "categories" ? null : "categories"
                  )
                }
                className="w-full flex items-center justify-between px-4 py-2.5 text-[#505050] hover:text-[#C20000] hover:bg-[#C20000]/5 rounded-lg transition-all duration-200 font-poppins font-medium"
              >
                Programs
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openDropdown === "categories" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === "categories" && (
                <div className="mt-2 space-y-1 pl-4">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/${category.slug}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-2 text-[#505050] hover:text-[#C20000] hover:bg-[#C20000]/5 rounded-lg transition-all duration-200 font-poppins text-sm"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2.5 text-[#505050] hover:text-[#C20000] hover:bg-[#C20000]/5 rounded-lg transition-all duration-200 font-poppins font-medium"
            >
              Home
            </Link>

            {/* Mobile Phone */}
            <div className="flex items-center gap-3 mt-4 px-4 py-2">
              <img
                src="/assets/phone-icon.svg"
                alt="Phone"
                className="w-[24px] h-[24px]"
              />
              <span className="font-poppins text-[#505050] font-bold text-sm">
                1800 137 8055
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content overlap */}
      <div className="h-[78px]" />
    </>
  );
}
