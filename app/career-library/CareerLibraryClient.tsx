"use client";

import { useState, useEffect } from "react";
import { Download, Star, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { libraryResources as staticResources, categories as staticCategories, resourceTypes } from "@/app/data/careerLibraryData";

interface AdminResource {
  id: number;
  title: string;
  category: string;
  resourceType: string;
  description: string;
  rating: number;
  downloads: number;
}

export default function CareerLibraryClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [libraryResources, setLibraryResources] = useState(staticResources);
  const [categories, setCategories] = useState(staticCategories);
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  // Load admin-added resources from localStorage
  useEffect(() => {
    const savedResources = localStorage.getItem("careerLibrary");
    if (savedResources) {
      const adminResources: AdminResource[] = JSON.parse(savedResources);

      // Convert admin resources to match the library resource format
      const convertedAdminResources = adminResources.map((resource) => {
        // Map resource type to valid literal type
        const typeMap: { [key: string]: "guide" | "ebook" | "video" | "template" | "tool" } = {
          "guide": "guide",
          "ebook": "ebook",
          "video": "video",
          "template": "template",
          "tool": "tool",
          "Guide": "guide",
          "eBook": "ebook",
          "Video": "video",
          "Template": "template",
          "Tool": "tool",
          "Webinar": "guide",
        };

        const mappedType = typeMap[resource.resourceType] || "guide";

        return {
          id: resource.id.toString(),
          title: resource.title,
          category: resource.category,
          type: mappedType,
          description: resource.description,
          image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
          rating: resource.rating,
          downloads: resource.downloads,
        };
      });

      // Use only admin resources
      setLibraryResources(convertedAdminResources);

      // Get unique categories from admin resources only
      const adminCategories = [...new Set(adminResources.map((r) => r.category))];
      setCategories(["All", ...adminCategories]);
    } else {
      // If no admin resources, show empty state
      setLibraryResources([]);
      setCategories(["All"]);
    }
  }, []);

  const filteredResources = libraryResources.filter(resource => {
    const categoryMatch = selectedCategory === "All" || resource.category === selectedCategory;
    const typeMatch = !selectedType || resource.type === selectedType;
    const searchMatch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && typeMatch && searchMatch;
  });

  const getTypeIcon = (type: string) => {
    const typeObj = resourceTypes.find(t => t.type === type);
    return typeObj?.icon || "📄";
  };

  const getTypeLabel = (type: string) => {
    const typeObj = resourceTypes.find(t => t.type === type);
    return typeObj?.label || type;
  };

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
              Learning Resources
            </p>
            <div className="w-10 h-0.5 bg-[#C20000] mx-auto mb-4" />
            <h1
              className="font-poppins text-[#505050] font-bold mb-4"
              style={{ fontSize: "clamp(24px, 2.5vw, 32px)", lineHeight: "1.2" }}
            >
              Career Library
            </h1>
            <p
              className="font-poppins text-[#757575] max-w-2xl mx-auto"
              style={{ fontSize: "16px", lineHeight: "26px" }}
            >
              Access comprehensive guides, eBooks, videos, templates, and tools to accelerate your career growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 border-b border-[#EEEEEE]">
        <div className="max-w-[1090px] mx-auto px-4 sm:px-6">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#757575] w-5 h-5" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-5 py-3 border border-[#EEEEEE] rounded-lg font-poppins text-[#505050] placeholder-[#AAAAAA] focus:outline-none focus:border-[#C20000] transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-[#EEEEEE]">
        <div className="max-w-[1090px] mx-auto px-4 sm:px-6">
          {/* Category Filter */}
          <div className="mb-6">
            <p className="font-poppins font-semibold text-[#333333] text-sm mb-3">Category</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-poppins text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-[#C20000] text-white"
                      : "bg-[#F5F5F5] text-[#505050] hover:bg-[#EEEEEE]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div>
            <p className="font-poppins font-semibold text-[#333333] text-sm mb-3">Resource Type</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedType(null)}
                className={`px-4 py-2 rounded-full font-poppins text-sm font-medium transition-all ${
                  !selectedType
                    ? "bg-[#C20000] text-white"
                    : "bg-[#F5F5F5] text-[#505050] hover:bg-[#EEEEEE]"
                }`}
              >
                All Types
              </button>
              {resourceTypes.map((type) => (
                <button
                  key={type.type}
                  onClick={() => setSelectedType(type.type)}
                  className={`px-4 py-2 rounded-full font-poppins text-sm font-medium transition-all flex items-center gap-2 ${
                    selectedType === type.type
                      ? "bg-[#C20000] text-white"
                      : "bg-[#F5F5F5] text-[#505050] hover:bg-[#EEEEEE]"
                  }`}
                >
                  <span>{type.icon}</span>
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-[1090px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-poppins font-bold text-[#333333] text-2xl">
              {filteredResources.length} Resources Found
            </h2>
          </div>

          {filteredResources.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <p className="font-poppins text-[#757575] text-lg">
                No resources found matching your criteria.
              </p>
            </motion.div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResources.map((resource, idx) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group bg-white border border-[#EEEEEE] rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80";
                      }}
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-2xl">{getTypeIcon(resource.type)}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="text-xs font-bold text-[#C20000] uppercase tracking-wide">
                        {resource.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-poppins font-bold text-[#333333] text-lg mb-2 line-clamp-2 group-hover:text-[#C20000] transition-colors">
                      {resource.title}
                    </h3>

                    {/* Description */}
                    <p className="font-poppins text-[#757575] text-sm mb-4 line-clamp-2">
                      {resource.description}
                    </p>

                    {/* Type Label */}
                    <div className="mb-4 pb-4 border-b border-[#EEEEEE]">
                      <span className="inline-block px-3 py-1 bg-[#F5F5F5] text-[#505050] text-xs font-medium rounded-full">
                        {getTypeLabel(resource.type)}
                      </span>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-[#FFC107] fill-[#FFC107]" />
                        <span className="font-poppins font-semibold text-[#333333] text-sm">
                          {resource.rating}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-[#757575]">
                        <Download className="w-4 h-4" />
                        <span className="font-poppins text-xs">
                          {resource.downloads.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#F5F5F5] border-t border-[#EEEEEE]">
        <div className="max-w-[700px] mx-auto px-4 text-center">
          <h3 className="font-poppins font-bold text-[#505050] text-2xl mb-3">
            Need Personalized Guidance?
          </h3>
          <p className="font-poppins text-[#757575] mb-6">
            Our career counselors can help you create a personalized development plan
          </p>
          <button
            className="inline-flex items-center gap-2 px-8 py-3 font-poppins font-semibold text-white rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: "#C20000" }}
          >
            Book Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
