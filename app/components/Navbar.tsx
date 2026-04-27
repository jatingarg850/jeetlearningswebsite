"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "backdrop-blur-xl bg-white/95 border-b border-slate-200/50 shadow-lg py-2"
            : "bg-white border-b border-slate-200 py-3"
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center gap-2">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 relative group">
              <div className="absolute inset-0 bg-[var(--color-canam-red)] blur-2xl opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-full" />
              <Image
                src="/assets/canam-logo.png"
                alt="Canam Study Abroad"
                width={180}
                height={96}
                className={`w-auto object-contain relative z-10 transition-all duration-300 ${
                  isScrolled ? "h-12" : "h-16"
                }`}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
              <Link
                href="/"
                className="px-2 py-1.5 text-xs font-medium text-slate-600 hover:text-[var(--color-canam-red)] whitespace-nowrap transition-all duration-200"
              >
                Home
              </Link>

              <Link
                href="/career-path"
                className="px-2 py-1.5 text-xs font-medium text-slate-600 hover:text-[var(--color-canam-red)] whitespace-nowrap transition-all duration-200"
              >
                Career Path
              </Link>

              <Link
                href="/dmit"
                className="px-2 py-1.5 text-xs font-medium text-slate-600 hover:text-[var(--color-canam-red)] whitespace-nowrap transition-all duration-200"
              >
                DMIT
              </Link>

              <Link
                href="/psychometric"
                className="px-2 py-1.5 text-xs font-medium text-slate-600 hover:text-[var(--color-canam-red)] whitespace-nowrap transition-all duration-200"
              >
                Psychometric
              </Link>

              <Link
                href="/resources"
                className="px-2 py-1.5 text-xs font-medium text-slate-600 hover:text-[var(--color-canam-red)] whitespace-nowrap transition-all duration-200"
              >
                Resources
              </Link>

              <Link
                href="/blog"
                className="px-2 py-1.5 text-xs font-medium text-slate-600 hover:text-[var(--color-canam-red)] whitespace-nowrap transition-all duration-200"
              >
                Blog
              </Link>

              <Link
                href="/contact"
                className="px-2 py-1.5 text-xs font-medium text-slate-600 hover:text-[var(--color-canam-red)] whitespace-nowrap transition-all duration-200"
              >
                Contact
              </Link>
            </div>

            {/* Contact & CTA */}
            <div className="hidden md:flex items-center gap-2 flex-shrink-0">
              <a href="tel:+919670699777" className="group hidden lg:flex items-center gap-1 px-2 py-1.5 rounded-lg hover:bg-slate-50 transition-all duration-200">
                <Phone className="w-4 h-4 text-slate-400 group-hover:text-[var(--color-canam-red)] transition-colors flex-shrink-0" />
                <span className="text-xs font-semibold text-slate-600 group-hover:text-[var(--color-canam-red)] transition-colors whitespace-nowrap">+91 9670699777</span>
              </a>

              <Link
                href="/contact"
                className="bg-[var(--color-canam-red)] text-white px-5 py-2 rounded-lg font-semibold text-xs hover:bg-[var(--color-canam-red-dark)] transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Book Consultation
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all duration-200 border border-slate-300 flex-shrink-0"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-slate-700" />
              ) : (
                <Menu className="w-5 h-5 text-slate-700" />
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
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-[400px] z-50 bg-white border-l border-slate-200 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden flex flex-col ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-6 overflow-y-auto flex-1 mt-16">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-slate-800 font-bold text-2xl mb-8 hover:text-[var(--color-canam-red)] transition-colors"
          >
            Home
          </Link>

          <div className="space-y-2 mb-8">
            <Link
              href="/career-path"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-slate-700 font-semibold rounded-lg hover:bg-slate-100 hover:text-[var(--color-canam-red)] transition-all"
            >
              Career Path
            </Link>
            <Link
              href="/dmit"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-slate-700 font-semibold rounded-lg hover:bg-slate-100 hover:text-[var(--color-canam-red)] transition-all"
            >
              DMIT
            </Link>
            <Link
              href="/psychometric"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-slate-700 font-semibold rounded-lg hover:bg-slate-100 hover:text-[var(--color-canam-red)] transition-all"
            >
              Psychometric
            </Link>
            <Link
              href="/resources"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-slate-700 font-semibold rounded-lg hover:bg-slate-100 hover:text-[var(--color-canam-red)] transition-all"
            >
              Resources
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-slate-700 font-semibold rounded-lg hover:bg-slate-100 hover:text-[var(--color-canam-red)] transition-all"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-slate-700 font-semibold rounded-lg hover:bg-slate-100 hover:text-[var(--color-canam-red)] transition-all"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="p-6 bg-gradient-to-b from-slate-50 to-slate-100 border-t border-slate-200">
          <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-3">Need Help?</p>
          <a href="tel:+919670699777" className="flex items-center gap-3 text-slate-800 font-poppins font-bold text-lg mb-6 hover:text-[var(--color-canam-red)] transition-colors">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <Phone className="w-6 h-6 text-[var(--color-canam-red)]" />
            </div>
            +91 9670699777
          </a>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center bg-[var(--color-canam-red)] text-white py-4 rounded-xl font-bold text-base hover:bg-[var(--color-canam-red-dark)] transition-all shadow-lg shadow-red-500/30 active:scale-95"
          >
            Book Consultation
          </Link>
        </div>
      </div>

      {/* Spacer */}
      <div className={`transition-all duration-300 ${isScrolled ? "h-14" : "h-20"}`} />
    </>
  );
}

