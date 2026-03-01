export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-6">
          <p className="text-xs md:text-sm text-slate-400">
            Copyright © 2026 Jeet Learnings. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-xs md:text-sm">
            <a href="#" className="text-slate-400 hover:text-white transition">
              Disclaimer
            </a>
            <span className="text-slate-600">|</span>
            <a href="#" className="text-slate-400 hover:text-white transition">
              Privacy Policy
            </a>
            <span className="text-slate-600">|</span>
            <a href="#" className="text-slate-400 hover:text-white transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
