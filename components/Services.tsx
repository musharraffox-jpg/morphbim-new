import React from "react";
import {
  Compass,
  HardHat,
  Settings,
  Building,
  Eye,
  ScanLine,
  Wrench,
  Ruler,
  Clock,
  FileText,
  HelpingHand,
  Building2,
  Scan,
  LayoutGrid
} from "lucide-react";

interface ServiceCategory {
  title: string;
  description: string;
  icon: React.ElementType;
  services: {
    title: string;
    description: string;
    icon: React.ElementType;
  }[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "Design & Engineering",
    description: "Precision planning meets innovative technology.",
    icon: Compass,
    services: [
      {
        title: "LOD 300 Modeling",
        description: "High-detail BIM models for architecture, structure, MEP, and Civil 3D projects.",
        icon: Building
      },
      {
        title: "Visualization & VR",
        description: "Immersive renders and virtual reality walkthroughs to bring your vision to life.",
        icon: Eye
      },
      {
        title: "BIM Coordination",
        description: "Clash detection and resolution for flawless design integration.",
        icon: ScanLine
      },
      {
        title: "MEP Engineering",
        description: "Expert design and coordination for mechanical, electrical, and plumbing systems.",
        icon: Wrench
      },
      {
        title: "Structural Consulting",
        description: "Robust structural designs backed by years of engineering expertise.",
        icon: Ruler
      }
    ]
  },
  {
    title: "Construction",
    description: "Build smarter with Morphvison's construction-ready solutions.",
    icon: HardHat,
    services: [
      {
        title: "LOD 400 Modeling",
        description: "Detailed models for construction analysis, BOQ, and cost estimation.",
        icon: Building2
      },
      {
        title: "4D Scheduling",
        description: "Sync timelines with 3D models for accurate project planning.",
        icon: Clock
      },
      {
        title: "Shop Drawings",
        description: "Ready-to-use drawings to accelerate on-site progress.",
        icon: FileText
      },
      {
        title: "On-Site BIM Support",
        description: "Real-time assistance to implement BIM workflows at the construction site.",
        icon: HelpingHand
      }
    ]
  },
  {
    title: "Operations",
    description: "Maximize asset value with post-construction BIM.",
    icon: Settings,
    services: [
      {
        title: "As-Built Modeling",
        description: "Digital twins of your completed projects for facility management.",
        icon: Building
      },
      {
        title: "Scan-to-BIM",
        description: "Convert physical spaces into precise BIM models with advanced scanning tech.",
        icon: Scan
      },
      {
        title: "Facility Management",
        description: "Optimize operations with BIM-driven insights and maintenance plans.",
        icon: LayoutGrid
      }
    ]
  }
];

const Services = () => {
  return (
    <section className="w-full py-20 bg-white" id="services">
      <div className="container px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">01</span>
            <span>Services</span>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="block bg-clip-text text-transparent bg-[url('/text-mask-image.jpg')] bg-cover bg-center">
              Comprehensive BIM Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            End-to-end BIM services to streamline your project lifecycle—from design and construction to operations.
          </p>
        </div>

        <div className="space-y-20">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant"
            >
              {/* Card Header with background image */}
              <div 
                className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start" 
                style={{
                  backgroundImage: `url('/background-section${index + 1}.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: index === 0 ? "top center" : index === 1 ? "center" : "bottom center",
                  backgroundBlendMode: "overlay"
                }}
              >
                
                
                <div className="relative z-10 inline-block px-4 sm:px-6 py-2 border border-white text-white rounded-full text-xs mb-4">
                  {category.title}
                </div>
                <h3 className="relative z-10 text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
                  {category.description}
                </h3>
              </div>
              
              {/* Card Content */}
              <div className="bg-white p-6 sm:p-10" style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #ECECEC"
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div 
                      key={serviceIndex} 
                      className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-pulse-500 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                    >
                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-pulse-50/50 via-white to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Animated border gradient */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pulse-500/0 via-pulse-500/20 to-pulse-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Service content */}
                      <div className="relative">
                        {/* Icon container with animation */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className="relative">
                            <div className="w-12 h-12 rounded-xl bg-pulse-50 flex items-center justify-center group-hover:bg-pulse-500 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                              <service.icon className="w-6 h-6 text-pulse-500 group-hover:text-white transition-colors duration-500" />
                            </div>
                            {/* Decorative dots */}
                            <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-pulse-500/20 group-hover:bg-pulse-500 transition-colors duration-500"></div>
                            <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-pulse-500/20 group-hover:bg-pulse-500 transition-colors duration-500"></div>
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900 group-hover:text-pulse-500 transition-colors duration-500">
                            {service.title}
                          </h4>
                        </div>

                        {/* Description with enhanced typography */}
                        <div className="relative">
                          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
                            {service.description}
                          </p>
                          {/* Decorative line */}
                          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pulse-500 group-hover:w-full transition-all duration-500"></div>
                        </div>
                      </div>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-pulse-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 