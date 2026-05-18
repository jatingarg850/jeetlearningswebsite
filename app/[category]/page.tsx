import { getCategoryBySlug } from "@/app/data/careers";
import { CategoryClient } from "./CategoryClient";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const categoryData = getCategoryBySlug(category);

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <p className="text-gray-600 mb-8">The category you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <CategoryClient 
      careers={categoryData.careers} 
      category={category}
      categoryName={categoryData.name}
    />
  );
}
