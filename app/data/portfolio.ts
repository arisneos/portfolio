export type ProjectLink = {
  label: string
  url: string
}

export type Project = {
  company: string
  title: string
  type: string
  contributions: string
  link: string
  slug: string
  duration?: string
  isPrivate?: boolean
  description?: string
  challenge?: string
  solution?: string
  impact?: string
  technologies?: string[]
  projectUrl?: string
  links?: ProjectLink[]
  youtubeVideoId?: string
}

export const projects: Project[] = [
  {
    company: 'WeatherXM',
    title: 'Product Design Lead & Product Manager',
    type: '0-->1 Product',
    contributions: 'WeatherXM Pro, WeatherXM Mobile Apps',
    link: 'weatherxm',
    slug: 'weatherxm',
    duration: 'January 2024 - Present',
    description: 'Detailed project description will go here...',
    challenge: 'Key challenges faced...',
    solution: 'How we solved it...',
    impact: 'Business impact and results...',
    technologies: ['Figma', 'Vue.js', 'Web3'],
    isPrivate: false,
    links: [
      { label: 'WeatherXM Pro', url: 'https://pro.weatherxm.com' },
      { label: 'Apple Store App', url: 'https://apps.apple.com/ca/app/weatherxm/id1629841929' },
      { label: 'Play Store App', url: 'https://play.google.com/store/apps/details?id=com.weatherxm.app' }
    ]
  },
  {
    company: 'UniSystems',
    title: 'Senior Product & UX Strategy Lead',
    type: 'B2B/SaaS',
    contributions: 'Led team of 5, 30% PoC acceptance rate increase in deliverables towards EU Institutions',
    link: 'unisystems',
    slug: 'unisystems',
    isPrivate: true
  },
  {
    company: 'Celestino',
    title: 'Lead Product Designer & Growth Strategist',
    type: 'E-Commerce',
    contributions: '10% CR increase, 7.5% user base growth, more than $1,2m in extra sales',
    link: 'celestino',
    slug: 'celestino',
    isPrivate: false,
    links: [
      { label: 'Website', url: 'https://celestino.gr' }
    ]
  },
  {
    company: 'Praktiker',
    title: 'Senior UX & Digital Experience Designer',
    type: 'E-Commerce',
    contributions: 'Increased user engagement with e-commerce portal by 225%, Kept sales stable through Covid-19',
    link: 'praktiker',
    slug: 'praktiker',
    isPrivate: true,
    links: [
      { label: 'Website', url: 'https://praktiker.gr' }
    ]
  },
  {
    company: 'N.I. Minoglou',
    title: 'UX & Interaction Designer',
    type: 'E-Commerce',
    contributions: 'Led user research & design, increased CR by 20% yearly.',
    link: 'minoglou',
    slug: 'minoglou',
    isPrivate: false
  },
  {
    company: 'Buldoza.gr',
    title: 'Front-End Developer & UX Engineer',
    type: 'E-Commerce',
    contributions: 'More than 5.000 successful web & newsletter campaigns & web automations. $4,2m in sales over 3 years',
    link: 'buldoza',
    slug: 'buldoza',
    duration: 'April 2013 - October 2018',
    isPrivate: false,
    links: [
      { label: 'Website', url: 'https://buldoza.gr' }
    ]
  },
  {
    company: 'Genesis Game Studios',
    title: 'Experience Designer',
    type: '0-->1 Product',
    contributions: 'Game design & development, launch with 50k downloads in first 3 months',
    link: 'Genesis',
    slug: 'Genesis',
    duration: 'April 2013 - April 2016',
    isPrivate: false,
    links: [
      { label: 'Play the game', url: 'https://www.microsoft.com/el-gr/p/the-lurker/9nblggh5x2kd?&activetab=pivot:overviewtab' },
    ],
    youtubeVideoId: 'https://youtu.be/LVM84YF3bMk'
  }
]

export type Research = {
  title: string
  type: string
  institution: string
  link: string
  slug: string
  abstract?: string
  keyFindings?: string
  methodology?: string
  conclusion?: string
  publicationDate?: string
  collaborators?: string[]
}

export const research: Research[] = [
  {
    title: 'The Influence of Covid-19 on e-commerce activity and Trends',
    type: 'Research paper',
    institution: 'University of Derby',
    link: '#thesis',
    slug: 'covid-ecommerce-trends',
    abstract: 'Coming soon...',
    keyFindings: 'Coming soon...'
  }
]

export type PersonalProject = {
  title: string
  type: string
  description: string
  slug: string
  status: 'Completed' | 'In Progress' | 'TBA'
  technologies?: string[]
  links?: ProjectLink[]
  duration?: string
  challenge?: string
  solution?: string
  impact?: string
  youtubeVideoId?: string
}

export const personalProjects: PersonalProject[] = [
  {
    title: 'PDF File Formatter',
    type: 'Utility Tool',
    description: 'A tool for formatting and organizing PDF files with custom templates and metadata extraction.',
    slug: 'pdf-formatter',
    status: 'In Progress',
    technologies: ['React', 'TypeScript', 'PDF.js'],
    duration: 'January 2024 - Present',
    challenge: 'Creating a user-friendly interface for PDF manipulation that works across different file structures.',
    solution: 'Implemented a drag-and-drop interface with live preview and template system.',
    impact: 'Streamlined document processing workflow, reducing formatting time by 70%.'
  },
  {
    title: 'Future Project',
    type: 'TBA',
    description: 'An exciting new project coming soon. Stay tuned for updates!',
    slug: 'future-project',
    status: 'TBA',
    technologies: ['TBA']
  }
] 