"use client";

interface InstitutionType {
  type: string;
  institutions: string[];
  color: string;
  severity: "Critical" | "High" | "Medium";
}

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
  // Parse items into institution types
  const institutionTypes: InstitutionType[] = [];
  let currentType: InstitutionType | null = null;

  items.forEach((item) => {
    // Check if this is a type header (ends with colon or is a category)
    if (item.includes(":") && !item.match(/^[A-Z][a-z]+:/)) {
      // This is a type header like "Public/Premier:" or "Private:"
      const typeMatch = item.match(/^([^:]+):/);
      if (typeMatch) {
        if (currentType) {
          institutionTypes.push(currentType);
        }
        currentType = {
          type: typeMatch[1].trim(),
          institutions: [],
          color: ["#EF4444", "#F97316", "#EAB308"][institutionTypes.length % 3],
          severity: ["Critical", "High", "Medium"][institutionTypes.length % 3] as "Critical" | "High" | "Medium",
        };
      }
    } else if (currentType) {
      // Add to current type's institutions
      currentType.institutions.push(item.trim());
    }
  });

  // If no types were parsed, create a single type with all items
  if (institutionTypes.length === 0) {
    institutionTypes.push({
      type: "Institutions",
      institutions: items,
      color: "#1E40AF",
      severity: "High",
    });
  } else if (currentType) {
    institutionTypes.push(currentType);
  }

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 border-b border-blue-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
              style={{ background: sectionColor }}
            >
              🏫
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">
              {title}
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto font-medium">
            {description}
          </p>
        </div>

        {/* All Content Displayed */}
        <div className="space-y-4">
          {institutionTypes.map((institution, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden shadow-lg bg-white border-l-4"
              style={{ borderLeftColor: institution.color }}
            >
              {/* Header */}
              <div
                className="px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-white font-bold"
                style={{ background: institution.color }}
              >
                <div className="flex items-center gap-3">
                  <div className="text-lg md:text-xl">⚠️</div>
                  <span className="text-sm md:text-base uppercase tracking-wider">
                    {institution.type}
                  </span>
                </div>
                <span className="text-xs md:text-sm font-semibold">{institution.severity}</span>
              </div>

              {/* Content - Always Visible */}
              <div className="px-6 md:px-8 py-6 md:py-8 bg-white border-t" style={{ borderTopColor: `${institution.color}20` }}>
                <div className="space-y-3">
                  {institution.institutions.map((inst, instIdx) => (
                    <div key={instIdx} className="flex items-start gap-3">
                      <div
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ background: institution.color }}
                      />
                      <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
                        {inst}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Box */}
        <div className="mt-10 md:mt-14 p-6 md:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
          <h3 className="font-black text-slate-900 mb-3">Institution Selection Guide</h3>
          <p className="text-slate-700 leading-relaxed">
            Choose institutions based on your budget, location preferences, and career goals. Government institutions offer affordability and quality, private institutions provide industry connections, and online options offer flexibility for working professionals.
          </p>
        </div>
      </div>
    </section>
  );
}
