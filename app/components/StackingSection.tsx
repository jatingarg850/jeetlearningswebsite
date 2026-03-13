"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

interface StackingItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  content?: string[];
  href?: string;
}

interface StackingSectionProps {
  title: string;
  subtitle: string;
  items: StackingItem[];
  backgroundColor?: string;
}

function StackingCard({
  item,
  index,
  range,
  targetScale,
}: {
  item: StackingItem;
  index: number;
  range: [number, number];
  targetScale: number;
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen sticky top-0 flex items-center justify-center">
      <motion.div
        className="w-full h-[80vh] relative overflow-hidden origin-top rounded-3xl will-change-transform backdrop-blur-xl"
        style={{
          background: `linear-gradient(110.97deg, rgba(255, 255, 255, 0.5) -4.87%, rgba(255, 255, 255, 0) 103.95%)`,
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1), 0 0 1px rgba(255, 255, 255, 0.5) inset',
          scale,
          top: `calc(4rem + ${index * 10}px)`
        }}
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundColor: item.color }}
        />

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col md:flex-row items-stretch justify-between p-8 md:p-16 gap-6 md:gap-12 bg-gradient-to-br from-white/50 to-white/30 overflow-hidden backdrop-blur-xl">
          {/* Left Side: Text Content */}
          <div className="flex-1 text-left flex flex-col h-full overflow-y-auto scrollbar-hide">
            {/* Icon with glassmorphic background */}
            <div 
              className="text-6xl md:text-7xl mb-6 w-24 h-24 rounded-2xl flex items-center justify-center backdrop-blur-md"
              style={{ 
                background: `linear-gradient(147.04deg, rgba(255, 255, 255, 0.6) 8.82%, rgba(255, 255, 255, 0) 117.88%)`,
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
            >
              {item.icon}
            </div>

            {/* Heading */}
            <h3 className="text-3xl md:text-5xl font-bold text-[#505050] leading-tight mb-4 md:mb-6 font-poppins">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-base md:text-lg text-[#757575] leading-relaxed max-w-lg mb-8 font-poppins">
              {item.description}
            </p>

            {/* Navigation Button */}
            {item.href && (
              <div className="mb-8">
                <Link href={item.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-8 py-4 rounded-xl font-poppins font-bold text-white shadow-lg transition-all"
                    style={{ background: item.color }}
                  >
                    Explore Career Path
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </motion.button>
                </Link>
              </div>
            )}


            {/* Full Content List with glassmorphic cards */}
            {item.content && item.content.length > 0 && (
              <div className="space-y-3 mb-8">
                {item.content.map((point, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3 p-4 rounded-xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02]"
                    style={{
                      background: `linear-gradient(131.68deg, rgba(255, 255, 255, 0.6) -3%, rgba(255, 255, 255, 0.6) 113.86%)`,
                      border: '1px solid rgba(255, 255, 255, 0.4)',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
                    }}
                  >
                    <span 
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" 
                      style={{ background: `${item.color}30` }}
                    >
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
                    </span>
                    <span className="text-[#505050] font-poppins text-sm md:text-base leading-relaxed font-medium">{point}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Side: Visual with glassmorphic elements */}
          <div className="flex-1 flex w-full h-full relative items-center justify-center">
            {/* Background decorative circles */}
            <div
              className="absolute w-32 h-32 rounded-full backdrop-blur-md"
              style={{ 
                background: `linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)`,
                border: '1px solid rgba(255, 255, 255, 0.3)',
                top: '10%',
                right: '10%'
              }}
            />
            <div
              className="absolute w-24 h-24 rounded-full backdrop-blur-md"
              style={{ 
                background: `linear-gradient(143.94deg, rgba(255, 255, 255, 0.7) 14.74%, rgba(196, 196, 196, 0) 134.34%)`,
                border: '1px solid rgba(255, 255, 255, 0.3)',
                bottom: '15%',
                left: '15%'
              }}
            />
            
            {/* Main icon display */}
            <div className="relative z-10 text-center">
              <div
                className="w-32 h-32 md:w-48 md:h-48 rounded-full flex items-center justify-center text-6xl md:text-8xl backdrop-blur-lg"
                style={{
                  background: `linear-gradient(110.97deg, rgba(255, 255, 255, 0.5) -4.87%, rgba(255, 255, 255, 0) 103.95%)`,
                  border: `2px solid ${item.color}30`,
                  boxShadow: `0 8px 32px ${item.color}20`
                }}
              >
                {item.icon}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function StackingSection({
  title,
  subtitle,
  items,
  backgroundColor = "bg-white",
}: StackingSectionProps) {
  return (
    <section className={`relative z-10 pt-0 pb-0 ${backgroundColor}`}>
      {/* Header */}
      <div className="text-center mb-4 px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <p className="font-poppins text-[#757575] text-base font-medium mb-2">
            {subtitle}
          </p>
          <div className="w-12 h-0.5 bg-[#C20000] mx-auto" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-6 text-[#505050] font-poppins"
        >
          {title}
        </motion.h2>
      </div>

      {/* Stacking Cards */}
      <div className="relative mt-0">
        {items.map((item, index) => {
          const targetScale = 1 - (items.length - index) * 0.05;
          return (
            <StackingCard
              key={item.id}
              item={item}
              index={index}
              range={[index * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}
