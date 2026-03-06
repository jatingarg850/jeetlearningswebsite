"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { careerCategories } from "@/app/data/careers";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "backdrop-blur-xl bg-white/80 border-b border-slate-200/50 shadow-sm py-2"
            : "bg-white/95 backdrop-blur-sm border-b border-slate-100 py-4"
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex justify-between items-center h-[60px]">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 relative group">
              <div className="absolute inset-0 bg-[var(--color-canam-red)] blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full" />
              <Image
                src="/assets/canam-logo.png"
                alt="Canam Study Abroad"
                width={146}
                height={78}
                className="h-[50px] w-auto object-contain relative z-10"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              <Link
                href="/"
                className="font-inter text-slate-600 font-medium hover:text-[var(--color-canam-red)] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--color-canam-red)] after:transition-all hover:after:w-full"
              >
                Home
              </Link>

              {/* Categories Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1.5 font-inter text-slate-600 font-medium hover:text-[var(--color-canam-red)] transition-colors py-2 group">
                  Programs
                  <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[var(--color-canam-red)] group-hover:rotate-180 transition-all duration-300" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute top-full -left-6 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white/90 backdrop-blur-xl border border-slate-100/50 rounded-2xl shadow-xl p-3 min-w-[300px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-slate-50/50 pointer-events-none" />
                    <div className="relative z-10 space-y-1">
                      {categories.map((category) => (
                        <Link
                          key={category.slug}
                          href={`/${category.slug}`}
                          className="group flex items-center px-4 py-3 text-slate-600 hover:text-[var(--color-canam-red)] hover:bg-[var(--color-canam-red)]/5 rounded-xl transition-all duration-200 font-inter text-sm font-medium"
                        >
                          <span className="flex-1">{category.name}</span>
                          <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[var(--color-canam-red)]">→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Contact & CTA */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase mb-0.5">24/7 Support</span>
                <a href="tel:18001378055" className="group flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400 group-hover:text-[var(--color-canam-red)] transition-colors" />
                  <span className="font-poppins text-slate-700 font-semibold text-sm group-hover:text-[var(--color-canam-red)] transition-colors">1800 137 8055</span>
                </a>
              </div>

              <Link
                href="/contact"
                className="relative overflow-hidden group bg-gradient-to-r from-[var(--color-canam-red)] to-[var(--color-canam-red-dark)] text-white px-7 py-2.5 rounded-full font-inter font-medium shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative">Book Consultation</span>
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
          <a href="tel:18001378055" className="flex items-center gap-3 text-slate-800 font-poppins font-bold text-xl mb-6">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
              <Phone className="w-5 h-5 text-[var(--color-canam-red)]" />
            </div>
            1800 137 8055
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
      <div className="h-[92px]" />
    </>
  );
}

