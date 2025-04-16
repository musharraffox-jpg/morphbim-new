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
  heroHeadline?: string
  heroSubheadline?: string
  whoWeAre?: {
    image: string
    title: string
    paragraph: string
  }
  coreServices?: {
    icon: string
    title: string
    description: string
    link?: string
  }[]
  projectGallery?: {
    image: string
    title: string
    location: string
    scope: string
    highlights: string[]
  }[]
  whyChooseUs?: {
    icon: string
    text: string
  }[]
  finalCta?: {
    image: string
    title: string
    subtext: string
    buttons: { label: string, link: string, variant?: string }[]
  }
}

export const services: Service[] = [
  {
    id: 'architectural-structural',
    title: 'Architectural & Structural Engineering',
    description: 'Comprehensive architectural and structural design and modeling.',
    overview: 'We provide full-service architectural and structural design, leveraging BIM to create detailed models, drawings, and documentation for robust and efficient building solutions.',
    features: ['Architectural Design', 'Structural Modeling', 'Construction Documentation', 'BIM Integration', 'Coordination'],
    image: '/images/services/architectural-structural.jpeg',
    heroHeadline: 'Architectural Precision. Structural Integrity.',
    heroSubheadline: 'We design spaces that inspire and structures that endure.',
    whoWeAre: {
      image: '/images/services/who/architectural-structural.jpeg',
      title: 'Shaping the Built Environment',
      paragraph: 'At MorphVision, our architectural and structural teams work in synergy to deliver iconic, practical, and future-ready buildings. From sleek commercial towers to smart urban layouts — we merge creativity with calculation.'
    },
    coreServices: [
      { icon: 'PencilRuler', title: 'Architectural Design', description: 'Innovative spatial planning & concept visualization tailored to user experience.' },
      { icon: 'Building2', title: 'Structural Engineering', description: 'Load analysis, steel/reinforced concrete detailing, & safety-first design.' },
      { icon: 'Layers3', title: 'BIM & Detailing', description: 'High-precision models & coordinated drawings for seamless execution.' },
      { icon: 'Leaf', title: 'Sustainability Integration', description: 'Energy-efficient, future-ready solutions aligned with green codes.' }
    ],
    projectGallery: [
      { image: '/assets/projects/tower1.jpg', title: 'Skyline Tower', location: 'Dubai, UAE', scope: 'Mixed-use High-rise', highlights: ['BIM-led design', 'LEED Gold', 'Fast-track delivery'] },
      { image: '/assets/projects/urban-complex.jpg', title: 'Urban Complex', location: 'Singapore', scope: 'Commercial & Residential', highlights: ['Integrated A-S workflow', 'Smart city features', 'Award-winning design'] },
      { image: '/assets/projects/bridge.jpg', title: 'Riverfront Bridge', location: 'London, UK', scope: 'Infrastructure', highlights: ['Advanced structural analysis', 'Iconic form', 'Sustainable materials'] }
    ],
    whyChooseUs: [
      { icon: 'Users2', text: 'Integrated A-S Collaboration' },
      { icon: 'Sparkles', text: 'Creative + Technical Expertise' },
      { icon: 'ShieldCheck', text: 'Code-Driven, Client-Centered' },
      { icon: 'Ruler', text: 'Precision in Every Model & Drawing' },
      { icon: 'Clock', text: 'On-Time Delivery, Every Time' }
    ],
    finalCta: {
      image: '/assets/cta-structure.jpg',
      title: 'Let\'s Create Something Timeless',
      subtext: 'Get in touch to start planning your architectural-structural project today.',
      buttons: [
        { label: 'Contact Us', link: '/contact', variant: 'default' },
        { label: 'View Our Projects', link: '/projects', variant: 'secondary' }
      ]
    }
  },
  {
    id: 'mep-engineering',
    title: 'MEP Engineering',
    description: 'Design and modeling of Mechanical, Electrical & Plumbing systems. MEP coordination and clash detection.',
    overview: 'Our MEP engineering services cover the complete design, modeling, and coordination of mechanical, electrical, and plumbing systems, ensuring seamless integration and optimal performance using advanced BIM techniques.',
    features: ['Mechanical System Design', 'Electrical System Design', 'Plumbing System Design', 'MEP Modeling', 'Clash Detection', 'Coordination'],
    image: '/images/services/mep-engineering.jpeg',
    heroHeadline: 'Integrated Building Systems. Future-Ready Performance.',
    heroSubheadline: 'Engineering excellence that powers, connects, and sustains the built environment.',
    whoWeAre: {
      image: '/images/services/who/mep-engineering.jpeg',
      title: 'Engineering Building Lifelines',
      paragraph: 'Our MEP team delivers integrated systems that breathe life into buildings. We balance performance with sustainability, ensuring every mechanical, electrical, and plumbing component works in harmony with architectural vision and structural requirements.'
    },
    coreServices: [
      { icon: 'Wrench', title: 'Mechanical Engineering', description: 'HVAC design, energy modeling, and ventilation systems for optimal comfort.' },
      { icon: 'Sparkles', title: 'Electrical Engineering', description: 'Power distribution, lighting design, and smart building systems integration.' },
      { icon: 'Layers', title: 'Plumbing Systems', description: 'Water supply, drainage solutions, and fire protection systems.' },
      { icon: 'Target', title: 'MEP Coordination', description: 'Advanced clash detection and coordination for conflict-free installation.' }
    ],
    projectGallery: [
      { image: '/assets/projects/datacenter.jpg', title: 'Tech Data Center', location: 'Frankfurt, Germany', scope: 'Mission-Critical Facility', highlights: ['High-efficiency cooling', 'Redundant power systems', 'Integrated BMS'] },
      { image: '/assets/projects/hospital.jpg', title: 'Central Hospital', location: 'Toronto, Canada', scope: 'Healthcare', highlights: ['Medical gas systems', 'Emergency power', 'Infection control HVAC'] },
      { image: '/assets/projects/smart-office.jpg', title: 'Smart Office Tower', location: 'Singapore', scope: 'Commercial', highlights: ['IoT integration', 'Energy optimization', 'Green certification'] }
    ],
    whyChooseUs: [
      { icon: 'CheckCircle', text: 'Fully Coordinated Systems' },
      { icon: 'Leaf', text: 'Energy-Efficient Solutions' },
      { icon: 'Layers3', text: 'BIM-Enhanced Workflows' },
      { icon: 'ShieldCheck', text: 'Code Compliance Expertise' },
      { icon: 'Briefcase', text: 'Global Project Experience' }
    ],
    finalCta: {
      image: '/assets/cta-mep.jpg',
      title: 'Engineer Your Next Project With Us',
      subtext: 'Discover how our MEP solutions can enhance your building\'s performance.',
      buttons: [
        { label: 'Discuss Your Project', link: '/contact', variant: 'default' },
        { label: 'Explore Our Work', link: '/projects', variant: 'secondary' }
      ]
    }
  },
  {
    id: 'industrial-pharma',
    title: 'Industrial & Pharma Design',
    description: 'Expertise in designing industrial plants and pharmaceutical machinery setups.',
    overview: 'We possess specialized expertise in designing complex industrial facilities and pharmaceutical setups, including machinery layouts, process piping, cleanroom design, and compliance with industry-specific standards.',
    features: ['Industrial Plant Layout', 'Pharmaceutical Facility Design', 'Machinery Setup Modeling', 'Process Piping Design', 'Cleanroom Design', 'Compliance Documentation'],
    image: '/images/services/industrial-pharma.jpeg',
    heroHeadline: 'Precision Engineering. Compliance-Driven Design.',
    heroSubheadline: 'Specialized solutions for industrial facilities and pharmaceutical environments.',
    whoWeAre: {
      image: '/images/services/who/industrial-pharma.jpeg',
      title: 'Industrial Excellence By Design',
      paragraph: 'Our specialized industrial and pharmaceutical design team combines technical precision with regulatory expertise. We create optimized production environments that maximize efficiency while meeting the strictest compliance standards for critical facilities.'
    },
    coreServices: [
      { icon: 'Building2', title: 'Industrial Plant Design', description: 'Optimized layouts for manufacturing processes and production efficiency.' },
      { icon: 'ShieldCheck', title: 'Pharmaceutical Facilities', description: 'GMP-compliant cleanroom and laboratory design for pharmaceutical production.' },
      { icon: 'Layers3', title: 'Process Systems', description: 'Piping, instrumentation, and control systems for industrial applications.' },
      { icon: 'Target', title: 'Compliance Engineering', description: 'Design validation against FDA, EMA, and international regulatory standards.' }
    ],
    projectGallery: [
      { image: '/assets/projects/pharma-plant.jpg', title: 'Sterile Manufacturing Facility', location: 'Basel, Switzerland', scope: 'Pharmaceutical', highlights: ['ISO Class 5-8 cleanrooms', 'GMP compliance', 'Process automation'] },
      { image: '/assets/projects/factory.jpg', title: 'Automotive Assembly Plant', location: 'Detroit, USA', scope: 'Industrial', highlights: ['Robotic manufacturing cells', 'Optimized workflow', 'Sustainable design'] },
      { image: '/assets/projects/food-facility.jpg', title: 'Food Processing Facility', location: 'Melbourne, Australia', scope: 'Food & Beverage', highlights: ['HACCP implementation', 'Cold chain design', 'High-throughput systems'] }
    ],
    whyChooseUs: [
      { icon: 'CheckCircle', text: 'Industry-Specific Expertise' },
      { icon: 'ShieldCheck', text: 'Regulatory Compliance Assurance' },
      { icon: 'Target', text: 'Process-Driven Design Approach' },
      { icon: 'Layers', text: 'Advanced 3D Modeling & Simulation' },
      { icon: 'Users2', text: 'Cross-Disciplinary Collaboration' }
    ],
    finalCta: {
      image: '/assets/cta-pharma.jpg',
      title: 'Ready to Optimize Your Facility?',
      subtext: 'Let\'s design industrial and pharmaceutical spaces that elevate your operations.',
      buttons: [
        { label: 'Start a Consultation', link: '/contact', variant: 'default' },
        { label: 'View Our Expertise', link: '/projects', variant: 'secondary' }
      ]
    }
  },
  {
    id: 'scan-to-bim',
    title: 'Scan to BIM',
    description: 'Converting laser scans into detailed 3D BIM models for accurate renovations and retrofits.',
    overview: 'Our Scan to BIM services utilize advanced laser scanning technology to capture existing conditions accurately, converting point cloud data into detailed and intelligent BIM models for renovation, retrofit, and facility management purposes.',
    features: ['3D Laser Scanning', 'Point Cloud Processing', 'As-Built Modeling', 'Architectural Scan to BIM', 'Structural Scan to BIM', 'MEP Scan to BIM'],
    image: '/images/services/scan-to-bim.jpeg',
    heroHeadline: 'Reality Captured. Intelligence Delivered.',
    heroSubheadline: 'Transforming physical space into precise digital twins with laser scanning technology.',
    whoWeAre: {
      image: '/images/services/who/scan-to-bim.jpeg',
      title: 'Digital Reality Experts',
      paragraph: 'Our Scan to BIM specialists bridge physical and digital worlds. We capture exact as-built conditions and transform them into intelligent BIM models that serve as the foundation for renovations, retrofits, and facility management solutions.'
    },
    coreServices: [
      { icon: 'Target', title: '3D Laser Scanning', description: 'High-precision capture of existing conditions with millimeter accuracy.' },
      { icon: 'Layers', title: 'Point Cloud Processing', description: 'Registration, cleaning and preparation of scan data for modeling.' },
      { icon: 'Building2', title: 'As-Built BIM Creation', description: 'Intelligent model development from scan data across all disciplines.' },
      { icon: 'CheckCircle', title: 'Deviation Analysis', description: 'Comparison between design intent and as-built conditions for quality control.' }
    ],
    projectGallery: [
      { image: '/assets/projects/heritage.jpg', title: 'Heritage Museum Renovation', location: 'Barcelona, Spain', scope: 'Historic Preservation', highlights: ['Sub-millimeter accuracy', 'Heritage documentation', 'Retrofit design base'] },
      { image: '/assets/projects/industrial-retrofit.jpg', title: 'Factory Retrofit', location: 'Shanghai, China', scope: 'Industrial', highlights: ['Complex MEP systems', 'Phased construction planning', 'Clash prevention'] },
      { image: '/assets/projects/campus.jpg', title: 'University Campus Mapping', location: 'Boston, USA', scope: 'Educational', highlights: ['Multi-building survey', 'Facilities management integration', 'Accessibility planning'] }
    ],
    whyChooseUs: [
      { icon: 'Ruler', text: 'Millimeter-Level Accuracy' },
      { icon: 'Layers3', text: 'Full-Spectrum BIM Modeling' },
      { icon: 'Clock', text: 'Rapid Turnaround Capabilities' },
      { icon: 'CheckCircle', text: 'QA/QC Verification Process' },
      { icon: 'Briefcase', text: 'Diverse Project Experience' }
    ],
    finalCta: {
      image: '/assets/cta-scan.jpg',
      title: 'Digitize Your Existing Assets',
      subtext: 'Transform your physical space into intelligent digital models ready for the future.',
      buttons: [
        { label: 'Request Scan Services', link: '/contact', variant: 'default' },
        { label: 'See Case Studies', link: '/projects', variant: 'secondary' }
      ]
    }
  },
  {
    id: 'ar-vr',
    title: 'AR/VR Solutions',
    description: 'Immersive Augmented Reality & Virtual Reality solutions to enhance design visualizations.',
    overview: 'We integrate AR and VR technologies into BIM workflows, creating immersive environments for design review, stakeholder engagement, virtual walkthroughs, and enhanced visualization, leveraging tools like Unreal Engine.',
    features: ['Immersive Visualization', 'Virtual Walkthroughs', 'Augmented Reality Overlays', 'Real-time Rendering', 'Stakeholder Collaboration Tools', 'Unreal Engine Integration'],
    image: '/images/services/ar-vr.jpeg',
    heroHeadline: 'Experience Before Existence. Immerse Before Construction.',
    heroSubheadline: 'Bringing designs to life through immersive augmented and virtual reality experiences.',
    whoWeAre: {
      image: '/images/services/who/ar-vr.jpeg',
      title: 'Immersive Experience Creators',
      paragraph: 'Our AR/VR team transforms traditional design presentations into interactive experiences. We create virtual environments that allow stakeholders to walk through, interact with, and truly understand spaces before they\'re built, enhancing decision-making and design outcomes.'
    },
    coreServices: [
      { icon: 'Sparkles', title: 'VR Environments', description: 'Fully immersive virtual walkthroughs powered by game-engine technology.' },
      { icon: 'Target', title: 'AR Applications', description: 'On-site visualization overlaying digital elements on physical environments.' },
      { icon: 'MessageSquare', title: 'Collaborative Design Reviews', description: 'Multi-user virtual environments for real-time design evaluation.' },
      { icon: 'Layers3', title: 'BIM to XR Integration', description: 'Seamless workflow from BIM models to interactive experiences.' }
    ],
    projectGallery: [
      { image: '/assets/projects/vr-office.jpg', title: 'Mixed-Use Development VR', location: 'New York, USA', scope: 'Commercial', highlights: ['Client decision platform', 'Interior finish options', 'Virtual furniture testing'] },
      { image: '/assets/projects/ar-construction.jpg', title: 'Construction AR System', location: 'Dubai, UAE', scope: 'Construction', highlights: ['On-site overlay', 'Installation verification', 'MEP visualization'] },
      { image: '/assets/projects/vr-training.jpg', title: 'Facility Operations Training', location: 'Sydney, Australia', scope: 'Healthcare', highlights: ['Staff training environment', 'Emergency simulations', 'Equipment operation'] }
    ],
    whyChooseUs: [
      { icon: 'Sparkles', text: 'Cutting-Edge Technology' },
      { icon: 'Users2', text: 'Enhanced Stakeholder Engagement' },
      { icon: 'CheckCircle', text: 'Design Decision Acceleration' },
      { icon: 'Layers3', text: 'Seamless BIM Integration' },
      { icon: 'Target', text: 'Interactive Problem Solving' }
    ],
    finalCta: {
      image: '/assets/cta-vr.jpg',
      title: 'Step Into Your Future Project',
      subtext: 'Experience your design virtually before it becomes reality.',
      buttons: [
        { label: 'Schedule a Demo', link: '/contact', variant: 'default' },
        { label: 'Explore XR Solutions', link: '/projects', variant: 'secondary' }
      ]
    }
  },
  {
    id: 'family-creation',
    title: 'Family Creation',
    description: 'Developing custom parametric and non-parametric BIM families to meet project-specific needs.',
    overview: 'Our dedicated Family Creation section develops high-quality, custom BIM families (both parametric and non-parametric) for architectural, structural, and MEP components, ensuring consistency and accuracy in models.',
    features: ['Parametric Family Creation', 'Non-Parametric Family Creation', 'Custom Revit Families', 'Architectural Components', 'Structural Components', 'MEP Components'],
    image: '/images/services/family-creation.jpeg',
    heroHeadline: 'Custom Components. Unlimited Possibilities.',
    heroSubheadline: 'Building the digital building blocks that power efficient and accurate BIM projects.',
    whoWeAre: {
      image: '/images/services/who/family-creation.jpeg',
      title: 'Component Engineering Specialists',
      paragraph: 'Our Family Creation team specializes in developing intelligent, parametric components that become the building blocks of efficient BIM workflows. We create custom families that perfectly balance visual representation, data richness, and performance optimization.'
    },
    coreServices: [
      { icon: 'Layers3', title: 'Parametric Family Design', description: 'Intelligent components with customizable parameters and behaviors.' },
      { icon: 'Building2', title: 'Architectural Families', description: 'From simple furniture to complex façade systems with full parametric control.' },
      { icon: 'Wrench', title: 'MEP Component Creation', description: 'Equipment, fixtures, and system families with proper connections and data.' },
      { icon: 'Target', title: 'Family Optimization', description: 'Performance tuning and file size optimization for smooth project operation.' }
    ],
    projectGallery: [
      { image: '/assets/projects/facade-system.jpg', title: 'Custom Façade System', location: 'London, UK', scope: 'Architectural', highlights: ['Parametric curtain wall', 'Dynamic sunshades', 'Fabrication-ready output'] },
      { image: '/assets/projects/mep-library.jpg', title: 'MEP Equipment Library', location: 'Singapore', scope: 'Healthcare', highlights: ['Medical gas components', 'Hospital-specific equipment', 'Maintenance data integration'] },
      { image: '/assets/projects/furniture.jpg', title: 'Office Furniture System', location: 'Milan, Italy', scope: 'Interior Design', highlights: ['Modular components', 'Customization options', 'Material selection parameters'] }
    ],
    whyChooseUs: [
      { icon: 'Layers', text: 'Optimized Performance' },
      { icon: 'CheckCircle', text: 'Consistent Quality Standards' },
      { icon: 'Target', text: 'Parameter-Rich Components' },
      { icon: 'Sparkles', text: 'Visually Accurate Representation' },
      { icon: 'Clock', text: 'Quick Development Turnaround' }
    ],
    finalCta: {
      image: '/assets/cta-family.jpg',
      title: 'Enhance Your BIM Library',
      subtext: 'Custom-built BIM families that meet your project\'s exact specifications.',
      buttons: [
        { label: 'Request Custom Families', link: '/contact', variant: 'default' },
        { label: 'Explore Our Library', link: '/projects', variant: 'secondary' }
      ]
    }
  }
]