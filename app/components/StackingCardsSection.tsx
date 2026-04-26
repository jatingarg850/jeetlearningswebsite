"use client";

import { useStackingCards } from "@/app/hooks/useStackingCards";

interface StackCard {
  title: string;
  icon: string;
  description: string;
  items: string[];
}

interface StackingCardsSectionProps {
  title: string;
  subtitle: string;
  cards: StackCard[];
}

export default function StackingCardsSection({
  title,
  subtitle,
  cards,
}: StackingCardsSectionProps) {
  const containerRef = useStackingCards({ cardHeight: 380, gap: 20, scaleStep: 0.08 });

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-[1090px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="font-poppins text-[#505050] font-bold mb-3 animate-fadeInUp"
            style={{ fontSize: "40px", lineHeight: "44px" }}
          >
            {title}
          </h2>
          <p
            className="font-poppins text-[#505050] font-normal animate-fadeInUp"
            style={{ fontSize: "21px", lineHeight: "30px", animationDelay: "0.1s" }}
          >
            {subtitle}
          </p>
        </div>

        {/* Stacking Cards Container */}
        <div
          ref={containerRef}
          className="relative"
          style={{ perspective: "1000px" }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              data-stack-card
              className="relative mb-6 transition-all duration-300 ease-out"
              style={{
                transformOrigin: "center top",
                willChange: "transform",
              }}
            >
              <div
                className="bg-white rounded-2xl border border-[#EEEEEE] p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                style={{
                  minHeight: "380px",
                  background: "linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)",
                }}
              >
                {/* Icon and Title */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(194, 0, 0, 0.1)" }}
                  >
                    <span
                      className="text-3xl font-bold"
                      style={{ color: "#C20000" }}
                    >
                      {card.icon}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3
                      className="font-poppins font-bold text-[#505050]"
                      style={{ fontSize: "24px", lineHeight: "28px" }}
                    >
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="font-poppins text-[#757575] mb-6"
                  style={{ fontSize: "18px", lineHeight: "26px" }}
                >
                  {card.description}
                </p>

                {/* Red divider */}
                <div
                  className="mb-6"
                  style={{ height: "2px", background: "#DA1313" }}
                />

                {/* Items List */}
                <ul className="space-y-3">
                  {card.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 font-poppins text-[#505050]"
                      style={{ fontSize: "17px", lineHeight: "24px" }}
                    >
                      <span
                        className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                        style={{ background: "rgba(194, 0, 0, 0.2)" }}
                      >
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ background: "#C20000" }}
                        />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
