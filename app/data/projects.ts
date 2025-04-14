export interface Project {
  id: string
  title: string
  description: string
  overview: string
  image: string
  technologies: string[]
  features: string[]
  results?: string
  category: string
  client: string
  location: string
  date: string
  duration: string
  services: string[]
  challenges: string[]
  solutions: string[]
  images: string[]
}

export const projects: Project[] = [
  {
    id: 'hospital-complex',
    title: 'Hospital Complex',
    description: 'State-of-the-art healthcare facility with integrated BIM systems for optimal patient care.',
    overview: 'We provided comprehensive BIM modeling and coordination for a multi-specialty hospital with advanced medical facilities and patient-centered design. The project involved extensive MEP coordination, equipment planning, and phased construction planning.',
    image: '/background-section2.png',
    technologies: [
      'Autodesk Revit',
      'Navisworks',
      'BIM 360',
      'Dynamo',
      'Unreal Engine',
      'Point Cloud Processing'
    ],
    features: [
      'Fully Coordinated MEP Systems',
      'Medical Equipment Integration',
      'Patient-centered Design',
      'Clean Room Areas',
      'Complex Surgical Suites',
      'Advanced HVAC Systems'
    ],
    results: 'The project was completed 15% faster than traditional methods with a 30% reduction in RFIs during construction.',
    category: 'Healthcare',
    client: 'Regional Medical Group',
    location: 'Mumbai, India',
    date: 'March 2023',
    duration: '18 months',
    services: [
      'BIM Modeling',
      'MEP Coordination',
      'Clash Detection',
      'Construction Documentation',
      'As-Built Documentation'
    ],
    challenges: [
      'Complex medical equipment integration',
      'Stringent healthcare regulations compliance',
      'Integration with existing hospital systems',
      'Phased construction while maintaining operations'
    ],
    solutions: [
      'Created detailed equipment models with clearance zones',
      'Implemented regulatory requirements directly in BIM model',
      'Developed transition planning for critical systems',
      'Utilized 4D BIM for construction sequencing'
    ],
    images: [
      '/background-section1.png',
      '/background-section2.png',
      '/background-section3.png'
    ]
  },
  {
    id: 'pharma-cleanroom',
    title: 'Pharmaceutical Clean Room',
    description: 'Precision-engineered clean room designed to meet strict pharmaceutical manufacturing standards.',
    overview: 'We delivered detailed BIM and engineering solutions for a state-of-the-art pharmaceutical manufacturing facility with clean room environments. The project focused on maintaining strict contamination control, efficient airflow management, and GMP compliance.',
    image: '/background-section1.png',
    technologies: [
      'Autodesk Revit',
      'CFD Analysis',
      'Navisworks',
      'BIM 360',
      'Clean Room Simulation'
    ],
    features: [
      'ISO Class 5-8 Clean Rooms',
      'HVAC Pressure Cascade System',
      'Airlocks and Material Transfer',
      'GMP Compliant Surfaces',
      'Cleanable Utility Systems',
      'Contamination Control Strategies'
    ],
    results: 'The facility passed regulatory inspection on first review with zero critical observations, setting a new standard for clean room implementation.',
    category: 'Pharmaceutical',
    client: 'PharmaTech Industries',
    location: 'Nashik, India',
    date: 'January 2023',
    duration: '12 months',
    services: [
      'Clean Room Design',
      'HVAC Engineering',
      'BIM Coordination',
      'GMP Documentation',
      'Validation Support'
    ],
    challenges: [
      'Meeting stringent ISO Class 5 requirements',
      'Achieving proper pressure cascades between rooms',
      'Integrating complex process equipment',
      'Ensuring maintainable systems with clean room constraints'
    ],
    solutions: [
      'Implemented CFD modeling for airflow optimization',
      'Designed automated pressure monitoring systems',
      'Created detailed 3D models of process equipment',
      'Designed service corridors for maintenance access'
    ],
    images: [
      '/background-section2.png',
      '/background-section1.png',
      '/background-section3.png'
    ]
  },
  {
    id: 'manufacturing-plant',
    title: 'Industrial Manufacturing Plant',
    description: 'Advanced manufacturing facility with optimized production flows and integrated systems.',
    overview: 'We implemented complete BIM solutions for a large-scale manufacturing facility, including production lines, utilities, and warehouse spaces. The project focused on operational efficiency, future expandability, and sustainable design principles.',
    image: '/background-section3.png',
    technologies: [
      'Autodesk Revit',
      'Plant 3D',
      'Navisworks',
      'AutoCAD P&ID',
      'Tekla Structures',
      'Factory Layout Simulation'
    ],
    features: [
      'Optimized Production Flow',
      'Integrated Utility Systems',
      'Structural Steel Framework',
      'Material Handling Systems',
      'Energy Efficient Design',
      'Future Expansion Zones'
    ],
    results: 'The facility achieved 25% higher production efficiency than industry standards with 20% lower energy consumption.',
    category: 'Industrial',
    client: 'Global Manufacturing Corp',
    location: 'Nagpur, India',
    date: 'October 2022',
    duration: '16 months',
    services: [
      'BIM Modeling',
      'Production Flow Optimization',
      'Structural Engineering',
      'MEP Coordination',
      'Construction Documentation'
    ],
    challenges: [
      'Coordinating complex production equipment',
      'Managing tight utility corridors',
      'Designing for future adaptability',
      'Integrating prefabricated components'
    ],
    solutions: [
      'Created detailed equipment models with operation zones',
      'Utilized 3D coordination for utility routing',
      'Implemented modular design principles',
      'Developed detailed prefabrication models and documentation'
    ],
    images: [
      '/background-section3.png',
      '/background-section1.png',
      '/background-section2.png'
    ]
  }
] 