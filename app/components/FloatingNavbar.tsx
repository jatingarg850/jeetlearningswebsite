"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const PRIMARY_BLUE = "#1E40AF";
const ACCENT_GOLD = "#F59E0B";

export function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Navbar */}
      <nav
        className="fixed top-4 left-4 right-4 md:left-1/2 md:transform md:-translate-x-1/2 z-50 flex items-center justify-between px-4 md:px-8 py-3 rounded-full md:w-auto md:max-w-4xl"
        style={{
          background: `linear-gradient(135deg, ${PRIMARY_BLUE}E6 0%, ${PRIMARY_BLUE}CC 100%)`,
          backdropFilter: "blur(20px)",
          border: `1px solid ${ACCENT_GOLD}40`,
          boxShadow: `0 8px 32px ${PRIMARY_BLUE}40`,
        }}
      >
        {/* Logo */}
        <Link href="/" className="text-white font-bold text-sm md:text-base flex-shrink-0">
            Jeet Learnings
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
          <Link href="/" className="text-white text-xs lg:text-sm font-medium hover:opacity-70 transition">
            Home
          </Link>
          <Link href="/" className="text-white text-xs lg:text-sm font-medium hover:opacity-70 transition">
            Portfolio
          </Link>
          <Link href="/" className="text-white text-xs lg:text-sm font-medium hover:opacity-70 transition">
            About
          </Link>
          <Link href="/" className="text-white text-xs lg:text-sm font-medium hover:opacity-70 transition">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-white/10 rounded-full transition flex-shrink-0"
        >
          {isOpen ? (
            <X className="w-5 h-5 text-white" />
          ) : (
            <Menu className="w-5 h-5 text-white" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed top-16 left-4 right-4 z-40 rounded-2xl p-4 md:hidden"
          style={{
            background: `linear-gradient(135deg, ${PRIMARY_BLUE}F2 0%, ${PRIMARY_BLUE}E6 100%)`,
            backdropFilter: "blur(20px)",
            border: `1px solid ${ACCENT_GOLD}40`,
            boxShadow: `0 8px 32px ${PRIMARY_BLUE}40`,
          }}
        >
          <div className="space-y-3">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-white text-sm font-medium hover:opacity-70 transition py-2 px-2"
            >
              Home
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-white text-sm font-medium hover:opacity-70 transition py-2 px-2"
            >
              Portfolio
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-white text-sm font-medium hover:opacity-70 transition py-2 px-2"
            >
              About
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-white text-sm font-medium hover:opacity-70 transition py-2 px-2"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
