"use client";

import { useState, useEffect } from "react";
import { DynamicIcon } from "./DynamicIcon";

interface NavItem {
  id: string;
  label: string;
  icon: string;
}

interface SidebarNavProps {
  items: NavItem[];
}

export function SidebarNav({ items }: SidebarNavProps) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is currently in view
      for (const item of items) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="fixed left-2 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-2 p-2">
      {/* Background pill */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-slate-100 -z-10" />

      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group"
          style={{
            background: activeSection === item.id ? "#1E40AF" : "transparent",
            color: activeSection === item.id ? "white" : "#64748B",
          }}
          title={item.label}
        >
          <DynamicIcon name={item.icon} className="w-5 h-5" />

          {/* Tooltip */}
          <div className="absolute left-14 bg-slate-900 text-white px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            {item.label}
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
          </div>
        </button>
      ))}
    </div>
  );
}
