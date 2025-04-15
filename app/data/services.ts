export interface Service {
  id: string
  title: string
  description: string
  overview?: string
  features?: string[]
  image?: string
  process?: {
    title: string
    description: string
    steps: string[]
  }
  tools?: {
    title: string
    description: string
    list: string[]
  }
  caseStudies?: {
    title: string
    description: string
    projects: {
      id: string
      title: string
      description: string
      image: string
    }[]
  }
  faq?: {
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
    id: 'architectural-structural',
    title: 'Architectural & Structural Engineering',
    description: 'Comprehensive architectural and structural design and modeling.',
    overview: 'We provide full-service architectural and structural design, leveraging BIM to create detailed models, drawings, and documentation for robust and efficient building solutions.',
    features: ['Architectural Design', 'Structural Modeling', 'Construction Documentation', 'BIM Integration', 'Coordination'],
    image: '/placeholder.png'
  },
  {
    id: 'mep-engineering',
    title: 'MEP Engineering',
    description: 'Design and modeling of Mechanical, Electrical & Plumbing systems. MEP coordination and clash detection.',
    overview: 'Our MEP engineering services cover the complete design, modeling, and coordination of mechanical, electrical, and plumbing systems, ensuring seamless integration and optimal performance using advanced BIM techniques.',
    features: ['Mechanical System Design', 'Electrical System Design', 'Plumbing System Design', 'MEP Modeling', 'Clash Detection', 'Coordination'],
    image: '/placeholder.png'
  },
  {
    id: 'industrial-pharma',
    title: 'Industrial & Pharma Design',
    description: 'Expertise in designing industrial plants and pharmaceutical machinery setups.',
    overview: 'We possess specialized expertise in designing complex industrial facilities and pharmaceutical setups, including machinery layouts, process piping, cleanroom design, and compliance with industry-specific standards.',
    features: ['Industrial Plant Layout', 'Pharmaceutical Facility Design', 'Machinery Setup Modeling', 'Process Piping Design', 'Cleanroom Design', 'Compliance Documentation'],
    image: '/placeholder.png'
  },
  {
    id: 'scan-to-bim',
    title: 'Scan to BIM',
    description: 'Converting laser scans into detailed 3D BIM models for accurate renovations and retrofits.',
    overview: 'Our Scan to BIM services utilize advanced laser scanning technology to capture existing conditions accurately, converting point cloud data into detailed and intelligent BIM models for renovation, retrofit, and facility management purposes.',
    features: ['3D Laser Scanning', 'Point Cloud Processing', 'As-Built Modeling', 'Architectural Scan to BIM', 'Structural Scan to BIM', 'MEP Scan to BIM'],
    image: '/placeholder.png'
  },
  {
    id: 'ar-vr',
    title: 'AR/VR Solutions',
    description: 'Immersive Augmented Reality & Virtual Reality solutions to enhance design visualizations.',
    overview: 'We integrate AR and VR technologies into BIM workflows, creating immersive environments for design review, stakeholder engagement, virtual walkthroughs, and enhanced visualization, leveraging tools like Unreal Engine.',
    features: ['Immersive Visualization', 'Virtual Walkthroughs', 'Augmented Reality Overlays', 'Real-time Rendering', 'Stakeholder Collaboration Tools', 'Unreal Engine Integration'],
    image: '/placeholder.png'
  },
  {
    id: 'family-creation',
    title: 'Family Creation',
    description: 'Developing custom parametric and non-parametric BIM families to meet project-specific needs.',
    overview: 'Our dedicated Family Creation section develops high-quality, custom BIM families (both parametric and non-parametric) for architectural, structural, and MEP components, ensuring consistency and accuracy in models.',
    features: ['Parametric Family Creation', 'Non-Parametric Family Creation', 'Custom Revit Families', 'Architectural Components', 'Structural Components', 'MEP Components'],
    image: '/placeholder.png'
  }
] 