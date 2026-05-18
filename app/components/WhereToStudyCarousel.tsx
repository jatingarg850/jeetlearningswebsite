"use client";

interface WhereToStudyCarouselProps {
  title?: string;
  description?: string;
  items: string[];
  sectionColor?: string;
}

export function WhereToStudyCarousel({
  title = "Where to Study?",
  description = "Top institutions across India.",
  items,
  sectionColor = "#1E40AF",
}: WhereToStudyCarouselProps) {
  const colors = ["#EF4444", "#F97316", "#EAB308"];

  // Parse items into institution types
  const institutionTypes = items.map((item, idx) => {
    const colonIndex = item.indexOf(":");
    const type = colonIndex > -1 ? item.substring(0, colonIndex).trim() : item;
    const content = colonIndex > -1 ? item.substring(colonIndex + 1).trim() : item;
    
    // Split by semicolon to get individual institutions
    const institutions = content.split(";").map(i => i.trim()).filter(i => i);

    return {
      type,
      institutions,
      color: colors[idx % colors.length],
    };
  });

  return (
    <section className="py-8 md:py-10 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 border-b border-blue-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <div className="flex items-start gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 mt-1"
              style={{ background: sectionColor }}
            >
              🏫
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">
                {title}
              </h2>
            </div>
          </div>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl font-medium">
            {description}
          </p>
        </div>

        {/* Grid Layout -  All Content Visible, No Clickable Elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {institutionTypes.map((institution, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm"
              style={{
                borderTop: `3px solid ${institution.color}`,
              }}
            >
              {/* Type Header */}
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                {institution.type}
              </h3>

              {/* Institutions List -  All Visible */}
              <div className="space-y-2">
                {institution.institutions.map((inst, instIdx) => (
                  <div key={instIdx} className="flex gap-2">
                    <span
                      className="text-base font-bold flex-shrink-0 leading-relaxed"
                      style={{ color: institution.color }}
                    >
                      →
                    </span>
                    <p className="text-slate-600 text-base leading-relaxed">
                      {inst}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
