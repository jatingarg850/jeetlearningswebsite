"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";

const CANAM_RED = "#C20000";

interface PathItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  content: string[];
}

interface ActuarialPathAccordionProps {
  items: PathItem[];
}

export function ActuarialPathAccordion({ items }: ActuarialPathAccordionProps) {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set([items[0]?.id || ""]));

  const toggleExpanded = (id: string) => {
    const newIds = new Set(expandedIds);
    if (newIds.has(id)) {
      newIds.delete(id);
    } else {
      newIds.add(id);
    }
    setExpandedIds(newIds);
  };

  return (
    <section className="py-16 relative overflow-hidden" style={{ background: "rgba(248, 248, 248, 0.5)" }}>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ background: CANAM_RED, top: "10%", right: "-10%" }}
        />
      </div>

      <div className="max-w-[1090px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md mb-4" style={{ background: `${CANAM_RED}10`, border: `1px solid ${CANAM_RED}30` }}>
            <Sparkles className="w-4 h-4" style={{ color: CANAM_RED }} />
            <span className="text-sm font-semibold" style={{ color: CANAM_RED }}>Your Career Roadmap</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#505050] mb-4">
            Complete Guide to Actuarial Science
          </h2>
          <p className="text-lg text-[#757575] max-w-2xl mx-auto">
            Explore every aspect of becoming an actuary in India
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl overflow-hidden backdrop-blur-md transition-all"
              style={{
                background: expandedIds.has(item.id)
                  ? "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)"
                  : "linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.4) 100%)",
                border: expandedIds.has(item.id) ? `2px solid ${item.color}` : "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: expandedIds.has(item.id) ? `0 20px 60px ${item.color}20` : "0 4px 12px rgba(0, 0, 0, 0.05)",
              }}
            >
              {/* Header */}
              <motion.button
                onClick={() => toggleExpanded(item.id)}
                className="w-full p-6 flex items-center justify-between hover:opacity-80 transition-opacity"
              >
                <div className="flex items-center gap-4 text-left">
                  <motion.div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `${item.color}15` }}
                  >
                    {item.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-[#505050] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#757575]">{item.description}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedIds.has(item.id) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6" style={{ color: item.color }} />
                </motion.div>
              </motion.button>

              {/* Content */}
              <AnimatePresence>
                {expandedIds.has(item.id) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t" style={{ borderColor: `${item.color}20` }}>
                      <div className="space-y-3">
                        {item.content.map((point, pointIdx) => (
                          <motion.div
                            key={pointIdx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: pointIdx * 0.05 }}
                            className="flex gap-3 items-center"
                          >
                            <span
                              className="text-base font-bold flex-shrink-0 leading-relaxed"
                              style={{ color: item.color }}
                            >
                              →
                            </span>
                            <p className="text-[#505050] leading-relaxed">{point}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
