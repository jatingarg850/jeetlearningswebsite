"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

const BRIGHT_BLUE = "#0A84FF";

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number; // 0-100
    icon: string;
  }[];
  color: string;
}

interface ActuarialSkillsShowcaseProps {
  categories: SkillCategory[];
}

export function ActuarialSkillsShowcase({ categories }: ActuarialSkillsShowcaseProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: `linear-gradient(135deg, #FFFFFF 0%, ${BRIGHT_BLUE}08 50%, #FFFFFF 100%)` }}>
      {/* Animated background - Pulsing effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{ background: BRIGHT_BLUE, top: "-10%", right: "5%" }}
        />
        <motion.div
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          className="absolute w-80 h-80 rounded-full blur-3xl"
          style={{ background: BRIGHT_BLUE, bottom: "-5%", left: "10%" }}
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
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md mb-4"
            style={{ background: `${BRIGHT_BLUE}20`, border: `2px solid ${BRIGHT_BLUE}` }}
          >
            <Zap className="w-4 h-4" style={{ color: BRIGHT_BLUE }} />
            <span className="text-sm font-semibold" style={{ color: BRIGHT_BLUE }}>Essential Skills</span>
          </motion.div>
          <motion.h2
            className="text-6xl md:text-7xl font-bold text-[#505050] mb-4"
          >
            Skills You'll Master
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#757575] max-w-2xl mx-auto"
          >
            Develop expertise across multiple domains to excel as an actuary
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: catIdx * 0.2, type: "spring", stiffness: 100 }}
              className="p-8 rounded-3xl backdrop-blur-md"
              style={{
                background: `linear-gradient(135deg, ${BRIGHT_BLUE}12 0%, ${BRIGHT_BLUE}05 100%)`,
                border: `2px solid ${BRIGHT_BLUE}30`,
                boxShadow: `0 8px 24px ${BRIGHT_BLUE}15`,
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                  style={{ background: `${BRIGHT_BLUE}20` }}
                >
                  {category.skills[0]?.icon || "📊"}
                </motion.div>
                <h3 className="text-3xl font-bold text-[#505050]">{category.name}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: skillIdx * 0.15 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ delay: skillIdx * 0.2, duration: 2, repeat: Infinity }}
                          className="text-lg"
                        >
                          {skill.icon}
                        </motion.span>
                        <span className="font-semibold text-[#505050]">{skill.name}</span>
                      </div>
                      <motion.span
                        className="text-sm font-bold"
                        style={{ color: BRIGHT_BLUE }}
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ delay: skillIdx * 0.2, duration: 2, repeat: Infinity }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>

                    {/* Progress Bar */}
                    <div
                      className="h-3 rounded-full overflow-hidden"
                      style={{ background: `${BRIGHT_BLUE}15` }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: skillIdx * 0.15, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${BRIGHT_BLUE} 0%, ${BRIGHT_BLUE}dd 100%)`,
                          boxShadow: `0 0 15px ${BRIGHT_BLUE}60`,
                        }}
                      />
                    </div>
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