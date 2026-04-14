import { CareerPageData } from './careerPageData';

const BLUE = '#1E40AF';
const BLUE2 = '#3B82F6';

const buildData = (
  slug: string,
  heading: string,
  subheading: string,
  skillLine: string,
  impactLine: string
): CareerPageData => ({
  slug,
  badge: 'Bio Science Career Pathway',
  heading,
  subheading,
  whyCards: [
    {
      icon: 'FlaskConical',
      title: 'Research Driven Work',
      description: 'Combine scientific method, experimentation, and modern tools to solve health and life science problems.',
      borderColor: '#10B981'
    },
    {
      icon: 'Database',
      title: 'Data + Biology',
      description: 'Interpret complex biological signals and convert observations into practical outcomes.',
      borderColor: '#3B82F6'
    },
    {
      icon: 'Briefcase',
      title: 'Strong Career Demand',
      description: impactLine,
      borderColor: '#F59E0B'
    }
  ],
  quickFacts: [
    { label: 'Entry Salary', detail: 'INR 3.5L - 7L PA', color: 'bg-green-100 text-green-700' },
    { label: 'Top Skills', detail: skillLine, color: 'bg-blue-100 text-blue-700' },
    { label: 'Pathway', detail: 'BSc plus MSc or research track', color: 'bg-purple-100 text-purple-700' }
  ],
  statCards: [
    { value: 'High', label: 'Research Relevance', gradient: 'from-green-500 to-green-600' },
    { value: 'Pan India', label: 'Opportunities', gradient: 'from-blue-500 to-blue-600' }
  ],
  guideSections: [
    {
      id: 'what',
      title: 'What is this career about?',
      icon: 'Target',
      description: 'Understand the role and domain focus.',
      color: BLUE,
      content: [
        'This career builds scientific understanding of living systems and applies that knowledge in healthcare, diagnostics, agriculture, and research.',
        'You will work with labs, datasets, protocols, and scientific literature to make accurate, evidence based decisions.',
        'The role suits learners who enjoy biology and can reason through complex problems step by step.'
      ]
    },
    {
      id: 'who',
      title: 'Who should consider this?',
      icon: 'User',
      description: 'Traits and habits that help you succeed.',
      color: BLUE2,
      content: [
        'Strong curiosity, patience, and comfort with technical detail.',
        'Ability to document work clearly and communicate scientific findings to mixed audiences.',
        'Willingness to keep learning as new tools and methods evolve.'
      ]
    },
    {
      id: 'startnow',
      title: 'Start now (Class 9-12)',
      icon: 'Rocket',
      description: 'Practical actions to begin early.',
      color: BLUE,
      content: [
        'Focus on Biology, Chemistry, and Mathematics fundamentals.',
        'Build basic coding and data literacy with Python and spreadsheet analysis.',
        'Join science fairs, olympiads, and beginner research projects to gain hands on exposure.'
      ]
    }
  ]
});

export const bioScienceUpdateData: Record<string, CareerPageData> = {
  biochemistry: buildData(
    'biochemistry',
    'Biochemistry',
    'Explore the chemistry of life and build pathways into diagnostics, pharma, and molecular research.',
    'Biology, Organic Chemistry, Lab Methods, Data Analysis',
    'Biochemists are essential in pharmaceuticals, diagnostics, food science, and public health labs.'
  ),
  bioinformatics: buildData(
    'bioinformatics',
    'Bioinformatics',
    'Decode biological data using algorithms, software, and genomic analysis workflows.',
    'Python, R, Statistics, Genomics, SQL',
    'Demand is rising as hospitals and biotech companies use genomic and molecular datasets at scale.'
  ),
  biotechnology: buildData(
    'biotechnology',
    'Biotechnology',
    'Use biology and engineering to create products in health, agriculture, and industrial biotech.',
    'Cell Biology, Bioprocess, QA/QC, Research Writing',
    'Biotech growth is driven by vaccines, therapeutics, and sustainable manufacturing innovation.'
  ),
  genetics: buildData(
    'genetics',
    'Genetics',
    'Study heredity, variation, and gene level mechanisms for medicine and crop improvement.',
    'Molecular Biology, Pedigree Analysis, Bioinformatics Basics',
    'Genetics roles are expanding across diagnostics, counseling, and precision medicine teams.'
  ),
  microbiology: buildData(
    'microbiology',
    'Microbiology',
    'Investigate microorganisms and their impact on health, environment, and industry.',
    'Microbial Techniques, Sterile Practice, Data Logging, Reporting',
    'Microbiology supports infection control, vaccine development, food safety, and industrial quality.'
  ),
  clinical_research: buildData(
    'clinical_research',
    'Clinical Research',
    'Plan and execute clinical studies to evaluate the safety and effectiveness of new drugs and therapies.',
    'Clinical Protocols, Data Integrity, Ethics, Trial Documentation',
    'Clinical research professionals are critical for pharma, CROs, hospitals, and regulatory submissions.'
  ),
  fishery_biologist: buildData(
    'fishery_biologist',
    'Fishery Biologist',
    'Study aquatic ecosystems and fish populations to support sustainable fisheries and biodiversity conservation.',
    'Aquatic Ecology, Field Sampling, Data Analysis, Conservation Methods',
    'Fishery biologists are in demand across marine research, inland fisheries, and environmental agencies.'
  ),
  physiology: buildData(
    'physiology',
    'Physiology',
    'Understand how organ systems function and translate that knowledge into healthcare, sports, and biomedical applications.',
    'Human Physiology, Experimental Methods, Data Interpretation, Scientific Writing',
    'Physiology professionals contribute to healthcare research, diagnostics, rehabilitation, and academia.'
  ),
  // Slug aliases for routing compatibility
  bio_informatics: buildData(
    'bioinformatics',
    'Bioinformatics',
    'Decode biological data using algorithms, software, and genomic analysis workflows.',
    'Python, R, Statistics, Genomics, SQL',
    'Demand is rising as hospitals and biotech companies use genomic and molecular datasets at scale.'
  ),
  bio_technology: buildData(
    'biotechnology',
    'Biotechnology',
    'Use biology and engineering to create products in health, agriculture, and industrial biotech.',
    'Cell Biology, Bioprocess, QA/QC, Research Writing',
    'Biotech growth is driven by vaccines, therapeutics, and sustainable manufacturing innovation.'
  )
};
