"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, TrendingUp, Users, Target } from "lucide-react";
import Image from "next/image";

const CANAM_RED = "#C20000";

export function ActuarialScienceHero() {
  const stats = [
    { number: "500-700", label: "Current Actuaries in India", icon: Users },
    { number: "25,000", label: "Target by 2030", icon: Target },
    { number: "6-10", label: "Years to Qualify", icon: TrendingUp },
    { number: "₹2-5L", label: "Total Investment", icon: Zap },
  ];

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
    <section className="relative overflow-hidden py-20" style={{ background: "linear-gradient(135deg, rgba(238, 238, 238, 0.5) 0%, rgba(255, 255, 255, 0.8) 100%)" }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: CANAM_RED, top: "-10%", right: "-5%" }}
        />
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{ background: CANAM_RED, bottom: "-5%", left: "-5%" }}
        />
      </div>

      <div className="max-w-[1090px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-2">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "48px" }}
                transition={{ duration: 0.6 }}
                className="h-1 rounded-full"
                style={{ background: CANAM_RED }}
              />
              <h1 className="text-6xl md:text-7xl font-bold text-[#505050] leading-tight">
                Master the <span style={{ color: CANAM_RED }}>Mathematics</span> of Risk
              </h1>
            </div>

            <p className="text-xl text-[#757575] leading-relaxed max-w-lg">
              Become an Actuary and shape the future of insurance, pensions, and investments. India needs 25,000 actuaries by 2030 — and you could be one of them.
            </p>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: `0 20px 40px ${CANAM_RED}40` }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white transition-all"
              style={{ background: `linear-gradient(135deg, ${CANAM_RED} 0%, #DA1313 100%)` }}
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 rounded-3xl overflow-hidden backdrop-blur-md"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.4) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                boxShadow: "0 20px 60px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div className="w-full h-full flex items-center justify-center text-8xl">
                ∑
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="p-6 rounded-2xl backdrop-blur-md transition-all"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.5)",
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.08)",
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="p-2 rounded-lg" style={{ background: `${CANAM_RED}15` }}>
                  <stat.icon className="w-5 h-5" style={{ color: CANAM_RED }} />
                </div>
              </div>
              <p className="text-3xl font-bold text-[#505050] mb-1">{stat.number}</p>
              <p className="text-base text-[#757575]">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
