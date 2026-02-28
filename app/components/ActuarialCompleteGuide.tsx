"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { TeamCarousel } from "./TeamCarousel";

const CANAM_RED = "#C20000";
const BRIGHT_BLUE = "#0A84FF";

interface GuideSection {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  content: string[];
  highlights?: string[];
}

interface ActuarialCompleteGuideProps {
  sections: GuideSection[];
}

export function ActuarialCompleteGuide({ sections }: ActuarialCompleteGuideProps) {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Header */}
      <section className="relative overflow-hidden pt-20 pb-16" style={{ background: `linear-gradient(135deg, ${BRIGHT_BLUE}08 0%, #FFFFFF 100%)` }}>
        {/* Animated background blobs */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: BRIGHT_BLUE, top: "-10%", right: "-10%" }}
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity, delay: 1 }}
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-10"
          style={{ background: BRIGHT_BLUE, bottom: "-5%", left: "-5%" }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ background: `${BRIGHT_BLUE}15`, border: `2px solid ${BRIGHT_BLUE}30` }}
            >
              <Sparkles className="w-4 h-4" style={{ color: BRIGHT_BLUE }} />
              <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: BRIGHT_BLUE }}>Complete Career Guide</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-[#181E4B] mb-6"
            >
              Complete Guide to Actuarial Science
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-[#5E6282] max-w-3xl mx-auto leading-relaxed"
            >
              Everything you need to know about becoming an actuary in India
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Sections with unique animations and formatting */}
      <div className="relative bg-white">
        {sections.map((section, idx) => {
          // Section 1: What is Actuarial Science - Card Grid Layout with Image
          if (idx === 0) {
            return (
              <motion.section
                key={section.id}
                className="relative overflow-hidden py-24 border-b border-[#E5E5EA]"
                style={{ background: `#FFFFFF` }}
              >
                <div
                  className="absolute w-96 h-96 rounded-full blur-3xl opacity-5"
                  style={{ background: BRIGHT_BLUE, top: "10%", right: "-10%" }}
                />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                      initial={{ opacity: 0, x: -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-6"
                        style={{
                          background: `${BRIGHT_BLUE}12`,
                          border: `2px solid ${BRIGHT_BLUE}30`,
                        }}
                      >
                        {section.icon}
                      </motion.div>
                      <h3 className="text-4xl font-bold text-[#181E4B] mb-4">{section.title}</h3>
                      <p className="text-base text-[#5E6282] max-w-2xl mb-8">{section.description}</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {section.content.map((point, pointIdx) => (
                          <motion.div
                            key={pointIdx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: pointIdx * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="p-4 rounded-xl"
                            style={{
                              background: `${BRIGHT_BLUE}08`,
                              border: `1px solid ${BRIGHT_BLUE}15`,
                            }}
                          >
                            <p className="text-[#181E4B] text-sm leading-relaxed font-medium">{point}</p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                      initial={{ opacity: 0, x: 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="rounded-3xl overflow-hidden"
                        style={{
                          boxShadow: `0 30px 80px ${BRIGHT_BLUE}25`,
                        }}
                      >
                        <img
                          src="/acturial/image copy.png"
                          alt="Actuarial Science"
                          className="w-full h-auto object-cover"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.section>
            );
          }

          // Section 2: Who Should Consider - Team Carousel
          if (idx === 1) {
            const teamMembers = section.content.map((point, i) => ({
              name: point.split(" - ")[0] || `Member ${i + 1}`,
              role: point.split(" - ")[1] || "Team Member",
              image: `https://ik.imagekit.io/gopichakradhar/luffy/o${i + 1}.jpeg?updatedAt=1754289569411`,
            }));

            return (
              <motion.section
                key={section.id}
                className="relative overflow-hidden py-24 border-b border-[#E5E5EA]"
                style={{ background: `#FFFFFF` }}
              >
                <motion.div
                  animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
                  transition={{ duration: 12, repeat: Infinity }}
                  className="absolute w-80 h-80 rounded-full blur-3xl opacity-5"
                  style={{ background: BRIGHT_BLUE, bottom: "10%", left: "-5%" }}
                />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                  >
                    <h3 className="text-4xl font-bold text-[#181E4B] mb-4">{section.title}</h3>
                    <p className="text-base text-[#5E6282]">{section.description}</p>
                  </motion.div>
                  <TeamCarousel members={teamMembers} />
                </div>
              </motion.section>
            );
          }

          // Section 3: Key Responsibilities - Beautiful Grid
          if (idx === 2) {
            return (
              <motion.section
                key={section.id}
                className="relative overflow-hidden py-32"
                style={{ background: `linear-gradient(135deg, #FFFFFF 0%, ${BRIGHT_BLUE}04 100%)` }}
              >
                <motion.div
                  animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
                  transition={{ duration: 15, repeat: Infinity }}
                  className="absolute w-96 h-96 rounded-full blur-3xl opacity-8"
                  style={{ background: BRIGHT_BLUE, top: "-5%", left: "10%" }}
                />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                  >
                    <motion.div
                      className="inline-block mb-4 px-4 py-2 rounded-full"
                      style={{ background: `${BRIGHT_BLUE}15` }}
                    >
                      <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: BRIGHT_BLUE }}>
                        Key Responsibilities
                      </span>
                    </motion.div>
                    <h3 className="text-5xl font-bold text-[#181E4B] mb-6">{section.title}</h3>
                    <p className="text-lg text-[#5E6282] max-w-2xl mx-auto">{section.description}</p>
                  </motion.div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.content.map((point, pointIdx) => (
                      <motion.div
                        key={pointIdx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: pointIdx * 0.08 }}
                        whileHover={{ y: -8, boxShadow: `0 20px 40px ${BRIGHT_BLUE}20` }}
                        className="group relative p-8 rounded-2xl backdrop-blur-sm border transition-all duration-300"
                        style={{
                          background: `linear-gradient(135deg, #FFFFFF 0%, ${BRIGHT_BLUE}08 100%)`,
                          borderColor: `${BRIGHT_BLUE}20`,
                        }}
                      >
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                          style={{ background: `linear-gradient(135deg, ${BRIGHT_BLUE}05 0%, ${BRIGHT_BLUE}02 100%)` }} />
                        <div className="relative z-10">
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ delay: pointIdx * 0.1, duration: 2, repeat: Infinity }}
                            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                            style={{ background: `${BRIGHT_BLUE}20` }}
                          >
                            <CheckCircle2 className="w-6 h-6" style={{ color: BRIGHT_BLUE }} />
                          </motion.div>
                          <p className="text-[#181E4B] text-base leading-relaxed font-medium">{point}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.section>
            );
          }

          // Section 4: What Will It Cost - Beautiful Feature List with Image
          if (idx === 3) {
            return (
              <motion.section
                key={section.id}
                className="relative overflow-hidden py-32"
                style={{ background: `#FFFFFF` }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute w-96 h-96 rounded-full blur-3xl"
                  style={{ background: BRIGHT_BLUE, top: "20%", right: "5%" }}
                />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                  >
                    <motion.div
                      className="inline-block mb-4 px-4 py-2 rounded-full"
                      style={{ background: `${BRIGHT_BLUE}15` }}
                    >
                      <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: BRIGHT_BLUE }}>
                        Investment Details
                      </span>
                    </motion.div>
                    <h3 className="text-5xl font-bold text-[#181E4B] mb-6">{section.title}</h3>
                    <p className="text-lg text-[#5E6282] max-w-2xl mx-auto">{section.description}</p>
                  </motion.div>

                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Image */}
                    <motion.div
                      initial={{ opacity: 0, x: -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="rounded-3xl overflow-hidden"
                        style={{
                          boxShadow: `0 30px 80px ${BRIGHT_BLUE}25`,
                        }}
                      >
                        <img
                          src="/acturial/image copy 2.png"
                          alt="Investment Details"
                          className="w-full h-auto object-cover"
                        />
                      </motion.div>
                    </motion.div>

                    {/* Right Content */}
                    <div className="space-y-4">
                      {section.content.map((point, pointIdx) => (
                        <motion.div
                          key={pointIdx}
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: pointIdx * 0.1 }}
                          whileHover={{ x: 8 }}
                          className="group relative p-6 rounded-xl border transition-all duration-300 flex items-center gap-4"
                          style={{
                            background: `linear-gradient(135deg, #FFFFFF 0%, ${BRIGHT_BLUE}06 100%)`,
                            borderColor: `${BRIGHT_BLUE}15`,
                          }}
                        >
                          <motion.div
                            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ background: `${BRIGHT_BLUE}20`, color: BRIGHT_BLUE }}
                          >
                            <span className="text-lg font-bold">{pointIdx + 1}</span>
                          </motion.div>
                          <p className="text-[#181E4B] text-base leading-relaxed font-medium flex-1">{point}</p>
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ delay: pointIdx * 0.1, duration: 2, repeat: Infinity }}
                            className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            →
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>
            );
          }

          // Section 5: Scholarships - Premium Feature Cards with Image
          if (idx === 4) {
            return (
              <motion.section
                key={section.id}
                className="relative overflow-hidden py-32"
                style={{ background: `linear-gradient(135deg, ${BRIGHT_BLUE}04 0%, #FFFFFF 100%)` }}
              >
                <motion.div
                  animate={{ y: [0, -50, 0], x: [0, 30, 0] }}
                  transition={{ duration: 14, repeat: Infinity }}
                  className="absolute w-80 h-80 rounded-full blur-3xl opacity-8"
                  style={{ background: BRIGHT_BLUE, bottom: "-10%", right: "-5%" }}
                />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                  >
                    <motion.div
                      className="inline-block mb-4 px-4 py-2 rounded-full"
                      style={{ background: `${BRIGHT_BLUE}15` }}
                    >
                      <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: BRIGHT_BLUE }}>
                        Opportunities
                      </span>
                    </motion.div>
                    <h3 className="text-5xl font-bold text-[#181E4B] mb-6">{section.title}</h3>
                    <p className="text-lg text-[#5E6282] max-w-2xl mx-auto">{section.description}</p>
                  </motion.div>

                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Cards */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {section.content.map((point, pointIdx) => (
                        <motion.div
                          key={pointIdx}
                          initial={{ opacity: 0, y: 60 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: pointIdx * 0.15, type: "spring", stiffness: 100 }}
                          whileHover={{ y: -12, boxShadow: `0 30px 60px ${BRIGHT_BLUE}25` }}
                          className="group relative p-8 rounded-3xl border backdrop-blur-sm overflow-hidden transition-all duration-300"
                          style={{
                            background: `linear-gradient(135deg, #FFFFFF 0%, ${BRIGHT_BLUE}08 100%)`,
                            borderColor: `${BRIGHT_BLUE}20`,
                          }}
                        >
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: `radial-gradient(circle at top right, ${BRIGHT_BLUE}10, transparent)` }} />
                          <div className="relative z-10">
                            <motion.div
                              initial={{ scale: 0.8 }}
                              whileInView={{ scale: 1 }}
                              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                              style={{ background: `linear-gradient(135deg, ${BRIGHT_BLUE}30, ${BRIGHT_BLUE}15)` }}
                            >
                              <span className="text-2xl">✨</span>
                            </motion.div>
                            <p className="text-[#181E4B] text-base leading-relaxed font-medium">{point}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Right Image */}
                    <motion.div
                      initial={{ opacity: 0, x: 60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="rounded-3xl overflow-hidden"
                        style={{
                          boxShadow: `0 30px 80px ${BRIGHT_BLUE}25`,
                        }}
                      >
                        <img
                          src="/acturial/image copy 3.png"
                          alt="Scholarship Opportunities"
                          className="w-full h-auto object-cover"
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.section>
            );
          }

          // Section 6: Key Challenges - Beautiful Alert Cards with Image
          if (idx === 5) {
            return (
              <motion.section
                key={section.id}
                className="relative overflow-hidden py-32"
                style={{ background: `#FFFFFF` }}
              >
                <motion.div
                  animate={{ scale: [1, 1.3, 1], opacity: [0.08, 0.15, 0.08] }}
                  transition={{ duration: 10, repeat: Infinity }}
                  className="absolute w-96 h-96 rounded-full blur-3xl"
                  style={{ background: BRIGHT_BLUE, top: "-10%", left: "5%" }}
                />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                  <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                  >
                    <motion.div
                      className="inline-block mb-4 px-4 py-2 rounded-full"
                      style={{ background: `${BRIGHT_BLUE}15` }}
                    >
                      <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: BRIGHT_BLUE }}>
                        Important Considerations
                      </span>
                    </motion.div>
                    <h3 className="text-5xl font-bold text-[#181E4B] mb-6">{section.title}</h3>
                    <p className="text-lg text-[#5E6282] max-w-2xl">{section.description}</p>
                  </motion.div>

                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Image */}
                    <motion.div
                      initial={{ opacity: 0, x: -60 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="rounded-3xl overflow-hidden"
                        style={{
                          boxShadow: `0 30px 80px ${BRIGHT_BLUE}25`,
                        }}
                      >
                        <img
                          src="/acturial/image copy 4.png"
                          alt="Key Challenges"
                          className="w-full h-auto object-cover"
                        />
                      </motion.div>
                    </motion.div>

                    {/* Right Content */}
                    <div className="space-y-4">
                      {section.content.map((point, pointIdx) => (
                        <motion.div
                          key={pointIdx}
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: pointIdx * 0.12 }}
                          whileHover={{ x: 8, boxShadow: `0 15px 40px ${BRIGHT_BLUE}15` }}
                          className="group relative p-6 rounded-xl border-r-4 transition-all duration-300 flex items-start gap-4"
                          style={{
                            background: `linear-gradient(135deg, #FFFFFF 0%, ${BRIGHT_BLUE}06 100%)`,
                            borderColor: BRIGHT_BLUE,
                          }}
                        >
                          <motion.div
                            className="text-3xl flex-shrink-0 mt-1"
                          >
                            ⚠️
                          </motion.div>
                          <p className="text-[#181E4B] text-base leading-relaxed font-medium flex-1">{point}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>
            );
          }

          // Section 7: Start Now - Premium Interactive Carousel
          if (idx === 6) {
            const [currentSlide, setCurrentSlide] = React.useState(0);
            
            const steps = [
              { icon: "📚", title: "Master the Fundamentals", desc: section.content[0] },
              { icon: "💻", title: "Learn Programming", desc: section.content[1] },
              { icon: "🎯", title: "Take the ACET Exam", desc: section.content[2] },
              { icon: "🏆", title: "Compete & Excel", desc: section.content[3] },
              { icon: "🌟", title: "Explore Free Resources", desc: section.content[4] },
            ];

            const nextSlide = () => {
              setCurrentSlide((prev) => (prev + 1) % steps.length);
            };

            const prevSlide = () => {
              setCurrentSlide((prev) => (prev - 1 + steps.length) % steps.length);
            };

            return (
              <motion.section
                key={section.id}
                className="relative overflow-hidden py-32"
                style={{ background: `linear-gradient(135deg, #FFFFFF 0%, ${BRIGHT_BLUE}06 100%)` }}
              >
                {/* Animated background blobs */}
                <motion.div
                  animate={{ y: [0, 40, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute w-96 h-96 rounded-full blur-3xl opacity-8"
                  style={{ background: BRIGHT_BLUE, top: "5%", right: "5%" }}
                />
                <motion.div
                  animate={{ y: [0, -40, 0] }}
                  transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                  className="absolute w-80 h-80 rounded-full blur-3xl opacity-6"
                  style={{ background: BRIGHT_BLUE, bottom: "10%", left: "5%" }}
                />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                  {/* Header */}
                  <motion.div
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                  >
                    <motion.div
                      initial={{ scale: 0.8 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 100 }}
                      className="inline-block mb-6 px-4 py-2 rounded-full"
                      style={{ background: `${BRIGHT_BLUE}15`, border: `2px solid ${BRIGHT_BLUE}30` }}
                    >
                      <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: BRIGHT_BLUE }}>
                        Your Roadmap
                      </span>
                    </motion.div>
                    <h3 className="text-5xl md:text-6xl font-bold text-[#181E4B] mb-6">{section.title}</h3>
                    <p className="text-xl text-[#5E6282] max-w-3xl mx-auto leading-relaxed">{section.description}</p>
                  </motion.div>

                  {/* Main Carousel Container */}
                  <div className="max-w-5xl mx-auto">
                    {/* Large Featured Card */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="mb-12"
                    >
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5 }}
                        className="group relative rounded-3xl overflow-hidden backdrop-blur-sm border"
                        style={{
                          background: `linear-gradient(135deg, #FFFFFF 0%, ${BRIGHT_BLUE}15 100%)`,
                          borderColor: `${BRIGHT_BLUE}30`,
                          boxShadow: `0 25px 80px ${BRIGHT_BLUE}20`,
                        }}
                      >
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{ background: `radial-gradient(circle at 30% 50%, ${BRIGHT_BLUE}15, transparent)` }} />

                        <div className="relative z-10 p-12 md:p-16">
                          <div className="flex flex-col md:flex-row items-center gap-12">
                            {/* Icon Section */}
                            <motion.div
                              initial={{ scale: 0.8, rotate: -10 }}
                              animate={{ scale: 1, rotate: 0 }}
                              transition={{ delay: 0.2, type: "spring" }}
                              className="flex-shrink-0"
                            >
                              <div className="w-32 h-32 rounded-3xl flex items-center justify-center text-6xl"
                                style={{
                                  background: `linear-gradient(135deg, ${BRIGHT_BLUE}30, ${BRIGHT_BLUE}15)`,
                                  border: `3px solid ${BRIGHT_BLUE}40`,
                                  boxShadow: `0 15px 40px ${BRIGHT_BLUE}25`,
                                }}
                              >
                                {steps[currentSlide].icon}
                              </div>
                            </motion.div>

                            {/* Content Section */}
                            <div className="flex-1 text-center md:text-left">
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                              >
                                <div className="inline-block mb-4 px-3 py-1 rounded-full"
                                  style={{ background: `${BRIGHT_BLUE}20` }}
                                >
                                  <span className="text-sm font-bold" style={{ color: BRIGHT_BLUE }}>
                                    Step {currentSlide + 1} of {steps.length}
                                  </span>
                                </div>
                              </motion.div>
                              <motion.h4
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 }}
                                className="text-4xl font-bold text-[#181E4B] mb-4"
                              >
                                {steps[currentSlide].title}
                              </motion.h4>
                              <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg text-[#5E6282] leading-relaxed"
                              >
                                {steps[currentSlide].desc}
                              </motion.p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* Navigation Section */}
                    <div className="flex flex-col items-center gap-8">
                      {/* Dots with labels */}
                      <div className="flex gap-4 flex-wrap justify-center">
                        {steps.map((step, idx) => (
                          <motion.button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative transition-all duration-300"
                          >
                            <div className="flex flex-col items-center gap-2">
                              <motion.div
                                animate={{
                                  scale: currentSlide === idx ? 1.2 : 1,
                                  boxShadow: currentSlide === idx ? `0 0 20px ${BRIGHT_BLUE}50` : "none"
                                }}
                                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300"
                                style={{
                                  background: currentSlide === idx 
                                    ? `linear-gradient(135deg, ${BRIGHT_BLUE}, #0066FF)`
                                    : `${BRIGHT_BLUE}15`,
                                  border: `2px solid ${currentSlide === idx ? BRIGHT_BLUE : `${BRIGHT_BLUE}30`}`,
                                }}
                              >
                                {step.icon}
                              </motion.div>
                              <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: currentSlide === idx ? 1 : 0.6 }}
                                className="text-xs font-semibold text-[#181E4B] text-center max-w-[60px] leading-tight"
                              >
                                {step.title.split(" ")[0]}
                              </motion.span>
                            </div>
                          </motion.button>
                        ))}
                      </div>

                      {/* Arrow Navigation */}
                      <div className="flex items-center gap-6">
                        <motion.button
                          whileHover={{ scale: 1.15, x: -4 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={prevSlide}
                          className="p-4 rounded-full transition-all"
                          style={{
                            background: `linear-gradient(135deg, ${BRIGHT_BLUE}20, ${BRIGHT_BLUE}10)`,
                            border: `2px solid ${BRIGHT_BLUE}30`,
                            color: BRIGHT_BLUE,
                          }}
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                          </svg>
                        </motion.button>

                        {/* Progress indicator */}
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-[#181E4B]">{currentSlide + 1}</span>
                          <div className="w-32 h-1.5 rounded-full overflow-hidden"
                            style={{ background: `${BRIGHT_BLUE}20` }}
                          >
                            <motion.div
                              animate={{ width: `${((currentSlide + 1) / steps.length) * 100}%` }}
                              transition={{ duration: 0.5 }}
                              className="h-full rounded-full"
                              style={{ background: `linear-gradient(90deg, ${BRIGHT_BLUE}, #0066FF)` }}
                            />
                          </div>
                          <span className="text-sm font-bold text-[#5E6282]">{steps.length}</span>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.15, x: 4 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={nextSlide}
                          className="p-4 rounded-full transition-all"
                          style={{
                            background: `linear-gradient(135deg, ${BRIGHT_BLUE}20, ${BRIGHT_BLUE}10)`,
                            border: `2px solid ${BRIGHT_BLUE}30`,
                            color: BRIGHT_BLUE,
                          }}
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.button>
                      </div>

                      {/* CTA Button */}
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ scale: 1.05, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 px-10 py-4 rounded-xl font-bold text-lg text-white transition-all"
                        style={{
                          background: `linear-gradient(135deg, ${BRIGHT_BLUE}, #0066FF)`,
                          boxShadow: `0 15px 40px ${BRIGHT_BLUE}30`,
                        }}
                      >
                        Start Your Journey Now
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.section>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
