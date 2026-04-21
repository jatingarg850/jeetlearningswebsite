"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Edit2, Trash2, Eye, EyeOff, LogOut } from "lucide-react";
import BlogManager from "./components/BlogManager";
import CareerLibraryManager from "./components/CareerLibraryManager";

type AdminTab = "blogs" | "career-library";

export default function AdminClient() {
  const [activeTab, setActiveTab] = useState<AdminTab>("blogs");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in production, use proper authentication
    if (password === "jeet@2024") {
      setIsLoggedIn(true);
      setPassword("");
    } else {
      alert("Invalid password");
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-white rounded-2xl border border-[#EEEEEE] p-8 shadow-lg"
        >
          <div className="text-center mb-8">
            <h1 className="font-poppins font-bold text-[#333333] text-3xl mb-2">
              Admin Panel
            </h1>
            <p className="font-poppins text-[#757575]">
              Manage blogs and career library
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block font-poppins font-semibold text-[#333333] text-sm mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full px-4 py-3 border border-[#EEEEEE] rounded-lg font-poppins text-[#505050] placeholder-[#AAAAAA] focus:outline-none focus:border-[#C20000] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#757575] hover:text-[#333333]"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#C20000] text-white font-poppins font-bold py-3 rounded-lg hover:bg-[#B30000] transition-colors"
            >
              Login
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <header className="bg-white border-b border-[#EEEEEE] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-poppins font-bold text-[#333333] text-2xl">
              Admin Panel
            </h1>
            <p className="font-poppins text-[#757575] text-sm">
              Manage your content
            </p>
          </div>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-2 px-4 py-2 text-[#C20000] font-poppins font-semibold hover:bg-[#FFF5F5] rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-[#EEEEEE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("blogs")}
              className={`py-4 px-2 font-poppins font-semibold border-b-2 transition-colors ${
                activeTab === "blogs"
                  ? "border-[#C20000] text-[#C20000]"
                  : "border-transparent text-[#757575] hover:text-[#333333]"
              }`}
            >
              Blogs
            </button>
            <button
              onClick={() => setActiveTab("career-library")}
              className={`py-4 px-2 font-poppins font-semibold border-b-2 transition-colors ${
                activeTab === "career-library"
                  ? "border-[#C20000] text-[#C20000]"
                  : "border-transparent text-[#757575] hover:text-[#333333]"
              }`}
            >
              Career Library
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {activeTab === "blogs" && <BlogManager />}
        {activeTab === "career-library" && <CareerLibraryManager />}
      </main>
    </div>
  );
}
