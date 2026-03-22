"use client";

import { motion } from "framer-motion";
import { GraduationCap, Users, Building2, Award } from "lucide-react";

export default function ImpactStrip() {
  const stats = [
    {
      icon: <Award className="w-5 h-5 text-blue-600" />,
      value: "70,000",
      label: "Educators Certified",
    },
    {
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
      value: "250+",
      label: "Partner Schools",
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-blue-600" />,
      value: "50+",
      label: "Universities",
    },
  ];

  return (
    <div className="w-full bg-[#F5F7FA] border-y border-[#EEEEEE] py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-around gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 group"
            >
              <div className="p-2.5 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-bold text-slate-800 leading-none mb-0.5">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wide">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
