"use client";

interface InstitutionType {
  type: string;
  institutions: string[];
  color: string;
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
  const colors = ["#EF4444", "#F97316", "#EAB308"];

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
          color: colors[institutionTypes.length % colors.length],
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
    });
  } else if (currentType) {
    institutionTypes.push(currentType);
  }

  return (
    <section className="py-8 md:py-10 px-4 sm:px-6 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50 border-b border-blue-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
              style={{ background: sectionColor }}
            >
              🏫
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900">
              {title}
            </h2>
          </div>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-medium">
            {description}
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {institutionTypes.map((institution, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              style={{
                borderTop: `3px solid ${institution.color}`,
              }}
            >
              {/* Type Header */}
              <h3 className="text-base font-bold text-slate-900 mb-4">
                {institution.type}
              </h3>

              {/* Institutions List */}
              <div className="space-y-2">
                {institution.institutions.map((inst, instIdx) => (
                  <div key={instIdx} className="flex items-start gap-2">
                    <div
                      className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: institution.color }}
                    />
                    <p className="text-slate-600 text-sm leading-relaxed">
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
