"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";

const faqs = [
  {
    question: "What documents are needed for university applications?",
    answer:
      "Students must provide a range of documents when applying to their dream university. While the list of documents depends on the chosen course, some of the common ones asked by the university are academic transcripts, SOPs, LORs, medical certificates, etc.",
  },
  {
    question: "Can you help me with scholarships?",
    answer:
      "Yes, we provide comprehensive scholarship assistance including identifying eligible scholarships, preparing application materials, and guiding you through the entire process.",
  },
  {
    question: "How do I know which program is right for me?",
    answer:
      "Our expert counselors work with you to assess your academic background, interests, and career goals to recommend the most suitable programs and institutions.",
  },
  {
    question: "Is this service available online?",
    answer:
      "Yes, we offer both in-person and virtual counselling sessions to accommodate students across different locations and time zones.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-red-100/40 to-transparent blur-3xl rounded-full opacity-50 pointer-events-none" />

      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        {/* Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}>
          <h2 className="font-poppins text-slate-900 font-bold text-4xl lg:text-5xl mb-4 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-canam-red)] to-[var(--color-canam-red-dark)]">Questions</span>
          </h2>
          <p className="font-inter text-slate-500 text-lg">
            Find answers to the most common questions about our services.
          </p>
        </div>

        {/* Items */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all duration-500 overflow-hidden ${isOpen ? "border-red-100 shadow-[0_8px_30px_rgb(200,0,0,0.06)] scale-[1.02]" : "border-slate-100 shadow-sm hover:border-red-50 hover:shadow-md"
                  } ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <button
                  className="w-full text-left p-6 sm:px-8 flex items-center justify-between gap-4 focus:outline-none group bg-transparent"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                >
                  <span className={`font-poppins font-semibold text-base sm:text-lg transition-colors ${isOpen ? "text-[var(--color-canam-red)]" : "text-slate-800 group-hover:text-[var(--color-canam-red)]"
                    }`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-red-50" : "bg-slate-50 group-hover:bg-red-50"
                    }`}>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-all duration-300 ${isOpen ? "rotate-180 text-[var(--color-canam-red)]" : "text-slate-400 group-hover:text-[var(--color-canam-red)]"
                        }`}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                </button>

                <div
                  className={`px-6 sm:px-8 transition-all duration-500 ease-in-out font-inter text-slate-600 text-[15px] leading-relaxed ${isOpen ? "opacity-100 max-h-48 pb-6" : "opacity-0 max-h-0 pb-0"
                    }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
