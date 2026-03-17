"use client";

import React from "react";
import {
  BarChart3, Briefcase, Calculator, Globe, TrendingUp,
  CircleDollarSign, GraduationCap, AlertTriangle, BookOpen,
  Building2, Building, Brain, Hourglass, Microscope,
  MessageSquare, Monitor, ClipboardList, Target, Star,
  Search, DollarSign, FileText, Megaphone, Link,
  Medal, Handshake, PartyPopper, Check,
  Scale, Factory, Lightbulb, Smartphone, Map,
  Train, Hospital, Dna, Stethoscope, Banknote,
  ShieldAlert, Sigma, TrendingDown, Users, Award,
  BookMarked,
  Rocket,
  HelpCircle,
  School,
  type LucideProps,
} from "lucide-react";

type LucideIcon = React.FC<LucideProps>;

// The icon map — no duplicate keys
const iconMap: Record<string, LucideIcon> = {
  BarChart3,
  Briefcase,
  Calculator,
  Globe,
  TrendingUp,
  TrendingDown,
  CircleDollarSign,
  GraduationCap,
  AlertTriangle,
  BookOpen,
  Building2,
  Building,
  Brain,
  Hourglass,
  Microscope,
  MessageSquare,
  Monitor,
  ClipboardList,
  Target,
  Star,
  Search,
  DollarSign,
  FileText,
  Megaphone,
  Link,
  Medal,
  Handshake,
  PartyPopper,
  Check,
  Scale,
  Factory,
  Lightbulb,
  Smartphone,
  Map,
  Train,
  Hospital,
  Dna,
  Stethoscope,
  Banknote,
  ShieldAlert,
  Sigma,
  Users,
  Award,
  BookMarked,
  Rocket,
  School,
};

// Emoji → Lucide icon name
const emojiMap: Record<string, string> = {
  "📊": "BarChart3",
  "💼": "Briefcase",
  "🧮": "Calculator",
  "🌐": "Globe",
  "📈": "TrendingUp",
  "📉": "TrendingDown",
  "∑": "Sigma",
  "Σ": "Sigma",
  "💰": "CircleDollarSign",
  "🎓": "GraduationCap",
  "⚠️": "ShieldAlert",
  "📚": "BookOpen",
  "🏦": "Building2",
  "🏫": "School",
  "🏛️": "Building",
  "🏛": "Building",
  "🧠": "Brain",
  "⏳": "Hourglass",
  "🔬": "Microscope",
  "💬": "MessageSquare",
  "💻": "Monitor",
  "📋": "ClipboardList",
  "🎯": "Target",
  "🌟": "Star",
  "🔎": "Search",
  "🔍": "Search",
  "💲": "DollarSign",
  "📜": "FileText",
  "📣": "Megaphone",
  "🔗": "Link",
  "🏅": "Medal",
  "🤝": "Handshake",
  "🎉": "PartyPopper",
  "✓": "Check",
  "⚖️": "Scale",
  "🏭": "Factory",
  "💡": "Lightbulb",
  "📱": "Smartphone",
  "🗺️": "Map",
  "🚉": "Train",
  "🏥": "Hospital",
  "🧬": "Dna",
  "🩺": "Stethoscope",
  "💵": "Banknote",
  "📒": "BookMarked",
  "📗": "BookMarked",
  "👥": "Users",
  "🏆": "Award",
  "🚀": "Rocket",
};

interface DynamicIconProps extends LucideProps {
  name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const resolvedName = emojiMap[name] ?? name;
  const IconComponent = iconMap[resolvedName];

  if (!IconComponent) {
    return <HelpCircle {...props} />;
  }

  return <IconComponent {...props} />;
}
