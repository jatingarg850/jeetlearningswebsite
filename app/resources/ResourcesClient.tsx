"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { resourcesData } from "@/app/data/resourcesData";

export default function ResourcesClient() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const categories = Object.keys(resourcesData);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative overflow-hidden border-b border-[#EEEEEE] py-12"
      >
        <div className="max-w-[1090px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="font-poppins text-[#757575] text-sm font-medium mb-2">
              Career Resources
            </p>
            <div className="w-10 h-0.5 bg-[#C20000] mx-auto mb-4" />
            <h1
              className="font-poppins text-[#505050] font-bold mb-4"
              style={{ fontSize: "clamp(32px, 3.5vw, 48px)", lineHeight: "1.2" }}
            >
              Comprehensive Career Resources
            </h1>
            <p
              className="font-poppins text-[#757575] max-w-2xl mx-auto"
              style={{ fontSize: "20px", lineHeight: "30px" }}
            >
              Professional bodies, top universities, and scholarship opportunities across all career paths
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-[1090px] mx-auto px-4 sm:px-6">
          <div className="space-y-12">
            {categories.map((category, categoryIdx) => {
              const categoryData = resourcesData[category as keyof typeof resourcesData];
              const careers = Object.keys(categoryData);

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIdx * 0.05 }}
                >
                  {/* Category Title */}
                  <div className="mb-8">
                    <h2 className="font-poppins font-bold text-[#333333] text-2xl mb-2">
                      {category}
                    </h2>
                    <div className="w-12 h-1 bg-[#C20000] rounded-full" />
                  </div>

                  {/* Careers Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {careers.map((career, careerIdx) => {
                      const careerData = categoryData[career as keyof typeof categoryData];

                      return (
                        <motion.div
                          key={career}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: careerIdx * 0.05 }}
                          className="bg-white border border-[#EEEEEE] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                        >
                          {/* Career Title */}
                          <h3 className="font-poppins font-bold text-[#333333] text-lg mb-4">
                            {career}
                          </h3>

                          {/* Resource Types */}
                          <div className="space-y-5">
                            {Object.entries(careerData).map(([resourceType, resources]) => (
                              <div key={resourceType}>
                                <h4 className="font-poppins font-semibold text-[#C20000] text-sm mb-3 uppercase tracking-wide">
                                  {resourceType}
                                </h4>
                                <div className="space-y-2">
                                  {(resources as Array<{ name: string; description: string }>).map(
                                    (resource, idx) => (
                                      <a
                                        key={idx}
                                        href={`https://${resource.name.replace("www.", "")}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-start gap-2 group"
                                      >
                                        <ExternalLink className="w-3.5 h-3.5 text-[#757575] mt-0.5 flex-shrink-0 group-hover:text-[#C20000] transition-colors" />
                                        <div className="flex-1 min-w-0">
                                          <p className="font-poppins font-medium text-[#505050] text-xs group-hover:text-[#C20000] transition-colors break-all">
                                            {resource.name}
                                          </p>
                                          <p className="font-poppins text-[#757575] text-xs mt-1 line-clamp-2">
                                            {resource.description}
                                          </p>
                                        </div>
                                      </a>
                                    )
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
