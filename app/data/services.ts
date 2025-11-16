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
    id: 'mepf-bim',
    title: 'MEPF BIM',
    description: 'Comprehensive MEPF (Mechanical, Electrical, Plumbing & Firefighting) BIM modeling and coordination services.',
    overview: 'Our MEPF BIM services cover the complete modeling and coordination of mechanical, electrical, plumbing, and firefighting systems, ensuring seamless integration and optimal performance using advanced BIM techniques.',
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
    id: 'pharmaceutical-industrial-design',
    title: 'Pharmaceutical Industrial Design & Consulting',
    description: 'Dedicated premium service for pharma sector. Specialized design and consulting for regulated environments across GCC, Asia, UK, and United States.',
    overview: 'MorphBIM delivers specialized Pharmaceutical Industrial Design & Consulting services for regulated environments across the GCC, Asia, UK, and the United States. We combine deep domain knowledge, process engineering, and BIM-driven design to create facilities that meet global regulatory standards.',
    features: [
      'Concept & Master Planning',
      'Detailed Pharma Facility Design',
      'Cleanroom & Controlled Environment Design',
      'HVAC & Building Services Consulting',
      'MEPF Engineering for Pharma Plants',
      'Process Flow Engineering',
      'BIM Integration for Pharma',
      'Regulatory & Compliance Consulting'
    ],
    image: '/images/services/industrial-pharma.jpeg',
    heroHeadline: 'Precision Engineering. Regulatory Excellence.',
    heroSubheadline: 'Dedicated premium pharmaceutical design and consulting for global compliance.',
    whoWeAre: {
      image: '/images/services/who/industrial-pharma.jpeg',
      title: 'Pharmaceutical Design Excellence',
      paragraph: 'Our specialized pharmaceutical design team combines deep domain knowledge, process engineering expertise, and BIM-driven design to create facilities that meet the strictest global regulatory standards. We deliver end-to-end solutions from concept to IFC, ensuring zero-error coordination and regulatory compliance across GCC, Asia, UK, and United States markets.'
    },
    coreServices: [
      { icon: 'Target', title: 'Concept & Master Planning', description: 'Site feasibility, facility master planning, material & personnel flow, blocking & stack analysis, cleanroom zoning strategies.' },
      { icon: 'Building2', title: 'Detailed Pharma Facility Design', description: 'OSD facilities, injectable & sterile manufacturing, liquid & semi-solid production, API plants, R&D labs, QC laboratories, utility buildings.' },
      { icon: 'ShieldCheck', title: 'Cleanroom & Controlled Environment', description: 'ISO class cleanroom layouts, filtration & pressure cascade planning, BMS integration, CFR & GMP compliant design.' },
      { icon: 'Wrench', title: 'HVAC & Building Services Consulting', description: 'Cleanroom HVAC design, EHS-compliant extraction systems, pressurization & differential pressure mapping, temperature & RH control.' },
      { icon: 'Layers3', title: 'MEPF Engineering for Pharma', description: 'Process piping (SS, CIP/SIP, Purified Water, WFI, Steam), electrical systems for regulated spaces, fire safety compatible with pharma environments.' },
      { icon: 'Layers', title: 'Process Flow Engineering', description: 'Process equipment layout optimization for weighing, dispensing, blending, granulation, compression, coating, filling & packing lines.' },
      { icon: 'CheckCircle', title: 'BIM Integration for Pharma', description: '3D BIM for all pharma components, clash-free modeling for cleanrooms & utilities, as-built digital twins, BIM-based regulatory documentation.' },
      { icon: 'ShieldCheck', title: 'Regulatory & Compliance Consulting', description: 'EU-GMP, WHO-GMP, USFDA guidance, safety & EHS compliance, support during audits, site acceptance & validation.' }
    ],
    projectGallery: [
      { image: '/assets/projects/pharma-plant.jpg', title: 'Sterile Manufacturing Facility', location: 'GCC Region', scope: 'Pharmaceutical', highlights: ['ISO Class 5-8 cleanrooms', 'EU-GMP & USFDA compliance', 'End-to-end design to IFC'] },
      { image: '/assets/projects/pharma-api.jpg', title: 'API Manufacturing Plant', location: 'Asia', scope: 'Pharmaceutical', highlights: ['Process flow optimization', 'Regulatory compliance', 'BIM-driven coordination'] },
      { image: '/assets/projects/pharma-lab.jpg', title: 'R&D & QC Laboratory Complex', location: 'United States', scope: 'Pharmaceutical', highlights: ['Cleanroom design', 'Zero-error coordination', 'Global regulatory standards'] }
    ],
    whyChooseUs: [
      { icon: 'ShieldCheck', text: 'End-to-End Design: Concept → Planning → Engineering → BIM → IFC' },
      { icon: 'CheckCircle', text: 'Regulatory-Compliant Facilities Across Global Markets' },
      { icon: 'Target', text: 'Zero-Error Coordination Between Cleanrooms, Utilities & MEP' },
      { icon: 'Layers3', text: 'Clear Flow Plans Reducing Contamination Risk' },
      { icon: 'Sparkles', text: 'High-Efficiency Layouts for Optimized Production Cycles' }
    ],
    finalCta: {
      image: '/assets/cta-pharma.jpg',
      title: 'Build Regulatory-Compliant Pharma Facilities',
      subtext: 'Partner with us to design pharmaceutical facilities that meet global standards and optimize production efficiency.',
      buttons: [
        { label: 'Schedule Pharma Consultation', link: '/contact', variant: 'default' },
        { label: 'View Pharma Projects', link: '/projects', variant: 'secondary' }
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
  },
  {
    id: 'outsourcing',
    title: 'BIM Outsourcing Services',
    description: 'End-to-end BIM outsourcing solutions that scale your operations without increasing overhead costs.',
    overview: 'At MorphVision LLP, we support global AEC firms by providing comprehensive BIM Outsourcing Services with accuracy, reliability, and timely delivery. Our team works as an extension of your in-house BIM department, helping you scale quickly without increasing overhead costs.',
    features: ['Architectural BIM Outsourcing', 'Structural BIM Outsourcing', 'MEPF BIM Outsourcing', 'Scan-to-BIM Outsourcing', '4D/5D BIM Support', 'BIM Documentation & Drafting'],
    image: '/images/services/outsourcing.jpeg',
    heroHeadline: 'Scale Without Limits. Deliver Without Compromise.',
    heroSubheadline: 'Extend your BIM capabilities with our global team of experts.',
    whoWeAre: {
      image: '/images/services/who/outsourcing.jpeg',
      title: 'Your Extended BIM Team',
      paragraph: 'We operate as a seamless extension of your in-house BIM department, delivering world-class results while you maintain focus on core business objectives. Our proven engagement models ensure flexibility, quality, and cost-effectiveness.'
    },
    coreServices: [
      { icon: 'Building2', title: 'Architectural BIM Outsourcing', description: 'LOD-specific architectural BIM models, detailed drawings, and coordinated documentation.' },
      { icon: 'Layers3', title: 'Structural BIM Outsourcing', description: 'Structural modeling, rebar detailing, clash-free drawings, and shop-drawing support.' },
      { icon: 'Wrench', title: 'MEPF BIM Outsourcing', description: 'HVAC, Electrical, Plumbing, and Firefighting modeling with clash detection and coordination reports.' },
      { icon: 'Target', title: 'Scan-to-BIM Outsourcing', description: 'Converting point cloud data into high-accuracy BIM models for architectural, structural, and MEP requirements.' },
      { icon: 'Clock', title: '4D/5D BIM Support', description: 'Construction sequencing, scheduling, quantity take-offs, and cost integration.' },
      { icon: 'Layers', title: 'BIM Documentation & Drafting', description: 'CAD to BIM conversion, sheet preparation, BOQs, and tender documentation.' }
    ],
    projectGallery: [
      { image: '/assets/projects/outsourcing-1.jpg', title: 'Global Healthcare Project', location: 'Multiple Locations', scope: 'Architectural & MEP Outsourcing', highlights: ['50+ team members', '24/7 delivery model', '99.2% on-time delivery'] },
      { image: '/assets/projects/outsourcing-2.jpg', title: 'Industrial Facility Expansion', location: 'Europe & Asia', scope: 'Full BIM Lifecycle', highlights: ['Multi-timezone coordination', 'Integrated workflows', 'Cost savings: 40%'] },
      { image: '/assets/projects/outsourcing-3.jpg', title: 'Commercial Development', location: 'North America', scope: 'Structural Outsourcing', highlights: ['Dedicated team model', 'Real-time collaboration', 'Quality score: 98%'] }
    ],
    whyChooseUs: [
      { icon: 'Users2', text: 'Experienced Team Across Industries' },
      { icon: 'CheckCircle', text: 'Skilled in Autodesk Suite' },
      { icon: 'Target', text: 'Flexible Engagement Models' },
      { icon: 'ShieldCheck', text: 'Strict QC Processes' },
      { icon: 'Clock', text: 'Global Delivery Capability' }
    ],
    finalCta: {
      image: '/assets/cta-outsourcing.jpg',
      title: 'Scale Your BIM Operations Today',
      subtext: 'Discover how our outsourcing services can transform your project delivery capabilities.',
      buttons: [
        { label: 'Request a Proposal', link: '/contact', variant: 'default' },
        { label: 'View Case Studies', link: '/projects', variant: 'secondary' }
      ]
    }
  },
  {
    id: '4d-5d-bim',
    title: '4D / 5D BIM',
    description: 'Construction sequencing, scheduling, and cost integration services for comprehensive project management.',
    overview: 'We provide advanced 4D scheduling and 5D cost integration services that visualize construction sequences and provide real-time budget tracking throughout project lifecycle.',
    features: ['4D Scheduling', '5D Cost Integration', 'Construction Sequencing', 'Quantity Take-offs', 'Budget Tracking', 'Project Visualization'],
    image: '/images/services/4d-5d-bim.jpeg',
    heroHeadline: 'Time & Cost Intelligence. Visual Project Management.',
    heroSubheadline: 'Advanced 4D scheduling and 5D cost integration for comprehensive project control.',
    whoWeAre: {
      image: '/images/services/who/4d-5d-bim.jpeg',
      title: '4D/5D BIM Specialists',
      paragraph: 'Our 4D/5D BIM team combines scheduling and cost data with 3D models to provide comprehensive project visualization and management, enabling better decision-making and project control.'
    },
    coreServices: [
      { icon: 'Clock', title: '4D Scheduling', description: 'Construction sequencing and timeline visualization integrated with 3D models.' },
      { icon: 'DollarSign', title: '5D Cost Integration', description: 'Real-time budget tracking and cost analysis throughout project lifecycle.' },
      { icon: 'Target', title: 'Quantity Take-offs', description: 'Accurate quantity extraction and cost estimation from BIM models.' },
      { icon: 'Layers3', title: 'Project Visualization', description: 'Interactive visualization of construction sequences and costs.' }
    ],
    projectGallery: [
      { image: '/assets/projects/4d-5d.jpg', title: 'Complex Construction Project', location: 'Multiple Locations', scope: '4D/5D BIM', highlights: ['Sequencing optimization', 'Cost control', 'Visual management'] }
    ],
    whyChooseUs: [
      { icon: 'CheckCircle', text: 'Advanced Scheduling' },
      { icon: 'DollarSign', text: 'Accurate Cost Integration' },
      { icon: 'Target', text: 'Real-Time Tracking' },
      { icon: 'Layers3', text: 'Visual Management' },
      { icon: 'Clock', text: 'Timely Delivery' }
    ],
    finalCta: {
      image: '/assets/cta-4d-5d.jpg',
      title: 'Enhance Project Control',
      subtext: 'Implement 4D/5D BIM for comprehensive project management.',
      buttons: [
        { label: 'Request Service', link: '/contact', variant: 'default' },
        { label: 'View Projects', link: '/projects', variant: 'secondary' }
      ]
    }
  }
]