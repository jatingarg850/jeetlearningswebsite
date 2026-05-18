"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BRIGHT_BLUE = "#0A84FF";

interface Testimonial {
  id: string;
  name: string;
  title: string;
  location: string;
  image: string;
  quote: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [rotX, setRotX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!slideRef.current) return;

    const rect = slideRef.current.getBoundingClientRect();
    const x = e.clientX -  rect.left;
    const y = e.clientY -  rect.top;

    const rotYValue = ((x -  rect.width / 2) / (Math.PI * 3)) * 0.5;
    const rotXValue = -((y -  rect.height / 2) / (Math.PI * 4)) * 0.5;

    setRotY(rotYValue);
    setRotX(rotXValue);
  };

  const handleMouseLeave = () => {
    setRotX(0);
    setRotY(0);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev -  1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const getPrevIndex = () => (current -  1 + testimonials.length) % testimonials.length;
  const getNextIndex = () => (current + 1) % testimonials.length;

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: `linear-gradient(135deg, #FFFFFF 0%, ${BRIGHT_BLUE}08 100%)` }}>
      {/* Animated background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: BRIGHT_BLUE, top: "10%", right: "-10%" }}
      />

      <div className="max-w-[1090px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#505050] mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg text-[#757575] max-w-2xl mx-auto">
            Hear from actuaries who transformed their careers with our guidance
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="flex items-center justify-center gap-8">
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            className="p-3 rounded-full backdrop-blur-md transition-all"
            style={{
              background: `linear-gradient(135deg, ${BRIGHT_BLUE}20 0%, ${BRIGHT_BLUE}10 100%)`,
              border: `2px solid ${BRIGHT_BLUE}30`,
            }}
          >
            <ChevronLeft className="w-6 h-6" style={{ color: BRIGHT_BLUE }} />
          </motion.button>

          {/* Slides Container */}
          <div className="flex items-center justify-center gap-6 perspective">
            {/* Previous Slide */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 0.5, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block"
              style={{
                transform: "perspective(1000px) rotateY(45deg) scale(0.8)",
                opacity: 0.5,
              }}
            >
              <div className="w-64 h-80 rounded-2xl overflow-hidden backdrop-blur-md"
                style={{
                  background: `linear-gradient(135deg, ${BRIGHT_BLUE}10 0%, ${BRIGHT_BLUE}05 100%)`,
                  border: `2px solid ${BRIGHT_BLUE}20`,
                }}
              >
                <img
                  src={testimonials[getPrevIndex()].image}
                  alt={testimonials[getPrevIndex()].name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Current Slide */}
            <motion.div
              ref={slideRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative"
              style={{
                transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.2)`,
                transformStyle: "preserve-3d",
              }}
            >
              <div className="w-72 h-96 rounded-3xl overflow-hidden backdrop-blur-md cursor-pointer"
                style={{
                  background: `linear-gradient(135deg, ${BRIGHT_BLUE}25 0%, ${BRIGHT_BLUE}05 100%)`,
                  border: `3px solid ${BRIGHT_BLUE}30`,
                  boxShadow: `0 20px 60px ${BRIGHT_BLUE}25`,
                }}
              >
                <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info Overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-md"
                style={{
                  background: `linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)`,
                }}
              >
                <h3 className="text-xl font-bold text-white mb-1">
                  {testimonials[current].name}
                </h3>
                <p className="text-sm text-blue-200 mb-2">
                  {testimonials[current].title}
                </p>
                <p className="text-xs text-blue-100">
                  {testimonials[current].location}
                </p>
              </motion.div>
            </motion.div>

            {/* Next Slide */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 0.5, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block"
              style={{
                transform: "perspective(1000px) rotateY(-45deg) scale(0.8)",
                opacity: 0.5,
              }}
            >
              <div className="w-64 h-80 rounded-2xl overflow-hidden backdrop-blur-md"
                style={{
                  background: `linear-gradient(135deg, ${BRIGHT_BLUE}10 0%, ${BRIGHT_BLUE}05 100%)`,
                  border: `2px solid ${BRIGHT_BLUE}20`,
                }}
              >
                <img
                  src={testimonials[getNextIndex()].image}
                  alt={testimonials[getNextIndex()].name}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="p-3 rounded-full backdrop-blur-md transition-all"
            style={{
              background: `linear-gradient(135deg, ${BRIGHT_BLUE}20 0%, ${BRIGHT_BLUE}10 100%)`,
              border: `2px solid ${BRIGHT_BLUE}30`,
            }}
          >
            <ChevronRight className="w-6 h-6" style={{ color: BRIGHT_BLUE }} />
          </motion.button>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 max-w-2xl mx-auto text-center p-8 rounded-2xl backdrop-blur-md"
          style={{
            background: `linear-gradient(135deg, ${BRIGHT_BLUE}12 0%, ${BRIGHT_BLUE}04 100%)`,
            border: `2px solid ${BRIGHT_BLUE}25`,
          }}
        >
          <p className="text-lg text-[#505050] italic mb-4">
            "{testimonials[current].quote}"
          </p>
          <div className="flex items-center justify-center gap-2">
            {testimonials.map((_, idx) => (
              <motion.button
                key={idx}
                onClick={() => setCurrent(idx)}
                className="rounded-full transition-all"
                style={{
                  width: current === idx ? "32px" : "12px",
                  height: "12px",
                  background: current === idx ? BRIGHT_BLUE : `${BRIGHT_BLUE}30`,
                }}
                whileHover={{ scale: 1.1 }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
