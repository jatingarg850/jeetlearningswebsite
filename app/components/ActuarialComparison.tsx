"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Zap } from "lucide-react";

const BRIGHT_BLUE = "#0A84FF";

interface ComparisonData {
  category: string;
  icon: React.ReactNode;
  items: {
    label: string;
    value: string;
    highlight?: boolean;
  }[];
}

interface ActuarialComparisonProps {
  data: ComparisonData[];
}

export function ActuarialComparison({ data }: ActuarialComparisonProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${BRIGHT_BLUE}08 0%, #FFFFFF 50%, ${BRIGHT_BLUE}05 100%)` }}>
      {/* Animated background -  Floating cards effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-12"
          style={{ background: BRIGHT_BLUE, top: "10%", right: "-5%" }}
        />
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, delay: 1 }}
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-10"
          style={{ background: BRIGHT_BLUE, bottom: "5%", left: "-5%" }}
        />
      </div>

      <div className="max-w-[1090px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-[#505050] mb-4"
          >
            Why Actuarial Science?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#757575] max-w-2xl mx-auto"
          >
            Compare key aspects of this rewarding career path
          </motion.p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60, rotate: -10 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ y: -15, scale: 1.05 }}
              className="p-6 rounded-2xl backdrop-blur-md transition-all"
              style={{
                background: `linear-gradient(135deg, ${BRIGHT_BLUE}15 0%, ${BRIGHT_BLUE}05 100%)`,
                border: `2px solid ${BRIGHT_BLUE}30`,
                boxShadow: `0 8px 24px ${BRIGHT_BLUE}15`,
              }}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${BRIGHT_BLUE}20` }}
              >
                {item.icon}
              </motion.div>

              {/* Category */}
              <h3 className="text-xl font-bold text-[#505050] mb-4">{item.category}</h3>

              {/* Items */}
              <div className="space-y-3">
                {item.items.map((subItem, subIdx) => (
                  <motion.div
                    key={subIdx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: subIdx * 0.12 }}
                    className={`p-3 rounded-lg transition-all ${subItem.highlight ? "border-2" : "border border-transparent"}`}
                    style={{
                      background: subItem.highlight ? `${BRIGHT_BLUE}15` : `${BRIGHT_BLUE}05`,
                      borderColor: subItem.highlight ? BRIGHT_BLUE : "transparent",
                    }}
                  >
                    <p className="text-xs text-[#757575] mb-1">{subItem.label}</p>
                    <motion.p
                      className="font-bold text-lg"
                      style={{ color: subItem.highlight ? BRIGHT_BLUE : "#505050" }}
                      animate={subItem.highlight ? { scale: [1, 1.05, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {subItem.value}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}