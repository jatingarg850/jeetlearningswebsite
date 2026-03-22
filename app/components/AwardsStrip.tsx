"use client";

import { motion } from "framer-motion";

const awards = [
  { name: "UAE Government", logo: "🏆" },
  { name: "Ministry of Commerce", logo: "🏛️" },
  { name: "Indian School of Business", logo: "🎓" },
  { name: "US Consulate", logo: "🌎" },
  { name: "The Economic Times", logo: "📰" },
  { name: "CIIE IIM-A", logo: "💡" },
];

export default function AwardsStrip() {
  return (
    <div className="w-full bg-white py-8 border-b border-[#EEEEEE]">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">
          Awards and Recognition
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {awards.map((award, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-3 group"
            >
              <span className="text-2xl">{award.logo}</span>
              <span className="text-[11px] font-bold text-slate-900 leading-tight uppercase max-w-[100px] group-hover:text-blue-600 transition-colors">
                {award.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
