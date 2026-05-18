"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Edit2, Trash2, X, Check } from "lucide-react";

interface Blog {
  id: number;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

export default function BlogManager() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "Career Trends",
    excerpt: "",
    content: "",
    image: "",
    author: "Jeet Foundation",
  });

  // Load blogs from localStorage
  useEffect(() => {
    const savedBlogs = localStorage.getItem("blogs");
    if (savedBlogs) {
      setBlogs(JSON.parse(savedBlogs));
    }
  }, []);

  // Save blogs to localStorage
  const saveBlogs = (updatedBlogs: Blog[]) => {
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      // Update existing blog
      const updated = blogs.map((blog) =>
        blog.id === editingId
          ? {
              ...blog,
              ...formData,
              date: blog.date,
            }
          : blog
      );
      saveBlogs(updated);
      setEditingId(null);
    } else {
      // Add new blog
      const newBlog: Blog = {
        id: Date.now(),
        ...formData,
        date: new Date().toISOString().split("T")[0],
      };
      saveBlogs([newBlog, ...blogs]);
    }

    setFormData({
      title: "",
      category: "Career Trends",
      excerpt: "",
      content: "",
      image: "",
      author: "Jeet Foundation",
    });
    setShowForm(false);
  };

  const handleEdit = (blog: Blog) => {
    setFormData({
      title: blog.title,
      category: blog.category,
      excerpt: blog.excerpt,
      content: blog.content,
      image: blog.image,
      author: blog.author,
    });
    setEditingId(blog.id);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this blog?")) {
      saveBlogs(blogs.filter((blog) => blog.id !== id));
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({
      title: "",
      category: "Career Trends",
      excerpt: "",
      content: "",
      image: "",
      author: "Jeet Foundation",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-poppins font-bold text-[#333333] text-2xl">
            Blog Posts
          </h2>
          <p className="font-poppins text-[#757575] text-sm mt-1">
            Manage your blog articles
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-[#C20000] text-white font-poppins font-semibold px-4 py-2 rounded-lg hover:bg-[#B30000] transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Blog
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl border border-[#EEEEEE] p-6"
        >
          <h3 className="font-poppins font-bold text-[#333333] text-lg mb-6">
            {editingId ? "Edit Blog" : "Add New Blog"}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-poppins font-semibold text-[#333333] text-sm mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border border-[#EEEEEE] rounded-lg font-poppins text-[#505050] focus:outline-none focus:border-[#C20000]"
                  placeholder="Blog title"
                />
              </div>

              <div>
                <label className="block font-poppins font-semibold text-[#333333] text-sm mb-2">
                  Category *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-[#EEEEEE] rounded-lg font-poppins text-[#505050] focus:outline-none focus:border-[#C20000]"
                >
                  <option>Career Trends</option>
                  <option>Career Guidance</option>
                  <option>Technology</option>
                  <option>Skills</option>
                  <option>Success Stories</option>
                  <option>Professional Development</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-poppins font-semibold text-[#333333] text-sm mb-2">
                Excerpt *
              </label>
              <textarea
                value={formData.excerpt}
                onChange={(e) =>
                  setFormData({ ...formData, excerpt: e.target.value })
                }
                required
                rows={2}
                className="w-full px-4 py-2 border border-[#EEEEEE] rounded-lg font-poppins text-[#505050] focus:outline-none focus:border-[#C20000] resize-none"
                placeholder="Brief summary of the blog"
              />
            </div>

            <div>
              <label className="block font-poppins font-semibold text-[#333333] text-sm mb-2">
                Content *
              </label>
              <textarea
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                required
                rows={6}
                className="w-full px-4 py-2 border border-[#EEEEEE] rounded-lg font-poppins text-[#505050] focus:outline-none focus:border-[#C20000] resize-none"
                placeholder="Full blog content"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-poppins font-semibold text-[#333333] text-sm mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData({ ...formData, image: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-[#EEEEEE] rounded-lg font-poppins text-[#505050] focus:outline-none focus:border-[#C20000]"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <label className="block font-poppins font-semibold text-[#333333] text-sm mb-2">
                  Author
                </label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) =>
                    setFormData({ ...formData, author: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-[#EEEEEE] rounded-lg font-poppins text-[#505050] focus:outline-none focus:border-[#C20000]"
                  placeholder="Author name"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 bg-[#C20000] text-white font-poppins font-semibold py-2 rounded-lg hover:bg-[#B30000] transition-colors"
              >
                <Check className="w-5 h-5" />
                {editingId ? "Update Blog" : "Add Blog"}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 flex items-center justify-center gap-2 bg-[#EEEEEE] text-[#757575] font-poppins font-semibold py-2 rounded-lg hover:bg-[#E0E0E0] transition-colors"
              >
                <X className="w-5 h-5" />
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Blogs List */}
      <div className="grid gap-4">
        {blogs.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#EEEEEE] p-8 text-center">
            <p className="font-poppins text-[#757575]">
              No blogs yet. Create your first blog post!
            </p>
          </div>
        ) : (
          blogs.map((blog) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-[#EEEEEE] p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-poppins font-bold text-[#333333] text-lg">
                      {blog.title}
                    </h3>
                    <span className="bg-[#FFF5F5] text-[#C20000] font-poppins text-xs px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                  <p className="font-poppins text-[#757575] text-sm mb-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs font-poppins text-[#AAAAAA]">
                    <span>By {blog.author}</span>
                    <span>{blog.date}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="p-2 text-[#757575] hover:bg-[#F5F5F5] rounded-lg transition-colors"
                    title="Edit"
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="p-2 text-[#C20000] hover:bg-[#FFF5F5] rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
