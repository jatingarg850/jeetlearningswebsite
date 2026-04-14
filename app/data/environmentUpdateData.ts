import { CareerPageData } from './careerPageData';

const GREEN = '#166534';
const GREEN2 = '#15803D';

const buildData = (
  slug: string,
  heading: string,
  subheading: string,
  skillLine: string,
  impactLine: string
): CareerPageData => ({
  slug,
  badge: 'Environment Career Pathway',
  heading,
  subheading,
  whyCards: [
    {
      icon: 'Trees',
      title: 'Conservation Mission',
      description: 'Protect forests, biodiversity, and natural resources through field and policy action.',
      borderColor: '#16A34A'
    },
    {
      icon: 'ShieldCheck',
      title: 'Public Service Role',
      description: 'Work with communities and agencies to enforce environmental and wildlife laws.',
      borderColor: '#059669'
    },
    {
      icon: 'Briefcase',
      title: 'Long-Term Demand',
      description: impactLine,
      borderColor: '#F59E0B'
    }
  ],
  quickFacts: [
    { label: 'Entry Path', detail: 'Forestry or allied degree plus state or UPSC route', color: 'bg-green-100 text-green-700' },
    { label: 'Top Skills', detail: skillLine, color: 'bg-blue-100 text-blue-700' },
    { label: 'Work Style', detail: 'Field operations plus administration', color: 'bg-emerald-100 text-emerald-700' }
  ],
  statCards: [
    { value: 'High', label: 'Ecological Impact', gradient: 'from-green-500 to-green-600' },
    { value: 'Pan India', label: 'Forest Cadre Opportunities', gradient: 'from-emerald-500 to-emerald-600' }
  ],
  guideSections: [
    {
      id: 'what',
      title: 'What is this career about?',
      icon: 'Target',
      description: 'Understand the role and public mission.',
      color: GREEN,
      content: [
        'A Forest Officer protects forests, wildlife habitats, and natural resources while balancing conservation and local livelihood needs.',
        'The role combines field inspections, anti-poaching efforts, fire prevention, land and biodiversity monitoring, and legal enforcement.',
        'You may serve in state forest departments, wildlife divisions, eco-development projects, or policy and planning units.'
      ]
    },
    {
      id: 'who',
      title: 'Who should consider this?',
      icon: 'User',
      description: 'Traits and mindset for success.',
      color: GREEN2,
      content: [
        'Strong interest in environment, ecology, and conservation outcomes.',
        'Physical stamina and willingness to work in forests, remote terrain, and mixed weather conditions.',
        'Leadership, law-and-order awareness, and communication skills for working with teams and local communities.'
      ]
    },
    {
      id: 'startnow',
      title: 'Start now (Class 9-12)',
      icon: 'Rocket',
      description: 'Practical actions to begin early.',
      color: GREEN,
      content: [
        'Focus on Biology, Geography, and Environmental Science fundamentals.',
        'Take part in nature clubs, biodiversity surveys, clean-up drives, and conservation volunteering.',
        'Build fitness, map-reading basics, and awareness of Indian forest and wildlife protection laws.'
      ]
    }
  ]
});

export const environmentUpdateData: Record<string, CareerPageData> = {
  forest_officer: buildData(
    'forest_officer',
    'Forest Officer',
    'Lead on-ground conservation, protect biodiversity, and serve as a frontline guardian of India\'s forests.',
    'Ecology, Field Survey, GIS Basics, Law Enforcement, Team Coordination',
    'Forest and wildlife protection is a strategic priority with growing demand across state and national conservation programs.'
  )
};