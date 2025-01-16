export type Project = {
  company: string
  title: string
  type: string
  contributions: string
  link: string
  slug: string
  description?: string
  challenge?: string
  solution?: string
  impact?: string
  technologies?: string[]
}

export const projects: Project[] = [
  {
    company: 'WeatherXM',
    title: 'UX Design Lead',
    type: 'Mobile Apps, Web Apps, Web3.0',
    contributions: '0 --> 1 WeatherXM Pro, Research & Feature implementation on Mobile Apps.',
    link: '#weatherxm',
    slug: 'weatherxm',
    description: 'Detailed project description will go here...',
    challenge: 'Key challenges faced...',
    solution: 'How we solved it...',
    impact: 'Business impact and results...',
    technologies: ['Figma', 'React Native', 'Web3']
  },
  {
    company: 'UniSystems',
    title: 'Team Lead, UX/Product Design',
    type: 'B2B/SaaS',
    contributions: 'Led team of 5, 30% PoC acceptance rate increase in deliverables towards EU Institutions',
    link: '#unisystems',
    slug: 'unisystems'
  },
  {
    company: 'Celestino',
    title: 'E-Commerce Team Lead, UX/Product Design',
    type: 'E-Commerce',
    contributions: '10% CR increase, 7.5% user base growth, more than $1,2m in extra sales',
    link: '#celestino',
    slug: 'celestino'
  },
  {
    company: 'Praktiker',
    title: 'Senior UX Designer',
    type: 'E-Commerce',
    contributions: 'Increased user engagement with e-commerce portal by 225%, Kept sales stable through Covid-19',
    link: '#praktiker',
    slug: 'praktiker'
  },
  {
    company: 'N.I. Minoglou',
    title: 'UX Designer',
    type: 'E-Commerce',
    contributions: 'Led user research & design, increased CR by 20% yearly.',
    link: '#minoglou',
    slug: 'minoglou'
  },
  {
    company: 'Plaisio.gr / Buldoza.gr',
    title: 'Web Designer',
    type: 'E-Commerce',
    contributions: 'More than 5.000 successful web & newsletter campaigns & web automations. $4,2m in sales over 3 years',
    link: '#buldoza',
    slug: 'buldoza'
  },
  {
    company: 'Genesis Game Studios',
    title: 'Experience Designer',
    type: 'Game Development',
    contributions: '0 --> 1 game launch with 50k downloads in first 3 months',
    link: '#Genesis',
    slug: 'Genesis'
  }
]

export const research = [
  {
    title: 'The Influence of Covid-19 on e-commerce activity and Trends',
    type: 'Research paper',
    institution: 'University of Derby',
    link: '#thesis'
  }
] 