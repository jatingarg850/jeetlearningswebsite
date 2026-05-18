import Link from "next/link";
import { formatCareerName, getCategoryBySlug } from "@/app/data/careers";
import { getCareerDetail } from "@/app/data/careerDetails";
import { CareerPageClientNew } from "./CareerPageClientNew";
import { CareerPageDynamic } from "./CareerPageDynamic";
import { getCareerPageData } from "@/app/data/careerPageData";
import { getCareerVideos } from "@/app/data/careerVideos";
import { careerImagesMap } from "@/app/data/careerImagesMap.js";
import { CareerPageDynamicContent } from "@/app/components/CareerPageDynamicContent";

interface PageProps {
  params: Promise<{
    category: string;
    career: string;
  }>;
}

export default async function CareerPage({ params }: PageProps) {
  const { category, career } = await params;
  const categoryData = getCategoryBySlug(category);
  const careerName = formatCareerName(career);
  const categoryName = categoryData?.name || formatCareerName(category);
  const careerDetail = getCareerDetail(career);
  const pageData = getCareerPageData(career);
  const videos = getCareerVideos(career);
  const imageUrl = careerImagesMap[career as keyof typeof careerImagesMap] || `https://loremflickr.com/600/400/flat,illustration,cartoon,vector,${career}?lock=${career.length}`;

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Career Not Found</h1>
          <p className="text-gray-600 mb-8">The career path you're looking for doesn't exist.</p>
          <Link href="/">
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-all">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  // Use dynamic component for careers with pageData
  if (pageData && pageData.guideSections && pageData.guideSections.length > 0) {
    return (
      <CareerPageDynamic
        category={category}
        career={career}
        careerName={careerName}
        categoryName={categoryName}
        pageData={pageData}
        imageUrl={imageUrl}
        videos={videos}
      />
    );
  }

  // Use dynamic content extraction for careers without pre-built pageData
  return (
    <CareerPageDynamicContent
      category={category}
      career={career}
      careerName={careerName}
      categoryName={categoryName}
      imageUrl={imageUrl}
    />
  );
}
