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
    <section ref={ref} className="py-14 bg-white">
      <div className="max-w-[1090px] mx-auto px-4 sm:px-6">
        {/* Title */}
        <h2
          className={`font-inter text-[#505050] font-bold text-center mb-8 transition-all duration-700 ${
            isVisible ? "animate-fadeInUp" : "opacity-0 translate-y-[30px]"
          }`}
          style={{ fontSize: "30px" }}
        >
          FAQ
        </h2>

        {/* Divider */}
        <div className="border-t border-[#EEEEEE] mb-0" />

        {/* Items */}
        <div>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ${
                isVisible
                  ? "animate-fadeInUp"
                  : "opacity-0 translate-y-[30px]"
              }`}
              style={{
                animationDelay: isVisible ? `${idx * 0.1}s` : "0s",
              }}
            >
              <button
                className="w-full text-left py-5 px-0 flex items-start justify-between gap-4 focus:outline-none hover:text-[#C20000] transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <span
                  className="font-inter font-medium"
                  style={{
                    fontSize: "15px",
                    color: openIndex === idx ? "#E70000" : "#505050",
                  }}
                >
                  {faq.question}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={openIndex === idx ? "#E70000" : "#505050"}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`shrink-0 mt-0.5 transition-transform duration-200 ${openIndex === idx ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {openIndex === idx && (
                <p
                  className="font-inter pb-5 animate-fadeInUp"
                  style={{ fontSize: "15px", lineHeight: "22px", color: "#757575" }}
                >
                  {faq.answer}
                </p>
              )}

              <div className="border-t border-[#EEEEEE]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
