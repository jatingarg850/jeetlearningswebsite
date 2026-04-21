"use client";

import { useState, useEffect } from "react";
import { Calendar, User, Clock, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/app/hooks/useScrollAnimation";
import { blogPosts as staticBlogPosts, categories as staticCategories } from "@/app/data/blogData";

interface AdminBlog {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

export default function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedPost, setExpandedPost] = useState<string | null>(null);
  const [blogPosts, setBlogPosts] = useState(staticBlogPosts);
  const [categories, setCategories] = useState(staticCategories);
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  // Load admin-added blogs from localStorage
  useEffect(() => {
    const savedBlogs = localStorage.getItem("blogs");
    if (savedBlogs) {
      const adminBlogs: AdminBlog[] = JSON.parse(savedBlogs);
      
      // Convert admin blogs to match the blog post format
      const convertedAdminBlogs = adminBlogs.map((blog) => ({
        id: blog.id.toString(),
        title: blog.title,
        category: blog.category,
        excerpt: blog.excerpt,
        content: blog.content,
        image: blog.image || "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
        date: blog.date,
        author: blog.author,
        featured: false,
        readTime: 5,
      }));

      // Use only admin blogs
      setBlogPosts(convertedAdminBlogs);

      // Get unique categories from admin blogs only
      const adminCategories = [...new Set(adminBlogs.map((b) => b.category))];
      setCategories(["All", ...adminCategories]);
    } else {
      // If no admin blogs, show empty state
      setBlogPosts([]);
      setCategories(["All"]);
    }
  }, []);

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
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
              Career Insights
            </p>
            <div className="w-10 h-0.5 bg-[#C20000] mx-auto mb-4" />
            <h1
              className="font-poppins text-[#505050] font-bold mb-4"
              style={{ fontSize: "clamp(24px, 2.5vw, 32px)", lineHeight: "1.2" }}
            >
              Career Blog & Articles
            </h1>
            <p
              className="font-poppins text-[#757575] max-w-2xl mx-auto"
              style={{ fontSize: "16px", lineHeight: "26px" }}
            >
              Explore insights, trends, and expert advice on career development and professional growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-[#EEEEEE]">
        <div className="max-w-[1090px] mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-3">
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
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6">
          <h2 className="font-poppins font-bold text-[#333333] text-2xl mb-2">
            {selectedCategory === "All" ? "All Articles" : selectedCategory}
          </h2>
          <div className="w-12 h-1 bg-[#C20000] rounded-full mb-8" />

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-poppins text-[#757575] text-lg">
                No articles found in this category.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPosts.map((post, idx) => {
                const isExpanded = expandedPost === post.id;

                return (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-white border border-[#EEEEEE] rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Post Header */}
                    <button
                      onClick={() => setExpandedPost(isExpanded ? null : post.id)}
                      className="w-full p-6 flex gap-6 hover:bg-[#F5F5F5] transition-colors text-left"
                    >
                      {/* Image */}
                      <div className="flex-shrink-0 w-32 h-32 rounded-lg overflow-hidden bg-slate-100">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80";
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-bold text-[#C20000] uppercase tracking-wide">
                              {post.category}
                            </span>
                            {post.featured && (
                              <span className="text-xs font-bold text-white bg-[#C20000] px-2 py-1 rounded">
                                Featured
                              </span>
                            )}
                          </div>
                          <h3 className="font-poppins font-bold text-[#333333] text-lg mb-2 line-clamp-2 group-hover:text-[#C20000]">
                            {post.title}
                          </h3>
                          <p className="font-poppins text-[#757575] text-sm line-clamp-2">
                            {post.excerpt}
                          </p>
                        </div>

                        {/* Meta */}
                        <div className="flex items-center gap-4 text-xs text-[#757575] mt-3">
                          <div className="flex items-center gap-1">
                            <User className="w-3.5 h-3.5" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{formatDate(post.date)}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{post.readTime} min read</span>
                          </div>
                        </div>
                      </div>

                      {/* Expand Icon */}
                      <div className="flex-shrink-0 flex items-center">
                        <ChevronDown
                          className={`w-5 h-5 text-[#757575] transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-[#EEEEEE] bg-[#FAFAFA]"
                      >
                        <div className="p-6">
                          {/* Full Image */}
                          <div className="mb-6 rounded-lg overflow-hidden bg-slate-100">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-auto object-cover"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80";
                              }}
                            />
                          </div>

                          {/* Full Content */}
                          <div className="font-poppins text-[#505050] text-base leading-relaxed space-y-4 mb-6">
                            <p>{post.content}</p>
                            <p>
                              This comprehensive guide provides insights into the current landscape and practical strategies for success. Whether you're just starting your journey or looking to advance, these principles apply across all stages of professional development.
                            </p>
                            <p>
                              The key to success is continuous learning and adaptation. Stay informed about industry trends, invest in your skills, and maintain a growth mindset. Your career is a marathon, not a sprint.
                            </p>
                            <p>
                              Remember that everyone's career path is unique. What works for one person may not work for another. Focus on your strengths, address your weaknesses, and create a personalized strategy that aligns with your goals and values.
                            </p>
                          </div>

                          {/* Share Section */}
                          <div className="pt-6 border-t border-[#EEEEEE]">
                            <p className="font-poppins font-semibold text-[#333333] mb-3">Share this article:</p>
                            <div className="flex gap-3">
                              <button className="px-4 py-2 bg-white border border-[#EEEEEE] text-[#505050] rounded-lg font-poppins text-sm hover:bg-[#F5F5F5] transition-colors">
                                Share on LinkedIn
                              </button>
                              <button className="px-4 py-2 bg-white border border-[#EEEEEE] text-[#505050] rounded-lg font-poppins text-sm hover:bg-[#F5F5F5] transition-colors">
                                Share on Twitter
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#F5F5F5] border-t border-[#EEEEEE]">
        <div className="max-w-[700px] mx-auto px-4 text-center">
          <h3 className="font-poppins font-bold text-[#505050] text-2xl mb-3">
            Stay Updated with Career Insights
          </h3>
          <p className="font-poppins text-[#757575] mb-6">
            Get the latest articles and career tips delivered to your inbox
          </p>
          <button
            className="inline-flex items-center gap-2 px-8 py-3 font-poppins font-semibold text-white rounded-xl transition-all hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: "#C20000" }}
          >
            Subscribe to Newsletter
          </button>
        </div>
      </section>
    </div>
  );
}
