export interface LibraryResource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: "guide" | "ebook" | "video" | "template" | "tool" | "program";
  downloads: number;
  rating: number;
  image: string;
  link?: string;
  slug?: string;
}

export const libraryResources: LibraryResource[] = [
  {
    id: "prog-1",
    title: "Account & Finance",
    description: "Explore careers in accounting, financial analysis, banking, and investment planning. Learn about actuarial science, chartered accountancy, and financial risk management opportunities.",
    category: "Career Paths",
    type: "program",
    downloads: 5420,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    link: "Explore",
    slug: "account_and_finance"
  },
  {
    id: "prog-2",
    title: "Agriculture",
    description: "Discover agricultural careers including farming, agricultural engineering, food science, horticulture, and agri-business management with modern sustainable practices.",
    category: "Career Paths",
    type: "program",
    downloads: 4890,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    link: "Explore",
    slug: "agriculture"
  },
  {
    id: "prog-3",
    title: "Architecture & Construction",
    description: "Build your career in architecture, construction management, urban planning, and infrastructure development with cutting-edge design and technology.",
    category: "Career Paths",
    type: "program",
    downloads: 4560,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    link: "Explore",
    slug: "architecture_and_construction"
  },
  {
    id: "prog-4",
    title: "Arts & Design",
    description: "Express your creativity through fashion design, graphic design, fine arts, animation, photography, and performing arts with professional guidance.",
    category: "Career Paths",
    type: "program",
    downloads: 3780,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    link: "Explore",
    slug: "arts_and_design"
  },
  {
    id: "prog-5",
    title: "Bio Science & Research",
    description: "Pursue careers in biotechnology, microbiology, genetics, bioinformatics, and clinical research with opportunities in pharmaceutical and healthcare industries.",
    category: "Career Paths",
    type: "program",
    downloads: 3450,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    link: "Explore",
    slug: "bio_science_and_research"
  },
  {
    id: "prog-6",
    title: "Business Management",
    description: "Master business operations, human resources, project management, business analytics, and international business with strategic leadership skills.",
    category: "Career Paths",
    type: "program",
    downloads: 4200,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    link: "Explore",
    slug: "business_management"
  },
  {
    id: "prog-7",
    title: "Education & Training",
    description: "Shape the future through teaching, corporate training, educational administration, and professional development in academic and corporate settings.",
    category: "Career Paths",
    type: "program",
    downloads: 3900,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    link: "Explore",
    slug: "education_and_training"
  },
  {
    id: "prog-8",
    title: "Environment",
    description: "Protect our planet through environmental science, wildlife biology, forestry, geology, and oceanography with conservation and sustainability focus.",
    category: "Career Paths",
    type: "program",
    downloads: 3600,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    link: "Explore",
    slug: "environment"
  },
  {
    id: "prog-9",
    title: "Government Services",
    description: "Serve the nation through civil services, administrative roles, economic services, and public sector opportunities with competitive examinations.",
    category: "Career Paths",
    type: "program",
    downloads: 4100,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    link: "Explore",
    slug: "government_services"
  },
  {
    id: "prog-10",
    title: "Health Science",
    description: "Heal and care through medicine, nursing, dentistry, pharmacy, therapy, and healthcare management with compassion and expertise.",
    category: "Career Paths",
    type: "program",
    downloads: 5100,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    link: "Explore",
    slug: "health_science"
  },
  {
    id: "prog-11",
    title: "Hospitality & Tourism",
    description: "Create memorable experiences through hotel management, culinary arts, event planning, travel and tourism with world-class hospitality standards.",
    category: "Career Paths",
    type: "program",
    downloads: 3800,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    link: "Explore",
    slug: "hospitality_and_tourism"
  },
  {
    id: "prog-12",
    title: "Human & Social Sciences",
    description: "Understand society through psychology, sociology, anthropology, history, and social work with research and community engagement.",
    category: "Career Paths",
    type: "program",
    downloads: 3300,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    link: "Explore",
    slug: "human_and_social_sciences"
  },
  {
    id: "prog-13",
    title: "Information Technology",
    description: "Lead the digital revolution through software development, AI, data science, cybersecurity, and emerging technologies with innovation.",
    category: "Career Paths",
    type: "program",
    downloads: 5300,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    link: "Explore",
    slug: "information_technology"
  },
  {
    id: "prog-14",
    title: "Legal Services",
    description: "Practice law and justice through legal careers, forensic science, and judicial services with integrity and expertise.",
    category: "Career Paths",
    type: "program",
    downloads: 3500,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    link: "Explore",
    slug: "legal_services"
  },
  {
    id: "prog-15",
    title: "Logistics & Transportation",
    description: "Move the world through aviation, maritime, supply chain management, and transportation with efficiency and safety.",
    category: "Career Paths",
    type: "program",
    downloads: 3700,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    link: "Explore",
    slug: "logistics_and_transportation"
  },
  {
    id: "prog-16",
    title: "Manufacturing",
    description: "Build excellence through mechanical engineering, industrial design, and manufacturing management with precision and innovation.",
    category: "Career Paths",
    type: "program",
    downloads: 3400,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    link: "Explore",
    slug: "manufacturing"
  },
  {
    id: "prog-17",
    title: "Marketing & Advertising",
    description: "Connect brands with audiences through digital marketing, advertising, sales, and entrepreneurship with creative strategies.",
    category: "Career Paths",
    type: "program",
    downloads: 4000,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    link: "Explore",
    slug: "marketing_and_advertising"
  },
  {
    id: "prog-18",
    title: "Media & Communication",
    description: "Tell stories and inform the world through journalism, mass communication, public relations, and international relations.",
    category: "Career Paths",
    type: "program",
    downloads: 3600,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    link: "Explore",
    slug: "media_and_communication"
  },
  {
    id: "prog-19",
    title: "Public Safety & Security",
    description: "Protect and serve through armed forces, police services, disaster management, and security with courage and dedication.",
    category: "Career Paths",
    type: "program",
    downloads: 4200,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    link: "Explore",
    slug: "public_safety_and_security"
  },
  {
    id: "prog-20",
    title: "Science, Mathematics & Engineering",
    description: "Advance human knowledge through engineering, mathematics, physics, chemistry, and emerging technologies with scientific excellence.",
    category: "Career Paths",
    type: "program",
    downloads: 4600,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    link: "Explore",
    slug: "science_mathematics_engineering"
  },
  {
    id: "prog-21",
    title: "Sports & Physical Activities",
    description: "Excel in sports through athletic careers, sports management, fitness training, and physical education with passion and discipline.",
    category: "Career Paths",
    type: "program",
    downloads: 3200,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80",
    link: "Explore",
    slug: "sports_and_physical_activities"
  },
  {
    id: "1",
    title: "Complete Career Planning Guide",
    description: "A comprehensive guide to planning your career path with actionable steps and strategies.",
    category: "Career Planning",
    type: "guide",
    downloads: 2450,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "2",
    title: "Resume Writing Masterclass",
    description: "Learn how to create a compelling resume that gets noticed by recruiters and hiring managers.",
    category: "Job Search",
    type: "ebook",
    downloads: 3120,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "3",
    title: "Interview Preparation Toolkit",
    description: "Master interview techniques with sample questions, answers, and preparation strategies.",
    category: "Job Search",
    type: "template",
    downloads: 2890,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "4",
    title: "Skill Development Roadmap",
    description: "Identify and develop the skills needed for your target career with this detailed roadmap.",
    category: "Skills",
    type: "guide",
    downloads: 1950,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "5",
    title: "Networking Strategies Video Series",
    description: "Video tutorials on effective networking techniques to build professional relationships.",
    category: "Professional Development",
    type: "video",
    downloads: 1680,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "6",
    title: "Career Transition Checklist",
    description: "Step-by-step checklist for successfully transitioning to a new career or industry.",
    category: "Career Planning",
    type: "template",
    downloads: 1420,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "7",
    title: "Salary Negotiation Guide",
    description: "Learn how to negotiate your salary and benefits package effectively.",
    category: "Job Search",
    type: "ebook",
    downloads: 2210,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "8",
    title: "LinkedIn Optimization Tool",
    description: "Optimize your LinkedIn profile to attract recruiters and opportunities.",
    category: "Professional Development",
    type: "tool",
    downloads: 3450,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "9",
    title: "Personal Branding Workbook",
    description: "Build and strengthen your personal brand with this interactive workbook.",
    category: "Professional Development",
    type: "guide",
    downloads: 1890,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "10",
    title: "Industry Research Templates",
    description: "Templates to research industries and companies before applying or interviewing.",
    category: "Job Search",
    type: "template",
    downloads: 1560,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "11",
    title: "Career Goals Planner",
    description: "Set and track your career goals with this comprehensive planning tool.",
    category: "Career Planning",
    type: "tool",
    downloads: 2340,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "12",
    title: "Professional Development Video Series",
    description: "Video tutorials on leadership, communication, and other essential professional skills.",
    category: "Skills",
    type: "video",
    downloads: 1750,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80"
  }
];

export const categories = [
  "All",
  "Career Paths",
  "Career Planning",
  "Job Search",
  "Skills",
  "Professional Development"
];

export const resourceTypes = [
  { type: "program", label: "Programs" },
  { type: "guide", label: "Guides" },
  { type: "ebook", label: "eBooks" },
  { type: "video", label: "Videos" },
  { type: "template", label: "Templates" },
  { type: "tool", label: "Tools" }
];
