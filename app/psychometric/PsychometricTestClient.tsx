"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, CheckCircle, RotateCcw } from "lucide-react";

interface Question {
  id: number;
  category: "aptitude" | "iq" | "personality";
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
  // Aptitude Questions
  {
    id: 1,
    category: "aptitude",
    text: "If a train travels 240 km in 4 hours, what is its average speed?",
    options: [
      { label: "50 km/h", value: 0 },
      { label: "60 km/h", value: 10 },
      { label: "70 km/h", value: 0 },
      { label: "80 km/h", value: 0 },
    ],
  },
  {
    id: 2,
    category: "aptitude",
    text: "Which word is most similar to 'ABUNDANT'?",
    options: [
      { label: "Scarce", value: 0 },
      { label: "Plentiful", value: 10 },
      { label: "Limited", value: 0 },
      { label: "Rare", value: 0 },
    ],
  },
  {
    id: 3,
    category: "aptitude",
    text: "What comes next in the sequence: 2, 4, 8, 16, ?",
    options: [
      { label: "24", value: 0 },
      { label: "28", value: 0 },
      { label: "32", value: 10 },
      { label: "36", value: 0 },
    ],
  },
  {
    id: 4,
    category: "aptitude",
    text: "If you rearrange the letters 'SILENT', you can form a word meaning 'to listen'. What is it?",
    options: [
      { label: "LISTEN", value: 10 },
      { label: "ENLIST", value: 5 },
      { label: "TINSEL", value: 0 },
      { label: "INLETS", value: 0 },
    ],
  },
  {
    id: 5,
    category: "aptitude",
    text: "A lever with a fulcrum in the middle is used to lift a 100 kg weight. If the effort arm is 2 meters and the load arm is 1 meter, how much force is needed?",
    options: [
      { label: "25 kg", value: 0 },
      { label: "50 kg", value: 10 },
      { label: "75 kg", value: 0 },
      { label: "100 kg", value: 0 },
    ],
  },

  // IQ Questions
  {
    id: 6,
    category: "iq",
    text: "What is the next number in this series: 1, 1, 2, 3, 5, 8, 13, ?",
    options: [
      { label: "18", value: 0 },
      { label: "20", value: 0 },
      { label: "21", value: 10 },
      { label: "25", value: 0 },
    ],
  },
  {
    id: 7,
    category: "iq",
    text: "If all roses are flowers and some flowers fade quickly, which statement is true?",
    options: [
      { label: "All roses fade quickly", value: 0 },
      { label: "Some roses may fade quickly", value: 10 },
      { label: "No roses fade quickly", value: 0 },
      { label: "Flowers are roses", value: 0 },
    ],
  },
  {
    id: 8,
    category: "iq",
    text: "Which shape completes the pattern? (Imagine a 3x3 grid with shapes following a pattern)",
    options: [
      { label: "Circle", value: 0 },
      { label: "Square", value: 10 },
      { label: "Triangle", value: 0 },
      { label: "Pentagon", value: 0 },
    ],
  },
  {
    id: 9,
    category: "iq",
    text: "How many times does the letter 'E' appear in the word 'EXCELLENCE'?",
    options: [
      { label: "2", value: 0 },
      { label: "3", value: 10 },
      { label: "4", value: 0 },
      { label: "5", value: 0 },
    ],
  },
  {
    id: 10,
    category: "iq",
    text: "If you fold a piece of paper in half 5 times, how many layers will you have?",
    options: [
      { label: "10", value: 0 },
      { label: "16", value: 0 },
      { label: "32", value: 10 },
      { label: "64", value: 0 },
    ],
  },

  // Personality Questions
  {
    id: 11,
    category: "personality",
    text: "In a group project, you typically:",
    options: [
      { label: "Take charge and lead the team", value: 10 },
      { label: "Contribute ideas when asked", value: 5 },
      { label: "Support others' ideas", value: 8 },
      { label: "Work independently on your part", value: 3 },
    ],
  },
  {
    id: 12,
    category: "personality",
    text: "When facing a difficult problem, you:",
    options: [
      { label: "Seek advice from others", value: 5 },
      { label: "Analyze it logically yourself", value: 10 },
      { label: "Take time to think creatively", value: 8 },
      { label: "Avoid it until necessary", value: 0 },
    ],
  },
  {
    id: 13,
    category: "personality",
    text: "You prefer to spend your free time:",
    options: [
      { label: "With friends and family", value: 10 },
      { label: "Pursuing hobbies alone", value: 5 },
      { label: "Learning something new", value: 8 },
      { label: "Relaxing without plans", value: 3 },
    ],
  },
  {
    id: 14,
    category: "personality",
    text: "When receiving criticism, you:",
    options: [
      { label: "Feel hurt but try to improve", value: 8 },
      { label: "Analyze it objectively", value: 10 },
      { label: "Defend your position", value: 3 },
      { label: "Ignore it", value: 0 },
    ],
  },
  {
    id: 15,
    category: "personality",
    text: "Your ideal career would involve:",
    options: [
      { label: "Working with people", value: 10 },
      { label: "Solving complex problems", value: 8 },
      { label: "Creating new things", value: 9 },
      { label: "Following established procedures", value: 2 },
    ],
  },
];

export default function PsychometricTestClient() {
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
    const aptitudeQuestions = questions.filter((q) => q.category === "aptitude");
    const iqQuestions = questions.filter((q) => q.category === "iq");
    const personalityQuestions = questions.filter((q) => q.category === "personality");

    const aptitudeScore = aptitudeQuestions.reduce((sum, q, idx) => {
      const questionIndex = questions.indexOf(q);
      return sum + (answers[questionIndex] || 0);
    }, 0);

    const iqScore = iqQuestions.reduce((sum, q, idx) => {
      const questionIndex = questions.indexOf(q);
      return sum + (answers[questionIndex] || 0);
    }, 0);

    const personalityScore = personalityQuestions.reduce((sum, q, idx) => {
      const questionIndex = questions.indexOf(q);
      return sum + (answers[questionIndex] || 0);
    }, 0);

    const aptitudeMax = aptitudeQuestions.length * 10;
    const iqMax = iqQuestions.length * 10;
    const personalityMax = personalityQuestions.length * 10;

    return [
      {
        name: "Aptitude",
        score: aptitudeScore,
        maxScore: aptitudeMax,
        percentage: Math.round((aptitudeScore / aptitudeMax) * 100),
        description: "Your natural ability to acquire new skills and solve problems",
        recommendations: [
          "Focus on STEM subjects if score > 70%",
          "Develop logical reasoning skills",
          "Practice problem-solving regularly",
          "Consider careers in engineering, data science, or research",
        ],
      },
      {
        name: "IQ & Reasoning",
        score: iqScore,
        maxScore: iqMax,
        percentage: Math.round((iqScore / iqMax) * 100),
        description: "Your cognitive processing speed and abstract thinking ability",
        recommendations: [
          "Engage in puzzles and brain teasers",
          "Read complex literature and research papers",
          "Practice pattern recognition exercises",
          "Consider advanced academic programs",
        ],
      },
      {
        name: "Personality",
        score: personalityScore,
        maxScore: personalityMax,
        percentage: Math.round((personalityScore / personalityMax) * 100),
        description: "Your behavioral traits and interpersonal strengths",
        recommendations: [
          "Develop leadership skills if score > 70%",
          "Build strong communication abilities",
          "Seek roles that match your personality type",
          "Work on emotional intelligence",
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
        className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center px-4 py-8"
      >
        <div className="max-w-2xl w-full bg-white rounded-2xl border border-[#EEEEEE] p-8 shadow-lg">
          <div className="text-center mb-8">
            <h1 className="font-poppins font-bold text-[#333333] text-3xl mb-3">
              Psychometric Assessment Test
            </h1>
            <p className="font-poppins text-[#757575] text-base leading-relaxed">
              Discover your aptitude, IQ, and personality profile through our comprehensive psychometric test. This assessment takes approximately 10-15 minutes and provides personalized insights for your career and personal development.
            </p>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-poppins font-bold text-[#333333] mb-3">What You'll Discover:</h3>
              <ul className="space-y-2 font-poppins text-[#757575] text-sm">
                <li>✓ Your natural aptitude for learning and problem-solving</li>
                <li>✓ Your cognitive reasoning and IQ profile</li>
                <li>✓ Your personality traits and behavioral strengths</li>
                <li>✓ Personalized career and development recommendations</li>
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <h3 className="font-poppins font-bold text-[#333333] mb-3">Test Details:</h3>
              <ul className="space-y-2 font-poppins text-[#757575] text-sm">
                <li>• 15 questions across 3 categories</li>
                <li>• Multiple choice format</li>
                <li>• No preparation needed</li>
                <li>• Instant results and recommendations</li>
              </ul>
            </div>
          </div>

          <button
            onClick={() => setTestStarted(true)}
            className="w-full bg-[#C20000] text-white font-poppins font-bold py-3 rounded-lg hover:bg-[#B30000] transition-colors flex items-center justify-center gap-2"
          >
            Start Assessment <ChevronRight className="w-5 h-5" />
          </button>

          <p className="font-poppins text-[#AAAAAA] text-xs text-center mt-4">
            Your responses are confidential and used only for generating your personalized report.
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
              Assessment Complete!
            </h1>
            <p className="font-poppins text-[#757575]">
              Here are your personalized psychometric insights
            </p>
          </motion.div>

          {/* Overall Score */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-[#EEEEEE] p-8 mb-6 text-center"
          >
            <p className="font-poppins text-[#757575] text-sm mb-2">Overall Assessment Score</p>
            <div className="text-5xl font-poppins font-bold text-[#C20000] mb-2">
              {overallPercentage}%
            </div>
            <p className="font-poppins text-[#757575]">
              {overallPercentage >= 80
                ? "Excellent - Outstanding potential across all areas"
                : overallPercentage >= 60
                ? "Good - Strong capabilities with room for growth"
                : overallPercentage >= 40
                ? "Average - Solid foundation with development opportunities"
                : "Developing - Focus on targeted skill building"}
            </p>
          </motion.div>

          {/* Category Scores */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
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
                    Recommendations:
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
              Your Personalized Insights
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
              Use these insights to guide your academic and career decisions. Consider consulting with a career counselor to develop a personalized action plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetTest}
                className="bg-white text-[#C20000] font-poppins font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Retake Assessment
              </button>
              <a
                href="/contact"
                className="bg-white/20 border border-white text-white font-poppins font-bold py-3 px-6 rounded-lg hover:bg-white/30 transition-colors"
              >
                Book Consultation
              </a>
            </div>
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
      className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-8"
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
                {question.category === "aptitude"
                  ? "Aptitude"
                  : question.category === "iq"
                  ? "IQ & Reasoning"
                  : "Personality"}
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
