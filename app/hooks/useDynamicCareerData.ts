import { useState, useEffect } from 'react';

export interface CareerGuideSection {
  id: string;
  title: string;
  icon: string;
  description: string;
  color: string;
  content: string[];
}

export interface DynamicCareerData {
  slug: string;
  heading: string;
  subheading: string;
  guideSections: CareerGuideSection[];
}

interface UseDynamicCareerDataOptions {
  category?: string;
  career?: string;
  enabled?: boolean;
}

export function useDynamicCareerData({
  category,
  career,
  enabled = true,
}: UseDynamicCareerDataOptions) {
  const [data, setData] = useState<DynamicCareerData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled || !category || !career) {
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `/api/careers/extract?category=${encodeURIComponent(category)}&career=${encodeURIComponent(career)}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch career data: ${response.statusText}`);
        }

        const careerData = await response.json();
        setData(careerData);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        setError(errorMessage);
        console.error('Error fetching career data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category, career, enabled]);

  return { data, loading, error };
}
