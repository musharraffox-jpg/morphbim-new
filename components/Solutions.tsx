import React, { useState } from "react";
import {
  Building2,
  Train,
  TestTube,
  GraduationCap,
  Settings,
  Wrench,
  Network,
  Building,
  BookOpen,
  Cpu,
  GitBranch,
  ArrowRight
} from "lucide-react";
import ConsultationForm from "./ConsultationForm";

interface SolutionCategory {
  title: string;
  description: string;
  icon: React.ElementType;
  solutions: {
    title: string;
    description: string;
    icon: React.ElementType;
  }[];
}

const solutionCategories: SolutionCategory[] = [
  {
    title: "Industry Segments",
    description: "Transform your projects with industry-specific BIM solutions.",
    icon: Building2,
    solutions: [
      {
        title: "Buildings",
        description: "Residential, commercial, and industrial solutions with a focus on efficiency and sustainability.",
        icon: Building
      },
      {
        title: "Infrastructure",
        description: "Civil 3D-driven designs for transportation, utilities, and public works.",
        icon: Train
      },
      {
        title: "Pharma Facilities",
        description: "Precision execution for regulated environments, ensuring compliance and quality.",
        icon: TestTube
      }
    ]
  },
  {
    title: "Consulting",
    description: "Strategic support to enhance your BIM journey.",
    icon: GraduationCap,
    solutions: [
      {
        title: "BIM Training",
        description: "Equip your team with hands-on skills for BIM success.",
        icon: BookOpen
      },
      {
        title: "BIM Implementation",
        description: "Seamless integration of BIM processes into your workflows.",
        icon: Settings
      },
      {
        title: "Technology Support",
        description: "Expert guidance on software and tools for maximum ROI.",
        icon: Wrench
      }
    ]
  },
  {
    title: "Automation",
    description: "Boost productivity with custom tech solutions.",
    icon: Cpu,
    solutions: [
      {
        title: "Plugin Development",
        description: "Tailored plugins to simplify modeling and coordination tasks.",
        icon: GitBranch
      },
      {
        title: "Software Integration",
        description: "Connect your tools with Morphvison's API expertise for a unified workflow.",
        icon: Network
      }
    ]
  }
];

const Solutions = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <ConsultationForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />

      <section className="w-full py-20 bg-white" id="solutions">
        <div className="container px-6 lg:px-8 mx-auto">
          {/* Header with badge and line */}
          <div className="flex items-center gap-4 mb-8">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
              <span>Solutions</span>
            </div>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6">
              <span className="block bg-clip-text text-transparent bg-[url('/text-mask-image.jpg')] bg-cover bg-center">
                Tailored BIM for Every Industry
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Morphvison delivers specialized BIM solutions to meet the unique demands of your sector, ensuring maximum ROI and compliance.
            </p>
          </div>

          <div className="space-y-32">
            {solutionCategories.map((category, index) => (
              <div key={index} className="group/section">
                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-8 items-start relative">
                  {/* Left Content */}
                  <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant transition-all duration-500">
                    <div 
                      className="relative h-48 sm:h-64 p-6 sm:p-8 flex flex-col items-start overflow-hidden" 
                      style={{
                        backgroundImage: `url('/background-section${index + 1}.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: index === 0 ? "top center" : index === 1 ? "center" : "bottom center",
                        backgroundBlendMode: "overlay"
                      }}
                    >
                      <div className="relative z-10 inline-flex items-center gap-3 px-4 sm:px-6 py-2 border border-white text-white rounded-full text-xs mb-4 backdrop-blur-sm">
                        <category.icon className="w-4 h-4" />
                        <span>{category.title}</span>
                      </div>
                      <h3 className="relative z-10 text-2xl sm:text-3xl font-display text-white font-bold mt-auto">
                        {category.description}
                      </h3>
                    </div>
                    
                    {/* Solutions List */}
                    <div className="bg-white p-6 sm:p-8">
                      <div className="grid grid-cols-1 gap-6">
                        {category.solutions.map((solution, solutionIndex) => (
                          <div 
                            key={solutionIndex} 
                            className={`relative bg-white rounded-xl p-6 border border-gray-100 transition-all duration-500
                              ${solution.title === "BIM Training" 
                                ? "hover:border-pulse-500 hover:shadow-lg hover:-translate-y-1" 
                                : ""
                              }`}
                          >
                            <div className="flex items-center gap-4">
                              <div className={`w-12 h-12 rounded-xl bg-pulse-50 flex items-center justify-center transition-all duration-500
                                ${solution.title === "BIM Training" ? "group-hover:bg-pulse-500" : ""}`}
                              >
                                <solution.icon className={`w-6 h-6 text-pulse-500 transition-colors duration-500
                                  ${solution.title === "BIM Training" ? "group-hover:text-white" : ""}`}
                                />
                              </div>
                              <div>
                                <h4 className={`text-lg font-semibold text-gray-900 transition-colors duration-500
                                  ${solution.title === "BIM Training" ? "group-hover:text-pulse-500" : ""}`}
                                >
                                  {solution.title}
                                </h4>
                                <p className="text-sm text-gray-600 mt-1">
                                  {solution.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant relative min-h-[600px] transition-all duration-500">
                    <div 
                      className="absolute inset-0 w-full h-full bg-center bg-cover transform group-hover/section:scale-105 transition-transform duration-700"
                      style={{
                        backgroundImage: index === 0 
                          ? 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")'
                          : index === 1
                          ? 'url("https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop")'
                          : 'url("https://images.unsplash.com/photo-1581093458791-9f3c3900b7d0?q=80&w=2070&auto=format&fit=crop")'
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-end">
                      <div className="space-y-8">
                        <div className="relative">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                              <category.icon className="w-6 h-6 text-pulse-500" />
                            </div>
                            <div className="flex-1">
                              <div className="h-[2px] w-full bg-gradient-to-r from-pulse-500 to-transparent"></div>
                            </div>
                          </div>
                        </div>

                        <div className="relative">
                          <h4 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">
                            {index === 0 
                              ? "Future of Construction" 
                              : index === 1 
                              ? "Expert BIM Training" 
                              : "Smart Automation"}
                          </h4>
                          <p className="text-lg text-white/90 leading-relaxed max-w-lg mb-8">
                            {index === 0 
                              ? "Experience next-generation building solutions with advanced BIM technology and sustainable practices." 
                              : index === 1 
                              ? "Elevate your team's expertise with comprehensive training and strategic implementation." 
                              : "Streamline your workflow with custom tools and seamless integrations."}
                          </p>

                          <button 
                            onClick={() => setIsFormOpen(true)}
                            className="group inline-flex items-center gap-3 bg-gradient-to-r from-pulse-500 to-pulse-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-pulse-500/20 transition-all duration-300"
                          >
                            <span className="text-base font-medium">Schedule Consultation</span>
                            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                            </div>
                          </button>

                          <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-pulse-500/10 rounded-full blur-2xl"></div>
                          <div className="absolute right-8 top-0 w-16 h-16 bg-pulse-500/10 rounded-full blur-xl"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions; 