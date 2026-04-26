"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock } from "lucide-react";

const BRIGHT_BLUE = "#0A84FF";

interface TimelineStep {
  phase: string;
  duration: string;
  title: string;
  items: string[];
  color: string;
}

interface ActuarialTimelineProps {
  steps: TimelineStep[];
}

export function ActuarialTimeline({ steps }: ActuarialTimelineProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: `linear-gradient(135deg, #FFFFFF 0%, ${BRIGHT_BLUE}08 100%)` }}>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{ background: BRIGHT_BLUE, top: "-5%", left: "-5%" }}
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute w-80 h-80 rounded-full blur-3xl"
          style={{ background: BRIGHT_BLUE, bottom: "-10%", right: "-10%" }}
        />
      </div>

      <div className="max-w-[1090px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-6xl md:text-7xl font-bold text-[#505050] mb-4"
          >
            Your 6-10 Year Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#757575] max-w-2xl mx-auto"
          >
            A structured path from Class 12 to becoming a Fellow Actuary
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="relative"
            >
              {/* Timeline connector */}
              {idx < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="absolute left-8 top-24 w-1 h-20 origin-top"
                  style={{ background: `linear-gradient(180deg, ${BRIGHT_BLUE} 0%, ${BRIGHT_BLUE}40 100%)` }}
                />
              )}

              <div className="flex gap-6 items-start">
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.3, boxShadow: `0 0 40px ${BRIGHT_BLUE}` }}
                  animate={{ boxShadow: [`0 0 20px ${BRIGHT_BLUE}40`, `0 0 40px ${BRIGHT_BLUE}60`, `0 0 20px ${BRIGHT_BLUE}40`] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center relative z-10 backdrop-blur-md"
                  style={{
                    background: `linear-gradient(135deg, ${BRIGHT_BLUE} 0%, ${BRIGHT_BLUE}dd 100%)`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex-1 p-6 rounded-2xl backdrop-blur-md transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${BRIGHT_BLUE}12 0%, ${BRIGHT_BLUE}05 100%)`,
                    border: `2px solid ${BRIGHT_BLUE}30`,
                    boxShadow: `0 8px 24px ${BRIGHT_BLUE}15`,
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-sm font-bold"
                        style={{ color: BRIGHT_BLUE }}
                      >
                        {step.phase}
                      </motion.p>
                      <h3 className="text-3xl font-bold text-[#505050] mt-2">{step.title}</h3>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg"
                      style={{ background: `${BRIGHT_BLUE}15` }}
                    >
                      <Clock className="w-4 h-4" style={{ color: BRIGHT_BLUE }} />
                      <span className="text-sm font-bold" style={{ color: BRIGHT_BLUE }}>
                        {step.duration}
                      </span>
                    </motion.div>
                  </div>

                  <div className="space-y-2">
                    {step.items.map((item, itemIdx) => (
                      <motion.div
                        key={itemIdx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIdx * 0.1 }}
                        className="flex items-center gap-3 text-[#757575]"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ delay: itemIdx * 0.2, duration: 2, repeat: Infinity }}
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: BRIGHT_BLUE }}
                        />
                        <span className="text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
