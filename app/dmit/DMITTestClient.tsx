"use client";

import { useState } from "react";
import { ChevronRight, CheckCircle, RotateCcw, Brain, Fingerprint, Zap, Target, Clock, FileText, BarChart3 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { TranslatedText } from "@/app/components/TranslatedText";

interface Question {
  id: number;
  category: "fingerprint" | "brain" | "learning" | "personality";
  text: string;
  options: { label: string; value: number }[];
}

interface CategoryScore {
  name: string;
  score: number;
  maxScore: number;
  percentage: number;
  description: string;
  recommendations: string[];
}

const categoryMeta: Record<string, { label: string; icon: any; color: string }> = {
  fingerprint: { label: "Fingerprint Pattern", icon: Fingerprint, color: "#C20000" },
  brain:       { label: "Brain Dominance",     icon: Brain,       color: "#1E40AF" },
  learning:    { label: "Learning Style",      icon: Zap,         color: "#F59E0B" },
  personality: { label: "Personality & Career",icon: Target,      color: "#10B981" },
};

const questions: Question[] = [
  { id: 1,  category: "fingerprint", text: "When analyzing patterns, you prefer to:", options: [{ label: "Look at the big picture first", value: 10 }, { label: "Focus on specific details", value: 5 }, { label: "Understand the underlying structure", value: 8 }, { label: "See how parts connect together", value: 7 }] },
  { id: 2,  category: "fingerprint", text: "Your natural approach to problem-solving is:", options: [{ label: "Systematic and methodical", value: 10 }, { label: "Creative and intuitive", value: 5 }, { label: "Analytical and logical", value: 8 }, { label: "Collaborative and consultative", value: 6 }] },
  { id: 3,  category: "fingerprint", text: "When learning something new, you typically:", options: [{ label: "Follow a structured step-by-step approach", value: 10 }, { label: "Jump around and explore freely", value: 4 }, { label: "Ask questions and seek understanding", value: 8 }, { label: "Learn by doing and experimenting", value: 7 }] },
  { id: 4,  category: "fingerprint", text: "Your decision-making style is best described as:", options: [{ label: "Data-driven and evidence-based", value: 10 }, { label: "Gut-feeling and intuitive", value: 5 }, { label: "Balanced between logic and emotion", value: 8 }, { label: "Consensus-seeking and collaborative", value: 6 }] },
  { id: 5,  category: "fingerprint", text: "In your daily life, you are most energized by:", options: [{ label: "Completing tasks and achieving goals", value: 10 }, { label: "Exploring new ideas and possibilities", value: 5 }, { label: "Understanding complex systems", value: 8 }, { label: "Helping and connecting with others", value: 7 }] },
  { id: 6,  category: "brain", text: "Which hemisphere tendency resonates most with you?", options: [{ label: "Left (logical, analytical, sequential)", value: 10 }, { label: "Right (creative, intuitive, holistic)", value: 5 }, { label: "Balanced between both", value: 8 }, { label: "Depends on the situation", value: 7 }] },
  { id: 7,  category: "brain", text: "Your brain's processing strength is primarily in:", options: [{ label: "Frontal Lobe (reasoning, planning, decision-making)", value: 10 }, { label: "Parietal Lobe (spatial, kinesthetic, coordination)", value: 8 }, { label: "Temporal Lobe (auditory, memory, language)", value: 7 }, { label: "Occipital Lobe (visual, pattern recognition)", value: 9 }] },
  { id: 8,  category: "brain", text: "When processing information, you tend to:", options: [{ label: "Think in words and language", value: 10 }, { label: "Visualize images and diagrams", value: 9 }, { label: "Feel emotions and sensations", value: 6 }, { label: "Move and experience physically", value: 7 }] },
  { id: 9,  category: "brain", text: "Your corpus callosum (brain integration) strength shows in:", options: [{ label: "Seamless switching between tasks", value: 10 }, { label: "Difficulty multitasking", value: 3 }, { label: "Strong focus on one thing at a time", value: 5 }, { label: "Ability to see connections across domains", value: 9 }] },
  { id: 10, category: "brain", text: "Your cognitive style is best described as:", options: [{ label: "Sequential and step-by-step", value: 10 }, { label: "Simultaneous and holistic", value: 5 }, { label: "Flexible and adaptive", value: 8 }, { label: "Specialized and focused", value: 6 }] },
  { id: 11, category: "learning", text: "You learn best through:", options: [{ label: "Visual materials (diagrams, charts, videos)", value: 9 }, { label: "Listening and discussion", value: 7 }, { label: "Hands-on practice and movement", value: 8 }, { label: "Reading and writing", value: 10 }] },
  { id: 12, category: "learning", text: "In an academic environment, you prefer:", options: [{ label: "Structured curriculum and clear guidelines", value: 10 }, { label: "Project-based and experiential learning", value: 7 }, { label: "Discussion-based seminars", value: 8 }, { label: "Independent research and exploration", value: 6 }] },
  { id: 13, category: "learning", text: "Your ideal learning pace is:", options: [{ label: "Fast-paced with quick progression", value: 10 }, { label: "Slow and thorough with deep understanding", value: 8 }, { label: "Flexible and self-paced", value: 7 }, { label: "Collaborative with peer learning", value: 6 }] },
  { id: 14, category: "learning", text: "When facing a difficult concept, you:", options: [{ label: "Break it down into smaller parts", value: 10 }, { label: "Look for the big picture connection", value: 6 }, { label: "Seek help from others", value: 7 }, { label: "Practice repeatedly until it clicks", value: 8 }] },
  { id: 15, category: "learning", text: "Your memory strength is in:", options: [{ label: "Facts, numbers, and details", value: 10 }, { label: "Stories, narratives, and concepts", value: 7 }, { label: "Visual images and spatial layouts", value: 9 }, { label: "Procedures and how-to processes", value: 8 }] },
  { id: 16, category: "personality", text: "In a team setting, you typically:", options: [{ label: "Lead and take charge", value: 10 }, { label: "Support and collaborate", value: 8 }, { label: "Work independently on your part", value: 5 }, { label: "Facilitate and mediate", value: 7 }] },
  { id: 17, category: "personality", text: "Your ideal work environment is:", options: [{ label: "Structured, organized, and predictable", value: 10 }, { label: "Dynamic, creative, and flexible", value: 5 }, { label: "Collaborative and social", value: 7 }, { label: "Independent and autonomous", value: 6 }] },
  { id: 18, category: "personality", text: "Career-wise, you are most motivated by:", options: [{ label: "Achievement and recognition", value: 10 }, { label: "Making a positive impact", value: 8 }, { label: "Financial security and stability", value: 7 }, { label: "Personal growth and learning", value: 9 }] },
  { id: 19, category: "personality", text: "Your stress response under pressure is to:", options: [{ label: "Stay calm and focused", value: 10 }, { label: "Become anxious and overwhelmed", value: 2 }, { label: "Seek support from others", value: 6 }, { label: "Take a break and recharge", value: 7 }] },
  { id: 20, category: "personality", text: "Your long-term career goal is to:", options: [{ label: "Reach a leadership position", value: 10 }, { label: "Become an expert in your field", value: 9 }, { label: "Maintain work-life balance", value: 7 }, { label: "Make a meaningful difference", value: 8 }] },
];

export default function DMITTestClient() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [testStarted, setTestStarted] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
    if (currentQuestion < questions.length -  1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    }
  };

  const handleNext = () => {
    if (answers[currentQuestion] !== undefined) {
      if (currentQuestion < questions.length -  1) setCurrentQuestion(currentQuestion + 1);
      else setTestCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion -  1);
  };

  const calculateScores = (): CategoryScore[] => {
    const cats = ["fingerprint", "brain", "learning", "personality"] as const;
    return cats.map((cat) => {
      const catQs = questions.filter((q) => q.category === cat);
      const score = catQs.reduce((sum, q) => sum + (answers[questions.indexOf(q)] || 0), 0);
      const maxScore = catQs.length * 10;
      const percentage = Math.round((score / maxScore) * 100);
      const meta = {
        fingerprint: { name: "Fingerprint Pattern Analysis", description: "Your natural cognitive patterns and problem-solving approach", recommendations: ["Leverage your natural pattern recognition strengths", "Develop complementary skills in weaker areas", "Choose roles that align with your cognitive style", "Build on your systematic or creative tendencies"] },
        brain:       { name: "Brain Dominance Profile",       description: "Your brain hemisphere and lobe dominance patterns",          recommendations: ["Understand your natural processing strengths", "Use visualization or analytical tools as needed", "Develop whole-brain thinking capabilities", "Choose careers matching your brain profile"] },
        learning:    { name: "Learning Style",                description: "Your preferred learning methods and information processing",  recommendations: ["Adapt your study methods to your learning style", "Seek educational environments that match your preferences", "Develop skills in non-preferred learning modalities", "Use multi-sensory approaches for better retention"] },
        personality: { name: "Personality & Career Fit",      description: "Your personality traits and career alignment potential",     recommendations: ["Pursue careers aligned with your personality type", "Develop leadership or collaboration skills as needed", "Build resilience and stress management techniques", "Create a career path matching your values and goals"] },
      }[cat];
      return { ...meta, score, maxScore, percentage };
    });
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setTestStarted(false);
    setTestCompleted(false);
  };

  // ── LANDING ──────────────────────────────────────────────────────
  if (!testStarted) {
    return (
      <div className="min-h-screen bg-white pt-20">
        {/* Hero */}
        <div className="bg-[#F9F9F9] border-b border-[#EEEEEE] px-4 sm:px-6 md:px-8 py-14 sm:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-[#FFF5F5] text-[#C20000] text-xs font-semibold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase">
              <TranslatedText>Assessment Tool</TranslatedText>
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#333333] mb-5 leading-tight">
              <TranslatedText as="span">DMIT Assessment Test</TranslatedText>
            </h1>
            <p className="text-[#757575] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              <TranslatedText as="span">Discover your dermatoglyphic profile through our comprehensive assessment. Analyze your fingerprint patterns, brain dominance, learning style, and personality for personalized career insights.</TranslatedText>
            </p>
          </div>
        </div>

        {/* Info cards */}
        <div className="px-4 sm:px-6 md:px-8 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: FileText, label: "20 Questions", sub: "Across 4 categories" },
                { icon: Clock,    label: "10–15 Minutes", sub: "To complete" },
                { icon: BarChart3,label: "Instant Results", sub: "With recommendations" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="border border-[#EEEEEE] rounded-xl p-5 text-center bg-white">
                  <div className="w-10 h-10 bg-[#FFF5F5] rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-[#C20000]" />
                  </div>
                  <p className="font-semibold text-[#333333] text-sm"><TranslatedText as="span">{label}</TranslatedText></p>
                  <p className="text-[#AAAAAA] text-xs mt-0.5"><TranslatedText as="span">{sub}</TranslatedText></p>
                </div>
              ))}
            </div>

            {/* What you'll discover */}
            <div className="border border-[#EEEEEE] rounded-xl p-6 sm:p-8 mb-6 bg-white">
              <h2 className="font-bold text-[#333333] text-lg mb-5"><TranslatedText as="span">What You'll Discover</TranslatedText></h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: Fingerprint, color: "#C20000", text: "Fingerprint pattern analysis and cognitive tendencies" },
                  { icon: Brain,       color: "#1E40AF", text: "Brain dominance profile and processing strengths" },
                  { icon: Zap,         color: "#F59E0B", text: "Optimal learning style and information processing" },
                  { icon: Target,      color: "#10B981", text: "Personality traits and ideal career alignment" },
                ].map(({ icon: Icon, color, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: `${color}15` }}>
                      <Icon className="w-4 h-4" style={{ color }} />
                    </div>
                    <p className="text-[#505050] text-sm leading-snug"><TranslatedText as="span">{text}</TranslatedText></p>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setTestStarted(true)}
              className="w-full bg-[#C20000] hover:bg-[#B30000] text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-base"
            >
              <TranslatedText as="span">Start DMIT Assessment</TranslatedText> <ChevronRight className="w-5 h-5" />
            </button>
            <p className="text-[#AAAAAA] text-xs text-center mt-4">
              <TranslatedText as="span">Your responses are confidential and used only for generating your personalized DMIT report.</TranslatedText>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ── RESULTS ───────────────────────────────────────────────────────
  if (testCompleted) {
    const scores = calculateScores();
    const overallPercentage = Math.round(scores.reduce((s, c) => s + c.percentage, 0) / scores.length);
    const overallLabel =
      overallPercentage >= 80 ? "Excellent — Strong alignment across all dimensions" :
      overallPercentage >= 60 ? "Good — Solid profile with clear strengths" :
      overallPercentage >= 40 ? "Average — Balanced profile with development areas" :
                                "Developing — Focus on targeted growth areas";

    return (
      <div className="min-h-screen bg-[#F9F9F9] pt-20 pb-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-[#FFF5F5] rounded-full flex items-center justify-center mx-auto mb-5">
              <CheckCircle className="w-8 h-8 text-[#C20000]" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#333333] mb-2"><TranslatedText as="span">Assessment Complete</TranslatedText></h1>
            <p className="text-[#757575]"><TranslatedText as="span">Here are your personalized dermatoglyphic insights</TranslatedText></p>
          </div>

          {/* Overall score */}
          <div className="bg-white border border-[#EEEEEE] rounded-2xl p-8 mb-6 text-center">
            <p className="text-[#AAAAAA] text-sm mb-2 uppercase tracking-widest font-semibold"><TranslatedText as="span">Overall DMIT Score</TranslatedText></p>
            <div className="text-6xl font-bold text-[#C20000] mb-3">{overallPercentage}%</div>
            <p className="text-[#757575] text-sm"><TranslatedText as="span">{overallLabel}</TranslatedText></p>
          </div>

          {/* Category scores */}
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {scores.map((cat, idx) => {
              const meta = Object.values(categoryMeta)[idx];
              const Icon = meta.icon;
              return (
                <div key={cat.name} className="bg-white border border-[#EEEEEE] rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${meta.color}15` }}>
                      <Icon className="w-5 h-5" style={{ color: meta.color }} />
                    </div>
                    <h3 className="font-bold text-[#333333] text-base leading-snug"><TranslatedText as="span">{cat.name}</TranslatedText></h3>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#AAAAAA] text-xs"><TranslatedText as="span">Score</TranslatedText></span>
                      <span className="font-bold text-[#C20000] text-sm">{cat.percentage}%</span>
                    </div>
                    <div className="w-full bg-[#EEEEEE] rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${cat.percentage}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className="h-full bg-[#C20000] rounded-full"
                      />
                    </div>
                  </div>

                  <p className="text-[#757575] text-xs mb-3"><TranslatedText as="span">{cat.description}</TranslatedText></p>

                  <div className="bg-[#F9F9F9] rounded-lg p-3 border border-[#EEEEEE]">
                    <p className="text-[#333333] text-xs font-semibold mb-2"><TranslatedText as="span">Key Insights</TranslatedText></p>
                    <ul className="space-y-1">
                      {cat.recommendations.slice(0, 2).map((r, i) => (
                        <li key={i} className="text-[#757575] text-xs flex gap-2">
                          <span className="text-[#C20000] flex-shrink-0">•</span><TranslatedText as="span">{r}</TranslatedText>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed profile */}
          <div className="bg-white border border-[#EEEEEE] rounded-2xl p-6 sm:p-8 mb-6">
            <h2 className="font-bold text-[#333333] text-xl mb-6"><TranslatedText as="span">Your Personalized DMIT Profile</TranslatedText></h2>
            <div className="space-y-6">
              {scores.map((cat) => (
                <div key={cat.name} className="border-l-4 border-[#C20000] pl-5">
                  <h3 className="font-bold text-[#333333] mb-1"><TranslatedText as="span">{cat.name}</TranslatedText></h3>
                  <p className="text-[#757575] text-sm mb-3"><TranslatedText as="span">{cat.description}</TranslatedText></p>
                  <div className="bg-[#F9F9F9] rounded-lg p-4 border border-[#EEEEEE]">
                    <p className="text-[#333333] text-xs font-semibold mb-2"><TranslatedText as="span">Recommended Actions</TranslatedText></p>
                    <ul className="space-y-1.5">
                      {cat.recommendations.map((r, i) => (
                        <li key={i} className="text-[#757575] text-sm flex gap-2">
                          <span className="text-[#C20000] flex-shrink-0">→</span><TranslatedText as="span">{r}</TranslatedText>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#C20000] rounded-2xl p-8 text-white text-center">
            <h3 className="font-bold text-xl mb-3"><TranslatedText as="span">Next Steps</TranslatedText></h3>
            <p className="text-white/80 text-sm mb-6 max-w-xl mx-auto leading-relaxed">
              <TranslatedText as="span">Use these DMIT insights to guide your academic stream selection, learning strategy, and long-term career planning. Your unique profile is your roadmap to success.</TranslatedText>
            </p>
            <button
              onClick={resetTest}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#C20000] font-semibold rounded-xl hover:bg-gray-50 transition-colors text-sm"
            >
              <RotateCcw className="w-4 h-4" /> <TranslatedText as="span">Retake Assessment</TranslatedText>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── QUIZ ──────────────────────────────────────────────────────────
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isAnswered = answers[currentQuestion] !== undefined;
  const meta = categoryMeta[question.category];
  const Icon = meta.icon;

  return (
    <div className="min-h-screen bg-[#F9F9F9] pt-20 pb-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-2xl mx-auto pt-8">

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#757575] text-sm">
              <TranslatedText as="span">Question</TranslatedText> {currentQuestion + 1} <TranslatedText as="span">of</TranslatedText> {questions.length}
            </span>
            <span className="text-[#757575] text-sm">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-[#EEEEEE] rounded-full h-1.5 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
              className="h-full bg-[#C20000] rounded-full"
            />
          </div>
        </div>

        {/* Question card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-[#EEEEEE] rounded-2xl p-6 sm:p-8 mb-5"
          >
            {/* Category badge */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${meta.color}15` }}>
                <Icon className="w-4 h-4" style={{ color: meta.color }} />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wide" style={{ color: meta.color }}>
                <TranslatedText as="span">{meta.label}</TranslatedText>
              </span>
            </div>

            {/* Question */}
            <h2 className="font-bold text-[#333333] text-lg sm:text-xl mb-7 leading-snug">
              <TranslatedText as="span">{question.text}</TranslatedText>
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, idx) => {
                const selected = answers[currentQuestion] === option.value;
                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(option.value)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      selected
                        ? "border-[#C20000] bg-[#FFF5F5]"
                        : "border-[#EEEEEE] bg-white hover:border-[#C20000]/40 hover:bg-[#FFF5F5]/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                        selected ? "border-[#C20000] bg-[#C20000]" : "border-[#EEEEEE]"
                      }`}>
                        {selected && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <span className="text-[#505050] text-sm leading-snug"><TranslatedText as="span">{option.label}</TranslatedText></span>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex gap-3">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex-1 py-3 border border-[#EEEEEE] text-[#757575] font-semibold rounded-xl hover:bg-[#F5F5F5] transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm"
          >
            <TranslatedText as="span">Previous</TranslatedText>
          </button>
          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className="flex-1 py-3 bg-[#C20000] hover:bg-[#B30000] text-white font-semibold rounded-xl transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm"
          >
            {currentQuestion === questions.length -  1 ? (
              <><CheckCircle className="w-4 h-4" /> <TranslatedText as="span">Complete</TranslatedText></>
            ) : (
              <><TranslatedText as="span">Next</TranslatedText> <ChevronRight className="w-4 h-4" /></>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
