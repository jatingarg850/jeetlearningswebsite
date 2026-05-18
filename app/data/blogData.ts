export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  image: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Top 10 Career Paths in 2024: What's Trending in the Job Market",
    excerpt: "Discover the most in-demand careers of 2024 and how to prepare for them. From AI specialists to sustainability experts, explore opportunities shaping the future.",
    content: "The job market is evolving rapidly. Technology, healthcare, and sustainable development are leading sectors. Learn about emerging roles and skill requirements.",
    category: "Career Trends",
    author: "Sarah Johnson",
    date: "2024-04-10",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "2",
    title: "How to Choose the Right Career: A Comprehensive Guide",
    excerpt: "Making the right career choice is crucial for your future. Learn about self-assessment, exploring options, and making informed decisions.",
    content: "Career selection involves understanding your interests, skills, and values. This guide walks you through the decision-making process step by step.",
    category: "Career Guidance",
    author: "Michael Chen",
    date: "2024-04-08",
    readTime: 10,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "3",
    title: "The Rise of AI in Career Development: Opportunities and Challenges",
    excerpt: "Artificial Intelligence is transforming how we approach career planning. Explore the opportunities and challenges in this AI-driven era.",
    content: "AI tools are revolutionizing career counseling and job matching. Understand how to leverage these technologies for better career outcomes.",
    category: "Technology",
    author: "Emma Wilson",
    date: "2024-04-05",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "4",
    title: "Skill Development in the Digital Age: What Employers Want",
    excerpt: "Employers are looking for specific skills in today's digital world. Learn which skills are most valuable and how to develop them.",
    content: "Digital literacy, problem-solving, and adaptability are key. Discover the skills employers prioritize and resources to develop them.",
    category: "Skills",
    author: "David Kumar",
    date: "2024-04-03",
    readTime: 9,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "5",
    title: "Success Stories: From Student to Industry Leader",
    excerpt: "Read inspiring stories of professionals who started from scratch and reached the top of their careers. Learn from their experiences.",
    content: "These success stories showcase determination, continuous learning, and strategic career moves. Get inspired and learn valuable lessons.",
    category: "Success Stories",
    author: "Lisa Anderson",
    date: "2024-04-01",
    readTime: 6,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "6",
    title: "Navigating Career Transitions: A Step-by-Step Approach",
    excerpt: "Changing careers can be daunting. Learn how to navigate transitions smoothly with practical strategies and expert advice.",
    content: "Career transitions require planning and preparation. This guide provides actionable steps to make your transition successful.",
    category: "Career Guidance",
    author: "Robert Martinez",
    date: "2024-03-30",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "7",
    title: "The Future of Work: Remote, Hybrid, and Beyond",
    excerpt: "The workplace is changing. Explore how remote and hybrid work models are shaping careers and what this means for your future.",
    content: "Work flexibility is becoming the norm. Understand how to adapt to these changes and leverage them for career growth.",
    category: "Career Trends",
    author: "Jennifer Lee",
    date: "2024-03-28",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "8",
    title: "Building Your Personal Brand: Stand Out in Your Career",
    excerpt: "Your personal brand matters. Learn how to build and maintain a strong professional image that sets you apart.",
    content: "Personal branding involves showcasing your unique value. Discover strategies to build your brand across platforms.",
    category: "Professional Development",
    author: "Thomas Brown",
    date: "2024-03-25",
    readTime: 9,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "9",
    title: "Networking Strategies for Career Growth",
    excerpt: "Networking is essential for career advancement. Learn effective strategies to build meaningful professional relationships.",
    content: "Strong networks open doors. Explore networking techniques that lead to opportunities and career growth.",
    category: "Professional Development",
    author: "Amanda White",
    date: "2024-03-22",
    readTime: 8,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "10",
    title: "Certifications That Matter: Boost Your Career Prospects",
    excerpt: "Professional certifications can accelerate your career. Discover which certifications are most valuable in your field.",
    content: "Certifications validate your expertise. Learn about top certifications and how they impact career advancement.",
    category: "Skills",
    author: "Christopher Davis",
    date: "2024-03-20",
    readTime: 7,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    featured: false
  }
];

export const categories = [
  "All",
  "Career Trends",
  "Career Guidance",
  "Technology",
  "Skills",
  "Success Stories",
  "Professional Development"
];
