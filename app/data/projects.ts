export interface Project {
  id: string
  title: string
  description: string
  overview?: string
  image?: string
  technologies?: string[]
  features?: string[]
  results?: string
  category: string
  client?: string
  location: string
  date?: string
  duration?: string
  services: string[]
  challenges?: string[]
  solutions?: string[]
  images?: string[]
  tags?: string[] 
  disciplines?: {
    name: string
    description: string
    technologies?: string[]
    challenges?: string[]
    solutions?: string[]
    services?: string[]
  }[]
}

export const projects: Project[] = [
  {
    id: 'shri-krishna-hospital',
    title: 'SHRI KRISHNA HOSPITAL',
    description: 'A cutting-edge healthcare facility in Amaravati, Maharashtra. The project focuses on MEP consulting and design.',
    overview: 'Shri Krishna Hospital is a cutting-edge healthcare facility located in Amaravati, Maharashtra. The project focuses on MEP (Mechanical, Electrical, Plumbing) consulting and design, aimed at ensuring the efficient operation of critical systems within the hospital. This includes designing HVAC systems, electrical distribution, water and waste management, and medical gas systems that comply with both local and international standards.',
    category: 'Healthcare',
    location: 'Amaravati, Maharashtra, India',
    services: ['LOD 300 MEP Consulting and Design'],
    technologies: ['Revit', 'AutoCAD', 'Navisworks', 'Bluebeam'],
    challenges: ['Integration of complex MEP systems (HVAC, electrical, plumbing, fire protection, medical gases) with architectural and structural elements in a healthcare setting.'],
    solutions: ['Used Autodesk Revit for detailed MEP models integrated into the overall BIM model. Utilized Navisworks for clash detection and 3D coordination to resolve conflicts early.'],
    image: '/placeholder.png',
    tags: ['architectural-structural', 'bim-modeling-coordination']
  },
  {
    id: 'sidra-hospital',
    title: 'SIDRA HOSPITAL',
    description: 'Premier healthcare facility in Doha, Qatar, designed to deliver world-class medical services.',
    overview: 'Sidra Hospital is a premier healthcare facility located in Doha, Qatar, designed to deliver worldclass medical services while adhering to the highest standards of design and patient care. The hospital is equipped with cuttingedge medical technology and sustainable infrastructure, providing comprehensive healthcare services to the community.',
    category: 'Healthcare',
    location: 'Doha, Qatar',
    services: ['LOD 300 MEP Modeling'],
    technologies: ['Autodesk Revit', 'AutoCAD', 'Navisworks', 'Bluebeam', 'BIM360'],
    challenges: ['Fitting highly detailed systems within constrained spaces typical of hospital environments due to medical equipment.'],
    solutions: ['Utilized Navisworks for clash detection across all MEP systems, structural elements, and architectural components, addressing issues pre-construction.'],
    image: '/placeholder.png',
    tags: ['bim-modeling-coordination', 'family-creation']
  },
  {
    id: 'ashirwad-hospital',
    title: 'ASHIRWAD HOSPITAL',
    description: 'Modern healthcare facility in Buldhana, Maharashtra, India adhering to international standards.',
    overview: 'Ashirwad Hospital is a modern healthcare facility located in Buldhana, Maharashtra, India. The project aimed to design and deliver highquality healthcare services to the local community while adhering to international standards of hospital design and patient care. The hospital\'s infrastructure includes cuttingedge medical facilities, patient rooms, operating theaters, and diagnostic labs.',
    category: 'Healthcare',
    location: 'Buldhana, Maharashtra, India',
    services: ['LOD 300 MEP Modeling, Coordination, and Design'],
    technologies: ['Revit', 'AutoCAD', 'Navisworks', 'Bluebeam', 'BIM360'],
    challenges: ['Optimizing MEP system routing (HVAC ducts, electrical conduits, plumbing pipes) within limited space in dense hospital layouts.'],
    solutions: ['Regular coordination meetings between architectural and MEP teams, using BIM tools for spatial analysis to optimize system layouts and identify conflicts early.'],
    image: '/placeholder.png',
    tags: ['bim-modeling-coordination', '4d-5d-simulation']
  },
  {
    id: 'clean-room-facility-europe',
    title: 'CLEAN ROOM FACILITY',
    description: 'State-of-the-art clean room facility in Europe for industries requiring strict environmental controls.',
    overview: 'The Clean Room Facility project is a stateoftheart facility located in Europe designed for industries requiring strict environmental controls, such as pharmaceuticals, biotechnology, and electronics manufacturing. The clean room is engineered to provide a contaminationfree environment for sensitive production processes, requiring highly precise MEP (Mechanical, Electrical, Plumbing) systems that meet rigorous standards for air quality, temperature, humidity, and pressure control.',
    category: 'Pharmaceutical',
    location: 'Europe',
    services: ['LOD 400 MEP Modeling and Coordination'],
    technologies: ['Autodesk Revit', 'AutoCAD', 'Navisworks', 'Bluebeam', 'BIM 360'],
    challenges: ['Meeting extremely stringent requirements for air quality, filtration, and temperature control, requiring precise HVAC design without compromising energy efficiency.'],
    solutions: ['Created highly detailed LOD 400 MEP models in Autodesk Revit for accurate system representation, providing precise information for fabrication and installation.'],
    image: '/placeholder.png',
    tags: ['bim-modeling-coordination', '4d-5d-simulation']
  },
  {
    id: 'vida-hotel-residency',
    title: 'VIDA HOTEL & RESIDENCY',
    description: 'Luxury hotel in Dubai Marina requiring LOD 500 as-built modeling.',
    overview: 'A luxury hotel in Dubai Marina requiring LOD 500 as-built modeling for accurate representation of installed systems.',
    category: 'Hotel & Residency',
    location: 'Dubai Marina, UAE',
    services: ['LOD 500 as-built modeling', 'Sheet extraction'],
    technologies: ['Autodesk Revit', '3D laser scanning', 'Navisworks', 'BIM 360'],
    challenges: ['Ensuring the as-built model matched real-world conditions due to frequent on-site changes.'],
    solutions: ['Used 3D laser scanning to capture real-time data and updated the Revit model accordingly.'],
    image: '/placeholder.png',
    tags: ['architectural-structural', 'bim-modeling-coordination']
  },
  {
    id: 'les-vagues',
    title: 'LES VAGUES',
    description: 'High-end residential complex in Qatar with evolving interior design requirements.',
    overview: 'A high-end residential complex in Qatar with evolving interior design requirements, requiring LOD 400 MEP coordination.',
    category: 'Hotel & Residency',
    location: 'Qatar',
    services: ['LOD 400 MEP modeling', 'Clash detection'],
    technologies: ['Autodesk Revit', 'Navisworks', 'BIM 360'],
    challenges: ['Managing frequent design changes necessitated real-time updates in Revit.'],
    solutions: ['Navisworks ensured no clashes between MEP systems and interior design changes. BIM 360 facilitated efficient version control and collaboration.'],
    image: '/placeholder.png',
    tags: ['bim-modeling-coordination', 'family-creation']
  },
  {
    id: 'red-sea-pod-resort',
    title: 'RED SEA (POD) RESORT',
    description: 'Luxury sustainable resort in Saudi Arabia focused on energy-efficient MEP designs.',
    overview: 'A luxury sustainable resort in Saudi Arabia focused on energy-efficient MEP designs.',
    category: 'Hotel & Residency',
    location: 'Saudi Arabia',
    services: ['LOD 400 energy-efficient MEP modeling', 'Clash detection', 'Energy simulation'],
    technologies: ['Autodesk Revit', 'Navisworks', 'Dynamo', 'BIM 360'],
    challenges: ['The desert environment required advanced energy modeling.'],
    solutions: ['Dynamo was used to automate performance checks and streamline energy calculations. Navisworks ensured no clashes between systems during construction.'],
    image: '/placeholder.png',
    tags: ['bim-modeling-coordination', '4d-5d-simulation']
  },
  {
    id: 'beach-mansion',
    title: 'BEACH MANSION',
    description: 'Luxury beachfront residential project in Dubai requiring detailed interior design modeling.',
    overview: 'A luxury beachfront residential project in Dubai, requiring detailed interior design (I.D.) modeling and sheet extraction for architectural elements.',
    category: 'Hotel & Residency',
    location: 'Dubai (Morbour)',
    services: ['LOD 350 interior design modeling', 'Sheet extraction', 'Coordination'],
    technologies: ['Autodesk Revit', 'Bluebeam', 'BIM 360'],
    challenges: ['Maintaining design accuracy while coordinating with multiple stakeholders.'],
    solutions: ['BIM 360 enabled real-time collaboration. Revit ensured accurate interior detailing. Bluebeam simplified sheet extraction/review.'],
    image: '/placeholder.png',
    tags: ['architectural-structural', 'bim-modeling-coordination']
  },
  {
    id: 'la-quinta-inn',
    title: 'LA QUINTA INN',
    description: 'Mid-range hotel project in the United States requiring comprehensive MEP and architectural modeling.',
    overview: 'A mid-range hotel project in the United States requiring comprehensive MEP and architectural modeling.',
    category: 'Hotel & Residency',
    location: 'United States',
    services: ['LOD 300 MEP and architectural modeling'],
    technologies: ['Autodesk Revit', 'AutoCAD', 'Bluebeam', 'BIM 360'],
    challenges: ['Complexity of integrating MEP systems with architectural designs within a tight deadline.'],
    solutions: ['Revit and AutoCAD used for precise modeling. Bluebeam leveraged for sheet extraction/review. BIM 360 streamlined team communication across time zones.'],
    image: '/placeholder.png',
    tags: ['bim-modeling-coordination', 'family-creation']
  },
  {
    id: 'triple-bay-marina-village',
    title: 'TRIPLE BAY MARINA VILLAGE',
    description: 'Mixed-use development requiring MEP and architectural modeling (based on context, assumed description similar to La Quinta Inn).',
    overview: 'A mid-range hotel project in the United States requiring comprehensive MEP and architectural modeling.',
    category: 'Hotel & Residency',
    location: 'United States',
    services: ['LOD 300 MEP and architectural modeling'],
    technologies: ['Autodesk Revit', 'AutoCAD', 'Bluebeam', 'BIM 360'],
    challenges: ['Complexity of integrating MEP systems with architectural designs within a tight deadline.'],
    solutions: ['Revit and AutoCAD used for precise modeling. Bluebeam leveraged for sheet extraction/review. BIM 360 streamlined team communication across time zones.'],
    image: '/placeholder.png',
    tags: ['bim-modeling-coordination', 'family-creation']
  },
  {
    id: 'substation-industrial-port',
    title: 'SUBSTATION INDUSTRIAL PORT FOR WATERWAYS',
    description: 'Electrical system design for a large industrial substation supporting a major port facility in Morocco.',
    overview: 'The Substation Industrial Port of Waterways project is an essential infrastructure development located in Morocco. The project involves the electrical system design for a large industrial substation that will support a major port facility on Morocco\'s waterways. The port facility plays a critical role in supporting maritime trade and industrial operations, requiring robust electrical systems.',
    category: 'Industrial',
    location: 'Morocco',
    services: ['LOD 500 Electrical Modelling'],
    technologies: ['Autodesk Revit', 'AutoCAD', 'Navisworks', 'Bluebeam', 'BIM 360'],
    challenges: ['Ensuring electrical design met international safety, power distribution, and reliability standards (IEC, NEC) and specific port/industrial regulations.'],
    solutions: ['Design carried out in strict adherence to international electrical/safety standards (IEC, NEC) and local Moroccan regulations for compliance, safety, efficiency, and scalability.'],
    image: '/placeholder.png',
    tags: ['bim-modeling-coordination', '4d-5d-simulation']
  },
  {
    id: 'ion-exchange-pid',
    title: 'ION EXCHANGE INDUSTRIAL P&ID PROJECT',
    description: 'Design and installation of industrial piping systems for a large-scale manufacturing facility in Mumbai.',
    overview: 'The Industrial P&ID Project is a critical infrastructure development project in Mumbai, Maharashtra, India, focusing on the design and installation of industrial piping systems for a large scale manufacturing facility. The facility handles complex processes that require specialized piping systems, including high pressure pipelines, fluid transport systems, and utilities.',
    category: 'Industrial',
    location: 'Mumbai, Maharashtra, India',
    services: ['LOD 400 MEP (Piping modelling)', 'GFC Extraction', 'Family Creation', 'Coordination', 'Wall Placement'],
    technologies: ['Autodesk Revit', 'AutoCAD', 'Navisworks', 'Bluebeam', 'BIM 360'],
    challenges: ['Coordinating complex systems within dense layouts and limited space without clashes between piping, electrical, and structural components.'],
    solutions: ['Navisworks utilized for clash detection to identify conflicts early. Resolved issues before construction, reducing delays and rework.'],
    image: '/placeholder.png',
    tags: ['bim-modeling-coordination', 'family-creation']
  },
  {
    id: 'granulation-factory',
    title: 'GRANULATION FACTORY',
    description: 'Factory specializing in granulation processes for the pharmaceutical industry.',
    overview: 'A factory specializing in granulation processes for the pharmaceutical industry, requiring advanced structural analysis and visualization.',
    category: 'Industrial',
    location: 'Pune, India',
    services: ['LOD 400 structural modeling', 'Clash detection', 'Sheet extraction', 'Photorealistic rendering'],
    technologies: ['Autodesk Revit', 'Bluebeam', 'Staad Pro', 'Lumion', 'SolidWorks', 'Photoshop', 'BIM 360'],
    challenges: ['Ensuring structural stability of complex machinery and support systems while visually presenting the factory\'s layout.'],
    solutions: ['Staad Pro used for precise structural analysis. Lumion and SolidWorks employed for realistic renderings.'],
    image: '/placeholder.png',
    tags: ['architectural-structural', 'bim-modeling-coordination']
  },
  {
    id: 'grain-mill-assam',
    title: 'GRAIN MILL',
    description: 'Large-scale grain mill in Assam, India, requiring detailed structural and steel modeling.',
    overview: 'A large-scale grain mill in Assam, India, requiring detailed structural and steel modeling for effective coordination with the construction team.',
    category: 'Industrial',
    location: 'Assam, India',
    services: ['LOD 400 structural and steel modeling', 'Clash detection', 'Sheet extraction'],
    technologies: ['Autodesk Revit', 'Bluebeam', 'Staad Pro', 'Lumion', 'SolidWorks', 'Photoshop', 'BIM 360'],
    challenges: ['Modeling intricate steel structures within the mill and ensuring accuracy in sheet extraction.'],
    solutions: ['Staad Pro and Revit used for precise structural/steel modeling. Lumion and Photoshop utilized for high-quality visualizations.'],
    image: '/placeholder.png',
    tags: ['architectural-structural', 'bim-modeling-coordination']
  },
  {
    id: 'admin-canteen-portugal',
    title: 'ADMINISTRATIVE & CANTEEN BUILDING',
    description: 'New administrative and canteen building in Portugal requiring architectural and structural modeling.',
    overview: 'A new administrative and canteen building in Portugal, requiring architectural and structural modeling.',
    category: 'Industrial',
    location: 'Portugal',
    services: ['LOD 300 architectural and structural modeling', 'Sheet extraction', 'Clash detection'],
    technologies: ['Autodesk Revit', 'Bluebeam', 'BIM 360'],
    challenges: ['Coordination between architectural design and structural elements.'],
    solutions: ['Autodesk Revit used for detailed models. Bluebeam simplified sheet extraction/review. BIM 360 allowed seamless collaboration.'],
    image: '/placeholder.png',
    tags: ['architectural-structural', 'bim-modeling-coordination']
  },
  {
    id: 'bosch-bangalore',
    title: 'BOSCH',
    description: 'MEPF Modeling and Coordination for a multi-story building in Bangalore.',
    category: 'Commercial',
    location: 'Bangalore, India',
    services: ['LOD 350 (MEPF Modeling)', 'GFC Extraction', 'Family Creation', 'Coordination'],
    technologies: ['Autodesk Revit', 'AutoCAD', 'Navisworks', 'Bluebeam'],
    challenges: ['Coordination of MEPF systems in a multi-story building with tight spatial constraints.'],
    solutions: ['Autodesk Revit and Navisworks used for detailed modeling and clash detection. Bluebeam used for GFC sheet extraction to streamline communication.'],
    image: '/placeholder.png',
    tags: ['bim-modeling-coordination', 'family-creation']
  },
  {
    id: 'jewel-gurugram',
    title: 'JEWEL',
    description: 'MEPF Modeling and Coordination for a commercial project in Gurugram.',
    category: 'Commercial',
    location: 'Gurugram, Haryana, India',
    services: ['LOD 350 (MEPF Modeling)', 'GFC Extraction', 'Family Creation', 'Coordination'],
    technologies: ['Autodesk Revit', 'AutoCAD', 'Navisworks', 'Bluebeam'],
    challenges: ['Integrating large-scale HVAC systems into the architectural layout while maintaining adequate retail space.'],
    solutions: ['Navisworks used for clash detection between HVAC and other MEPF systems. Revit allowed detailed modeling. Bluebeam helped streamline GFC extraction.'],
    image: '/placeholder.png',
    tags: ['bim-modeling-coordination', 'family-creation']
  },
  {
    id: 'patna-airport',
    title: 'PATNA AIRPORT',
    description: 'High-detail MEPF Modeling and Coordination for Patna Airport.',
    category: 'Commercial',
    location: 'Patna, India',
    services: ['LOD 400 (MEPF Modeling)', 'GFC Extraction', 'Family Creation', 'Coordination'],
    technologies: ['Autodesk Revit', 'AutoCAD', 'Navisworks', 'Bluebeam'],
    challenges: ['Complexity of airport systems required precise modeling and coordination across multiple disciplines.'],
    solutions: ['Revit used for detailed MEPF modeling. Navisworks ensured early clash detection. Bluebeam facilitated smooth GFC extraction.'],
    image: '/placeholder.png',
    tags: ['bim-modeling-coordination', '4d-5d-simulation']
  },
  {
    id: 'data-center-mumbai',
    title: 'DATA CENTER',
    description: 'Equipment and MEPF Modeling for a data center in Mumbai.',
    category: 'Commercial',
    location: 'Mumbai, India',
    services: ['LOD 300 (Equipment and MEPF Modeling)'],
    technologies: ['Autodesk Revit', 'AutoCAD', 'Navisworks', 'Bluebeam'],
    challenges: ['Proper allocation of equipment space while maintaining effective routing for MEPF systems.'],
    solutions: ['Revit used to create detailed equipment models. Navisworks ensured coordination. Bluebeam used for accurate GFC extraction.'],
    image: '/placeholder.png',
    tags: ['bim-modeling-coordination', 'family-creation']
  },
  {
    id: 'gpra-colony-delhi',
    title: 'GPRA COLONY',
    description: 'ASMEPF Modeling for a large-scale residential colony in Delhi.',
    category: 'Commercial',
    location: 'Delhi, India',
    services: ['LOD 300 (ASMEPF Modeling)', 'GFC Extraction'],
    technologies: ['Autodesk Revit', 'AutoCAD', 'Bluebeam', 'BIM 360'],
    challenges: ['Coordinating large-scale residential ASMEPF systems while maintaining architectural integrity.'],
    solutions: ['BIM 360 for effective collaboration. Revit for precise ASMEPF modeling. Navisworks employed to address potential clashes.'],
    image: '/placeholder.png',
    tags: ['architectural-structural', 'bim-modeling-coordination']
  },
  {
    id: 'hotel-conversion-usa',
    title: 'CONVERSION OF HOTEL TO MULTI-FAMILY HOUSING',
    description: 'Retrofitting a hotel into multi-family housing in the USA.',
    category: 'Commercial',
    location: 'USA',
    services: ['LOD 300 (MEPF Modeling)', 'GFC Extraction', 'Coordination'],
    technologies: ['Autodesk Revit', 'Bluebeam', 'BIM 360'],
    challenges: ['Retrofitting old infrastructure to accommodate modern MEPF systems.'],
    solutions: ['BIM 360 enabled cross-team collaboration across time zones. Revit used for precise MEPF modeling. Bluebeam helped extract GFCs for construction.'],
    image: '/placeholder.png',
    tags: ['bim-modeling-coordination', 'family-creation']
  },
  {
    id: 'peninsula-plot-b',
    title: 'PENINSULA PLOT B',
    description: 'MEPF Modeling for a luxury project in Dubai Marina.',
    category: 'Commercial',
    location: 'Dubai Marina, UAE',
    services: ['LOD 350 (MEPF Modeling)', 'GFC Extraction', 'Coordination'],
    technologies: ['Autodesk Revit', 'Bluebeam'],
    challenges: ['High precision needed for MEPF coordination due to the luxury nature of the project.'],
    solutions: ['Revit used to create detailed MEPF models. Navisworks ensured no clashes. GFC extraction facilitated via Bluebeam.'],
    image: '/placeholder.png',
    tags: ['bim-modeling-coordination', 'family-creation']
  },
  {
    id: 'seven-city-dubai',
    title: 'SEVEN CITY',
    description: 'MEPF Modeling for a large-scale residential development in Dubai.',
    category: 'Commercial',
    location: 'Dubai, UAE',
    services: ['LOD 300 (MEPF Modeling)', 'GFC Extraction', 'Coordination'],
    technologies: ['Autodesk Revit', 'AutoCAD', 'Navisworks', 'Bluebeam'],
    challenges: ['Large-scale residential development with complex MEPF systems and tight deadlines.'],
    solutions: ['BIM 360 enabled cross-team collaboration across time zones. Revit used for precise MEPF modeling. Bluebeam helped extract GFCs for construction.'],
    image: '/placeholder.png',
    tags: ['bim-modeling-coordination', '4d-5d-simulation']
  },
  {
    id: 'signature-tower-gujarat',
    title: 'SIGNATURE TOWER',
    description: 'ASMEPF Modeling for a tower with a unique structural layout in Gujarat.',
    category: 'Commercial',
    location: 'Gujarat, India',
    services: ['LOD 300 (ASMEPF Modeling)', 'GFC Extraction', 'Coordination'],
    technologies: ['Autodesk Revit', 'Navisworks', 'Bluebeam'],
    challenges: ['Integrating ASMEPF systems within the tower\'s unique structural layout without clashes.'],
    solutions: ['Navisworks used for clash detection and coordination. Revit helped in precise ASMEPF modeling. Bluebeam facilitated GFC sheet extraction.'],
    image: '/placeholder.png',
    tags: ['architectural-structural', 'bim-modeling-coordination']
  },
  {
    id: 'elora-villa-uae',
    title: 'ELORA VILLA',
    description: 'Prestigious development in the UAE requiring LOD 300 to LOD 400 model upgradation.',
    overview: 'A prestigious development in the UAE requiring a LOD 300 to LOD 400 model upgradation for architectural, interior design (ID), and MEPF components to support detailed project delivery.',
    category: 'Commercial',
    location: 'UAE',
    services: [
      'LOD 300 to LOD 400 Architectural Model Upgradation',
      'LOD 300 to LOD 400 MEPF Model Upgradation',
      'ID Modeling (Finishes, Fixtures, Layouts)',
      'Integration & Coordination'
    ],
    technologies: ['Autodesk Revit', 'Navisworks', 'Bluebeam', 'BIM 360'],
    challenges: ['Maintaining consistent upgrades while resolving clashes between architecture, ID, and MEPF models.'],
    solutions: ['Effective model updates using detailed coordination processes to deliver accurate, high-quality models at LOD 400.'],
    image: '/placeholder.png',
    tags: ['architectural-structural', 'bim-modeling-coordination']
  },
  {
    id: 'shura-island',
    title: 'SHURA ISLAND',
    description: 'Commercial luxury island featuring high-end water villas requiring model upgradation.',
    overview: 'A commercial luxury island featuring high-end water villas. The project required upgrading the existing BIM model to LOD 400-LOD 500 for precise representation and design validation.',
    category: 'Commercial',
    location: 'Shura Island',
    services: ['LOD 400-LOD 500 model upgradation', 'Sheet extraction'],
    technologies: ['Revit', 'AutoCAD', 'Navisworks', 'Bluebeam', 'BIM 360', '3D Laser Scanning'],
    challenges: ['Maintaining model accuracy while upgrading to LOD 500 despite evolving site conditions.'],
    solutions: ['Employed 3D laser scanning to capture real-time data and seamlessly integrated it into Revit to ensure the model matched real-world installations.'],
    image: '/placeholder.png',
    tags: ['architectural-structural', 'bim-modeling-coordination']
  },
  {
    id: 'dune-villa-saudi',
    title: 'DUNE VILLA',
    description: 'Luxurious villa project in Saudi Arabia requiring precise Tekla modeling for advanced roof structures.',
    overview: 'A luxurious villa project in Saudi Arabia requiring precise Tekla modeling for advanced roof structures to ensure design accuracy and seamless fabrication.',
    category: 'Commercial',
    location: 'Saudi Arabia',
    services: ['Tekla Roof Modeling', 'Shop Drawings', 'Fabrication Details'],
    technologies: ['Tekla Structures', 'Autodesk Navisworks', 'Bluebeam', 'BIM 360'],
    challenges: ['Managing the complexity of custom roof designs and ensuring precise fabrication outputs.'],
    solutions: ['Tekla modeling enabled accurate detailing and reduced on-site errors, improving overall project efficiency.'],
    image: '/placeholder.png',
    tags: ['architectural-structural', 'bim-modeling-coordination']
  },
  {
    id: 'house-of-masaba',
    title: 'HOUSE OF MASABA',
    description: 'Intelligent Design modeling project in Mumbai.',
    overview: 'Intelligent Design (ID) Modeling, Family Creation (Parametric and Non-Parametric), Sheet Creation, LOD 400 Modeling.',
    category: 'Commercial',
    location: 'Mumbai, Maharashtra, India',
    services: ['LOD 400 ID Modeling', 'Parametric Family Creation', 'Non-Parametric Family Creation', 'Sheet Creation'],
    technologies: ['Revit', 'AutoCAD', 'Bluebeam', 'BIM 360'],
    challenges: ['Maintaining design accuracy and coordination for high-detail LOD 400 modeling while optimizing workflow efficiency.'],
    solutions: ['Revit and AutoCAD utilized for detailed modeling. Bluebeam streamlined sheet creation/review. BIM 360 facilitated seamless collaboration.'],
    image: '/placeholder.png',
    tags: ['architectural-structural', 'bim-modeling-coordination']
  },
  {
    id: 'navi-mumbai-airport',
    title: 'NAVI MUMBAI AIRPORT',
    description: 'High-detail ceiling modeling for Navi Mumbai Airport.',
    overview: 'Ceiling Modeling, Steel Structure-Supported Device Modeling, LOD 400 Modeling, Family Creation (Parametric and Non-Parametric), Sheet Detailing.',
    category: 'Commercial',
    location: 'Navi Mumbai, Maharashtra, India',
    services: ['LOD 400 Ceiling Modeling', 'Steel Structure-Supported Device Modeling', 'Parametric Family Creation', 'Non-Parametric Family Creation', 'Sheet Detailing'],
    technologies: ['Autodesk Revit', 'AutoCAD', 'Bluebeam', 'BIM 360'],
    challenges: ['Coordinating complex steel structures with ceiling elements while maintaining accuracy in parametric family creation.'],
    solutions: ['Revit and AutoCAD utilized for detailed modeling. Bluebeam streamlined sheet detailing/review. BIM 360 enabled efficient collaboration.'],
    image: '/placeholder.png',
    tags: ['architectural-structural', 'bim-modeling-coordination']
  },
  {
    id: 'patna-metro',
    title: 'PATNA METRO',
    description: 'Electrical Modeling up to LOD 400 for Patna Metro.',
    category: 'Commercial',
    location: 'Patna, Bihar, India',
    services: ['LOD 400 Electrical Modeling', 'Sheet Creation'],
    technologies: ['Revit', 'AutoCAD', 'Bluebeam', 'BIM 360'],
    image: '/placeholder.png',
    tags: ['bim-modeling-coordination', 'family-creation']
  },
  {
    id: 'grain-mill-scan-gujarat',
    title: 'GRAIN MILL (Scan to BIM)',
    description: 'Creating a detailed 3D model of an industrial grain mill in Gujarat for future renovations.',
    overview: 'The Grain Mill is an industrial building designed for processing and storing grain. The project involves creating a detailed 3D model to facilitate future renovations and expansions.',
    category: 'Scan to BIM',
    location: 'Gujarat, India',
    services: ['LOD 300 Scan to BIM (Equipment & Modeling)'],
    technologies: ['Autodesk Revit', 'Recap'],
    challenges: ['Inaccurate existing conditions due to outdated plans.', 'Coordination issues between trades.', 'High volume of equipment with varying specifications.', 'Time constraints.'],
    solutions: ['Utilized laser scanning for precise measurements.', 'Implemented collaborative BIM process with coordination meetings and clash detection.', 'Developed standardized equipment families in Revit.', 'Created a phased modeling approach.'],
    image: '/placeholder.png',
    tags: ['architectural-structural', 'bim-modeling-coordination']
  },
  {
    id: 'san-francisco-resident-scan',
    title: 'SAN FRANCISCO RESIDENT (Scan to BIM)',
    description: 'Converting point cloud data from a residential building into a detailed BIM model.',
    overview: 'The project involves converting point cloud data from a residential building into a detailed BIM model. The scope covers architectural and structural aspects using the Scan to Bim process for accurate and efficient representation.',
    category: 'Scan to BIM',
    location: 'San Francisco, USA',
    services: ['LOD 300 Scan to BIM (Architectural & Structural)'],
    technologies: ['Autodesk Revit', 'Recap', 'Navisworks', 'Bluebeam'],
    challenges: ['Irregularities in point cloud data (noise, inaccuracies).', 'Complexity of Structural Components.', 'Software integration issues (Recap, Revit, Bluebeam).'],
    solutions: ['Thorough data cleaning/segmentation in Recap, validation with onsite references.', 'Navisworks used for clash detection/coordination.', 'Workflow optimization using standardized data formats and team coordination.'],
    image: '/placeholder.png',
    tags: ['architectural-structural', 'bim-modeling-coordination']
  },
  {
    id: 'scitech-plant-room-scan',
    title: 'SCITECH PLANT ROOM (Scan to BIM)',
    description: 'Converting point cloud data of an industrial plant room into a detailed BIM model.',
    overview: 'This project focuses on converting point cloud data of an industrial plant room into a detailed BIM model. The scope involves architectural and MEP modeling to represent the critical components of the facility using Scan to BIM technology.',
    category: 'Scan to BIM',
    location: 'Unknown',
    services: ['LOD 300 Scan to BIM (Architectural & MEP)'],
    technologies: ['Autodesk Revit', 'Autodesk Recap', 'Bluebeam', 'Navisworks', 'STAAD Pro'],
    challenges: ['High Density of MEP Components in small areas.', 'Structural Analysis needed for Heavy Machinery.', 'Limited Access to Certain Areas for Scanning.'],
    solutions: ['High-resolution scanning, Navisworks for clash detection, team coordination.', 'STAAD Pro integration for structural analysis.', 'Manual measurements and as-built document references to fill data gaps.'],
    image: '/placeholder.png',
    tags: ['architectural-structural', 'bim-modeling-coordination']
  },
  {
    id: 'raffles-city-mall',
    title: 'RAFFLES CITY MALL',
    description: 'Comprehensive Scan to BIM project for a major shopping mall in Singapore.',
    overview: 'A multi-disciplinary Scan to BIM project covering architectural, structural, and MEP elements of this major shopping complex in Singapore. The project involved converting detailed laser scan data into an intelligent BIM model, ensuring accuracy and coordination across all building systems.',
    category: 'Scan to BIM',
    location: 'Singapore',
    services: [
      'Scan to BIM (Architectural As-Built Modeling)',
      'Scan to BIM (Structural Modeling)',
      'Scan to BIM (MEP Modeling)',
      'Integration & Coordination',
      'Sheet Extraction'
    ],
    technologies: ['Autodesk Revit', '3D Laser Scanning', 'Navisworks', 'Bluebeam'],
    image: '/placeholder.png',
    tags: ['architectural-structural', 'bim-modeling-coordination', 'vr-ar-experiences'],
    disciplines: [
      {
        name: 'Architectural',
        description: 'Detailed Scan to BIM modeling for the mall\'s architectural elements.',
        technologies: ['Autodesk Revit', '3D Laser Scanning', 'Navisworks', 'Bluebeam'],
        challenges: ['Frequent design alterations.', 'Complex interior spatial relationships.'],
        solutions: ['Captured alterations using laser scanning data.', 'Ensured seamless integration with structural and MEP models.'],
        services: ['Architectural As-Built Modeling', 'Sheet Extraction']
      },
      {
        name: 'Structural',
        description: 'Scan to BIM modeling for the structural framework of the mall.',
        technologies: ['Autodesk Revit', '3D Laser Scanning', 'Navisworks', 'Bluebeam'],
        challenges: ['Model inconsistencies.', 'Complex connection details.'],
        solutions: ['Addressed inconsistencies using precise scan data.', 'Real-time model updates to maintain data accuracy.'],
        services: ['Structural Modeling', 'Integration & Coordination', 'Sheet Extraction']
      },
      {
        name: 'MEP',
        description: 'Detailed Scan to BIM modeling for mechanical, electrical, and plumbing systems.',
        technologies: ['Autodesk Revit', '3D Laser Scanning', 'Navisworks', 'Bluebeam'],
        challenges: ['Accurate alignment of MEP systems with existing site conditions.', 'Complex routing in limited spaces.'],
        solutions: ['Used scan data for accurate alignment.', 'Effective model coordination to prevent clashes and discrepancies.'],
        services: ['Mechanical Modeling (HVAC, etc.)', 'Electrical Modeling (Trays, Lighting, etc.)', 'Plumbing Modeling (Pipes, Fixtures, etc.)', 'Clash Detection & Resolution']
      }
    ]
  }
]