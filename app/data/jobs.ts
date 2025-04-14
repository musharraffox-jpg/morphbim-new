export interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  about: string
  requirements: string[]
  responsibilities: string[]
  benefits: string[]
}

export const jobs: Job[] = [
  {
    id: 'senior-bim-manager',
    title: 'Senior BIM Manager',
    department: 'Engineering',
    location: 'Mumbai, India',
    type: 'Full-time',
    about: 'We are seeking an experienced Senior BIM Manager to lead our Building Information Modeling (BIM) team. The ideal candidate will have extensive experience in managing BIM projects and teams, with a strong technical background in architecture, engineering, or construction.',
    requirements: [
      'Bachelor\'s degree in Architecture, Engineering, or related field',
      '5+ years of experience in BIM management',
      'Proficiency in Revit, Navisworks, and other BIM tools',
      'Strong project management skills',
      'Excellent communication and leadership abilities',
      'Experience with BIM standards and protocols',
      'Knowledge of construction processes and methodologies'
    ],
    responsibilities: [
      'Lead and manage a team of BIM specialists and coordinators',
      'Develop and implement BIM standards and workflows',
      'Oversee the creation and maintenance of BIM models',
      'Coordinate with project teams to ensure BIM integration',
      'Manage BIM software and technology infrastructure',
      'Provide training and support to team members',
      'Review and approve BIM deliverables',
      'Ensure compliance with industry standards and best practices'
    ],
    benefits: [
      'Competitive salary and benefits package',
      'Professional development opportunities',
      'Work with cutting-edge BIM technologies',
      'Collaborative and innovative work environment',
      'Health insurance and wellness programs',
      'Paid time off and flexible work arrangements',
      'Retirement savings plan'
    ]
  },
  {
    id: 'bim-coordinator',
    title: 'BIM Coordinator',
    department: 'Engineering',
    location: 'Bangalore, India',
    type: 'Full-time',
    about: 'We are looking for a BIM Coordinator to join our team. The ideal candidate will be responsible for coordinating BIM projects, ensuring model quality, and facilitating collaboration between different disciplines.',
    requirements: [
      'Bachelor\'s degree in Architecture, Engineering, or related field',
      '3+ years of experience in BIM coordination',
      'Proficiency in Revit, Navisworks, and other BIM tools',
      'Strong understanding of construction documentation',
      'Excellent problem-solving skills',
      'Ability to work in a team environment'
    ],
    responsibilities: [
      'Coordinate BIM models between different disciplines',
      'Ensure model quality and standards compliance',
      'Facilitate clash detection and resolution',
      'Manage BIM project documentation',
      'Support project teams with BIM-related tasks',
      'Maintain BIM project schedules',
      'Provide training and support to team members'
    ],
    benefits: [
      'Competitive salary and benefits package',
      'Professional development opportunities',
      'Work with cutting-edge BIM technologies',
      'Collaborative work environment',
      'Health insurance',
      'Paid time off',
      'Retirement savings plan'
    ]
  }
] 