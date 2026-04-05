"use client";

interface CostChallengeItem {
  title: string;
  content: string;
  severity: "Critical" | "High" | "Medium";
  color: string;
}

interface CostChallengesProps {
  title?: string;
  description?: string;
  items: string[];
  sectionColor?: string;
}

export function CostChallenges({
  title = "What Will It Cost?",
  description = "Course fees and additional expenses.",
  items,
  sectionColor = "#DA1313",
}: CostChallengesProps) {
  // Parse items into challenges
  const severityLevels: ("Critical" | "High" | "Medium")[] = ["Critical", "High", "Medium", "Critical", "High", "Medium"];
  const colors = ["#EF4444", "#F97316", "#EAB308", "#EF4444", "#F97316", "#EAB308"];

  const challenges: CostChallengeItem[] = items.map((item, idx) => ({
    title: item.split(":")[0].trim(),
    content: item.includes(":") ? item.split(":").slice(1).join(":").trim() : item,
    severity: severityLevels[idx % severityLevels.length],
    color: colors[idx % colors.length],
  }));

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 border-b border-red-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
              style={{ background: sectionColor }}
            >
              ⊕
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">
              {title}
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            {description}
          </p>
        </div>

        {/* Challenge Cards - All Content Visible */}
        <div className="space-y-3 md:space-y-4">
          {challenges.map((challenge, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-lg bg-white"
            >
              {/* Header Bar */}
              <div
                className="px-5 md:px-7 py-4 md:py-5 flex items-center justify-between text-white font-bold"
                style={{ background: challenge.color }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-lg md:text-xl">⚠️</div>
                  <span className="text-sm md:text-base uppercase tracking-wider">
                    Challenge #{idx + 1}
                  </span>
                </div>
                <span className="text-xs md:text-sm font-semibold">{challenge.severity}</span>
              </div>

              {/* Content - Always Visible */}
              <div className="px-5 md:px-7 py-4 md:py-5 bg-white">
                <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
                  {challenge.title}
                </p>
                {challenge.content && (
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {challenge.content}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Box */}
        <div className="mt-10 md:mt-14 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border-2 border-red-200">
          <h3 className="font-black text-slate-900 mb-3">Total Investment Summary</h3>
          <p className="text-slate-700 leading-relaxed">
            The total cost of pursuing this career includes tuition fees, professional exams, coaching, and living expenses. Plan your finances carefully and explore scholarship opportunities to make your dream more affordable.
          </p>
        </div>
      </div>
    </section>
  );
}
