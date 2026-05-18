import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-6 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 md:gap-6">
          <p className="text-xs sm:text-sm text-slate-400">
            Copyright © 2026 Jeet Learnings. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
            <Link href="/disclaimer" className="text-slate-400 hover:text-white transition">
              Disclaimer
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/privacy-policy" className="text-slate-400 hover:text-white transition">
              Privacy Policy
            </Link>
            <span className="text-slate-600">|</span>
            <Link href="/terms-and-conditions" className="text-slate-400 hover:text-white transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
