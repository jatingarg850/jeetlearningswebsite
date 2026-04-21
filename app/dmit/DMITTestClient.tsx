"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle, RotateCcw } from "lucide-react";

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

const questions: Question[] = [
  // Fingerprint Pattern Questions
  {
    id: 1,
    category: "fingerprint",
    text: "When analyzing patterns, you prefer to:",
    options: [
      { label: "Look at the big picture first", value: 10 },
      { label: "Focus on specific details", value: 5 },
      { label: "Understand the underlying structure", value: 8 },
      { label: "See how parts connect together", value: 7 },
    ],
  },
  {
    id: 2,
    category: "fingerprint",
    text: "Your natural approach to problem-solving is:",
    options: [
      { label: "Systematic and methodical", value: 10 },
      { label: "Creative and intuitive", value: 5 },
      { label: "Analytical and logical", value: 8 },
      { label: "Collaborative and consultative", value: 6 },
    ],
  },
  {
    id: 3,
    category: "fingerprint",
    text: "When learning something new, you typically:",
    options: [
      { label: "Follow a structured step-by-step approach", value: 10 },
      { label: "Jump around and explore freely", value: 4 },
      { label: "Ask questions and seek understanding", value: 8 },
      { label: "Learn by doing and experimenting", value: 7 },
    ],
  },
  {
    id: 4,
    category: "fingerprint",
    text: "Your decision-making style is best described as:",
    options: [
      { label: "Data-driven and evidence-based", value: 10 },
      { label: "Gut-feeling and intuitive", value: 5 },
      { label: "Balanced between logic and emotion", value: 8 },
      { label: "Consensus-seeking and collaborative", value: 6 },
    ],
  },
  {
    id: 5,
    category: "fingerprint",
    text: "In your daily life, you are most energized by:",
    options: [
      { label: "Completing tasks and achieving goals", value: 10 },
      { label: "Exploring new ideas and possibilities", value: 5 },
      { label: "Understanding complex systems", value: 8 },
      { label: "Helping and connecting with others", value: 7 },
    ],
  },

  // Brain Dominance Questions
  {
    id: 6,
    category: "brain",
    text: "Which hemisphere tendency resonates most with you?",
    options: [
      { label: "Left (logical, analytical, sequential)", value: 10 },
      { label: "Right (creative, intuitive, holistic)", value: 5 },
      { label: "Balanced between both", value: 8 },
      { label: "Depends on the situation", value: 7 },
    ],
  },
  {
    id: 7,
    category: "brain",
    text: "Your brain's processing strength is primarily in:",
    options: [
      { label: "Frontal Lobe (reasoning, planning, decision-making)", value: 10 },
      { label: "Parietal Lobe (spatial, kinesthetic, coordination)", value: 8 },
      { label: "Temporal Lobe (auditory, memory, language)", value: 7 },
      { label: "Occipital Lobe (visual, pattern recognition)", value: 9 },
    ],
  },
  {
    id: 8,
    category: "brain",
    text: "When processing information, you tend to:",
    options: [
      { label: "Think in words and language", value: 10 },
      { label: "Visualize images and diagrams", value: 9 },
      { label: "Feel emotions and sensations", value: 6 },
      { label: "Move and experience physically", value: 7 },
    ],
  },
  {
    id: 9,
    category: "brain",
    text: "Your corpus callosum (brain integration) strength shows in:",
    options: [
      { label: "Seamless switching between tasks", value: 10 },
      { label: "Difficulty multitasking", value: 3 },
      { label: "Strong focus on one thing at a time", value: 5 },
      { label: "Ability to see connections across domains", value: 9 },
    ],
  },
  {
    id: 10,
    category: "brain",
    text: "Your cognitive style is best described as:",
    options: [
      { label: "Sequential and step-by-step", value: 10 },
      { label: "Simultaneous and holistic", value: 5 },
      { label: "Flexible and adaptive", value: 8 },
      { label: "Specialized and focused", value: 6 },
    ],
  },

  // Learning Style Questions
  {
    id: 11,
    category: "learning",
    text: "You learn best through:",
    options: [
      { label: "Visual materials (diagrams, charts, videos)", value: 9 },
      { label: "Listening and discussion", value: 7 },
      { label: "Hands-on practice and movement", value: 8 },
      { label: "Reading and writing", value: 10 },
    ],
  },
  {
    id: 12,
    category: "learning",
    text: "In an academic environment, you prefer:",
    options: [
      { label: "Structured curriculum and clear guidelines", value: 10 },
      { label: "Project-based and experiential learning", value: 7 },
      { label: "Discussion-based seminars", value: 8 },
      { label: "Independent research and exploration", value: 6 },
    ],
  },
  {
    id: 13,
    category: "learning",
    text: "Your ideal learning pace is:",
    options: [
      { label: "Fast-paced with quick progression", value: 10 },
      { label: "Slow and thorough with deep understanding", value: 8 },
      { label: "Flexible and self-paced", value: 7 },
      { label: "Collaborative with peer learning", value: 6 },
    ],
  },
  {
    id: 14,
    category: "learning",
    text: "When facing a difficult concept, you:",
    options: [
      { label: "Break it down into smaller parts", value: 10 },
      { label: "Look for the big picture connection", value: 6 },
      { label: "Seek help from others", value: 7 },
      { label: "Practice repeatedly until it clicks", value: 8 },
    ],
  },
  {
    id: 15,
    category: "learning",
    text: "Your memory strength is in:",
    options: [
      { label: "Facts, numbers, and details", value: 10 },
      { label: "Stories, narratives, and concepts", value: 7 },
      { label: "Visual images and spatial layouts", value: 9 },
      { label: "Procedures and how-to processes", value: 8 },
    ],
  },

  // Personality & Career Alignment Questions
  {
    id: 16,
    category: "personality",
    text: "In a team setting, you typically:",
    options: [
      { label: "Lead and take charge", value: 10 },
      { label: "Support and collaborate", value: 8 },
      { label: "Work independently on your part", value: 5 },
      { label: "Facilitate and mediate", value: 7 },
    ],
  },
  {
    id: 17,
    category: "personality",
    text: "Your ideal work environment is:",
    options: [
      { label: "Structured, organized, and predictable", value: 10 },
      { label: "Dynamic, creative, and flexible", value: 5 },
      { label: "Collaborative and social", value: 7 },
      { label: "Independent and autonomous", value: 6 },
    ],
  },
  {
    id: 18,
    category: "personality",
    text: "Career-wise, you are most motivated by:",
    options: [
      { label: "Achievement and recognition", value: 10 },
      { label: "Making a positive impact", value: 8 },
      { label: "Financial security and stability", value: 7 },
      { label: "Personal growth and learning", value: 9 },
    ],
  },
  {
    id: 19,
    category: "personality",
    text: "Your stress response under pressure is to:",
    options: [
      { label: "Stay calm and focused", value: 10 },
      { label: "Become anxious and overwhelmed", value: 2 },
      { label: "Seek support from others", value: 6 },
      { label: "Take a break and recharge", value: 7 },
    ],
  },
  {
    id: 20,
    category: "personality",
    text: "Your long-term career goal is to:",
    options: [
      { label: "Reach a leadership position", value: 10 },
      { label: "Become an expert in your field", value: 9 },
      { label: "Maintain work-life balance", value: 7 },
      { label: "Make a meaningful difference", value: 8 },
    ],
  },
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

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    }
  };

  const handleNext = () => {
    if (answers[currentQuestion] !== undefined) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setTestCompleted(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScores = (): CategoryScore[] => {
    const fingerprintQuestions = questions.filter((q) => q.category === "fingerprint");
    const brainQuestions = questions.filter((q) => q.category === "brain");
    const learningQuestions = questions.filter((q) => q.category === "learning");
    const personalityQuestions = questions.filter((q) => q.category === "personality");

    const fingerprintScore = fingerprintQuestions.reduce((sum, q) => {
      const questionIndex = questions.indexOf(q);
      return sum + (answers[questionIndex] || 0);
    }, 0);

    const brainScore = brainQuestions.reduce((sum, q) => {
      const questionIndex = questions.indexOf(q);
      return sum + (answers[questionIndex] || 0);
    }, 0);

    const learningScore = learningQuestions.reduce((sum, q) => {
      const questionIndex = questions.indexOf(q);
      return sum + (answers[questionIndex] || 0);
    }, 0);

    const personalityScore = personalityQuestions.reduce((sum, q) => {
      const questionIndex = questions.indexOf(q);
      return sum + (answers[questionIndex] || 0);
    }, 0);

    const fingerprintMax = fingerprintQuestions.length * 10;
    const brainMax = brainQuestions.length * 10;
    const learningMax = learningQuestions.length * 10;
    const personalityMax = personalityQuestions.length * 10;

    return [
      {
        name: "Fingerprint Pattern Analysis",
        score: fingerprintScore,
        maxScore: fingerprintMax,
        percentage: Math.round((fingerprintScore / fingerprintMax) * 100),
        description: "Your natural cognitive patterns and problem-solving approach",
        recommendations: [
          "Leverage your natural pattern recognition strengths",
          "Develop complementary skills in weaker areas",
          "Choose roles that align with your cognitive style",
          "Build on your systematic or creative tendencies",
        ],
      },
      {
        name: "Brain Dominance Profile",
        score: brainScore,
        maxScore: brainMax,
        percentage: Math.round((brainScore / brainMax) * 100),
        description: "Your brain hemisphere and lobe dominance patterns",
        recommendations: [
          "Understand your natural processing strengths",
          "Use visualization or analytical tools as needed",
          "Develop whole-brain thinking capabilities",
          "Choose careers matching your brain profile",
        ],
      },
      {
        name: "Learning Style",
        score: learningScore,
        maxScore: learningMax,
        percentage: Math.round((learningScore / learningMax) * 100),
        description: "Your preferred learning methods and information processing",
        recommendations: [
          "Adapt your study methods to your learning style",
          "Seek educational environments that match your preferences",
          "Develop skills in non-preferred learning modalities",
          "Use multi-sensory approaches for better retention",
        ],
      },
      {
        name: "Personality & Career Fit",
        score: personalityScore,
        maxScore: personalityMax,
        percentage: Math.round((personalityScore / personalityMax) * 100),
        description: "Your personality traits and career alignment potential",
        recommendations: [
          "Pursue careers aligned with your personality type",
          "Develop leadership or collaboration skills as needed",
          "Build resilience and stress management techniques",
          "Create a career path matching your values and goals",
        ],
      },
    ];
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setTestStarted(false);
    setTestCompleted(false);
  };

  if (!testStarted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 flex items-center justify-center px-4 py-8"
      >
        <div className="max-w-2xl w-full bg-white rounded-2xl border border-[#EEEEEE] p-8 shadow-lg">
          <div className="text-center mb-8">
            <h1 className="font-poppins font-bold text-[#333333] text-3xl mb-3">
              DMIT Assessment Test
            </h1>
            <p className="font-poppins text-[#757575] text-base leading-relaxed">
              Discover your dermatoglyphic profile through our comprehensive DMIT assessment. This test analyzes your fingerprint patterns, brain dominance, learning style, and personality to provide personalized career and development insights.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
              <h3 className="font-poppins font-bold text-[#333333] mb-3">What You'll Discover:</h3>
              <ul className="space-y-2 font-poppins text-[#757575] text-sm">
                <li>✓ Your fingerprint pattern analysis and cognitive tendencies</li>
                <li>✓ Your brain dominance profile and processing strengths</li>
                <li>✓ Your optimal learning style and information processing method</li>
                <li>✓ Your personality traits and ideal career alignment</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-poppins font-bold text-[#333333] mb-3">Test Details:</h3>
              <ul className="space-y-2 font-poppins text-[#757575] text-sm">
                <li>• 20 questions across 4 categories</li>
                <li>• Multiple choice format</li>
                <li>• Takes approximately 10-15 minutes</li>
                <li>• Instant results with personalized recommendations</li>
              </ul>
            </div>
          </div>

          <button
            onClick={() => setTestStarted(true)}
            className="w-full bg-[#C20000] text-white font-poppins font-bold py-3 rounded-lg hover:bg-[#B30000] transition-colors flex items-center justify-center gap-2"
          >
            Start DMIT Assessment <ChevronRight className="w-5 h-5" />
          </button>

          <p className="font-poppins text-[#AAAAAA] text-xs text-center mt-4">
            Your responses are confidential and used only for generating your personalized DMIT report.
          </p>
        </div>
      </motion.div>
    );
  }

  if (testCompleted) {
    const scores = calculateScores();
    const overallPercentage = Math.round(
      scores.reduce((sum, s) => sum + s.percentage, 0) / scores.length
    );

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 px-4 py-8"
      >
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <h1 className="font-poppins font-bold text-[#333333] text-3xl mb-2">
              DMIT Assessment Complete!
            </h1>
            <p className="font-poppins text-[#757575]">
              Here are your personalized dermatoglyphic insights
            </p>
          </motion.div>

          {/* Overall Score */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-[#EEEEEE] p-8 mb-6 text-center"
          >
            <p className="font-poppins text-[#757575] text-sm mb-2">Overall DMIT Score</p>
            <div className="text-5xl font-poppins font-bold text-[#C20000] mb-2">
              {overallPercentage}%
            </div>
            <p className="font-poppins text-[#757575]">
              {overallPercentage >= 80
                ? "Excellent - Strong alignment across all dimensions"
                : overallPercentage >= 60
                ? "Good - Solid profile with clear strengths"
                : overallPercentage >= 40
                ? "Average - Balanced profile with development areas"
                : "Developing - Focus on targeted growth areas"}
            </p>
          </motion.div>

          {/* Category Scores */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {scores.map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="bg-white rounded-2xl border border-[#EEEEEE] p-6"
              >
                <h3 className="font-poppins font-bold text-[#333333] text-lg mb-4">
                  {category.name}
                </h3>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-poppins text-[#757575] text-sm">Score</span>
                    <span className="font-poppins font-bold text-[#C20000]">
                      {category.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-[#EEEEEE] rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${category.percentage}%` }}
                      transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                      className="h-full bg-gradient-to-r from-[#C20000] to-[#FF6B6B]"
                    />
                  </div>
                </div>

                <p className="font-poppins text-[#757575] text-sm mb-4">
                  {category.description}
                </p>

                <div className="bg-[#F5F5F5] rounded-lg p-3">
                  <p className="font-poppins font-semibold text-[#333333] text-xs mb-2">
                    Key Insights:
                  </p>
                  <ul className="space-y-1">
                    {category.recommendations.slice(0, 2).map((rec, i) => (
                      <li key={i} className="font-poppins text-[#757575] text-xs">
                        • {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl border border-[#EEEEEE] p-8 mb-8"
          >
            <h2 className="font-poppins font-bold text-[#333333] text-2xl mb-6">
              Your Personalized DMIT Profile
            </h2>

            <div className="space-y-6">
              {scores.map((category) => (
                <div key={category.name} className="border-l-4 border-[#C20000] pl-6">
                  <h3 className="font-poppins font-bold text-[#333333] text-lg mb-2">
                    {category.name}
                  </h3>
                  <p className="font-poppins text-[#757575] mb-3">
                    {category.description}
                  </p>
                  <div className="bg-[#F5F5F5] rounded-lg p-4">
                    <p className="font-poppins font-semibold text-[#333333] text-sm mb-3">
                      Recommended Actions:
                    </p>
                    <ul className="space-y-2">
                      {category.recommendations.map((rec, i) => (
                        <li key={i} className="font-poppins text-[#757575] text-sm flex gap-2">
                          <span className="text-[#C20000]">→</span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-[#C20000] to-[#FF6B6B] rounded-2xl p-8 text-white text-center mb-8"
          >
            <h3 className="font-poppins font-bold text-2xl mb-3">Next Steps</h3>
            <p className="font-poppins mb-6">
              Use these DMIT insights to guide your academic stream selection, learning strategy, and long-term career planning. Your unique profile is your roadmap to success.
            </p>
            <button
              onClick={resetTest}
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#C20000] font-poppins font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
              Retake Assessment
            </button>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isAnswered = answers[currentQuestion] !== undefined;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 px-4 py-8"
    >
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="font-poppins text-[#757575] text-sm">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="font-poppins text-[#757575] text-sm">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-[#EEEEEE] rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-[#C20000] to-[#FF6B6B]"
            />
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-white rounded-2xl border border-[#EEEEEE] p-8 mb-6"
          >
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block bg-[#FFF5F5] text-[#C20000] font-poppins font-semibold text-xs px-3 py-1 rounded-full">
                {question.category === "fingerprint"
                  ? "Fingerprint Pattern"
                  : question.category === "brain"
                  ? "Brain Dominance"
                  : question.category === "learning"
                  ? "Learning Style"
                  : "Personality & Career"}
              </span>
            </div>

            {/* Question */}
            <h2 className="font-poppins font-bold text-[#333333] text-xl mb-8">
              {question.text}
            </h2>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {question.options.map((option, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleAnswer(option.value)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all font-poppins ${
                    answers[currentQuestion] === option.value
                      ? "border-[#C20000] bg-[#FFF5F5]"
                      : "border-[#EEEEEE] bg-white hover:border-[#C20000]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        answers[currentQuestion] === option.value
                          ? "border-[#C20000] bg-[#C20000]"
                          : "border-[#EEEEEE]"
                      }`}
                    >
                      {answers[currentQuestion] === option.value && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="text-[#333333]">{option.label}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex-1 py-3 px-4 border border-[#EEEEEE] text-[#757575] font-poppins font-semibold rounded-lg hover:bg-[#F5F5F5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className="flex-1 py-3 px-4 bg-[#C20000] text-white font-poppins font-semibold rounded-lg hover:bg-[#B30000] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {currentQuestion === questions.length - 1 ? (
              <>
                Complete <CheckCircle className="w-5 h-5" />
              </>
            ) : (
              <>
                Next <ChevronRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
