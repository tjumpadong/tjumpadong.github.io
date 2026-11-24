export interface ProfileLink {
  label: string
  url: string
}

export interface SkillGroup {
  group: string
  items: string[]
}

export interface Role {
  company: string
  context: string
  title: string
  period: string
  highlights: string[]
  technologies: string[]
}

export interface SelectedWork {
  area: string
  company: string
  period: string
  detail: string
}

export interface Education {
  institution: string
  location: string
  degree: string
  gpa: string
}

export interface Profile {
  name: string
  headline: string
  location: string
  emailUser: string
  emailDomain: string
  resumeUrl: string
  githubUrl: string
  linkedinUrl: string
  links: ProfileLink[]
  skills: SkillGroup[]
  selectedWork: SelectedWork[]
  education: Education
  experience: Role[]
}

export const profile: Profile = {
  name: 'Teerawit Jumpadong',
  headline: 'Software Engineer',
  location: 'Bangkok, Thailand 10230',
  emailUser: 'tjumpadong',
  emailDomain: 'gmail.com',
  resumeUrl: '/assets/teerawit-jumpadong-resume-2026.pdf',
  githubUrl: 'https://github.com/tjumpadong',
  linkedinUrl: 'https://www.linkedin.com/in/tjumpadong/',
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/tjumpadong/' },
    { label: 'GitHub', url: 'https://github.com/tjumpadong' },
  ],
  skills: [
    {
      group: 'Languages & frontend',
      items: ['JavaScript (Node.js, React, TypeScript)', 'Scala', 'Elixir', 'Python'],
    },
    {
      group: 'Data & APIs',
      items: ['GraphQL', 'MongoDB', 'PostgreSQL', 'Analytics'],
    },
    {
      group: 'Cloud & infrastructure',
      items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Nginx'],
    },
    {
      group: 'Engineering & tooling',
      items: ['CI/CD', 'Playwright', 'System Design', 'Claude', 'Cursor IDE'],
    },
  ],
  selectedWork: [
    {
      area: 'Consent management migration',
      company: 'EarnIn',
      period: '2022 - 2026',
      detail:
        'Moved consent handling onto one system so every flow recorded the same decision, improving compliance and tracking accuracy across high-traffic surfaces.',
    },
    {
      area: 'Frontend performance',
      company: 'EarnIn',
      period: '2022 - 2026',
      detail:
        'Improved LCP and Lighthouse scores by optimizing asset loading and removing render-blocking resources.',
    },
    {
      area: 'Cloud migration',
      company: 'Zipmex',
      period: '2021 - 2022',
      detail:
        'Moved infrastructure to AWS for better scalability at lower cost, and led the frontend for the QR payment system.',
    },
  ],
  education: {
    institution: 'Kasetsart University',
    location: 'Bangkok, Thailand',
    degree: 'Bachelor of Engineering (Computer Engineering)',
    gpa: '3.20',
  },
  experience: [
    {
      company: 'EarnIn',
      context: 'FinTech, US-based',
      title: 'Senior Software Engineer - Growth Team',
      period: 'Sep 2022 - Jun 2026',
      highlights: [
        'Led the Consent management migration, improving compliance and tracking accuracy across high-traffic systems',
        'Improved LCP and Lighthouse scores by optimizing asset loading and removing render-blocking resources',
        'Stabilized CI pipelines and fixed event inconsistencies and session gaps in the analytics data',
        'Strengthened security with CSP best practices, migrated legacy systems to reduce technical debt, and acted as technical lead, mentoring engineers',
      ],
      technologies: [],
    },
    {
      company: 'Zipmex',
      context: 'Crypto / Fintech',
      title: 'Senior Software Engineer',
      period: 'May 2021 - Aug 2022',
      highlights: [
        'Migrated infrastructure to AWS, improving scalability and reducing costs',
        'Led frontend for the QR payment system and built internal tools for operations',
      ],
      technologies: ['React', 'Elixir', '.NET', 'GraphQL', 'AWS'],
    },
    {
      company: 'Jenosize',
      context: 'HR Tech',
      title: 'Software Line Manager',
      period: 'Nov 2020 - Jan 2021',
      highlights: [
        'Led engineering team and established code quality, testing, and release practices',
        'Partnered with product on roadmap planning and delivery',
        'Mentored engineers and introduced OKRs to improve team performance',
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'GCP'],
    },
    {
      company: 'Intuit',
      context: 'FinTech',
      title: 'Senior Software Developer - Data Processing',
      period: 'Jan 2020 - Apr 2020',
      highlights: [
        'Built internal platform for entity resolution, improving data processing efficiency',
        'Implemented monitoring and alerting to improve system reliability',
      ],
      technologies: ['React', 'Node.js', 'Scala', 'PostgreSQL', 'Kubernetes'],
    },
    {
      company: 'Origami Logic',
      context: 'Acquired by Intuit; Data Consulting',
      title: 'Senior Software Developer',
      period: 'Apr 2019 - Dec 2019',
      highlights: [
        'Developed marketing data connectors integrating third-party APIs into analytics platform',
        'Improved system reliability by handling missing data and error scenarios',
      ],
      technologies: ['Python', 'GraphQL'],
    },
    {
      company: 'Eko',
      context: 'Communication Platform',
      title: 'Software Developer - Backend',
      period: 'Aug 2017 - Mar 2019',
      highlights: [
        'Designed and implemented real-time APIs using WebSocket to support large-scale communication platform',
        'Improved backend performance through query optimization, sharding, and replication strategies',
        'Collaborated across infrastructure, mobile, and product teams to deliver scalable systems',
      ],
      technologies: ['Node.js', 'MongoDB', 'AWS', 'WebSocket'],
    },
    {
      company: 'ShopSpot',
      context: 'E-commerce Startup',
      title: 'Full-Stack Developer',
      period: 'Apr 2013 - Apr 2017',
      highlights: [
        'Built and scaled the e-commerce platform for a fashion marketplace, with CI pipelines and deployment workflows',
        'Designed backend services and data storage in Node.js, and built frontend features in React and Angular',
      ],
      technologies: ['React', 'Angular', 'Node.js', 'MongoDB', 'AWS'],
    },
  ],
}

export const emailAddress = () => `${profile.emailUser}@${profile.emailDomain}`
