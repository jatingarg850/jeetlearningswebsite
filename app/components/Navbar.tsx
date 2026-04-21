"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { careerCategories } from "@/app/data/careers";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownHovered(false);
    }, 100);
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsDropdownHovered(true);
  };

  const categories = Object.entries(careerCategories).map(([slug, data]) => ({
    slug,
    name: data.name,
  }));

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "backdrop-blur-xl bg-white/90 border-b border-slate-200/40 shadow-md py-2"
            : "bg-white border-b border-slate-200 py-3"
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 relative group">
              <div className="absolute inset-0 bg-[var(--color-canam-red)] blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full" />
              <Image
                src="/assets/canam-logo.png"
                alt="Canam Study Abroad"
                width={146}
                height={78}
                className="h-12 w-auto object-contain relative z-10"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="text-sm font-medium text-slate-600 hover:text-[var(--color-canam-red)] transition-colors"
              >
                Home
              </Link>

              <Link
                href="/career-library"
                className="text-sm font-medium text-slate-600 hover:text-[var(--color-canam-red)] transition-colors"
              >
                Career Library
              </Link>

              <Link
                href="/dmit"
                className="text-sm font-medium text-slate-600 hover:text-[var(--color-canam-red)] transition-colors"
              >
                DMIT
              </Link>

              <Link
                href="/psychometric"
                className="text-sm font-medium text-slate-600 hover:text-[var(--color-canam-red)] transition-colors"
              >
                Psychometric
              </Link>

              <Link
                href="/resources"
                className="text-sm font-medium text-slate-600 hover:text-[var(--color-canam-red)] transition-colors"
              >
                Resources
              </Link>

              <Link
                href="/blog"
                className="text-sm font-medium text-slate-600 hover:text-[var(--color-canam-red)] transition-colors"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="text-sm font-medium text-slate-600 hover:text-[var(--color-canam-red)] transition-colors"
              >
                Contact
              </Link>

              {/* Categories Dropdown */}
              <div 
                className="relative"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-[var(--color-canam-red)] transition-colors py-2">
                  Programs
                  <ChevronDown 
                    className={`w-4 h-4 text-slate-400 transition-all duration-300 ${isDropdownHovered ? 'rotate-180 text-[var(--color-canam-red)]' : ''}`}
                  />
                </button>

                {/* Dropdown Menu - Full width from left */}
                {isDropdownHovered && (
                  <div className="fixed top-16 left-0 right-0 pt-2 z-50 animate-in fade-in duration-200">
                    <div 
                      className="w-full bg-white border-b border-slate-200 shadow-lg p-6"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-5 gap-6">
                          {categories.map((category) => (
                            <Link
                              key={category.slug}
                              href={`/${category.slug}`}
                              className="group flex items-center justify-between px-3 py-2 text-slate-600 hover:text-[var(--color-canam-red)] hover:bg-red-50 rounded-lg transition-all duration-200 text-sm font-medium"
                              onClick={() => setIsDropdownHovered(false)}
                            >
                              <span className="flex-1">{category.name}</span>
                              <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[var(--color-canam-red)] ml-2">→</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Contact & CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+919670699777" className="group flex items-center gap-2 px-3 py-2">
                <Phone className="w-4 h-4 text-slate-400 group-hover:text-[var(--color-canam-red)] transition-colors" />
                <span className="text-xs font-semibold text-slate-600 group-hover:text-[var(--color-canam-red)] transition-colors">+91 9670699777</span>
              </a>

              <Link
                href="/contact"
                className="bg-[var(--color-canam-red)] text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[var(--color-canam-red-dark)] transition-colors shadow-md hover:shadow-lg"
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors border border-slate-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-600" />
              ) : (
                <Menu className="w-5 h-5 text-slate-600" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] z-50 bg-white border-l border-slate-100 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-6 overflow-y-auto flex-1 mt-20">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-slate-800 font-semibold text-xl mb-8"
          >
            Home
          </Link>

          <div className="space-y-1 mb-8">
            <Link
              href="/career-library"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-slate-700 font-medium rounded-lg hover:bg-slate-100"
            >
              Career Library
            </Link>
            <Link
              href="/dmit"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-slate-700 font-medium rounded-lg hover:bg-slate-100"
            >
              DMIT
            </Link>
            <Link
              href="/psychometric"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-slate-700 font-medium rounded-lg hover:bg-slate-100"
            >
              Psychometric Analysis Test
            </Link>
            <Link
              href="/resources"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-slate-700 font-medium rounded-lg hover:bg-slate-100"
            >
              Resources
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-slate-700 font-medium rounded-lg hover:bg-slate-100"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-slate-700 font-medium rounded-lg hover:bg-slate-100"
            >
              Contact
            </Link>
          </div>

          <div className="mb-8">
            <button
              onClick={() => setOpenDropdown(openDropdown === "categories" ? null : "categories")}
              className="w-full flex items-center justify-between text-slate-800 font-semibold text-xl mb-4"
            >
              Programs
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openDropdown === "categories" ? "rotate-180 text-[var(--color-canam-red)]" : ""}`} />
            </button>

            <div className={`space-y-2 overflow-hidden transition-all duration-300 ${openDropdown === "categories" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-slate-600 hover:text-[var(--color-canam-red)] hover:bg-red-50 rounded-xl transition-colors font-medium text-base"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 bg-slate-50 border-t border-slate-100">
          <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">Need Help?</p>
          <a href="tel:+919670699777" className="flex items-center gap-3 text-slate-800 font-poppins font-bold text-xl mb-6">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <Phone className="w-5 h-5 text-[var(--color-canam-red)]" />
            </div>
            +91 9670699777
          </a>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center bg-[var(--color-canam-red)] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[var(--color-canam-red-dark)] transition-colors shadow-lg shadow-red-500/20"
          >
            Book Consultation
          </Link>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-20" />
    </>
  );
}

