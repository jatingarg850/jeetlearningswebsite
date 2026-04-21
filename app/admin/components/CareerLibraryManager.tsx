"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Edit2, Trash2, X, Check, Star } from "lucide-react";

interface CareerResource {
  id: number;
  title: string;
  category: string;
  resourceType: string;
  description: string;
  rating: number;
  downloads: number;
}

export default function CareerLibraryManager() {
  const [resources, setResources] = useState<CareerResource[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "Career Planning",
    resourceType: "Guide",
    description: "",
    rating: 4.5,
    downloads: 0,
  });

  // Load resources from localStorage
  useEffect(() => {
    const savedResources = localStorage.getItem("careerLibrary");
    if (savedResources) {
      setResources(JSON.parse(savedResources));
    }
  }, []);

  // Save resources to localStorage
  const saveResources = (updatedResources: CareerResource[]) => {
    localStorage.setItem("careerLibrary", JSON.stringify(updatedResources));
    setResources(updatedResources);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId) {
      // Update existing resource
      const updated = resources.map((resource) =>
        resource.id === editingId
          ? {
              ...resource,
              ...formData,
            }
          : resource
      );
      saveResources(updated);
      setEditingId(null);
    } else {
      // Add new resource
      const newResource: CareerResource = {
        id: Date.now(),
        ...formData,
      };
      saveResources([newResource, ...resources]);
    }

    setFormData({
      title: "",
      category: "Career Planning",
      resourceType: "Guide",
      description: "",
      rating: 4.5,
      downloads: 0,
    });
    setShowForm(false);
  };

  const handleEdit = (resource: CareerResource) => {
    setFormData({
      title: resource.title,
      category: resource.category,
      resourceType: resource.resourceType,
      description: resource.description,
      rating: resource.rating,
      downloads: resource.downloads,
    });
    setEditingId(resource.id);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this resource?")) {
      saveResources(resources.filter((resource) => resource.id !== id));
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({
      title: "",
      category: "Career Planning",
      resourceType: "Guide",
      description: "",
      rating: 4.5,
      downloads: 0,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-poppins font-bold text-[#333333] text-2xl">
            Career Library Resources
          </h2>
          <p className="font-poppins text-[#757575] text-sm mt-1">
            Manage career guides, eBooks, and resources
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-[#C20000] text-white font-poppins font-semibold px-4 py-2 rounded-lg hover:bg-[#B30000] transition-colors"
        >
          <Plus className="w-5 h-5" />
          Add Resource
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
            {editingId ? "Edit Resource" : "Add New Resource"}
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
                  placeholder="Resource title"
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
                  <option>Career Planning</option>
                  <option>Job Search</option>
                  <option>Skills</option>
                  <option>Professional Development</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block font-poppins font-semibold text-[#333333] text-sm mb-2">
                  Resource Type *
                </label>
                <select
                  value={formData.resourceType}
                  onChange={(e) =>
                    setFormData({ ...formData, resourceType: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-[#EEEEEE] rounded-lg font-poppins text-[#505050] focus:outline-none focus:border-[#C20000]"
                >
                  <option>Guide</option>
                  <option>eBook</option>
                  <option>Video</option>
                  <option>Template</option>
                  <option>Tool</option>
                  <option>Webinar</option>
                </select>
              </div>

              <div>
                <label className="block font-poppins font-semibold text-[#333333] text-sm mb-2">
                  Rating (0-5)
                </label>
                <input
                  type="number"
                  min="0"
                  max="5"
                  step="0.1"
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      rating: parseFloat(e.target.value),
                    })
                  }
                  className="w-full px-4 py-2 border border-[#EEEEEE] rounded-lg font-poppins text-[#505050] focus:outline-none focus:border-[#C20000]"
                />
              </div>
            </div>

            <div>
              <label className="block font-poppins font-semibold text-[#333333] text-sm mb-2">
                Description *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
                rows={4}
                className="w-full px-4 py-2 border border-[#EEEEEE] rounded-lg font-poppins text-[#505050] focus:outline-none focus:border-[#C20000] resize-none"
                placeholder="Resource description"
              />
            </div>

            <div>
              <label className="block font-poppins font-semibold text-[#333333] text-sm mb-2">
                Downloads
              </label>
              <input
                type="number"
                min="0"
                value={formData.downloads}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    downloads: parseInt(e.target.value),
                  })
                }
                className="w-full px-4 py-2 border border-[#EEEEEE] rounded-lg font-poppins text-[#505050] focus:outline-none focus:border-[#C20000]"
              />
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 bg-[#C20000] text-white font-poppins font-semibold py-2 rounded-lg hover:bg-[#B30000] transition-colors"
              >
                <Check className="w-5 h-5" />
                {editingId ? "Update Resource" : "Add Resource"}
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

      {/* Resources List */}
      <div className="grid gap-4">
        {resources.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#EEEEEE] p-8 text-center">
            <p className="font-poppins text-[#757575]">
              No resources yet. Add your first career resource!
            </p>
          </div>
        ) : (
          resources.map((resource) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-[#EEEEEE] p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-poppins font-bold text-[#333333] text-lg">
                      {resource.title}
                    </h3>
                    <span className="bg-[#FFF5F5] text-[#C20000] font-poppins text-xs px-3 py-1 rounded-full">
                      {resource.resourceType}
                    </span>
                  </div>

                  <p className="font-poppins text-[#757575] text-sm mb-3">
                    {resource.description}
                  </p>

                  <div className="flex items-center gap-6 text-sm font-poppins">
                    <span className="text-[#AAAAAA]">
                      Category: {resource.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                      <span className="text-[#333333] font-semibold">
                        {resource.rating}
                      </span>
                    </div>
                    <span className="text-[#AAAAAA]">
                      {resource.downloads} downloads
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(resource)}
                    className="p-2 text-[#757575] hover:bg-[#F5F5F5] rounded-lg transition-colors"
                    title="Edit"
                  >
                    <Edit2 className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(resource.id)}
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
