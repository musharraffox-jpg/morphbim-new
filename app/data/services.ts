export interface Service {
  id: string
  title: string
  description: string
  overview: string
  features: string[]
  image: string
  process: {
    title: string
    description: string
    steps: string[]
  }
  tools: {
    title: string
    description: string
    list: string[]
  }
  caseStudies: {
    title: string
    description: string
    projects: {
      id: string
      title: string
      description: string
      image: string
    }[]
  }
  faq: {
    title: string
    description: string
    questions: {
      question: string
      answer: string
    }[]
  }
}

export const services: Service[] = [
  {
    id: 'pharmaceutical',
    title: 'Pharmaceutical Cleanrooms and Manufacturing Units',
    description: 'Specialized BIM solutions for pharmaceutical facilities, ensuring compliance with GMP standards and cleanroom requirements.',
    overview: 'Our pharmaceutical BIM services provide comprehensive modeling and coordination for cleanrooms, manufacturing facilities, and laboratory environments. We ensure compliance with GMP standards and regulatory requirements while optimizing facility performance.',
    features: [
      'Cleanroom Design and Modeling',
      'HVAC and MEP Systems for Pharmaceutical Facilities',
      'GMP Compliance Documentation',
      'Contamination Control Strategies',
      'Equipment Layout and Coordination',
      'Detailed Construction Documentation'
    ],
    image: '/background-section2.png',
    process: {
      title: 'Our Pharmaceutical BIM Process',
      description: 'A systematic approach to designing and modeling pharmaceutical facilities',
      steps: [
        'Requirements Gathering and Regulatory Analysis',
        'Conceptual Design and Space Planning',
        'Detailed MEP Systems Modeling',
        'Cleanroom Classification Verification',
        'Clash Detection and Resolution',
        'Documentation and Validation Support'
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      description: 'We use industry-leading software and tools for pharmaceutical facility modeling',
      list: [
        'Autodesk Revit',
        'Navisworks',
        'CFD Analysis Software',
        'Cleanroom Simulation Tools',
        'BIM 360',
        'GMP Documentation Systems'
      ]
    },
    caseStudies: {
      title: 'Case Studies',
      description: 'See how we\'ve helped pharmaceutical companies optimize their facilities',
      projects: [
        {
          id: 'vaccine-manufacturing',
          title: 'Vaccine Manufacturing Facility',
          description: 'Complete BIM implementation for a state-of-the-art vaccine production facility with ISO Class 5-8 cleanrooms',
          image: '/background-section1.png'
        },
        {
          id: 'pharma-lab-complex',
          title: 'Pharmaceutical Laboratory Complex',
          description: 'MEP and HVAC modeling for a research and development laboratory with stringent contamination control requirements',
          image: '/background-section2.png'
        }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      description: 'Common questions about our pharmaceutical BIM services',
      questions: [
        {
          question: 'How do you ensure GMP compliance in your BIM models?',
          answer: 'We incorporate GMP requirements from the early design stages, following guidelines from regulatory bodies. Our models include appropriate material specifications, cleanability considerations, and contamination control features. We also provide documentation to support validation efforts.'
        },
        {
          question: 'Can you model cleanroom classifications from ISO 1 to ISO 9?',
          answer: 'Yes, we can model cleanrooms of all ISO classifications. We have experience with the most stringent requirements (ISO 1-5) as well as controlled environments with less restrictive specifications. Our models include appropriate air handling, filtration, and pressure cascade systems.'
        }
      ]
    }
  },
  {
    id: 'industrial',
    title: 'Industrial Plants and Utility Systems',
    description: 'Comprehensive BIM modeling and coordination for complex industrial facilities and utility infrastructure.',
    overview: 'Our industrial BIM services help optimize manufacturing plants, utility systems, and industrial infrastructure. We focus on operational efficiency, maintenance accessibility, and system integration.',
    features: [
      'Production Line Layout and Optimization',
      'Utility System Modeling (Steam, Gas, Water, etc.)',
      'Equipment Installation Planning',
      'Piping and Instrumentation Modeling',
      'Structural Steel Integration',
      'Maintenance Access Analysis'
    ],
    image: '/background-section3.png',
    process: {
      title: 'Our Industrial BIM Process',
      description: 'A structured approach to industrial facility modeling',
      steps: [
        'Production Requirements Analysis',
        'System Flow and Process Mapping',
        'Equipment Layout and Space Planning',
        'Detailed MEP and Piping Design',
        'Structural Integration and Clash Detection',
        'Construction Sequence Simulation'
      ]
    },
    tools: {
      title: 'Our Industrial Tech Stack',
      description: 'We use specialized industrial modeling tools',
      list: [
        'Autodesk Revit',
        'Navisworks',
        'Plant 3D',
        'AutoCAD P&ID',
        'Tekla Structures',
        'Bentley AutoPLANT'
      ]
    },
    caseStudies: {
      title: 'Case Studies',
      description: 'See how we\'ve optimized industrial facilities',
      projects: [
        {
          id: 'food-processing-plant',
          title: 'Food Processing Plant',
          description: 'Complete BIM model for a large-scale food processing facility with stringent hygiene requirements',
          image: '/background-section2.png'
        },
        {
          id: 'automotive-manufacturing',
          title: 'Automotive Manufacturing Line',
          description: 'Detailed production line modeling and optimization for an automotive assembly plant',
          image: '/background-section3.png'
        }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      description: 'Common questions about our industrial BIM services',
      questions: [
        {
          question: 'How do you handle complex piping systems in industrial facilities?',
          answer: 'We use specialized industrial piping design software that allows us to model complex systems with proper slopes, supports, and connections. Our models include appropriate specifications for materials, insulation, and valves, and we perform clash detection to ensure installability.'
        },
        {
          question: 'Can your BIM models support maintenance planning?',
          answer: 'Yes, our models include maintenance access zones and clearances for equipment. We can tag components with maintenance information and link to asset management systems. The models can be used for maintenance planning, training, and facility management throughout the building lifecycle.'
        }
      ]
    }
  },
  {
    id: 'infrastructure',
    title: 'Redevelopment of Urban Infrastructure',
    description: 'Smart city solutions and infrastructure redevelopment using advanced BIM technologies.',
    overview: 'We provide comprehensive BIM services for urban infrastructure projects, including transportation facilities, utility networks, and public spaces. Our focus is on sustainable design, integration with existing systems, and future-ready infrastructure.',
    features: [
      'Transportation Infrastructure Modeling',
      'Urban Utility Network Design',
      'Public Space and Landscape Integration',
      'Existing Condition Documentation',
      'Sustainable Infrastructure Solutions',
      'Smart City Technology Integration'
    ],
    image: '/background-section1.png',
    process: {
      title: 'Our Infrastructure BIM Process',
      description: 'A systematic approach to infrastructure modeling and redevelopment',
      steps: [
        'Site Analysis and Existing Condition Survey',
        'Urban Context Modeling',
        'Infrastructure Systems Design',
        'Integration with Existing Networks',
        'Construction Phasing Simulation',
        'Lifecycle and Maintenance Planning'
      ]
    },
    tools: {
      title: 'Our Infrastructure Tech Stack',
      description: 'We use specialized tools for infrastructure modeling',
      list: [
        'Autodesk Civil 3D',
        'InfraWorks',
        'Revit',
        'GIS Systems',
        '3D Laser Scanning Tools',
        'Point Cloud Processing Software'
      ]
    },
    caseStudies: {
      title: 'Case Studies',
      description: 'See how we\'ve transformed urban infrastructure',
      projects: [
        {
          id: 'transit-hub-redevelopment',
          title: 'Transit Hub Redevelopment',
          description: 'Comprehensive BIM implementation for a multi-modal transportation center with integration to existing urban context',
          image: '/background-section3.png'
        },
        {
          id: 'smart-city-utility-network',
          title: 'Smart City Utility Network',
          description: 'Complete modeling of underground utility infrastructure with smart monitoring systems for an urban district',
          image: '/background-section1.png'
        }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      description: 'Common questions about our infrastructure BIM services',
      questions: [
        {
          question: 'How do you handle existing conditions in redevelopment projects?',
          answer: 'We use 3D laser scanning and photogrammetry to capture existing conditions with high accuracy. This data is processed into point clouds that serve as the foundation for our BIM models, ensuring proper integration of new infrastructure with existing elements.'
        },
        {
          question: 'Can your models support phased construction in active urban areas?',
          answer: 'Yes, our 4D BIM capabilities allow us to simulate construction phasing, which is crucial for urban projects where maintaining operations is essential. We can visualize different stages of construction, helping to minimize disruption to existing services and transportation networks.'
        }
      ]
    }
  }
] 