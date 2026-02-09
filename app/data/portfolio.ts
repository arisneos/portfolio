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
    duration: 'January 2024 - April 2025',
    description: `We have already had successfully launched a decentralized weather-station network and attracted a large base of technically savvy users through its Explorer and mobile apps.

However, WeatherXM Pro, the B2B offering providing API access to historical and forecast weather data, faced a critical challenge:

<b>Over 1,200 free-tier users</b>

<b>Zero paid conversions</b>

Unclear value differentiation between plans
Forecast quality perceived as “black box” data with no trust signals
At the same time, advanced forecast evaluation tools existed internally, but were inaccessible, slow to surface value, and difficult to communicate to non-ML users.

The core problem:
<b>How might we turn raw weather data and complex forecast models into a product that businesses can trust, evaluate, and ultimately pay for?</b>`,
    challenge: `<b>1. User Interviews & Surveys</b>
Conducted 15+ interviews with free-tier users, former subscribers, and enterprise prospects
Identified key pain points: lack of trust in forecast accuracy, difficulty evaluating model performance, unclear value proposition

<b>2. Competitive Analysis</b>
Analyzed 10+ competitors in weather data market (OpenWeather, AccuWeather, Tomorrow.io, etc.)
Identified gaps in forecast evaluation tools, data transparency, and user experience

<b>3. Data Analysis</b>
Analyzed historical forecast data and model performance metrics
Identified patterns in forecast accuracy and areas for improvement

<b>4. User Surveys</b>
Distributed surveys to 500+ free-tier users to gather feedback on product usage and preferences
Received 100 responses with valuable insights into user needs and expectations`,
    solution: `The solution was a product and pricing strategy shift, centered around Forecast Accuracy Tracking (FACT) — not as a hidden tool, but as a core product differentiator.

<b>Key components:</b>

<b>1. Forecast Accuracy Tracking (FACT)</b>
- A system that evaluates forecast models over time and across locations
- Surfaces which model performs best for which metric
- Turns ML evaluation into a human-readable decision tool

<b>2. Progressive Value Rollout</b>
Instead of locking value behind a paywall immediately:
- FACT was initially released across all plans as a teaser
- Advanced capabilities unlocked progressively with higher plans
- This allowed users to experience the value before paying

<b>3. Pricing Model Redesign</b>
- Shift from generic API tiers to per-station pricing
- Lower barrier to entry for small users
- Clear scalability path for enterprise customers

<b>4. UX & Information Design</b>
Designed interfaces that translated complex model performance into:
- Clear comparisons
- Visual confidence indicators
- Actionable insights rather than raw numbers

The product narrative shifted from “here’s weather data” to
“here’s the most reliable forecast for your specific use case.”`,
    impact: `<b>Business Impact</b>
- Created a clear conversion path from free → paid
- Reduced entry friction for smaller users while supporting enterprise scalability
- Positioned WeatherXM Pro as a decision-support platform, not just an API

<b>Product Impact</b>
- FACT became a foundational feature rather than an add-on
- Forecast v1 and v2 releases were aligned directly to pricing tiers
- Internal teams gained a shared understanding of “value” beyond data volume

<b>Strategic Impact</b>
Enabled conversations with larger clients who required:
- Transparency
- Validation
- Forecast accountability

Laid groundwork for future concepts such as:
- Location-based forecasting bounties
- Demand-driven station deployment`,
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