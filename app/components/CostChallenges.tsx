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
    <section className="py-8 md:py-10 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 border-b border-red-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
              style={{ background: sectionColor }}
            >
              ⊕
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">
              {title}
            </h2>
          </div>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            {description}
          </p>
        </div>

        {/* Challenge Cards - All Content Visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {challenges.map((challenge, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              style={{
                borderTop: `3px solid ${challenge.color}`,
              }}
            >
              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {challenge.title}
              </h3>

              {/* Content */}
              {challenge.content && (
                <p className="text-slate-600 text-base leading-relaxed">
                  {challenge.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
