"use client";

import { Clock } from "lucide-react";

interface DayInLifeCarouselProps {
  content: string[];
  title: string;
  description: string;
  color: string;
}

interface Activity {
  time: string;
  title: string;
  description: string;
}

export function DayInLifeCarousel({ content, title, description, color }: DayInLifeCarouselProps) {
  // Parse time and activity from content
  const parseActivity = (text: string): Activity => {
    // Match time with AM/PM (e.g., "8:30 AM", "11:00 AM")
    const timeMatch = text.match(/^(\d{1,2}:\d{2}\s*(?:AM|PM))/i);
    const time = timeMatch ? timeMatch[1].trim() : "N/A";
    
    // Remove time and dash from text to get the rest
    const withoutTime = text.replace(/^(\d{1,2}:\d{2}\s*(?:AM|PM))\s*–\s*/i, "").trim();
    
    // Split by first dash or colon to get title and description
    const dashIndex = withoutTime.indexOf(":");
    let activityTitle = "";
    let activityDesc = "";
    
    if (dashIndex > -1) {
      activityTitle = withoutTime.substring(0, dashIndex).trim();
      activityDesc = withoutTime.substring(dashIndex + 1).trim();
    } else {
      activityTitle = withoutTime;
      activityDesc = withoutTime;
    }
    
    return {
      time,
      title: activityTitle,
      description: activityDesc,
    };
  };

  const activities = content.map(parseActivity);

  return (
    <section className="py-8 md:py-10 px-4 sm:px-6 bg-gradient-to-br from-slate-50 to-blue-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: `${color}20`, color }}
            >
              <Clock className="w-5 h-5" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900">
              {title}
            </h2>
          </div>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {activities.map((activity, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              style={{
                borderTop: `3px solid ${color}`,
              }}
            >
              {/* Time */}
              <div className="text-3xl font-black mb-2" style={{ color }}>
                {activity.time}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {activity.title}
              </h3>

              {/* Description */}
              <p className="text-base text-slate-600 leading-relaxed">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
