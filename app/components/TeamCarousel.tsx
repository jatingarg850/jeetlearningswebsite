"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface TeamCarouselProps {
  members: TeamMember[];
}

export function TeamCarousel({ members }: TeamCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const updateCarousel = (newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((newIndex + members.length) % members.length);
    setTimeout(() => setIsAnimating(false), 800);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") updateCarousel(currentIndex -  1);
      if (e.key === "ArrowDown") updateCarousel(currentIndex + 1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isAnimating]);

  const getCardPosition = (index: number) => {
    const offset = (index -  currentIndex + members.length) % members.length;
    if (offset === 0) return "center";
    if (offset === 1) return "down-1";
    if (offset === 2) return "down-2";
    if (offset === members.length -  1) return "up-1";
    if (offset === members.length -  2) return "up-2";
    return "hidden";
  };

  const getCardStyles = (position: string) => {
    const baseStyle = {
      position: "absolute" as const,
      width: "400px",
      height: "225px",
      borderRadius: "20px",
      overflow: "hidden" as const,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      cursor: "pointer",
    };

    const positionStyles: Record<string, any> = {
      center: { scale: 1.1, y: 0, z: 0, opacity: 1, zIndex: 10 },
      "up-1": { scale: 0.9, y: -150, z: -100, opacity: 0.9, zIndex: 5 },
      "up-2": { scale: 0.8, y: -300, z: -300, opacity: 0.7, zIndex: 1 },
      "down-1": { scale: 0.9, y: 150, z: -100, opacity: 0.9, zIndex: 5 },
      "down-2": { scale: 0.8, y: 300, z: -300, opacity: 0.7, zIndex: 1 },
      hidden: { opacity: 0, pointerEvents: "none" as const },
    };

    return { ...baseStyle, ...positionStyles[position] };
  };

  return (
    <div className="flex w-full gap-20 items-center justify-center py-12">
      {/* Carousel Section */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-full max-w-[500px] h-[70vh] perspective">
          {/* Navigation Arrows -  Desktop */}
          <motion.button
            onClick={() => updateCarousel(currentIndex -  1)}
            className="absolute top-0 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center justify-center w-20 h-20 rounded-full transition-all"
            whileHover={{ scale: 1.2 }}
            disabled={isAnimating}
          >
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>

          {/* Carousel Track */}
          <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: "1000px" }}>
            {members.map((member, i) => {
              const position = getCardPosition(i);
              const styles = getCardStyles(position);

              return (
                <motion.div
                  key={i}
                  onClick={() => updateCarousel(i)}
                  initial={false}
                  animate={{
                    scale: styles.scale,
                    y: styles.y,
                    opacity: styles.opacity,
                    zIndex: styles.zIndex,
                  }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute bg-white rounded-[20px] overflow-hidden"
                  style={{
                    width: "400px",
                    height: "225px",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                    cursor: "pointer",
                  }}
                >
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    animate={{
                      filter: position === "center" ? "grayscale(0%)" : "grayscale(100%)",
                    }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>
              );
            })}
          </div>

          {/* Down Arrow */}
          <motion.button
            onClick={() => updateCarousel(currentIndex + 1)}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 hidden md:flex items-center justify-center w-20 h-20 rounded-full transition-all"
            whileHover={{ scale: 1.2 }}
            disabled={isAnimating}
          >
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Controls Section */}
      <div className="flex-1 flex flex-col items-center justify-center gap-10">
        {/* Navigation Controls */}
        <div className="flex gap-8 items-center justify-center">
          <motion.button
            onClick={() => updateCarousel(currentIndex -  1)}
            className="flex items-center justify-center w-20 h-20 rounded-full transition-all"
            whileHover={{ scale: 1.2 }}
            disabled={isAnimating}
          >
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </motion.button>
          <motion.button
            onClick={() => updateCarousel(currentIndex + 1)}
            className="flex items-center justify-center w-20 h-20 rounded-full transition-all"
            whileHover={{ scale: 1.2 }}
            disabled={isAnimating}
          >
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.button>
        </div>

        {/* Member Info */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-[#082A7B] mb-2">{members[currentIndex].name}</h2>
          <p className="text-xl text-[#848696] font-medium uppercase tracking-widest">{members[currentIndex].role}</p>
        </motion.div>

        {/* Dots */}
        <div className="flex gap-3 justify-center">
          {members.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => updateCarousel(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentIndex ? "bg-[#082A7B]" : "bg-[#082A7B]/20"
              }`}
              whileHover={{ scale: 1.3 }}
              animate={{
                scale: i === currentIndex ? 1.2 : 1,
              }}
              disabled={isAnimating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
